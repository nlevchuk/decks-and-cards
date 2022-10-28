## Description

The small application provides API for creating and opening decks as well as drawing cards.

## Technical stack

1. Typescript
2. NestJS
3. PostgreSQL

## Installation

1. Clone the project:

```bash
$ git clone https://github.com/nlevchuk/decks-and-cards.git
```

2. Go to cloned directory and build the application image:

```bash
$ make build
```

## Running the application

```bash
$ make up
```

## Stopping the application

```bash
$ make down
```

## Usage

#### Create a new deck

```bash
## Create full not suffled deck
curl -X "POST" "http://localhost:3000/decks/create" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "type": "FULL",
  "shuffled": false
}'

```

```bash
## Create short not suffled deck
curl -X "POST" "http://localhost:3000/decks/create" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "type": "SHORT",
  "shuffled": false
}'
```

```bash
## Create full suffled deck
curl -X "POST" "http://localhost:3000/decks/create" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "type": "FULL",
  "shuffled": true
}'

```

```bash
## Create short suffled deck
curl -X "POST" "http://localhost:3000/decks/create" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "type": "SHORT",
  "shuffled": true
}'

```

#### Open a deck

```bash
curl "http://localhost:3000/decks/open?deckId=<DECK ID>"
```

#### Draw cards

```bash
curl -X "PUT" "http://localhost:3000/decks/draw-cards" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "deckId": "<DECK ID>",
  "count": "3"
}'

```

## Test

```bash
$ make test
```
