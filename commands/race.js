module.exports = {
    name: 'race',
    execute(client, message, args, JsonDB) {
        var userid = message.author.id
        var opponent = message.mentions.members.first()
        var users = new JsonDB('src/data/wumpuses')
        var user = users.getData('/' + userid)
        if (!args[0] || !message.mentions) {
            message.channel.send({embed: {
                color: 0x00a5ff,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL,
                },
                title: 'Error',
                description: `Please mentione someone to race against.`,
              }})
        } else if (userid == opponent.id) {
            message.channel.send({embed: {
                color: 0x00a5ff,
                author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL,
                },
                title: 'Error',
                description: `You can not race against yourself.`,
              }})
        } else {
            if (!args[1]) {
                message.channel.send({embed: {
                    color: 0x00a5ff,
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL,
                    },
                    title: 'Error',
                    description: `Please enter an amount of coins you want to bet for.`,
                  }})
            } else {
            try {
                var usersmotors = new JsonDB('src/data/motors')
                var racecoins = parseInt(args[1])
                var usermotor = usersmotors.getData('/' + userid)
                var opponentmotor = usersmotors.getData('/' + opponent.id)
                const filter = m => m.content.includes('accept') && m.author.id == opponent.id
                const collector = message.channel.createMessageCollector(filter, { time: 45000 });
                message.channel.send({embed: {
                    color: 0x00a5ff,
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL,
                    },
                    title: 'Race',
                    description: `You invited ${opponent.username} to race against you, he got 45 seconds to accept the invite by typing **w!accept** in the chat.`,
                  }})
                collector.on('collect', m => {
                    //start race
                    // console.log(opponentavg)
                    // console.log(useravg)
                    var opponentwumpus = users.getData('/' + opponent.id)
                    var opponentavg = opponentmotor.power * opponentmotor.acceleration * opponentmotor.skills
                    var useravg = usermotor.power * usermotor.acceleration * usermotor.skills

                    


                    var randomnumber = Math.floor(Math.random() * 12) + 1

                    if (randomnumber <= 7) {
                        if (opponentavg == useravg) {
                            message.channel.send({embed: {
                                color: 0x00a5ff,
                                author: {
                                  name: client.user.username,
                                  icon_url: client.user.avatarURL,
                                },
                                title: 'Race',
                                description: `And they start! They are both really fast, just 200 meters to go.. \n\nThe finish is near, who will win? \n\nWait what that's impossible, they both have the exact same time. Well it's a draw then.`,
                              }})
                        } else if (useravg > opponentavg) {
                            message.channel.send({embed: {
                                color: 0x00a5ff,
                                author: {
                                  name: client.user.username,
                                  icon_url: client.user.avatarURL,
                                },
                                title: 'Race',
                                description: `And let the race begin, both wumpuses are going good, this is top speed racing. \n\nOnly 143 meters left and ${message.author.username}'s wumpus is in first place. \n\nAnd there is the finish, ${message.author.username}'s wumpus won.`,
                              }})
                              var newusercoins = user.coins + racecoins
                    var newopponentcoins = opponentwumpus.coins - racecoins
                    var userupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":user.wumpus,"coins":newusercoins}
                    var opponentupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":user.wumpus,"coins":newopponentcoins}
                    users.push('/' + opponent.id, opponentupdate)
                    users.push('/' + userid, userupdate)
                        } else {
                            message.channel.send({embed: {
                                color: 0x00a5ff,
                                author: {
                                  name: client.user.username,
                                  icon_url: client.user.avatarURL,
                                },
                                title: 'Race',
                                description: `And let the race begin, both wumpuses are going good, this is top speed racing. \n\nOnly 143 meters left and ${opponent}'s wumpus is in first place. \n\nAnd there is the finish, ${opponent}'s wumpus won.`,
                              }})
                              var newusercoins = user.coins - racecoins
                    var newopponentcoins = opponentwumpus.coins + racecoins
                    var userupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":user.wumpus,"coins":newusercoins}
                    var opponentupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":user.wumpus,"coins":newopponentcoins}
                    users.push('/' + opponent.id, opponentupdate)
                    users.push('/' + userid, userupdate)
                        }
                    } else if (randomnumber == 8) {
                        message.channel.send({embed: {
                            color: 0x00a5ff,
                            author: {
                              name: client.user.username,
                              icon_url: client.user.avatarURL,
                            },
                            title: 'Race',
                            description: `And the lights turn green, the wumpuses can start. \n\nThey are goin really fast, with ${opponent}'s wumpus in fearst place. \n\nOh no! There's a rock. ${opponent}'s wumpus hits the rock and fell. ${message.author}'s wumpus won!`,
                          }})
                          var newusercoins = user.coins + racecoins
                    var newopponentcoins = opponentwumpus.coins - racecoins
                    var userupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":user.wumpus,"coins":newusercoins}
                    var opponentupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":user.wumpus,"coins":newopponentcoins}
                    users.push('/' + opponent.id, opponentupdate)
                    users.push('/' + userid, userupdate)
                    } else if (randomnumber == 9) {
                        message.channel.send({embed: {
                            color: 0x00a5ff,
                            author: {
                              name: client.user.username,
                              icon_url: client.user.avatarURL,
                            },
                            title: 'Race',
                            description: `And the lights turn green, the wumpuses can start. \n\nThey are goin really fast, with ${message.author}'s wumpus in fearst place. \n\nOh no! There's a rock. ${message.author}'s wumpus hits the rock and fell. ${opponent}'s wumpus won!`,
                          }})
                          var newusercoins = user.coins - racecoins
                    var newopponentcoins = opponentwumpus.coins + racecoins
                    var userupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":user.wumpus,"coins":newusercoins}
                    var opponentupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":user.wumpus,"coins":newopponentcoins}
                    users.push('/' + opponent.id, opponentupdate)
                    users.push('/' + userid, userupdate)
                    } else if (randomnumber == 10) {
                        message.channel.send({embed: {
                            color: 0x00a5ff,
                            author: {
                              name: client.user.username,
                              icon_url: client.user.avatarURL,
                            },
                            title: 'Race',
                            description: `And start! The wumpuses accelerate really fast. \n\n${message.author}'s wumpus is going for first place. He's going really fast. \n\nOh now what happens, ${opponent}'s wumpus kicks ${message.author}'s wumpus of his bike and get disqualified, ${message.author}'s wumpus wins!`,
                          }})
                          var newusercoins = user.coins + racecoins
                    var newopponentcoins = opponentwumpus.coins - racecoins
                    var userupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":user.wumpus,"coins":newusercoins}
                    var opponentupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":user.wumpus,"coins":newopponentcoins}
                    users.push('/' + opponent.id, opponentupdate)
                    users.push('/' + userid, userupdate)
                    } else if (randomnumber == 11) {
                        message.channel.send({embed: {
                            color: 0x00a5ff,
                            author: {
                              name: client.user.username,
                              icon_url: client.user.avatarURL,
                            },
                            title: 'Race',
                            description: `And start! The wumpuses accelerate really fast. \n\n${opponent}'s wumpus is going for first place. He's going really fast. \n\nOh now what happens, ${message.author}'s wumpus kicks ${opponent}'s wumpus of his bike and get disqualified, ${opponent}'s wumpus wins!`,
                          }})
                          var newusercoins = user.coins - racecoins
                    var newopponentcoins = opponentwumpus.coins + racecoins
                    var userupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":user.wumpus,"coins":newusercoins}
                    var opponentupdate = {"xp":user.xp,"level":user.level,"nickname":user.nickname,"wumpus":user.wumpus,"coins":newopponentcoins}
                    users.push('/' + opponent.id, opponentupdate)
                    users.push('/' + userid, userupdate)
                    } else if (randomnumber == 12) {
                        message.channel.send({embed: {
                            color: 0x00a5ff,
                            author: {
                              name: client.user.username,
                              icon_url: client.user.avatarURL,
                            },
                            title: 'Race',
                            description: `Lets start the race! The wumpuses are speeding up. \n\nThey are bot going really fast, it's not sure who's on first place. \n\nOh no they went in the same direction and crashed in each other, no one won!`,
                          }})
                    }
                });
                collector.on('end', collected => {
                    if (collected.size < 1) {
                        message.channel.send({embed: {
                            color: 0x00a5ff,
                            author: {
                              name: client.user.username,
                              icon_url: client.user.avatarURL,
                            },
                            title: 'Race',
                            description: `${opponent} has not accepted your invite, the race will not start :cry:`,
                          }})
                    }
                });
            } catch (error) {
                message.channel.send({embed: {
                    color: 0x00a5ff,
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL,
                    },
                    title: 'Error',
                    description: `You or your opponent doesn't have a motor, buy one by using **w!motor buy**.`,
                  }})
            }}
            
        }
    }
}