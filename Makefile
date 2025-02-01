docker-compose:
	cd infra && docker compose up -d

migrate:
	cd backend && npm run migrate


setup: docker-compose
	cd frontend && npm install
	cd backend && npm install
	echo "Would you like to running test ? type make test-be"

run-be: docker-compose
	cd backend && npm run dev

run-fe:
	cd frontend && npm run dev

test-be: docker-compose
	cd backend && npm test

down:
	cd infra && docker compose down