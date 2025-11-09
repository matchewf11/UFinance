package api

import (
	"UFinance/ai"
	"UFinance/api/handlers"
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func (s *server) APIRoutes() {
	handlerr := handlers.New(s.pool)
	api := s.r.Group("/api")
	auth := api.Group("/auth")
	{
		// auth.POST("/register", handlerr.Register)
		auth.POST("/login", handlerr.Login)
		// auth.POST("/refresh", handlerr.RefreshToken)
		// auth.POST("/logout", handlerr.Logout)
	}

	api.GET("/quote", func(c *gin.Context) {
		var quote string
		err := s.pool.QueryRow(c, `
			SELECT quote
			FROM quotes
			ORDER BY RANDOM()
			LIMIT 1
			`).Scan(&quote)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"message": err.Error(),
			})
			return
		}
		c.JSON(http.StatusOK, gin.H{
			"quote": quote,
		})
	})

	api.GET("/cards/:id", func(c *gin.Context) {
		// implment this
		// return the cards that the users
		// can have
	})

	api.POST("/user", func(c *gin.Context) {
		type user struct {
			Income          float32 `json:"income"`
			City            string  `json:"city"`
			MonthlySpending float32 `json:"monthly_spending"`
		}
		var new_user user
		if err := c.BindJSON(&new_user); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON"})
			return
		}

		sql := `
		INSERT INTO user_data (income, city, monthly_spending)
		VALUES ($1, $2, $3)
		`
		_, err := s.pool.Exec(c, sql, new_user.Income, new_user.City, new_user.MonthlySpending)
		if err != nil {
			c.JSON(
				http.StatusInternalServerError,
				gin.H{"error": "Invalid Request or Internal Server Error"},
			)
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"message": "successfully posted user",
		})
	})

	// good, evil, giga, freaky
	api.POST("/letsgronk", func(ctx *gin.Context) {
		model := ctx.Query("grok")
		bot := ai.ChooseYourGrok(model)

		log.Println("I just grokked it with %s")
		var req struct {
			Content string `json:"content"`
		}

		if err := ctx.ShouldBindJSON(&req); err != nil {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": "need a body with 'content' field"})
			return
		}

		if req.Content == "" {
			ctx.JSON(http.StatusBadRequest, gin.H{"error": req.Content})
			return
		}

		reqBody := ai.Grokker{
			Messages:    []ai.Message{bot, {Role: "user", Content: req.Content}},
			Model:       "grok-4-fast-non-reasoning-latest",
			Stream:      false,
			Temperature: 0,
		}

		jsonData, err := json.Marshal(reqBody)
		if err != nil {
			ctx.JSON(500, gin.H{"error": "failed to marshal request"})
			return
		}

		// log.Println(strings.NewReader(string(jsonData)))

		grok, err := http.NewRequest("POST", "https://api.x.ai/v1/chat/completions",
			bytes.NewReader(jsonData))
		if err != nil {
			ctx.JSON(500, gin.H{"error": "failed to create request"})
			return
		}

		grok.Header.Add("Authorization", fmt.Sprintf("Bearer %s", ai.Gronkey))
		grok.Header.Add("Content-Type", "application/json")

		client := &http.Client{}
		resp, err := client.Do(grok)
		if err != nil {
			ctx.JSON(500, gin.H{"error": "failed to call grok it"})
			return
		}
		defer resp.Body.Close()

		body, err := io.ReadAll(resp.Body)
		if err != nil {
			ctx.JSON(500, gin.H{"error": "failed to read response"})
			return
		}

		ctx.Data(resp.StatusCode, "application/json", body)
	})
}
