module.exports = {
	name: 'server',
	description: 'Displays Server info',
	execute(message) {
		// at the top of your file
		const Discord = require('discord.js');

		// inside a command, event listener, etc.
		/*const exampleEmbed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setTitle('Idolm@ster Canada')
			.setURL('https://discord.gg/w4TK3SN')
			.setAuthor('Server Information', 'https://i.imgur.com/976Ow6t.png', '')
			.setDescription('Created ${message.guild.createdAt}')
			.setThumbnail('https://i.imgur.com/wSTFkRM.png')
			.addField('Regular field title', '${message.guild.memberCount}')
			.addBlankField()
			.addField('Inline field title', 'Some value here', true)
			.addField('Inline field title', 'Some value here', true)
			.addField('Inline field title', 'Some value here', true)
			.setImage('https://i.imgur.com/976Ow6t.png')
			.setTimestamp()
			.setFooter('ID: 474047562551394307', 'https://i.imgur.com/wSTFkRM.png');

		message.channel.send(exampleEmbed);*/
		
		// inside a command, event listener, etc.
		const exampleEmbed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Idolm@ster Canada')
		.setURL('https://discord.gg/BRT4VCj')
		.setAuthor('Chihiro', 'https://i.imgur.com/976Ow6t.png', 'https://discord.gg/BRT4VCj')
		.setDescription('Some description here')
		.setThumbnail('https://i.imgur.com/976Ow6t.png')
		.addFields(
			{ name: 'Regular field title', value: 'Some value here' },
			{ name: '\u200B', value: '\u200B' },
			{ name: 'Inline field title', value: 'Some value here', inline: true },
			{ name: 'Inline field title', value: 'Some value here', inline: true },
		)
		.addField('Inline field title', 'Some value here', true)
		.setImage('https://i.imgur.com/wSTFkRM.png')
		.setTimestamp()
		.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

		message.channel.send(exampleEmbed);

		// Posts the server name, how many members and when the server was created.
		// message.channel.send(` Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated: ${message.guild.createdAt}`);
	},
};
