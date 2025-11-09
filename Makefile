run:
	@echo "Starting deez nutz..."
	cd server && go run . &

	@echo "Starting frontend..."
	cd client && npm run dev
