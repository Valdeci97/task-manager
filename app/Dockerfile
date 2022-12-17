FROM node:18.11-alpine3.16

RUN apk add --no-cache bash

USER node

WORKDIR /home/node/app

COPY package.json ./

RUN npm install

ENTRYPOINT [ "npm", "run", "dev" ]
