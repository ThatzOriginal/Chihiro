const fs = require('fs');

module.exports = {
	name: 'to-do',
	description: 'A list of things I still need to do and what I have completed',
	cooldown: 5,
	execute(message) {
        const path = "./storage/toDo.txt";
        const content = fs.readFileSync(path, 'utf-8');
        message.channel.send(content);
	},
};