const fs = require("fs")

class client {
    constructor(client){
        if(!client) throw new Error("client is not defined")
        this.client = client
    }
    createHandler(options={folder:"commands", prefix:"!"}){
        const prefix = options.prefix;
        const client = this.client
        const commandFiles = fs.readdirSync(options.folder).filter(file => file.endsWith(".js"));
        
        client.commands = new Map();
        
        for (const file of commandFiles) {
            const command = require(`${options.folder}/${file}`);
            client.commands.set(command.name, command);
            console.log("command "+ command.name);
        }
        
        client.events.messageCreate = async message => {
            if (!message.content.startsWith(prefix) || message.author.bot) return;
            const args = message.content.slice(prefix.length).trim().split(/ +/);
            
            const command = args.shift().toLowerCase();
            if (!client.commands.has(command)) return;
            try {
                client.commands.get(command).execute(message, client, args);
            } catch (error) {
                console.error(error);
            message.channel.send("Error!");
        }
    };
 }
}


module.exports = client
