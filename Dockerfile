FROM node:22-alpine

WORKDIR /BotAFK

COPY *.json .

RUN npm i

COPY . .

CMD [ "npm","run", "start" ]