const elisjs = require("@aloima/elisjs")
const client = elisjs.create("bot token")
const elisHelper = require("elisjs-halper")
const helper = new elisHelper.client(client)

helper.createHandler({prefix:"!", folder:__dirname + "/commands"})

client.login()
