
const Discord = require("discord.js")
module.exports = {
    name: 'wumpus',
    execute(client, message, args, JsonDB) {
        const wumpustypes = require("../src/wumpus/wumpustypes.json")
        const wumpuses = new JsonDB("src/data/wumpuses");
        var userid = message.author.id;
            var user = wumpuses.getData('/' + userid)
        
            
            if (user.wumpus == "standard") {
                wumpusembed = new Discord.RichEmbed()
                .setTitle("Your wumpus")
                .setColor(0x00a5ff)
                .setDescription(`Name: ${user.nickname} \nType: ${user.wumpus} \nLevel: ${user.level} \nXP points: ${user.xp}/${user.level * 10}`)
                .setImage(wumpustypes.standard.link)
                message.channel.send(wumpusembed)
            } else if (user.wumpus == "mario") {
                wumpusembed = new Discord.RichEmbed()
                .setTitle("Your wumpus")
                .setColor(0x00a5ff)
                .setDescription(`Name: ${user.nickname} \nType: ${user.wumpus} \nLevel: ${user.level} \nXP points: ${user.xp}/${user.level * 10}`)
                .setImage(wumpustypes.mario.link)
                message.channel.send(wumpusembed)
            } else if (user.wumpus == "luigi") {
                wumpusembed = new Discord.RichEmbed()
                .setTitle("Your wumpus")
                .setColor(0x00a5ff)
                .setDescription(`Name: ${user.nickname} \nType: ${user.wumpus} \nLevel: ${user.level} \nXP points: ${user.xp}/${user.level * 10}`)
                .setImage(wumpustypes.luigi.link)
                message.channel.send(wumpusembed)
            } else if (user.wumpus == "link") {
                wumpusembed = new Discord.RichEmbed()
                .setTitle("Your wumpus")
                .setColor(0x00a5ff)
                .setDescription(`Name: ${user.nickname} \nType: ${user.wumpus} \nLevel: ${user.level} \nXP points: ${user.xp}/${user.level * 10}`)
                .setImage(wumpustypes.link.link)
                message.channel.send(wumpusembed)
            } else if (user.wumpus == "party") {
                wumpusembed = new Discord.RichEmbed()
                .setTitle("Your wumpus")
                .setColor(0x00a5ff)
                .setDescription(`Name: ${user.nickname} \nType: ${user.wumpus} \nLevel: ${user.level} \nXP points: ${user.xp}/${user.level * 10}`)
                .setImage(wumpustypes.party.link)
                message.channel.send(wumpusembed)
            } else if (user.wumpus == "wizard") {
                wumpusembed = new Discord.RichEmbed()
                .setTitle("Your wumpus")
                .setColor(0x00a5ff)
                .setDescription(`Name: ${user.nickname} \nType: ${user.wumpus} \nLevel: ${user.level} \nXP points: ${user.xp}/${user.level * 10}`)
                .setImage(wumpustypes.wizard.link)
                message.channel.send(wumpusembed)
            } else if (user.wumpus == "space") {
                wumpusembed = new Discord.RichEmbed()
                .setTitle("Your wumpus")
                .setColor(0x00a5ff)
                .setDescription(`Name: ${user.nickname} \nType: ${user.wumpus} \nLevel: ${user.level} \nXP points: ${user.xp}/${user.level * 10}`)
                .setImage(wumpustypes.space.link)
                message.channel.send(wumpusembed)
            } else if (user.wumpus == "rainbow") {
                wumpusembed = new Discord.RichEmbed()
                .setTitle("Your wumpus")
                .setColor(0x00a5ff)
                .setDescription(`Name: ${user.nickname} \nType: ${user.wumpus} \nLevel: ${user.level} \nXP points: ${user.xp}/${user.level * 10}`)
                .setImage(wumpustypes.rainbow.link)
                message.channel.send(wumpusembed)
            }
            
            // wumpusembed = new Discord.RichEmbed()
            //     .setTitle("Your wumpus")
            //     .setColor(0x00a5ff)
            //     .setDescription(`Name: ${user.nickname} \nType: ${user.wumpus} \nLevel: ${user.level} \nXP points: ${user.xp}/${user.level * 10}`)
            //     .setImage(wumpustypes.userwumpustype.link)
            // message.channel.send(wumpusembed)
        
    }
}