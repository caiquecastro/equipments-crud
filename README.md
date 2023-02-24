# Equipments CRUD

## Running locally

### Requirements

* Node.js (v10+)
* Yarn

### Installation

Installing dependencies.

```bash
$ yarn install
```

Create the .env file. You can copy it from the example.

```bash
$ cp .env.example .env
```

Running the migrations.

```bash
$ yarn migrate
```

### Running the application 

```
$ yarn start
```

## Running on docker

### Requirements

* Docker (v19.03+)
* Docker Compose (v1.24+)

### Installation

Create the .env file. You can copy it from the example.

```bash
$ cp .env.example .env
```

### Running the application

```
$ docker compose up -d
```

### Running without docker compose

Build the docker image

```
$ docker build . --tag equipments-crud
```

Start a container with the recently created image

```
$ docker run --rm -d -p 3000:3000 equipments-crud
```

## Endpoints

```
GET /equipments         List of equipments
POST /equipments        Create an equipment
GET /equipments/{id}    Get an equipment details
PATCH /equipments/{id}  Update an equipment details
DELETE /equipments/{id} Deletes an equipment
```
