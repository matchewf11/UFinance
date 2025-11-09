FROM golang:latest
WORKDIR /server-app
ARG SERVER_ENV=development

RUN if [ "$SERVER_ENV" != "production" ]; then \
        go install github.com/air-verse/air@latest; \
    fi

COPY server/go.mod server/go.sum ./

RUN go mod download

COPY server/ ./

EXPOSE ${SERVER_PORT}

CMD if [ "$SERVER_ENV" = "production" ]; then \
        echo "Starting production server"; \
        exec go run .; \
    else \
        echo "Starting development server with Air"; \
        exec /go/bin/air -c ./.air.toml --build.poll=true; \
    fi
