const { Client, GatewayIntentBits, Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');
const config = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.commands = new Collection();

// Load commands
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(path.join(__dirname, 'commands', file));
    client.commands.set(command.name, command);
}

// Event listener for new messages
client.on('messageCreate', message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(`Error executing command ${commandName}:`, error);
        message.reply('There was an error executing that command.');
    }
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);

    // Set custom status
    const statuses = config.statuses || ['Coding in Lua', 'Chilling out', 'Coding some scripts'];
    let statusIndex = 0;

    setInterval(() => {
        client.user.setPresence({
            activities: [{ name: statuses[statusIndex], type: config.activityType || 0 }],
            status: 'online',
        });
        statusIndex = (statusIndex + 1) % statuses.length;
    }, config.statusChangeInterval || 10000); // Change status every 10 seconds (default)
});

client.login(config.token);
