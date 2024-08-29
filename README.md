# 🚀 Discord Bot for ESX ↔️ QB Conversion

Welcome to the Discord bot designed to convert FiveM scripts between ESX and QBCore frameworks. This bot allows for seamless conversions, provides help commands, maintains a history of commands, and validates input files.

## 📋 Features

- 🔄 Convert scripts between ESX and QBCore frameworks
- 📚 Comprehensive help commands
- 🕰️ Command history tracking
- ✅ Input file validation

## 🚀 Installation

To get started with the bot, follow these steps:

1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/DiscordBot_FiveMConverter.git
```
Navigate to the Project Directory

```bash
cd DiscordBot_FiveMConverter
```
Install Dependencies

Install the required Node.js packages:

```bash
npm install
```
Create a Configuration File

Create a config.json file in the root directory with the following content:

```json
{
  "DISCORD_TOKEN": "your_discord_bot_token"
}
```
Replace ```your_discord_bot_token``` with your actual Discord bot token from the Discord Developer Portal.

Run the Bot

Start the bot with:

```bash
node index.js
```
The bot will log in to Discord and be ready to process commands.

<details>
<summary><strong>💬 Commands</strong></summary>
<br>

<div style="background-color: #f6f8fa; border: 1px solid #d0d7de; border-radius: 6px; padding: 16px;">
  <table>
    <tr>
      <th>Command</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
    <tr>
      <td><code>!convert [type] [filename]</code></td>
      <td>Convert a script file</td>
      <td><code>!convert esx-to-qb script.lua</code></td>
    </tr>
    <tr>
      <td><code>!help</code></td>
      <td>Display available commands</td>
      <td><code>!help</code></td>
    </tr>
    <tr>
      <td><code>!history</code></td>
      <td>View recent commands</td>
      <td><code>!history</code></td>
    </tr>
    <tr>
      <td><code>!validate</code></td>
      <td>Validate file syntax</td>
      <td><code>!validate</code></td>
    </tr>
  </table>
</div>

</details>

<details>
<summary><strong>🔄 Conversion Functions</strong></summary>
<br>

<div style="background-color: #f6f8fa; border: 1px solid #d0d7de; border-radius: 6px; padding: 16px;">
  <h4>ESX to QBCore Conversion (esxToQb.js)</h4>
  <p>Converts ESX-specific functions and events to their QBCore counterparts. Handles core functions, game functions, and additional snippets.</p>
  
  <table>
    <tr>
      <th>ESX</th>
      <th>QBCore</th>
    </tr>
    <tr>
      <td><code>esx:onPlayerDeath</code></td>
      <td><code>hospital:server:SetDeathStatus</code></td>
    </tr>
    <tr>
      <td><code>ESX.GetPlayerData</code></td>
      <td><code>QBCore.Functions.GetPlayerData</code></td>
    </tr>
  </table>

  <br>

  <h4>QBCore to ESX Conversion (qbToEsx.js)</h4>
  <p>Converts QBCore-specific functions and events to their ESX counterparts. Covers core functions, game functions, and additional snippets.</p>
  
  <table>
    <tr>
      <th>QBCore</th>
      <th>ESX</th>
    </tr>
    <tr>
      <td><code>hospital:server:SetDeathStatus</code></td>
      <td><code>esx:onPlayerDeath</code></td>
    </tr>
    <tr>
      <td><code>QBCore.Functions.GetPlayerData</code></td>
      <td><code>ESX.GetPlayerData</code></td>
    </tr>
  </table>
</div>

</details>

## ⚠️ Known Issues

1. **Conversion Accuracy:** Manual adjustments may be required post-conversion.
2. **Incomplete Coverage:** Some features or edge cases may not be fully covered.
3. **Testing:** Thorough testing is recommended after conversion.

## 🤝 Contributing

To contribute to this project:

1. **Fork the Repository**
2. **Create a New Branch**

```bash
git checkout -b feature/your-feature-name
```
3. **Implement Changes**

4. **Make your changes and test thoroughly.**

5. **Submit a Pull Request**

6. **Push your changes and submit a pull request with a clear description of the modifications.**

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](https://github.com/ZoniBoy00/FiveM-Lua-Converter/blob/main/LICENSE) file for details.
