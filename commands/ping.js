module.exports = {
    name: 'ping',
    execute(client, message, args, JsonDB) {
        message.channel.send({embed: {
            color: 0x00a5ff,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            
            description: `Pong! :ping_pong: ${client.ping} ms!`
        }})
    }
}