package api

import (
	"github.com/gin-gonic/gin"
)

func APIRoutes(r *gin.Engine) {
	api := r.Group("/api")

	api.GET("/api/quote", func(c *gin.Context) {
		// query the database
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
