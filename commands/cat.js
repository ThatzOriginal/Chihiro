const fetch = require('node-fetch');
const api = 'https://jsonplaceholder.typicode.com/posts';

module.exports = {
	name: 'cat',
	description: '',
	cooldown: 5,
	async execute(message, args) {
         const { file } =  await fetch('https://aws.random.cat/meow').then(response => response.json());

	    message.channel.send(file);
	},
};