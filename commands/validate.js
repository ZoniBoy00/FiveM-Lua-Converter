const { validateScript } = require('../utils/syntaxValidator');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'validate',
    description: 'Validate the syntax of the converted Lua script.',
    async execute(message, args) {
        if (args.length < 1) {
            const usageEmbed = new EmbedBuilder()
                .setColor('#00FF00')
                .setTitle('Usage')
                .setDescription('Please provide the Lua script text to validate.\n\nUsage: `!validate <script>`');

            return message.reply({ embeds: [usageEmbed] });
        }

        const scriptText = args.join(' ');
        const validationResult = validateScript(scriptText);

        let resultEmbed;
        if (validationResult.isValid) {
            resultEmbed = new EmbedBuilder()
                .setColor('#00FF00')
                .setTitle('Validation Result')
                .setDescription('The Lua script syntax is valid.');
        } else {
            resultEmbed = new EmbedBuilder()
                .setColor('#FF0000')
                .setTitle('Validation Errors')
                .setDescription('Syntax errors found:')
                .addFields({ name: 'Errors', value: validationResult.errors.join('\n') });
        }

        message.reply({ embeds: [resultEmbed] });
    }
};
