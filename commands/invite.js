module.exports = {
    name: 'invite',
    execute(client, message, args, JsonDB) {
        message.channel.send({embed: {
            color: 0x00a5ff,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: 'Invite',
            description: "You like this bot? Well, you can invite me to some other servers by clicking [here](https://discordapp.com/api/oauth2/authorize?client_id=592281760256098304&permissions=51200&scope=bot)"
          }})
    }
}
