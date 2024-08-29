const fs = require('fs');
const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const axios = require('axios');
const path = require('path');
const { convertESXtoQB } = require('../converters/esxToQb');
const { convertQBtoESX } = require('../converters/qbToEsx');
const { saveFile, readFile, deleteFile } = require('../utils/fileHandler');

module.exports = {
    name: 'convert',
    description: 'Converts scripts between ESX and QB',
    async execute(message, args) {
        if (!message.attachments.size) {
            return message.reply('Please attach a script file to convert.');
        }

        const file = message.attachments.first();
        const conversionType = args[0]?.toLowerCase();
        const outputFileName = args[1] || `convertedScript_${Date.now()}.lua`;

        if (!['esx-to-qb', 'qb-to-esx'].includes(conversionType)) {
            return message.reply('Invalid conversion type. Use "esx-to-qb" or "qb-to-esx".');
        }

        const fileUrl = file.url;
        const tempDir = path.join(__dirname, 'temp');
        if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir);
        }

        const tempFilePath = path.join(tempDir, 'tempFile.lua');

        try {
            // Download the file
            const response = await axios.get(fileUrl, { responseType: 'arraybuffer' });
            const scriptContent = response.data;

            // Save the downloaded file to a temporary file
            saveFile(tempFilePath, scriptContent);

            // Read the file content for conversion
            const scriptText = readFile(tempFilePath);
            let convertedScript;

            // Convert the script based on the type
            if (conversionType === 'esx-to-qb') {
                convertedScript = convertESXtoQB(scriptText);
            } else if (conversionType === 'qb-to-esx') {
                convertedScript = convertQBtoESX(scriptText);
            }

            // Define the path for the converted script
            const convertedFilePath = path.join(tempDir, outputFileName);

            // Write the converted script to the file
            saveFile(convertedFilePath, convertedScript);

            // Create an attachment for the converted script
            const attachment = new AttachmentBuilder(convertedFilePath, { name: outputFileName });

            // Create an embed to notify the user
            const successEmbed = new EmbedBuilder()
                .setColor('#00FF00')
                .setTitle('Conversion Successful')
                .setDescription(`Your script has been converted successfully. You can download it [here](attachment://${outputFileName}).`);

            // Reply with the converted file and embed
            await message.reply({ embeds: [successEmbed], files: [attachment] });

        } catch (error) {
            console.error('Error during conversion or file handling:', error);
            await message.reply('An error occurred during the conversion process.');
        } finally {
            // Ensure temporary and converted files are deleted after processing
            if (fs.existsSync(tempFilePath)) {
                deleteFile(tempFilePath);
            }
            const convertedFilePath = path.join(tempDir, outputFileName);
            if (fs.existsSync(convertedFilePath)) {
                deleteFile(convertedFilePath);
            }
        }
    }
};
