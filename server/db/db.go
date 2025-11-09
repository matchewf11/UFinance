package db

import (
	"context"
	"os"

	"github.com/jackc/pgx/v5/pgxpool"
)

func New() (*pgxpool.Pool, error) {
	// err := godotenv.Load("../.env")
	// if err != nil {
	// 	return nil, err
	// }

	conn, err := pgxpool.New(context.Background(), os.Getenv("db"))
	if err != nil {
		return nil, err
	}

	return conn, nil
}
