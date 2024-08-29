const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'history',
    description: 'Displays the conversion history for the user',
    execute(message) {
        try {
            const historyPath = path.resolve(__dirname, `../history_${message.author.id}.json`);

            if (fs.existsSync(historyPath)) {
                const history = JSON.parse(fs.readFileSync(historyPath, 'utf-8'));

                if (history.length > 0) {
                    let replyMessage = `**Conversion History for ${message.author.username}:**\n`;
                    history.forEach((entry, index) => {
                        replyMessage += `${index + 1}. ${entry}\n`;
                    });
                    message.reply(replyMessage);
                } else {
                    message.reply('You have no conversion history.');
                }
            } else {
                message.reply('You have no conversion history.');
            }
        } catch (error) {
            console.error('Error fetching history:', error);
            message.reply('An error occurred while retrieving your history.');
        }
    },
};
