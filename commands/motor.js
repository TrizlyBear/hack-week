module.exports = {
    name: 'motor',
    execute(client, message, args, JsonDB) {
        var firstarg = args[0];
        var userid = message.author.id;
        var users = new JsonDB('src/data/wumpuses')
        var user = users.getData('/' + userid)

        if (!firstarg) {
            try {
                var usersmotors = new JsonDB('src/data/motors')
                
                var usermotor = usersmotors.getData('/' + userid)

                message.channel.send({embed: {
                    color: 0x00a5ff,
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL,
                    },
                    title: 'Motor',
                    description: `This is your motor: \n\n**Power:** ${usermotor.power} \n**Acceleration: **${usermotor.acceleration} \n**Skills:** ${usermotor.skills}`,
                  }}) 

            } catch (error) {
                message.channel.send({embed: {
                    color: 0x00a5ff,
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL,
                    },
                    title: 'Motor',
                    description: `You dont have a motor :cry: \nBuy one using **w!motor buy**`,
                  }}) 
            }
        }
        if (firstarg == "buy") {
            try {
                var usersmotors = new JsonDB('src/data/motors')
                var usermotor = usersmotors.getData("/" + userid)
                message.channel.send({embed: {
                    color: 0x00a5ff,
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL,
                    },
                    title: 'Motor',
                    description: `You already have a motor, Wumpus can only ride one :cry:`,
                  }})
            } catch (error) {
                if (user.coins >= 20) {
                    newusercoins = user.coins - 20
                    message.channel.send({embed: {
                        color: 0x00a5ff,
                        author: {
                          name: client.user.username,
                          icon_url: client.user.avatarURL,
                        },
                        title: 'Motor',
                        description: `Congratulations, you bought your first motorcycle. I think your wumpus will like it :smile:`,
                      }})
                      var userupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":user.wumpus,"coins":newusercoins}
                      users.push('/' + userid, userupdate)
                      var usersmotors = new JsonDB('src/data/motors')
                      var newmotor = {"power":100,"acceleration":50,"skills":1}
                      usersmotors.push('/' + userid, newmotor)
                      
                } else {
                    message.channel.send({embed: {
                        color: 0x00a5ff,
                        author: {
                          name: client.user.username,
                          icon_url: client.user.avatarURL,
                        },
                        title: 'Motor',
                        description: `You don't have enough money, keep on chatting and gain coins. Wumpus loves you!`,
                      }}) 
                }
            }
            
        }

        if (firstarg == "upgrade") {
            try {
                var usersmotors = new JsonDB('src/data/motors')
                var part = args[1]
                var usermotor = usersmotors.getData('/' + userid)
            var parts = ["acceleration","power","a","p"]
            if (!parts.includes(part)) {
                message.channel.send({embed: {
                    color: 0x00a5ff,
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL,
                    },
                    title: 'Motor',
                    description: `You can't upgrade ${part}. \nWhat you can upgrade is acceleration and power.`,
                  }}) 
            } else {
                if (part == "p" || part == "power") {
                    if (user.coins < 20) {
                        message.channel.send({embed: {
                            color: 0x00a5ff,
                            author: {
                              name: client.user.username,
                              icon_url: client.user.avatarURL,
                            },
                            title: 'Motor',
                            description: `You don't have enough coins :cry: \nYou need 20 coins.`,
                          }}) 
                    } else {
                        var newpower = usermotor.power + 5
                        var newusercoins = user.coins - 20
                        message.channel.send({embed: {
                            color: 0x00a5ff,
                            author: {
                              name: client.user.username,
                              icon_url: client.user.avatarURL,
                            },
                            title: 'Motor',
                            description: `Your power has rised by 5. You now have ${newpower}!`,
                          }})
                          var motorupdate = {"power":newpower,"acceleration":usermotor.acceleration,"skills":usermotor.skills}
                          usersmotors.push('/' + userid, motorupdate)

                          var userupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":user.wumpus,"coins":newusercoins}
                          users.push('/' + userid, userupdate)
                    }
                }
                if (part == "a" || part == "acceleration") {
                    if (user.coins < 20) {
                        message.channel.send({embed: {
                            color: 0x00a5ff,
                            author: {
                              name: client.user.username,
                              icon_url: client.user.avatarURL,
                            },
                            title: 'Motor',
                            description: `You don't have enough coins :cry: \nYou need 15 coins.`,
                          }}) 
                    } else {
                        var newacceleration = usermotor.acceleration + 3
                        var newusercoins = user.coins - 15
                        message.channel.send({embed: {
                            color: 0x00a5ff,
                            author: {
                              name: client.user.username,
                              icon_url: client.user.avatarURL,
                            },
                            title: 'Motor',
                            description: `Your acceleration has rised by 3. You now have ${newacceleration} acceleration power!`,
                          }})
                          var motorupdate = {"power":usermotor.power,"acceleration":newacceleration,"skills":usermotor.skills}
                          usersmotors.push('/' + userid, motorupdate)

                          var userupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":user.wumpus,"coins":newusercoins}
                          users.push('/' + userid, userupdate)
                    }
                }
            }
            } catch (error) {
                message.channel.send({embed: {
                    color: 0x00a5ff,
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL,
                    },
                    title: 'Motor',
                    description: `You dont have a motor :cry: \nBuy one using **w!motor buy**`,
                  }}) 
            }
            
        }
        if (firstarg == "train") {
            try {
                var usersmotors = new JsonDB('src/data/motors')
                var usermotor = usersmotors.getData("/" + userid)
                if (user.coins < 5) {
                    message.channel.send({embed: {
                        color: 0x00a5ff,
                        author: {
                          name: client.user.username,
                          icon_url: client.user.avatarURL,
                        },
                        title: 'Training',
                        description: `You don't have enough coins for a training, you need at least 5 coins.`,
                      }}) 
                } else {
                    var senteces = ["I can not pull other wumpuses of their motors","I should stop in front of a red traffic sign","I should respect other wumpuses","I should limit my speed"]
                    var sentence = senteces[Math.floor(Math.random()*senteces.length)];
                    message.channel.send({embed: {
                        color: 0x00a5ff,
                        author: {
                          name: client.user.username,
                          icon_url: client.user.avatarURL,
                        },
                        title: 'Training',
                        description: "Okay here we go, retype the sentece below in 10 seconds to complete the training. \n\n`" + sentence +"`",
                      }}) 
                    
                    var newusercoins = user.coins - 5
                    var userupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":user.wumpus,"coins":newusercoins}
                    users.push('/' + userid, userupdate)
                    const filter = m => m.content.includes(sentence) && m.author.id == userid
                    const collector = message.channel.createMessageCollector(filter, { time: 10000 });
                    collector.on('collect', m => {
                        var newuserskill = usermotor.skills + 0.02
                        var motorupdate = {"power":usermotor.power,"acceleration":usermotor.acceleration,"skills":newuserskill}
                        usersmotors.push('/' + userid, motorupdate)
                        message.channel.send({embed: {
                            color: 0x00a5ff,
                            author: {
                              name: client.user.username,
                              icon_url: client.user.avatarURL,
                            },
                            title: 'Training',
                            description: `Great! You did it, your skill level has been improved by 0.02, your current skill level is now ${newuserskill}`,
                          }}) 
                    });
                    collector.on('end', collected => {
                        if (collected.size < 1) {
                            message.channel.send({embed: {
                                color: 0x00a5ff,
                                author: {
                                  name: client.user.username,
                                  icon_url: client.user.avatarURL,
                                },
                                title: 'Training',
                                description: `Aww c'mon... You can do better, I believe in you. You didn't complete the sentence. More luck next time.`,
                              }})  
                        }
                    });
                }
            } catch (error) {
                message.channel.send({embed: {
                    color: 0x00a5ff,
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL,
                    },
                    title: 'Motor',
                    description: `You dont have a motor :cry: \nBuy one using **w!motor buy**`,
                  }}) 
            }
            
        }
    }
}
