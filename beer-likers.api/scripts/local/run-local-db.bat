@echo off

docker run --name pgsql -d -p 5432:5432 --rm -e POSTGRES_PASSWORD=admin -e PGDATA=/var/lib/postgresql/data/pgdata -v pgdata:/var/lib/postgresql/data postgres