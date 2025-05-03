
# Draft Queue

A Fantasy Draft Server.

# Players DB

`docker-compose up` 

This will run the database server in docker with the logs showing up in the local command line.

https://docs.docker.com/reference/cli/docker/compose/up/

With `docker-compose up` the container stops when the command is interupted (Ctrl-C). Running `docker compose up --detach` starts the containers in the background. To stop the command use `ps` and kill the process via its `PID`.

During development run `docker-compose down` to remove containers, networks, volumes, and images created by `up`. Otherwise, changes to `docker-compose.yml` won't get picked up between sessions. 

# cURL Commands to test the Endpoints`

Start the server with `npm run dev`

```
curl -i -X POST \
   -H "Content-Type:multipart/form-data" \
   -F "file=@\"./test/league_100_rosters.csv\";type=text/csv;filename=\"league_100_rosters.csv\"" \
  http://localhost:8080/api/csv/upload
```

```
curl -i -X GET \
 'http://localhost:8080/api/rosters'
```

# TODOs

* How do I overwrite the csv import table?
* I'll need to create a separate League table and maybe a Teams table and then use Team ID as a 

# Library Upgrades

(json2csv)[https://www.npmjs.com/package/json2csv] is no longer maintained. Individual utilities have been separated into their own repositories.

For parsing CSV, I switched to (@json2csv/plainjs)[https://www.npmjs.com/package/@json2csv/plainjs]. 

Field selection is handled by the (Fields)[https://juanjodiaz.github.io/json2csv/#/advanced-options/data-selection] option.
