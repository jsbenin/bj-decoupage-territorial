.PHONY: reset, seed

seed:
    chmod +x ./seed.sh
    sh ./seed.sh

reset:
    node ace db:wipe
    node ace migration:run
    node ace db:seed

