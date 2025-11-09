package handlers

import (
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
)

type Handlers struct {
	pool *pgxpool.Pool
}

func New(poop *pgxpool.Pool) *Handlers {
	return &Handlers{pool: poop}
}

func (h *Handlers) Login(c *gin.Context) {
}
