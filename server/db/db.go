package db

import (
	"context"
	"os"

	"github.com/jackc/pgx/v5"
	"github.com/joho/godotenv"
)

func New() (*pgx.Conn, error) {
	err := godotenv.Load("../.env")
	if err != nil {
		return nil, err
	}

	conn, err := pgx.Connect(context.Background(), os.Getenv("db"))
	if err != nil {
		return nil, err
	}

	return conn, nil
}
