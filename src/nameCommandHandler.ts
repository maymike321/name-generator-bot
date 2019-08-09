import { CommandAction, CommandHandler } from "./commandBot";
import { readFileSync } from "fs";

const nouns = readFileSync('nouns.txt', 'utf8').split('\r\n');
const adjectives = readFileSync('adjectives.txt', 'utf8').split('\r\n');

const nameAction: CommandAction = (context, words) => {
    const { user, channelId, commandBot } = context;
    const usernameToUse = words.length === 0 ? user : words.join(' ');
    commandBot.sendMessage({
        to: channelId,
        message: `${usernameToUse} the ${capitalize(getRandom(adjectives))} ${capitalize(getRandom(nouns))}`
    });
}

export const nameCommandHandler: CommandHandler = {
    commandName: 'name',
    commandAction: nameAction,
    description: 'Creates a custom name for the user'
}

const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

const capitalize = (word: string) => word.charAt(0).toUpperCase() + word.slice(1);