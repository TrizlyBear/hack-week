module.exports = {
    name:'nickname',
    execute(client, message, args, JsonDB) {
        var userid = message.author.id;
        var users = new JsonDB('src/data/wumpuses')
        var user = users.getData('/' + userid)
        
        var newnick = args.join(' ')
        var userupdate = {"xp":user.xp,"level":user.level,"nickname":newnick,"wumpus":user.wumpus,"coins":user.coins}
        users.push('/' + userid, userupdate)

        message.channel.send({embed: {
            color: 0x00a5ff,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL,
            },
            title: 'Nickname',
            description: `Nickname of your wumpus has been changed to: ${newnick}`,
          }})
    }
}