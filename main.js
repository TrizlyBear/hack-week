

//this will import the filesystem functons for reading your command folder
const fs = require('fs');

const JsonDB = require('node-json-db');

//this will import all discord functions
const Discord = require('discord.js');

//this will get your data from your configuration file with your token in it
const config = require('./config.json');
var prefix = "w!"
const client = new Discord.Client();

const cooldowns = new Discord.Collection();
client.commands = new Discord.Collection();

//this wil get all files which are in the folder "commmands" and en with ".js"
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

//this will give the files their name so they can be recognised
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

//if your bot starts up it will message "ready" to your command prompt, you .bat file
client.once('ready', () => {
	console.log('Ready!');
	// console.log(client.guilds.array().name)
	// var interval = setInterval(randomstatus, 30000)
});

//this will check every message
client.on('message', message => {
	if (message.channel.type == 'text') {
	
		var userid = message.author.id;
		var users = new JsonDB('src/data/wumpuses')
	try {
		var user = users.getData('/' + userid)
		
		var userxp = user.xp
		if (userxp == (user.level * 10) - 1) {
			var newuserlevel = user.level + 1
			var newusercoins = user.coins + (newuserlevel * 10) + 30
			var userupdate = {"xp":0,"level":newuserlevel,"nickname":user.nickname,"wumpus":user.wumpus,"coins":newusercoins}
			
			users.push("/" + userid, userupdate)
		} else {
			var newxp = user.xp + 1
			var userupdate = {"xp":newxp,"level":user.level,"nickname":user.nickname,"wumpus":user.wumpus,"coins":user.coins}
			
			users.push("/" + userid, userupdate)
		}
	} catch (error) {
		
		var newuser = {"xp":0,"level":1,"nickname":"_No nickname yet_","wumpus":"standard","coins":10}
		users.push('/' + userid, newuser)
	}
	
	//if the message doesnt start with the prefix or the message author is a bot, the code will end
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	if (message.content === "nigger") {
		message.reply("You cant say the N-word, thats racist!")
	}

	//this will create args, I'll explain those later on
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	//if the command after your bots prefix is not recognised from the folder, the code will end
	if (!client.commands.has(command)) return;

	// if (!cooldowns.has(command.name)) {
	// cooldowns.set(command.name, new Discord.Collection());
	// }

	// const now = Date.now();
	// const timestamps = cooldowns.get(command.name);
	// const cooldownAmount = (command.cooldown || 5) * 1000;

	// if (timestamps.has(message.author.id)) {
	// 	const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

	// 	if (now < expirationTime) {
	// 		const timeLeft = (expirationTime - now) / 1000;
	// 		return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing any command.`);
	// 	}
	// }
	// timestamps.set(message.author.id, now);
	// setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
	//this will try to run the command which came after your bots prefix
	try {
		client.commands.get(command).execute(client, message, args, JsonDB);
	}
	//if theres an error your bot will send the error to your cmd prompt and will send an error message in the chat
	catch (error) {
		console.error(error);
    message.channel.send({embed: {
      color: 0x00a5ff,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      description: "There was an error finding the command."
    }})
	}}
});

// function randomstatus() {
// 	var statuses = [`>help | Online on ${client.guilds.size} servers`, `>help | Opening some virtual packs`, `>help | Just chillin`, `>help | Created by  Trizlybear#7066`, `>help | Managing ${client.guilds.size} servers`, `>help | Serving to ${client.users.size} users`]
// 	var status = statuses[Math.floor(Math.random()*statuses.length)];
// 	client.user.setActivity(status)
// }

//if the client (your bot) starts up it will set his activity
client.on('ready', () => { client.user.setActivity(`on ${client.guilds.size} servers | do >help`)})

// if the bot is added to a server it will update his activity
client.on("guildCreate", guild => {
	
    console.log("Joined a new guild: " + guild.name);
		client.user.setActivity(`on ${client.guilds.size} servers | do >help`)

})

//if the bot is deleted from a server it will update his activity
client.on("guildDelete", guild => {
	
    console.log("Left a guild: " + guild.name);
		client.user.setActivity(`on ${client.guilds.size} servers | do >help`)
})



process.on('unhandledRejection', console.error)

//your client logs in
client.login(config.token);