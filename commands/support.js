module.exports = {
    name: 'support',
    execute(client, message, args, JsonDB) {
        message.channel.send({embed: {
            color: 0x00a5ff,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: 'Support',
            description: "If you're lost with the bot or you just want to hang out somewhere else, join the support server. It's full of nice people! \n\nClick [here](https://discord.gg/TRKjKX) to join."
          }})
    }
}
