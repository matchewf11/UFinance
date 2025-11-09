package api

import (
	"UFinance/api/handlers"
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
