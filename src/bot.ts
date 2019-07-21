import { CommandBot } from "./commandBot";
import { nameCommandHandler } from "./nameCommandHandler";

const commandBot = new CommandBot(process.argv[2]);
commandBot.addCommandHandler(nameCommandHandler);
commandBot.run();