const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(NjA3NDI2MDM3MDU5NTUxMjcx.XUZePA.Kt4rl_5v5OeXM5SiR5SCtPotVy8;//where BOT_TOKEN is the token of our bot
