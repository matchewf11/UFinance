package api

import (
	"net/http"

	"UFinance/api/handlers"

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

	// // Example: /api/ping
	// api.GET("/ping", func(c *gin.Context) {
	// 	c.JSON(http.StatusOK, gin.H{
	// 		"message": "pong",
	// 	})
	// })
	//
	//
	// // Example: /api/users/:id
	// api.GET("/users/:id", func(c *gin.Context) {
	// 	id := c.Param("id")
	// 	c.JSON(http.StatusOK, gin.H{
	// 		"user_id": id,
	// 		"status":  "found",
	// 	})
	// })
	//
	// // Example: /api/data (POST)
	// api.POST("/data", func(c *gin.Context) {
	// 	var body map[string]any
	// 	if err := c.BindJSON(&body); err != nil {
	// 		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	// 		return
	// 	}
	// 	c.JSON(http.StatusOK, gin.H{
	// 		"received": body,
	// 	})
	// })
}
