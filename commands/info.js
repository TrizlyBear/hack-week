module.exports = {
    name: 'info',
    execute(client, message, args, JsonDB) {
        message.channel.send({embed: {
            color: 0x00a5ff,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL,
            },
            title: 'Info',
            description: "Welcome to wumpugotchi, you can pet your own wumpus here. I'm created to have fun and make people happy :smile: Don't know how to use the bot? Use `w!help` to see all commands. \n\n**Creator** \nI am created by `TrizlyBear#7066`, a 15 year old boy. He used NodeJS and Discord.js and some other dependencies for making me. For any questions or suggestions, just add him as a friend. \n\n**Dependencies**\n\nDiscord.js `11.5.1` \nnode-json-db `0.9.2` \nNPM `5.6.0` \n\n**Special thanks to** \nDiscord to make me do something with my life. \n\n`flamingon#5013`, `De Ligt#4363` and `Hug Lurie#4330` for beta testing.",
          }})
    }
}