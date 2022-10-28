#!/bin/bash

set -e

echo "Install packages"
yarn install

echo "Run migrations"
npm run db:migrate

echo "Start application"
npm run start:dev
