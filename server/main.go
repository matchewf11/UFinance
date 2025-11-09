package main

import (
	"context"
	"log"
	"net/http"
	"time"

	"UFinance/banking"
	"UFinance/db"
	"UFinance/server"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	conn, err := db.New()
	if err != nil {
		log.Fatalf("could not make db")
	}
	defer conn.Close(context.Background())

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
	s := server.New(r, conn)
	s.APIRoutes()

	log.Println("Server running on http://localhost:8080")
	if err := r.Run(":8080"); err != nil && err != http.ErrServerClosed {
		log.Fatalf("Server failed: %v\n", err)
	}
}
