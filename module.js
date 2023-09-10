const { Client } = require('discord.js')
const { Module } = require('totoboto4-core')

class SDKModule extends Module {
  constructor () {
    super()

    this.name = 'SDK-module'
    this.version = '1.0.0'

    this.commands = []
  }

  /**
   * @param {Client} client
   */
  launch (client) {}
}

module.exports = new SDKModule()
