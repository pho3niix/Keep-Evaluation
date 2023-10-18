# NextJS Sample App
This is a simple sample app built with NextJS and Postgres.

## Setup with Docker (recommended)
```bash
docker-compose up app
```

## Test app with Docker (recommended)
```bash
docker compose up test --abort-on-container-exit
```

## Setup without Docker
1. [Install Postgres](https://www.postgresql.org/download/macosx/)
2. Install Node 16 
3. Install Yarn
4. Install dependencies
```bash
yarn
```

## Running the app
```bash
yarn dev
```

## test the app
```bash
yarn test
```


### Requirements
- Postgres
- Node
- Jest