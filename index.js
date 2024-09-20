const mineflayer = require('mineflayer')
const config = require('./settings.json');

const bot = mineflayer.createBot({
    host: "OxidiLilyServer332.aternos.me", // minecraft server ip
    username: 'Bot', // username to join as if auth is `offline`, else a unique identifier for this account. Switch if you want to change accounts
    auth: 'mojang', // for offline mode servers, you can set this to 'offline'
    port: 34971, // set if you need a port that isn't 25565
    // version: false,           // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
    // password: '12345678'      // set if you want to use password-based auth (may be unreliable). If specified, the `username` must be an email
})

// Log errors and kick reasons:
bot.on('kicked', (reason) =>
    console.log(
        '\x1b[33m',
        `[BotLog] Bot was kicked from the server. Reason: \n${reason}`,
        '\x1b[0m'
    )
);
bot.on('error', (err) =>
    console.log(`\x1b[31m[ERROR] ${err.message}`, '\x1b[0m')
);

// Log spawn:
bot.once('spawn', () => {
    console.log('\x1b[33m[BotLog] Bot joined to the server', '\x1b[0m');

    //chat
    if (config.utils['chat-messages'].enabled) {
        console.log('[INFO] Started chat-messages module');
        var messages = config.utils['chat-messages']['messages'];

        if (config.utils['chat-messages'].repeat) {
            var delay = config.utils['chat-messages']['repeat-delay'];
            let i = 0;

            setInterval(() => {
                bot.chat(`${messages[i]}`);

                if (i + 1 == messages.length) {
                    i = 0;
                } else i++;
            }, delay * 1000);
        } else {
            messages.forEach((msg) => {
                bot.chat(msg);
            });
        }
    }
    bot.on('chat', (username, message) => {
        if (config.utils['chat-log']) {
            console.log(`[ChatLog] <${username}> ${message}`);
        }
    });

    //anti AFK
    if (config.utils['anti-afk'].enabled) {
        bot.setControlState('jump', true);
        if (config.utils['anti-afk'].sneak) {
            bot.setControlState('sneak', true);
        }
    }
});

//auto reconnect
if (config.utils['auto-reconnect']) {
    bot.on('end', () => {
        setTimeout(() => {
            createBot();
        }, config.utils['auto-recconect-delay']);
    });
}

//Death
bot.on('death', () => {
    console.log(
        `\x1b[33m[BotLog] Bot has been died and was respawned ${bot.entity.position}`,
        '\x1b[0m'
    );
});