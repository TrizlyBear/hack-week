module.exports = {
    name: 'help',
    execute(client, message, args) {
        var page = args[0]
        if (!page) {
            message.channel.send({embed: {
                color: 0x00a5ff,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL,
                },
                title: 'Help',
                description: "To see all commands available for use, use `w!help <command-page>` \n\n**1. Wumpus** \n\nAll commands available for your own wumpus pet, chat and get the best and coolest wumpus. \n\n**2. Info** \n\nHere will all commands be which contain information about the bot, use them if you're lost or if you want to know more. \n\n_If a command example contains `<>` this will mean it is a require parameter for the command. \nIf a command require brackets like these `[]` it means its an optional parameter._",
              }})
        } else if (!page == '1' && !page == '2') {
            message.channel.send({embed: {
                color: 0x00a5ff,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL,
                },
                title: 'Help',
                description: 'This is not a help page, the only help pages are: Page 1 for Wumpus commands, Page 2 for information commands.'
            }})
        } else if (page == '1') {
            message.channel.send({embed: {
                color: 0x00a5ff,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL,
                },
                title: 'Help: Wumpus',
                description: 'Here you can find all wumpus commands. \n\n**Wumpus**\n`w!wumpus`\nShows your own wumpus. \n\n**Shop**\n`w!shop [wumpus]` Shows the shop, if you type a wumpus name after the command it will show the image /GIF of a wumpus. \n\n**Buy**\n`w!buy <wumpus>` \nBuy a cool looking wumpus from your coins. \n\n**Motor** \n`w!motor [train | upgrade | buy] [upgrade: a | p | power | acceleration]`\nUse your motor, if you want to train your motor skills, use `w!motor train` and retype a phrase to finish your training, this will cost 5 coins. If you buy a motor, the motor will cost 20 coins, if you want to upgrade a part of your motor, the prices are different, acceleration upgrade will cost 15 and you will gain 3 more acceleration power, and a power upgrade will cost 20 coins and you will gain 5 power. \n\n**Bal** \n`w!bal` \nShows the balance of coins you have. \n\n**Race** \n`w!race <opponent-tag> <race-bet>` \nRace against one of your friends or your worst enemy. \n\n_If a command example contains `<>` this will mean it is a require parameter for the command. \nIf a command require brackets like these `[]` it means its an optional parameter._'
            }})
        } else if (page == '2') {
            message.channel.send({embed: {
                color: 0x00a5ff,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL,
                },
                title: 'Help: Info',
                description: 'Here you can find all info commands. \n\n**Ping** \n`w!ping` \nShows the latency in milli seconds. \n\n**Info** \n`w!info` \nShows general info about the bot, including credits and dependencies. \n\n**Help** \n`w!help [page]` \nShows this help page, or one of the other pages, depending on the page parameter. \n\n_If a command example contains `<>` this will mean it is a require parameter for the command. \nIf a command require brackets like these `[]` it means its an optional parameter._'
            }})
        }
    }
}