package api

import (
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
)

type server struct {
	r    *gin.Engine
	pool *pgxpool.Pool
}

func New(r *gin.Engine, conn *pgxpool.Pool) *server {
	return &server{
		r:    r,
		pool: conn,
	}
}
