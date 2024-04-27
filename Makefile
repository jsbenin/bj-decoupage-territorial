.PHONY: reset

reset:
  node ace db:wipe
  node ace migration:run
  node ace db:seed
