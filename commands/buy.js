module.exports = {
    name: 'buy',
    execute(client, message, args, JsonDB) {
        var userid = message.author.id
        var item  = args[0]
        if (!item) {
            message.channel.send({embed: {
                color: 0x00a5ff,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: 'Buy',
                description: "Please enter a wumpus you want to buy after the `w!buy` command. To see which wumpuses are available use `w!shop`."
            }})
        }

        const items = ['standard','mario','luigi','link','party','wizard','space','rainbow']

        if (!items.includes(item)) {
            message.channel.send({embed: {
                color: 0x00a5ff,
                author: {
                    name: client.user.username,
                    icon_url: client.user.avatarURL
                },
                title: 'Buy',
                description: "This is not a valid wumpus. To see which wumpuses are available use `w!shop`."
            }})
        }
        const wtypes = require("../src/wumpus/wumpustypes.json")
        var users = new JsonDB('src/data/wumpuses')
        
        var user = users.getData('/' + userid)
        var usercoins = user.coins
        if (item.includes(item)) {
            if (item == 'standard') {
                var price = wtypes.standard.price
                if (usercoins > price) {
                    message.channel.send({embed: {
                        color: 0x00a5ff,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: 'Buy',
                        description: "Thanks for buying a new wumpus, hope you like him."
                    }})
                    var newusercoins = usercoins - price
                    var userupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":item,"coins":newusercoins}
                    users.push('/' + userid, userupdate)
                }
                
            } else if (item == 'mario') {
                var price = wtypes.mario.price
                if (usercoins > price) {
                    message.channel.send({embed: {
                        color: 0x00a5ff,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: 'Buy',
                        description: "Thanks for buying a new wumpus, hope you like him."
                    }})
                    var newusercoins = usercoins - price
                    var userupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":item,"coins":newusercoins}
                    users.push('/' + userid, userupdate)
                } else {
                    message.channel.send({embed: {
                        color: 0x00a5ff,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: 'Buy',
                        description: "You don't have enough coins to buy this wumpus."
                    }})
                 }
                
            } else if (item == 'luigi') {
                var price = wtypes.luigi.price
                if (usercoins > price) {
                    message.channel.send({embed: {
                        color: 0x00a5ff,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: 'Buy',
                        description: "Thanks for buying a new wumpus, hope you like him."
                    }})
                    var newusercoins = usercoins - price
                    var userupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":item,"coins":newusercoins}
                    users.push('/' + userid, userupdate)
                } else {
                    message.channel.send({embed: {
                        color: 0x00a5ff,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: 'Buy',
                        description: "You don't have enough coins to buy this wumpus."
                    }})
                 }
                
            } else if (item == 'link') {
                var price = wtypes.link.price
                if (usercoins > price) {
                    message.channel.send({embed: {
                        color: 0x00a5ff,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: 'Buy',
                        description: "Thanks for buying a new wumpus, hope you like him."
                    }})
                    var newusercoins = usercoins - price
                    var userupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":item,"coins":newusercoins}
                    users.push('/' + userid, userupdate)
                } else {
                    message.channel.send({embed: {
                        color: 0x00a5ff,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: 'Buy',
                        description: "You don't have enough coins to buy this wumpus."
                    }})
                 }
                
            } else if (item == 'party') {
                var price = wtypes.party.price
                if (usercoins > price) {
                    message.channel.send({embed: {
                        color: 0x00a5ff,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: 'Buy',
                        description: "Thanks for buying a new wumpus, hope you like him."
                    }})
                    var newusercoins = usercoins - price
                    var userupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":item,"coins":newusercoins}
                    users.push('/' + userid, userupdate)
                } else {
                    message.channel.send({embed: {
                        color: 0x00a5ff,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: 'Buy',
                        description: "You don't have enough coins to buy this wumpus."
                    }})
                 }
                
            } else if (item == 'wizard') {
                var price = wtypes.wizard.price
                if (usercoins > price) {
                    message.channel.send({embed: {
                        color: 0x00a5ff,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: 'Buy',
                        description: "Thanks for buying a new wumpus, hope you like him."
                    }})
                    var newusercoins = usercoins - price
                    var userupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":item,"coins":newusercoins}
                    users.push('/' + userid, userupdate)
                } else {
                    message.channel.send({embed: {
                        color: 0x00a5ff,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: 'Buy',
                        description: "You don't have enough coins to buy this wumpus."
                    }})
                 }
                
            } else if (item == 'space') {
                var price = wtypes.space.price
                if (usercoins > price) {
                    message.channel.send({embed: {
                        color: 0x00a5ff,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: 'Buy',
                        description: "Thanks for buying a new wumpus, hope you like him."
                    }})
                    var newusercoins = usercoins - price
                    var userupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":item,"coins":newusercoins}
                    users.push('/' + userid, userupdate)
                } else {
                    message.channel.send({embed: {
                        color: 0x00a5ff,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: 'Buy',
                        description: "You don't have enough coins to buy this wumpus."
                    }})
                 }
                
            } else if (item == 'rainbow') {
                var price = wtypes.rainbow.price
                if (usercoins > price) {
                    message.channel.send({embed: {
                        color: 0x00a5ff,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: 'Buy',
                        description: "Thanks for buying a new wumpus, hope you like him."
                    }})
                    var newusercoins = usercoins - price
                    var userupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":item,"coins":newusercoins}
                    users.push('/' + userid, userupdate)
                } else {
                    message.channel.send({embed: {
                        color: 0x00a5ff,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                        title: 'Buy',
                        description: "You don't have enough coins to buy this wumpus."
                    }})
                 }
                
            }
        }
    }
}

