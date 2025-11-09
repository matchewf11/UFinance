package main

import (
	"log"
	"net/http"
	"time"

	"UFinance/api"
	"UFinance/banking"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	banking.BankingRouter(r)
	api.APIRoutes(r)

	log.Println("Server running on http://localhost:8080")
	if err := r.Run(":8080"); err != nil && err != http.ErrServerClosed {
		log.Fatalf("Server failed: %v\n", err)
	}
}
