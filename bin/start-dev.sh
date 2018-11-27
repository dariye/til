#!/bin/bash

node_modules/.bin/concurrently \
  --kill-others-on-fail \
  "cd backend && docker-compose up -d" \
  "sleep 1m && yarn && yarn dev"
