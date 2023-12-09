const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('pick')
		.setDescription('random pick!')
		.addStringOption(option =>
			option.setName('input')
				.setDescription('do nothing')),
	async execute(interaction) {
		const subcommand = interaction.options.getString('input');
		const array = subcommand.split(',');
		const random = Math.floor(Math.random() * array.length);
		const replied = `You pick: ${subcommand} \nChoose: ${array[random]}`;
		await interaction.reply(replied);
	},
};