/**
 * These exports are the information of your module, the bot gonna use them for logs.
 */
exports.name = 'SDK-module';
exports.version = '1.0.0';

/**
 * We Require discord.js here to use its functionnalities.
 * The client is the actual bot if you want to use it.
 */
const Discord = require('discord.js');
const { client } = require(`${process.env.TOTOBOTENV}/main.js`);

/**
 * These exports are very important.
 * 
 * exports.commands are the commands used normally in this bot.
 * exports.commands are the nsfw commands, users can only access them in a nsfw text channel.
 * 
 * Don't put spaces in commands, your command will not be recognised.
 */
exports.commands = [
  'ping'
]
exports.commandsNSFW = [
  'nsfwping'
]

/**
 * Here are the variables, I recommend to use at least command, author, and channel, but you can deletes theses if you want it is not necessary,
 * you can get every parameter from the message parameter in exports.process, these variables are just here to be user friendly.
 * In most of the case you need them to stock the command and the author of the message.
 * 
 * Here there is some usefull other bonus variables.
 */
let command;
let author;
let channel;

/**
 * export.process is the most important thing, it must be in this form :
 * async (message, args) => { code here };
 * 
 * Here is an example with a switch/case, but feel free to do as you want with this two parameters.
 * 
 * @param {Discord.Message} message This is the entire message of the user who enter the command, this is a powerfull object, see https://discord.js.org/#/docs/main/master/class/Message.
 * @param {Array[2]} args This is the args of the message, [0] is the command, and [1] is everything else.
 */
exports.process = async (message, args) => {
  command = args[0];
  author = message.author;
  channel = message.channel;

  switch(command) {
  case 'ping':
    ping();
    break;

  case 'nsfwping':
    ping();
    break;

  default :
    message.channel.send(
      MessageEmbedBuilder('SDK test Error', null, null, `La commande ${command} n'existe pas.`)
    );
  }
}

/**
 * This is an example for the ping command, feel free to add every functions you want.
 * @param {Discord.Message} message 
 */
function ping() {
  const url = 'https://tenor.com/view/pong-video-game-atari-tennis-70s-gif-16894549';
  const gif = 'https://c.tenor.com/2gyJVMt_L6wAAAAC/pong-video-game.gif';

  channel.send({
    embeds: [MessageEmbedBuilder(command, url, gif, 'pong!')]
  });
}

/**
 * This is a simple example of an embed message.
 * @param {string} titleEmbed 
 * @param {string} anchorURL 
 * @param {string} gifURL 
 * @param {string} descriptionEmbed 
 * @returns 
 */
function MessageEmbedBuilder(titleEmbed, anchorURL, gifURL, descriptionEmbed)
{
  return new Discord.MessageEmbed()
    .setTitle(titleEmbed)
    .setURL(anchorURL)
    .setImage(gifURL)
    .setAuthor(
      author.username,
      client.user.avatarURL
    )
    .setDescription(descriptionEmbed)
    .setTimestamp(new Date())
    .setFooter(
      "totoboto4 SDK testing",
      client.user.avatarURL
    );
}
