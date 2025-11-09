FROM node:23-alpine

WORKDIR /client-app

ENV NEXT_TELEMETRY_DISABLED=1

COPY client/package.json client/package-lock.json ./

RUN npm ci

COPY client/ ./

CMD ["npm", "run", "dev"]
