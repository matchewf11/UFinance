package banking

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func BankingRouter(r *gin.Engine) {
	// Health check
	r.GET("/healthz", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "ok"})
	})

	// Example: Custom route — define your own endpoints here
	r.GET("/hello/:name", func(c *gin.Context) {
		name := c.Param("name")
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello, " + name + "!",
		})
	})
}
