const fetch = require('node-fetch');
const querystring = require('querystring');
const { Client, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');


module.exports = {
	name: 'deresute',
	description: 'Fill this later',
	cooldown: 5,
	async execute(message, args) {

		/*const query = querystring.stringify({ idol: args.join(' ') });

		const { list } = await fetch(`https://starlight.kirara.ca/api/v1/char_t/${query}`).then(response => response.json());

		//message.channel.send(list);
		
		//const { list } = await fetch(`https://starlight.kirara.ca/api/v1/char_t/all?keys=chara_id,conventional?keys=chara_id,conventional${query}`).then(response => response.json());

		const [result] = list;

		const embed = new Discord.MessageEmbed()
			.setColor('#EFFF00')
			.setTitle(result.conventional)
			//.setURL(result.permalink)

			.addFields(
				{ name: 'Icon', value: '${icon_image_ref'},
				{ name: 'Definition', value: trim(result.type, 1024) },
				{ name: 'Example', value: trim(result.voice, 1024) },
				{ name: 'Rating', value: `${result.name_kana} thumbs up. ${result.height} thumbs down.` },
			);
		message.channel.send(embed);
		*/

		const query = args[0];

		const { result } = await fetch(`https://starlight.kirara.ca/api/v1/char_t/${query}`).then(response => response.json())
		.then(response => {

			console.log(response)
			//message.channel.send(response.result[0].icon_image_ref);
			const idolurl = 'https://starlight.kirara.ca/char/' + query;
			const embed = new Discord.MessageEmbed()
			.setColor('#EFFF00')
			.setTitle(response.result[0].conventional)
			.setURL(idolurl)
			.setThumbnail(`${response.result[0].icon_image_ref}`)
			.addFields(
				{ name: 'Idol type', value: `${response.result[0].type}`},
				{ name: 'Age', value: `${response.result[0].age}`},
				{ name: 'Name. Height', value: `${response.result[0].name_kana}. ${response.result[0].height}` },
			);
		message.channel.send(embed);
		});

		/*console.log(query)
		console.log(response.result);
		message.channel.send(result.result);

		const [idol] = response.result;
		console.log('idol');
		console.log(idol);

		const embed = new Discord.MessageEmbed()
			.setColor('#EFFF00')
			.setTitle(idol.conventional)
			//.setURL(result.permalink)

			.addFields(
				{ name: 'Icon', value: '${idol[0].icon_image_ref}'},
				{ name: 'Definition', value: `${idol[0].type}`},
				{ name: 'Example', value: `${idol[0].voice}`},
				{ name: 'Rating', value: `${idol[0].name_kana} thumbs up. ${idol[0].height} thumbs down.` },
			);
		message.channel.send(embed);
		*/

	},
};