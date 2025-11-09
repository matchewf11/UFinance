package server

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (s *server) APIRoutes() {
	api := s.r.Group("/api")
	// auth := api.Group("/auth")
	{
		// auth.POST("/register", controllers.Register)
		// auth.POST("/login", controllers.Login)
		// auth.POST("/refresh", controllers.RefreshToken)
		// auth.POST("/logout", controllers.Logout)
	}

	api.GET("/quote", func(c *gin.Context) {
		var quote string
		err := s.conn.QueryRow(c, `
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
		c.JSON(http.StatusOK, quote)
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
