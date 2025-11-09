package server

import (
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5"
)

type server struct {
	r    *gin.Engine
	conn *pgx.Conn
}

func New(r *gin.Engine, conn *pgx.Conn) *server {
	return &server{
		r:    r,
		conn: conn,
	}
}
