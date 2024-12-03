.PHONY: reset, seed

setup:
	cp env.exemple
	pnpm install
	node ace generate:key
	mkdir tmp && touch tmp/db.sqlite3
	node ace migration:run
	sudo chmod +x ./seed.sh
	./seed.sh
	pnpm run dev
	

seed:
	chmod +x ./seed.sh
	sh ./seed.sh

reset:
	node ace db:wipe
	node ace migration:run
	node ace db:seed

