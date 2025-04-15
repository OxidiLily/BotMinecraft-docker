FROM node:22-alpine

WORKDIR /BotAFK

COPY . .

COPY *.json .

RUN npm i


CMD [ "npm","run", "start" ]