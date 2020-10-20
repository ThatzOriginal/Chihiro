const { MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');
const Discord = require('discord.js');


module.exports = {
	name: 'cgid',
	description: '',
	cooldown: 5,
	execute(message, args) {

                var cgidnum = (args[0]);
                //if (cgidnum == !NaN)
                //{
                console.log('CG ran');
                const url = require('url');
                adr = 'https://deresute.me/';
                console.log(cgidnum); 
                //const idoutput = ('adr','cgidnum');
               // console.log (idoutput);
                //attachment = new MessageAttachment('https://deresute.me/');
                adr += cgidnum;
                //console.log(attachment);
                message.channel.send(adr+'/large.png');
                //}
                /*else
                {
                message.reply('Your input was not a valid ID');
                }*/
                
                /*
                const exampleEmbed = new Discord.MessageEmbed()
	        .setTitle('Some title')
	        //.attachFiles(['https://deresute.me/'+cgidnum+'/large.png'])
	        .setImage('https://deresute.me/'+cgidnum+'/large.png');

                message.channel.send(exampleEmbed);
                */
	},
};