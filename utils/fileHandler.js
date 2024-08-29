const fs = require('fs');

function saveFile(filePath, data) {
    fs.writeFileSync(filePath, data);
}

function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
}

function deleteFile(filePath) {
    fs.unlinkSync(filePath);
}

module.exports = { saveFile, readFile, deleteFile };
