const { Client, IntentsBitField } = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
})


client.on('ready', (c) => {
    console.log(`${c.user.tag} is ready to queue.`)
})

client.on('messageCreate', (message) => {
    if (message.content === '@CS2') {
        message.reply('Shut up no one wants to queue with you')
    }
})


client.login(process.env.TOKEN);



