module.exports = {
    name: 'bal',
    execute(client, message, args, JsonDB) {
        var userid = message.author.id;
        var users = new JsonDB('src/data/wumpuses')
        var user = users.getData('/' + userid)
        message.channel.send({embed: {
            color: 0x00a5ff,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL,
            },
            title: 'Balance',
            description: `You have a balance of ${user.coins} coins.`,
          }})
    }
}