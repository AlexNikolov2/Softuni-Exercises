const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'ping') {
 msg.reply('pong');
 }
 });

client.login('NzMzNzEyMzUwOTc2MTQ3NTU2.XxHJJA.n8_h90o0ioIegejwcGj3-li2sKg');