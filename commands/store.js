const Discord = require('discord.js')

module.exports = {
    name: 'store',
    execute(client, message, args, JsonDB) {
        var item = args[0]

        const wtypes = require("../src/wumpus/wumpustypes.json")
        
        if (!args[0]) {
            message.channel.send({embed: {
            color: 0x00a5ff,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
            title: 'Store',
            description: "**Welcome to the wumpus store, here you can buy different wumpuses!** \n\n**Types** \n\nStandard: Just a standard wumpus.\n0 coins \n\nMario: Mario wumpus is really cool, with a nice hat. \nCoins: 300 \n\nLuigi: Luigi is also really cool, with a nice green cap. \nCoins: 300 \n\nLink: The cool zelda wumpus. \nCoins: 300 \n\nParty: Wumpus is having a party. \nCoins: 300 \n\nWizard: You're a wizard wumpus, no I'm just wumpus. \n\nSpace: Cool space boi wumpus, first wumpus on the moon. \nCoins: 1000 [GIF] \n\nRainbow: A cool rainbow wumpus, he's a bit crazy, but cool. \nCoins: 1000 [GIF] \n\nUse `w!store <wumpus-type>` to get the image / gif of a wumpus."
        }})
        }

        const items = ['standard','mario','luigi','link','party','wizard','space','rainbow']

        if (!items.includes(item) && item) {
            message.channel.send({embed: {
                color: 0x00a5ff,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: 'Store',
                description: "This is not a wumpus!"
            }})
        } else if (item == 'standard') {
            const wumpusembed = new Discord.RichEmbed()
            .setTitle("Store")
            .setColor(0x00a5ff)
            .setDescription(`Standard Wumpus`)
            .setImage(wtypes.standard.link)
            message.channel.send(wumpusembed)
        } else if (item == 'mario') {
            const wumpusembed = new Discord.RichEmbed()
            .setTitle("Store")
            .setColor(0x00a5ff)
            .setDescription(`Mario Wumpus`)
            .setImage(wtypes.mario.link)
            message.channel.send(wumpusembed)
        } else if (item == 'luigi') {
            const wumpusembed = new Discord.RichEmbed()
            .setTitle("Store")
            .setColor(0x00a5ff)
            .setDescription(`Luigi Wumpus`)
            .setImage(wtypes.luigi.link)
            message.channel.send(wumpusembed)
        } else if (item == 'link') {
            const wumpusembed = new Discord.RichEmbed()
            .setTitle("Store")
            .setColor(0x00a5ff)
            .setDescription(`Link Wumpus`)
            .setImage(wtypes.link.link)
            message.channel.send(wumpusembed)
        } else if (item == 'party') {
            const wumpusembed = new Discord.RichEmbed()
            .setTitle("Store")
            .setColor(0x00a5ff)
            .setDescription(`Party Wumpus`)
            .setImage(wtypes.party.link)
            message.channel.send(wumpusembed)
        } else if (item == 'wizard') {
            const wumpusembed = new Discord.RichEmbed()
            .setTitle("Store")
            .setColor(0x00a5ff)
            .setDescription(`Wizard Wumpus`)
            .setImage(wtypes.wizard.link)
            message.channel.send(wumpusembed)
        } else if (item == 'space') {
            const wumpusembed = new Discord.RichEmbed()
            .setTitle("Store")
            .setColor(0x00a5ff)
            .setDescription(`Space Wumpus`)
            .setImage(wtypes.space.link)
            message.channel.send(wumpusembed)
        } else if (item == 'rainbow') {
            const wumpusembed = new Discord.RichEmbed()
            .setTitle("Store")
            .setColor(0x00a5ff)
            .setDescription(`Rainbow Wumpus`)
            .setImage(wtypes.rainbow.link)
            message.channel.send(wumpusembed)
        }
        
    }
}