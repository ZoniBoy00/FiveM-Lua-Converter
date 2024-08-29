module.exports = {
    name: 'help',
    description: 'Provides information on how to use the bot',
    execute(message) {
        message.reply(`
**Bot Commands:**
\`!convert <conversion_type> <file>\` - Convert a script. Use 'esx-to-qb' or 'qb-to-esx' as conversion types.
    Example: \`!convert esx-to-qb\`

\`!history\` - View your conversion history.

**How to Use:**
1. Attach the script file you want to convert when using the \`!convert\` command.
2. Specify the conversion type: 'esx-to-qb' or 'qb-to-esx'.
3. The bot will process the file and return the converted version.

**Other Information:**
- The bot automatically handles prefix recognition.
- The bot's status message changes randomly to keep things fun!
        `);
    },
};
