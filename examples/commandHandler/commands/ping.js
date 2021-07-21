module.exports = {
    name:"ping",
    execute: async(message,client,args) => {
        message.channel.send("Pong.")
    }
}
