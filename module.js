const { Client, Events, SlashCommandBuilder } = require('discord.js')
const { Module, Debugger } = require('totoboto4-core')
const debug = new Debugger()

class SDKModule extends Module {
  constructor () {
    super()

    this.name = 'SDK-module'
    this.version = '1.0.0'

    this.commands = [
      new SlashCommandBuilder().setName("ping").setDescription("ping command")
    ]

    this.dependencies = [] // If dependencies, module names here
  }

  /**
   * @param {} data 
   */
  launch(data) {
    debug.addLayer("SDK", "sdk")
    debug.debug(debug.layers.SDK, debug.types.Debug, "SDK Initialized !")

    const client = data.client

    client.on(Events.InteractionCreate, (interaction) => {
      debug.debug(debug.layers.SDK, debug.types.Debug, "COMMAND !")
    })
  }
}

module.exports = new SDKModule()
