docker-compose:
	cd infra && docker compose up -d

run-be: docker-compose
	cd backend && bun run dev

run-fe:
	cd frontend && bun run dev

test-be: docker-compose
	cd backend && npm test

down:
	cd infra && docker compose down