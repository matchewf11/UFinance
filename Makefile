run:
	@echo "Starting Go backend..."
	cd server && go run . &

	@echo "Starting frontend..."
	cd client && npm run dev
