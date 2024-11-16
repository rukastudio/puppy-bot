"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = void 0;
const discord_js_1 = require("discord.js");
exports.commands = [
    new discord_js_1.SlashCommandBuilder()
        .setName('pp')
        .setDescription('Tells you how much Puppy Points you or another user has!')
        .addUserOption(option => option.setName('user')
        .setDescription('The user that you will see the pp of.')
        .setRequired(false)),
    new discord_js_1.SlashCommandBuilder()
        .setName('gift')
        .setDescription('Gifts another user some of your Puppy Points.')
        .addUserOption(option => option.setName('user')
        .setDescription('The user that will receive the Puppy Points.')
        .setRequired(true))
        .addIntegerOption(option => option.setName('amount')
        .setDescription('The amount of Puppy Points that you will gift.')
        .setRequired(true)
        .setMinValue(1)),
    new discord_js_1.SlashCommandBuilder()
        .setName('gamble')
        .setDescription('Gamble your Puppy Points with a 50% chance to double the amount.')
        .addIntegerOption(option => option.setName('amount')
        .setDescription('The amount of Puppy Points that you will gamble with.')
        .setRequired(true)
        .setMinValue(1)),
    new discord_js_1.SlashCommandBuilder()
        .setName('setpp')
        .setDescription('Sets the Puppy Points of the given user.')
        .addUserOption(option => option.setName('user')
        .setDescription('The user of which the Puppy Points will be set.')
        .setRequired(true))
        .addIntegerOption(option => option.setName('amount')
        .setDescription('The amount of Puppy Points that you will set.')
        .setRequired(true)
        .setMinValue(1)),
];