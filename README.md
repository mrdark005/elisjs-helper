# elisjs-helper

# Setup

```js
const elisjs = require("@aloima/elisjs")
const client = elisjs.create("bot token", {
    compress: true // default value is false, enables zlib-stream parsing.
})
const elisHelper = require("./src/index")
const helper = new elisHelper.client(client)

client.events.ready = (() => {
    console.log("bot online")
})

client.login()
```

# Examples

**Command Handler**
```js
helper.createHandler({prefix:"!", folder:__dirname + "/commands"})
```

# Support server
You can take support in [this server](https://discord.gg/node) in #elisjs-support.
