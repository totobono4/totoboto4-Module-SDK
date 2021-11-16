# totoboto4-Module-SDK

This template is used for creating modules for the [totoboto4 Discord Bot](https://github.com/totobono4/totoboto4).  
You can clone `totoboto4` and add any modules anyone will create with this.

You need `node.js` to use this template, it includes `npm`, just download it from [there](https://nodejs.org/en/download/).

Step 1: Use this template to generate you new repo.

Step 2: Clone your repo and go in your project via a terminal.

Step 3: Run the `npm init -y --scope=@totoboto4-module` command to generate your project as a new npm package linked to your repo, this is important for including your module to the bot.

Step 4: Run the `npm install` command to install the base dependencies.

Step 5: You need a token as environment variable, for this, create a `.env` file at the root of the project, and write the text below:
```.env
SDK_TOKEN=<Here your release token>
```
The `Release token` is the token from your bot, just put it there and the module will totally work.
To find your bot token, go to [this](https://discord.com/developers/applications) page and login with your discord account.  
If you don't have an app, create one. Click on your app, go to the "Bot" section, here is your token.

This template is already working with a `ping` command, so at this step, you can just try your module by running the `npm start` command.  
The sdk is now started, his prefix is `sdk.`, so you should write `sdk.<command>` to use any command.
You can run the `help` command to see all your implemented commands.

Make sure to commit and push your project at this point, so you can already implement it to [totoboto4](https://github.com/totobono4/totoboto4).

After that, you can do anything you want with your project, install all npm packages you need and make your module.  
Finally, add the module to the totoboto4 bot.  
See how to add a module to the bot on the [totoboto4](https://github.com/totobono4/totoboto4) repo.
