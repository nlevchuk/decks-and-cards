build:
		docker compose build

up:
		docker compose up

down:
		docker compose down

start:
		docker compose start

stop:
		docker compose stop

db-migrate:
		docker compose exec app npm run db:migrate

app-bash:
		docker compose exec app bash

logs:
		docker compose logs -f

test:
	docker compose exec app npm run test

.PHONY: test
