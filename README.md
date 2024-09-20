# BotMinecraft-docker
## Installation

1. Download & install [Node.JS](https://nodejs.org/en/download/)
2. Change `host`, `username`, and `auth` <br><br>
  [Optional]<br>
  `port`, `version`, and `password`
  
   ```
   const bot = mineflayer.createBot({
    host: 'localhost', // minecraft server ip
    username: 'Bot', // username to join as if auth is `offline`, else a unique identifier for this account. Switch if you want to change accounts
    auth: 'microsoft' // for offline mode servers, you can set this to 'offline, microsoft, or mojang'
        // port: 25565,              // set if you need a port that isn't 25565
        // version: false,           // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
        // password: '12345678'      // set if you want to use password-based auth (may be unreliable). If specified, the `username` must be an email
   })
   
3. Example
   ```
   const bot = mineflayer.createBot({
    host: "OxidiLilyServer23.aternos.me", // minecraft server ip
    username: 'BotServer', // username to join as if auth is `offline`, else a unique identifier for this account. Switch if you want to change accounts
    auth: 'mojang', // for offline mode servers, you can set this to 'offline, microsoft, or mojang'
    port: 34951, // set if you need a port that isn't 25565
    // version: false,           // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
    // password: '12345678'      // set if you want to use password-based auth (may be unreliable). If specified, the `username` must be an email
   })
4. Dockerfile
   ```
   FROM node:22-alpine
   WORKDIR /BotAFK
   COPY *.json .
   RUN npm i
   COPY . .
   CMD [ "npm","run", "start" ]
5. Build image Docker
   ```
   docker build -t [name]:[version] 
6. Example:
   ```
   docker build -t js/botafk:1.0.0 .
7. Run docker image
   ```
	docker run -d [name]:[version]
8. Example
   ```
   docker run -d js/botafk:1.0.0
