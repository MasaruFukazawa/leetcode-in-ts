.PHONY: build up down restart shell test install ps logs clean lint format check

build:
	docker compose build

up:
	docker compose up -d

down:
	docker compose down

restart:
	docker compose restart

shell:
	docker compose exec app sh

test:
	docker compose exec app npm test

lint:
	docker compose exec app npm run lint

format:
	docker compose exec app npm run format

check:
	docker compose exec app npm run check

install:
	docker compose exec app npm install

ps:
	docker compose ps

logs:
	docker compose logs -f

clean:
	docker compose down -v --rmi local
