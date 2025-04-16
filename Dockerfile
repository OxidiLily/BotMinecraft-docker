FROM node:22-alpine

WORKDIR /BotAFK

COPY package* /

RUN npm i

COPY . .

RUN npm audit fix


CMD [ "npm","run", "start" ]