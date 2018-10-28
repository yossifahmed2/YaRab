const Discord = require('discord.js');  
const db = require('quick.db');  
const hastebin = require('hastebin-gen');  
const client = new Discord.Client();    
const Canvas = require('canvas');        
const fs = require("fs"); 
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");   
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set();  
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 
,ti={}  
,spee={}; 

client.on('message', message => {
 var prefix = "-";
if (message.content.startsWith(prefix + 'help')) {
    let pages = [
	`=-=-=-=-=-= ðŸŒ Public Commands - Ø§ÙˆØ§Ù…Ø± Ø¹Ø§Ù…Ø© ðŸŒ =-=-=-=-=-=
     :beginner: -sug =====> To Suggest | Ù„Ø¹Ù…Ù„ Ø§Ù‚ØªØ±Ø§Ø­
    :beginner: -id ======> To Show Your ID | Ø§ÙŠØ¯ÙŠ Ø­Ø³Ø§Ø¨Ùƒ
    :beginner: -ping ====> Ping Of Bot | Ø¨Ù†Ø¬ Ø­Ùƒ Ø§Ù„Ø¨ÙˆØª
    :beginner: -allbots => Show All Bots In The Server | Ù„Ø§Ø¶Ù‡Ø§Ø± Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø¨ÙˆØªØ§Øª
    :beginner: -bot =====> Information Of The Bot | Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø¨ÙˆØª
    :beginner: -server ==> Information Of The Server | Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø³ÙŠØ±ÙØ±
    :beginner: -count ===> Member Count | Ø¹Ø¯Ø¯ Ø§Ù„Ø§Ø´Ø®Ø§Øµ ÙÙŠ Ø§Ù„Ø³ÙŠØ±ÙØ±
    :beginner: -cal =====> To Calculate | Ø§Ù„Ù‡ Ù„Ø­Ø§Ø³Ø¨Ø© 
    :beginner: -tag =====> To Tag A Word | Ù„Ø¹Ù…Ù„ ØªØ§Ù‚ Ù„ÙƒÙ„Ù…Ø© 
    :beginner: -rooms ===> Show Rooms Of Server | Ø§Ø¶Ù‡Ø§Ø± Ø§Ù„Ø±ÙˆÙ…Ø§Øª Ø§Ù„ÙŠ ÙÙŠ Ø§Ù„Ø³ÙŠØ±ÙØ±
    :beginner: -za5 =====> To decorate Some Word | Ù„Ø²Ø®Ø±ÙØ© Ø§Ù„ÙƒÙ„Ù…Ø§Øª
    :beginner: -roles ===> Show Roles Of The Server | Ø§Ø¶Ù‡Ø§Ø± Ø§Ù„Ø±Ø§Ù†ÙƒØ§Øª
    :beginner: -emojis ==> Emoji Of Server | Ø§ÙŠÙ…ÙˆØ¬ÙŠØ§Øª Ø§Ù„Ø³ÙŠØ±ÙØ±   
    :beginner: -say =====> The Bot Say Any Thing | ØªÙƒØ±Ø§Ø± Ø§ÙŠ Ø´ÙŠ ÙƒØªØ¨ØªÙˆ
    :beginner: -image ===> To Show Image Of Server | Ù„Ø§Ø¶Ù‡Ø§Ø± ØµÙˆØ±Ø© Ø§Ù„Ø³ÙŠØ±Ù 
    :beginner: -contact => To Contact Owners Bot | Ù…Ø±Ø§Ø³Ù„Ø© ØµØ§Ø­Ø¨ Ø§Ù„Ø¨ÙˆØª
    :beginner: -invite \ -inv => Invite Bot | Ù„Ø¯Ø¹ÙˆØ© Ø§Ù„Ø¨ÙˆØª
    :beginner: -embed ===> To Embed | Ù„ØªÙƒØ±Ø§Ø± Ø§ÙŠ Ø´ÙŠ ÙƒØªØ¨ØªÙˆ Ø¨Ø·Ø±ÙŠÙ‚Ø© Ø­Ù„ÙˆØ©
    :beginner: -avatar ==> Your Avatar | ØµÙˆØ±ØªÙƒ Ø§Ù„Ø´Ø®ØµÙŠØ©
    :beginner: -support => Server Support | Ø³ÙŠØ±ÙØ± Ø§Ù„Ø¯Ø¹Ù… Ø§Ù„ÙÙ†ÙŠ
     ===========================================================
      React With â–¶ To See Admins Commands`,
	`=-=-=-=-=-= ðŸ”§  Admin Commands - Ø§ÙˆØ§Ù…Ø± Ø§Ø¯Ø§Ø±ÙŠØ© ðŸ”§ =-=-=-=-=-=
    :beginner: -move @user => Move User To Your Room Voice | Ù„Ø³Ø­Ø¨ Ø§Ù„Ø´Ø®Øµ Ø§Ù„Ù‰ Ø±ÙˆÙˆÙ…Ùƒ
    :beginner: -mvall => Move All To Your Room Voice | Ù„Ø³Ø­Ø¨ Ø§Ù„Ø¬Ù…ÙŠØ¹ Ø§Ù„ÙŠ Ø±ÙˆÙˆÙ…Ùƒ
    :beginner: -bc => Broadcast | Ø±Ø³Ø§Ù„Ø© Ø¬Ù…Ø§Ø¹ÙŠØ© Ø§Ù„Ù‰ ÙƒÙ„ Ø§Ø¹Ø¶Ø§Ø¡ Ø§Ù„Ø³ÙŠØ±ÙØ±
    :beginner: -role @user <rank> => Give User Rank | Ù„Ø£Ø¹Ø·Ø§Ø¡ Ø±ØªØ¨Ø© Ù„Ø¹Ø¶Ùˆ Ù…Ø¹ÙŠÙ†
    :beginner: -roleremove @user <rank> => remove Rank From User | Ù„Ø§Ø²Ø§Ù„Ø© Ø§Ù„Ø±ØªØ¨Ø© Ù…Ù† Ø´Ø®Øµ Ù…Ø¹ÙŠÙ†
    :beginner: -role all <rank> => Give All Rank | Ù„Ø£Ø¹Ø·Ø§Ø¡ Ø±ØªØ¨Ø© Ù„Ù„Ø¬Ù…ÙŠØ¹
    :beginner: -role humans <rank> => Give Humans Rank | Ù„Ø£Ø¹Ø·Ø§Ø¡ Ø±ØªØ¨Ø© Ù„Ù„Ø§Ø´Ø®Ø§Øµ ÙÙ‚Ø·
    :beginner: -role bots <rank> => Give Bots Rank | Ù„Ø£Ø¹Ø·Ø§Ø¡ Ø±ØªØ¨Ø© Ù„Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø¨ÙˆØªØ§Øª
    :beginner: -hchannel => Hide Channel | Ø§Ø®ÙØ§Ø¡ Ø§Ù„Ø´Ø§Øª
    :beginner: -schannel => Show The Hidden Channel | Ø§Ø¶Ù‡Ø§Ø± Ø§Ù„Ø´Ø§Øª Ø§Ù„Ù…Ø®ÙÙŠØ©
    :beginner: -clr <numbr> => Clear Chat With Number | Ù…Ø³Ø­ Ø§Ù„Ø´Ø§Øª Ø¨Ø¹Ø¯Ø¯
    :beginner: -clear => Clear Chat | Ù…Ø³Ø­ Ø§Ù„Ø´Ø§Øª
    :beginner: -mute @user <reason> => Mute User | Ø§Ø¹Ø·Ø§Ø¡ Ø§Ù„Ø¹Ø¶Ùˆ Ù…ÙŠÙˆØª Ù„Ø§Ø²Ù… Ø±ØªØ¨Ø© <Muted>
    :beginner: -unmute @user => Unmute User | Ù„ÙÙƒ Ø§Ù„Ù…ÙŠÙˆØª Ø¹Ù† Ø§Ù„Ø´Ø®Øµ 
    :beginner:-kick @user <reason> => Kick User From Server | Ø·Ø±Ø¯ Ø§Ù„Ø´Ø®Øµ Ù…Ù† Ø§Ù„Ø³ÙŠØ±ÙØ±
    :beginner: -ban @user <reason> => Ban User From Server | Ø­Ø¶Ø± Ø§Ù„Ø´Ø®Øµ Ù…Ù† Ø§Ù„Ø³ÙŠØ±ÙØ±
    :beginner: -mutechannel => Mute Channel | ØªÙ‚ÙÙŠÙ„ Ø§Ù„Ø´Ø§Øª
    :beginner: -unmutechannel => Unmute Channel | ÙØªØ­ Ø§Ù„Ø´Ø§Øª
    :beginner: -dc => Delete All Rooms |  Ù…Ø³Ø­ ÙƒÙ„ Ø§Ù„Ø±ÙˆÙ…Ø§Øª
    :beginner: -dr => Delete All Rank <Ù…Ø³Ø­ ÙƒÙ„ Ø§Ù„Ø±Ø§Ù†ÙƒØ§Øª <Ù„Ø§Ø²Ù… ØªÙƒÙˆÙ† Ø±Ø§Ù†Ùƒ Ø§Ù„Ø¨ÙˆØª ÙÙˆÙ‚ ÙƒÙ„ Ø§Ù„Ø±Ø§Ù†ÙƒØ§Øª
    :beginner: -ccolors <number> => Create Colors | ÙŠÙ†Ø´Ø§ Ù„Ùƒ Ø§Ù„ÙˆØ§Ù† Ù…Ø¹ ÙƒÙ… Ø§Ù„ÙˆØ§Ù† ØªØ¨ÙŠ
    :beginner: -kv @user => Voice Kick | ÙŠØ·Ø±Ø¯ Ø´Ø®Øµ Ù…Ù† Ø§Ù„Ø±ÙˆÙˆÙ…
    :beginner: -vonline => Create Channel Voice Online | ÙŠØ³ÙˆÙŠ Ø±ÙˆÙˆÙ… ÙÙˆÙŠØ³ Ø§ÙˆÙ†Ù„Ø§ÙŠÙ†
     ===========================================================
     âœ´ Create Channel **welcome** To Enable The Welcome 
     âœ´ Create Channel **suggestion** To Enable Command -sug
     ===========================================================
      React With â–¶ To See Games Commands`,
	`=-=-=-=-=-= ðŸŽ¯  Games Commands - Ø§ÙˆØ§Ù…Ø± Ø§Ù„Ø§Ù„Ø¹Ø§Ø¨ ðŸŽ¯ =-=-=-=-=-=
    :beginner:  -xo @user => Game XO | Ù„Ø¹Ø¨ Ø§ÙƒØ³ Ø§Ùˆ
    :beginner:  -rps => Rock & Paper & Scissors | Ù„Ø¹Ø¨Ø© Ø­Ø¬Ø± ÙˆØ±Ù‚Ø© Ù…Ù‚Øµ
    :beginner:  -slots => Game Of Fruits | Ù„Ø¹Ø¨Ø© Ø§Ù„ÙÙˆØ§ÙƒÙ‡
    :beginner:  -marry @user => Ù„Ø¹Ø¨Ø© Ø§Ù„Ø²ÙˆØ§Ø¬
    :beginner:  -speed => Ù„Ø¹Ø¨Ø© Ø³Ø±Ø¹Ø© ÙƒØªØ§Ø¨Ø© 
    :beginner:  -Ù„Ø¹Ø¨Ø© ÙÙƒÙƒ <= ÙÙƒÙƒ
    :beginner:  -Ù„Ø¹Ø¨Ø© Ø¹ÙˆØ§ØµÙ… <= Ø¹ÙˆØ§ØµÙ…
    :beginner:  -Ø§Ù„Ø¨ÙˆØª ÙŠØ¹Ø·ÙŠÙƒ Ù†ØµØ§Ø¦Ø­ <= Ù‡Ù„ ØªØ¹Ù„Ù…
      Ù‚Ø±ÙŠÙŠÙŠØ¨ Ù†Ø¶ÙŠÙ Ø¨Ø¹Ø¶ Ø§Ù„Ø§Ù„Ø¹Ø§Ø¨ ÙˆØ§Ø°Ø§ ØªØ¨ÙˆÙ† Ø§ÙŠ Ù„Ø¹Ø¨Ø© ØªØ¹Ø§Ù„Ùˆ Ø³ÙŠØ±ÙØ± Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©
    ===========================================================
      React With â–¶ To See Music Commands`,
	`=-=-=-=-=-= ðŸŽ¯  Music Commands - Ø§ÙˆØ§Ù…Ø± Ø§Ù„Ù…ÙˆØ³ÙŠÙ‚Ù‰ ðŸŽ¯ =-=-=-=-=-=
    :beginner: -play => Ù„ØªØ´ØºÙŠÙ„ Ø£ØºÙ†ÙŠØ© Ø¨Ø±Ø¢Ø¨Ø· Ø£Ùˆ Ø¨Ø£Ø³Ù…
    :beginner: -skip => Ù„ØªØ¬Ø¢ÙˆØ² Ø§Ù„Ø£ØºÙ†ÙŠØ© Ø§Ù„Ø­Ø¢Ù„ÙŠØ©
    :beginner: -pause => Ø¥ÙŠÙ‚Ø¢Ù Ø§Ù„Ø£ØºÙ†ÙŠØ© Ù…Ø¤Ù‚ØªØ§
    :beginner: -resume => Ù„Ù…ÙˆØ¢ØµÙ„Ø© Ø§Ù„Ø¥ØºÙ†ÙŠØ© Ø¨Ø¹Ø¯ Ø¥ÙŠÙ‚Ø¢ÙÙ‡Ø¢ Ù…Ø¤Ù‚ØªØ§
    :beginner: -vol => Ù„ØªØºÙŠÙŠØ± Ø¯Ø±Ø¬Ø© Ø§Ù„ØµÙˆØª 100 - 0
    :beginner: -stop => Ù„Ø¥Ø®Ø±Ø¢Ø¬ Ø§Ù„Ø¨ÙˆØª Ù…Ù† Ø§Ù„Ø±ÙˆÙ…
    :beginner: -np => Ù„Ù…Ø¹Ø±ÙØ© Ø§Ù„Ø£ØºÙ†ÙŠØ© Ø§Ù„Ù…Ø´ØºÙ„Ø© Ø­Ø¢Ù„ÙŠØ§
    :beginner: -queue => Ù„Ù…Ø¹Ø±ÙØ© Ù‚Ø¢Ø¦Ù…Ø© Ø§Ù„ØªØ´ØºÙŠÙ„
	Soon And I Will Translate The Command To Englih`]
	let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('â—€').then( r => {
            msg.react('â–¶')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === 'â—€' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === 'â–¶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 20000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 20000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});

client.on('message' , message => {
  var prefix = "-";
  if(message.author.bot) return;
 
  if(message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:']
  var grid_message;
 
  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1);
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    var player1_id = message.author.id
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `Game match between <@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_( Ø£Ù„Ø¹Ø¨ Ù…Ø¹ Ù†ÙØ³Ùƒ)_'
    }
    message.channel.send(`Xo ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('ÙŠØ¬Ø¨ Ø§Ù„Ø§Ù†ØªØ¶Ø§Ø± Ø­ÙŠØ« Ù…Ø§ ÙŠØªÙ… Ø§Ù„Ù…ÙˆØ§ÙÙ‚Ù‡')
    .then(async (new_message) => {
      await new_message.react('1âƒ£');
      await new_message.react('2âƒ£');
      await new_message.react('3âƒ£');
      await new_message.react('4âƒ£');
      await new_message.react('5âƒ£');
      await new_message.react('6âƒ£');
      await new_message.react('7âƒ£');
      await new_message.react('8âƒ£');
      await new_message.react('9âƒ£');
      await new_message.react('ðŸ†—');
      await new_message.edit(`It\'s <@${turn_id}>\'s turn! Your symbol is ${symbol}`)
      .then((new_new_message) => {
        require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful tictactoe listener initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful tictactoe react initialization"))
    .catch(console.error);
  }
  else {
    message.reply(`Ù…Ù†Ø´Ù† Ù…Ø¹ Ù…Ù† ØªØ±ÙŠØ¯ Ø£Ù„Ø¹Ø¨`)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });

   client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '-';

if(cmd === `${prefix}sug`) {
    var suggestMessage = message.content.substring(8)
    let suggestEMBED = new Discord.RichEmbed()
    .setColor(3447003)
    .setTitle("New suggestion just added !")
    .setDescription(`**${suggestMessage}**`)
    .setFooter(`Suggested By : ${message.author.tag}`);
    message.delete().catch(O_o=>{}) 
    let suggests = message.guild.channels.find(`name`, "suggestions");
    if (!suggests) return message.channel.send("You should make A **suggestions** channel!")
    suggests.send(suggestEMBED);
}

});


client.on('message', message => {
    if(message.content == ('-id')) {    
 
             if (message.channel.type === 'dm') return message.reply('This Command Is Not Avaible In Dm\'s :x:');   
            var Canvas = module.require('canvas');
            var jimp = module.require('jimp');
    
     const w = ['./ID1.png','./ID2.png','./ID3.png','./ID4.png','./ID5.png'];
    
             let Image = Canvas.Image,
                 canvas = new Canvas(802, 404),
                 ctx = canvas.getContext('2d');
             ctx.patternQuality = 'bilinear';
             ctx.filter = 'bilinear';
             ctx.antialias = 'subpixel';
             ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
             ctx.shadowOffsetY = 2;
             ctx.shadowBlur = 2;
             fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                 if (err) return console.log(err);
                 let BG = Canvas.Image;
                 let ground = new Image;
                 ground.src = Background;
                 ctx.drawImage(ground, 0, 0, 802, 404);
    
     })
                                let user = message.mentions.users.first();
          var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
           var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
             var ment = message.mentions.users.first();
             var getvalueof;
             if(ment) {
               getvalueof = ment;
             } else {
               getvalueof = message.author;
             }//Ù…Ø§ Ø®ØµÙƒ ,_,
                                           let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                             jimp.read(url, (err, ava) => {
                                                 if (err) return console.log(err);
                                                 ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                     if (err) return console.log(err);
                            
                                                                                           //Avatar
                                                             let Avatar = Canvas.Image;
                                                             let ava = new Avatar;
                                                             ava.src = buf;
                                                             ctx.beginPath();
                                                           ctx.drawImage(ava, 335, 3, 160, 169);
                                                                            //wl
                                                     ctx.font = '35px Arial Bold';
                                                     ctx.fontSize = '40px';
                                                     ctx.fillStyle = "#dadada";
                                                     ctx.textAlign = "center";
                                                    
                            
                                                     ctx.font = '30px Arial Bold';//Name ,_,
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${getvalueof.username}`,655, 170);
                                                                            
                                                                        
                                                          moment.locale('ar-ly');        
                                            
                                            
                                                                    ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                             ctx.fillText(`${moment(h.joinedAt).fromNow()}`,150, 305);
                                                              
                                                              
                                                                                                     ctx.font = '30px Arial';
                                                     ctx.fontSize = '30px';
                                                     ctx.fillStyle = "#ffffff";
                                                                 ctx.fillText(`${moment(heg.createdTimestamp).fromNow()}`,150, 170); 
                            
                                                       let status;
     if (getvalueof.presence.status === 'online') {
         status = 'online';
     } else if (getvalueof.presence.status === 'dnd') {
         status = 'dnd';
     } else if (getvalueof.presence.status === 'idle') {
         status = 'Idle';
     } else if (getvalueof.presence.status === 'offline') {
         status = 'Offline';
     }
     
     
                                          ctx.cont = '35px Arial';
                                          ctx.fontSize = '30px';
                                          ctx.filleStyle = '#ffffff'
                                          ctx.fillText(`${status}`,655,305)
                  
                                                                   ctx.font = 'regular 30px Cairo';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                         ctx.fillText(`${h.presence.game === null ? "Dont Play" : h.presence.game.name}`,390,390);
                            
                               ctx.font = '35px Arial';
                                                                   ctx.fontSize = '30px';
                                                                   ctx.fillStyle = '#ffffff'
                                                                   ctx.fillText(`#${heg.discriminator}`,390,260)
                            
                                 ctx.beginPath();
                                 ctx.stroke();
                               message.channel.sendFile(canvas.toBuffer());
                            
                            
                          
                            
                             })
                            
                             })
 }
 });
 
 client.on('message' , message => {
  var prefix = "-";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });
 
client.on('message', msg => {
	var prefix = "-";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clr") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Supply A Number```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```Cleard: " + textxt + " Messages```").then(m => m.delete(3000));
        }    
    }
}
});

client.on('message', msg => {
  if (msg.content.startsWith('-play')) {
    msg.channel.send('Use >play');
  }
});

			  
client.on('guildCreate', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("RED")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/api/oauth2/authorize?client_id=505874050694774785&permissions=8&scope=bot')
  .setDescription(`**
  New Server Add Speed Bot âœ…
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`);
client.channels.get("467833183254347797").sendEmbed(embed)
});

client.on('guildDelete', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("GOLD")
     .setTitle('Click Here To Add Bot .!')
     .setURL('https://discordapp.com/api/oauth2/authorize?client_id=505874050694774785&permissions=8&scope=bot')
  .setDescription(`**
   Server kicked Speed Bot :cry:
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`);
client.channels.get("467833183254347797").sendEmbed(embed)
});
 

const prefix = ">"
client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('ÙŠØ¬Ø¨ Ø§Ù† ØªÙƒÙˆÙ† Ø¨Ø±ÙˆÙ… ØµÙˆØªÙŠ ');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			
			return msg.channel.send('Ù…Ø§ Ø¹Ù†Ø¯ÙŠ ØµÙ„Ø§Ø­ÙŠØ§Øª Ù„Ù„Ø¯Ø®ÙˆÙ„ ÙÙŠ Ù‡Ø§Ø¯ Ø§Ù„Ø±Ø±ÙˆÙ…');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('Ù…Ø§ Ø¹Ù†Ø¯ÙŠ ØµÙ„Ø§Ø­ÙŠØ§Øª Ù„Ù„ØªÙƒÙ„Ù… ÙÙŠ Ù‡Ø§Ø¯ Ø§Ù„Ø±Ø±ÙˆÙ…');
		}

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**`EMBED LINKS ÙŠØ¬Ø¨ Ø§Ù† Ø§ØªÙˆÙØ± Ø¨Ø±Ù…Ø´Ù† **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, msg, voiceChannel, true);
			}
			return msg.channel.send(` **${playlist.title}** ØªÙ… Ø§Ù„Ø¶Ø§ÙØ© Ø§Ù„ÙŠ Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„ØªØ´ØºØ¨Ù„`);
		} else {
			try {

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø§Ø®ØªÙŠØ§Ø± Ø±Ù‚Ù… Ø§Ù„Ù…Ù‚Ø·Ø¹** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)

					.setFooter("")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('Ù„Ù… ÙŠØªÙ… Ø¥Ø®ØªÙŠØ¢Ø± Ø§ÙŠ Ù…Ù‚Ø·Ø¹ ØµÙˆØªÙŠ');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: Ù„Ø§ ÙŠØªÙˆÙØ± Ù†ØªØ¢Ø¦Ø¬ Ø¨Ø­Ø« ');
				}
			}

			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('Ø£Ù†Øª Ù„Ø³Øª Ø¨Ø±ÙˆÙ… ØµÙˆØªÙŠ .');
		if (!serverQueue) return msg.channel.send('Ù…Ø§ÙÙŠ Ø§ÙŠ Ù…Ù‚Ø·Ø¹ Ù„ØªØ¬Ø§ÙˆØ²Ù‡');
		serverQueue.connection.dispatcher.end('ØªÙ… ØªØ¬Ø§ÙˆØ² Ø§Ù„Ù…Ù‚Ø·Ø¹');
		return undefined;
	} else if (command === `stop`) {
		if (!msg.member.voiceChannel) return msg.channel.send('Ø£Ù†Øª Ù„Ø³Øª Ø¨Ø±ÙˆÙ… ØµÙˆØªÙŠ .');
		if (!serverQueue) return msg.channel.send('Ù„Ù…Ø§ÙÙŠ Ø§ÙŠ Ù…Ù‚Ø·Ø¹ Ù„Ø§ÙŠÙ‚Ø§ÙÙ‡');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('ØªÙ… Ø¥ÙŠÙ‚Ø§Ù Ø§Ù„Ù…Ù‚Ø·Ø¹');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('Ø£Ù†Øª Ù„Ø³Øª Ø¨Ø±ÙˆÙ… ØµÙˆØªÙŠ .');
		if (!serverQueue) return msg.channel.send('Ù„Ø§ ÙŠÙˆØ¬Ø¯ Ø´ÙŠØ¡ Ø´ØºØ¢Ù„.');
		if (!args[1]) return msg.channel.send(`:loud_sound: Ù…Ø³ØªÙˆÙ‰ Ø§Ù„ØµÙˆØª **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: ØªÙ… ØªØºÙŠØ± Ø§Ù„ØµÙˆØª Ø§Ù„ÙŠ **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('Ù„Ø§ ÙŠÙˆØ¬Ø¯ Ø´ÙŠØ¡ Ø­Ø§Ù„ÙŠ ÙØ§Ù„Ø¹Ù…Ù„.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: Ø§Ù„Ø§Ù† ÙŠØªÙ… ØªØ´ØºÙŠÙ„ : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg.channel.send('Ù„Ø§ ÙŠÙˆØ¬Ø¯ Ø´ÙŠØ¡ Ø­Ø§Ù„ÙŠ ÙØ§Ù„Ø¹Ù…Ù„.');
		let index = 0;
		
		const embedqu = new Discord.RichEmbed()

.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**Ø§Ù„Ø§Ù† ÙŠØªÙ… ØªØ´ØºÙŠÙ„** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('ØªÙ… Ø¥ÙŠÙ‚Ø§Ù Ø§Ù„Ù…ÙˆØ³ÙŠÙ‚Ù‰ Ù…Ø¤Ù‚ØªØ§!');
		}
		return msg.channel.send('Ù„Ø§ ÙŠÙˆØ¬Ø¯ Ø´ÙŠØ¡ Ø­Ø§Ù„ÙŠ Ù Ø§Ù„Ø¹Ù…Ù„.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('Ø§Ø³ØªØ£Ù†ÙØª Ø§Ù„Ù…ÙˆØ³ÙŠÙ‚Ù‰ Ø¨Ø§Ù„Ù†Ø³Ø¨Ø© Ù„Ùƒ !');
		}
		return msg.channel.send('Ù„Ø§ ÙŠÙˆØ¬Ø¯ Ø´ÙŠØ¡ Ø­Ø§Ù„ÙŠ ÙÙŠ Ø§Ù„Ø¹Ù…Ù„.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`Ù„Ø§ Ø£Ø³ØªØ·ÙŠØ¹ Ø¯Ø®ÙˆÙ„ Ù‡Ø°Ø¢ Ø§Ù„Ø±ÙˆÙ… ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** ØªÙ… Ø§Ø¶Ø§ÙÙ‡ Ø§Ù„Ø§ØºÙ†ÙŠØ© Ø§Ù„ÙŠ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`Ø¨Ø¯Ø¡ ØªØ´ØºÙŠÙ„ : **${song.title}**`);
}
const adminprefix = "-v";
const devs = ['349616310734553088','335027415619338240'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : ØªÙ… ØªØºÙŠÙŠØ± Ø£Ø³Ù… Ø§Ù„Ø¨ÙˆØª Ø¥Ù„Ù‰`)
return message.reply("**Ù„Ø§ ÙŠÙ…ÙƒÙ†Ùƒ ØªØºÙŠÙŠØ± Ø§Ù„Ø§Ø³Ù… ÙŠØ¬Ø¨ Ø¹Ù„ÙŠÙƒ Ø§Ù„Ø§Ù†ØªØ¸Ø¢Ø± Ù„Ù…Ø¯Ø© Ø³Ø§Ø¹ØªÙŠÙ† . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : ØªÙ… ØªØºÙŠØ± ØµÙˆØ±Ø© Ø§Ù„Ø¨ÙˆØª`);
      } 
});





client.on('message', ra3d => {
var prefix = "-";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'ccolors')) {
    if(!args) return ra3d.channel.send('`How Many Colors??`');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('**You Dont Have Permission `MANAGE_ROLES`**'); 
              ra3d.channel.send(`**âœ… |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });

client.on('message', message => {
var prefix = "-";
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'Ù‡Ù„ ØªØ¹Ù„Ù…')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});


client.on('message', message => {
     if(!message.channel.guild) return;
var prefix = "-";
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});


client.on("message", function(message) {
	var prefix = "-";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","ðŸ‡·",true)
    .addField("Paper","ðŸ‡µ",true)
    .addField("Scissors","ðŸ‡¸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' ðŸ‡·')
        msg.react("ðŸ‡¸")
        msg.react("ðŸ‡µ")
.then(() => msg.react('ðŸ‡·'))
.then(() =>msg.react('ðŸ‡¸'))
.then(() => msg.react('ðŸ‡µ'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === 'ðŸ‡·' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === 'ðŸ‡¸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === 'ðŸ‡µ' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});

 client.on('message', message => {
	 var prefix ="-";
 if(message.content.startsWith(prefix +"server")){
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**ðŸ†” Server ID:**", message.guild.id,true)
.addField("**ðŸ“… Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**ðŸ‘‘ Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("ðŸ‘¥ Members ",`[${message.guild.memberCount}]`,true)
.addField('**ðŸ’¬ Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**ðŸŒ Others **" , message.guild.region,true)
.addField("** ðŸ” Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});

client.on('message', message => {
    if (message.content.startsWith("-bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Speed Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
			      .addField('``My Prefix``' , `[ - ]` , true)
			      .addField('``My Language``' , `[ Java Script ]` , true)
			      .setFooter('By | Elmusaui_GK and Speed')
    })
}
});

client.on('message',async Epic => {
  var prefix = "-" ;
  if(Epic.content.startsWith(prefix + "vonline")) {
  if(!Epic.guild.member(Epic.author).hasPermissions('MANAGE_CHANNELS')) return Epic.reply(':x: **I Dont Have Permissions**');
  if(!Epic.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return Epic.reply(':x: **You Dont Have Permissions**');
  Epic.guild.createChannel(`Voice Online : [ ${Epic.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice Online Is Activation In ${Epic.guild.name}`);
    c.overwritePermissions(Epic.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`Voice Online :  ${Epic.guild.members.filter(m => m.voiceChannel).size} .`)
    },1000);
  });
  }
});

client.on('message', message => {
	var prefix = "-";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``Use : " +prefix+ "move @User``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`âœ… You Have Moved <@${usermentioned}> To Your Channel`)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("`You Cant Move"+ message.mentions.members.first() +" `The User Should Be In channel To Move It`")
}
} else {
 message.channel.send("**``You Should Be In Room Voice To Move SomeOne``**")
}
} else {
message.react("âŒ")
 }}});

 client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='-count')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('ðŸŒ| Members info')
      .addBlankField(true)
      .addField('Mmeber Count',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });



client.on('message', msg => {
	var  prefix = "-";
 if (msg.content.startsWith(prefix + 'cal')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('Specify a equation, please.');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }
    
    const embed = new Discord.RichEmbed()
    .addField("**Input**: ",`**${question}**`, true)
    .addField("**Output**: ",`**${answer}**`, true)
    msg.channel.send(embed)
    }
};
});



client.on('message', message => {
	var prefix = "-";
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply('Write Some Things');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});



 client.on('message', message => {
	    var prefix = "-";
              if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'bc')) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**You Dont Have perms** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "Speed Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**Write Some Things To Broadcast**');message.channel.send(`**Are You Sure \nThe Broadcast: ** \` ${args}\``).then(msg => {
    msg.react('âœ…')
    .then(() => msg.react('âŒ'))
    .then(() =>msg.react('âœ…'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === 'âœ…' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === 'âŒ' && user.id === message.author.id;
    
    let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 reaction1.on("collect", r => {
    message.channel.send(`**â˜‘ | Done ... The Broadcast Message Has Been Sent To __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
  
  var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setTitle('Broadcast')
       .addField('Server', message.guild.name)
       .addField('Sender', message.author.username)
       .addField('Message', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });

let points = {};
const type = [
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298994078810127/a90c6b270eb8bb2e.png",
        "answers": ["Ø§Ù„Ø¨Ø±Ø§Ø²ÙŠÙ„"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996385677312/93b0c6f963ca78cc.png",
        "answers": ["Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996130086934/341960d3e3e1daad.png",
        "answers": ["Ø§Ù„Ù‚Ø³Ø·Ù†Ø·ÙŠÙ†ÙŠØ©"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298998172450816/5c70f0d2a02f741a.png",
        "answers": ["Ø§Ù„Ù†Ù‡Ø§ÙŠØ©"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298999799971860/00c3e44857da1d4f.png",
        "answers": ["Ø§Ù…Ø§Ø²ÙˆÙ†"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000026595338/56ca5f3803361aaf.png",
        "answers": ["Ø¬Ø§ÙØ§Ø³ÙƒØ±Ø¨Øª"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000676581382/426f82fc46406cf9.png",
        "answers": ["Ø³Ù‡Ù„Ù‡ Ù…Ùˆ ØµØ¹Ø¨Ù‡"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005474996255/7ec6030fe3423458.png",
        "answers": ["Ø·Ø¨Ù‚ Ø±Ø·Ø¨ Ù…Ø±Ù‚ Ø¨Ù‚Ø±"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005458087936/fd790725b7496d35.png",
        "answers": ["Ù…ØªØ¬Ø±"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330177894645780/7a11f3f73c1df90d.png",
        "answers": ["Ø´Ø¬Ø±Ø© Ø§Ù„Ø£ÙˆØºÙŠØ±ÙŠ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330188162301952/a5d4f8c72362aa3f.png",
        "answers": ["Ø¹Ø´ Ø§Ù„Ø¹ØµÙÙˆØ±"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330194587713554/c5b6b7bad08671a9.png",
        "answers": ["Ù‚Ù… Ø¨ÙƒØªØ§Ø¨Ø©"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330199838982152/1e05423a0b91fdaa.png",
        "answers": ["ÙƒØ§Ù†ÙŠÙƒÙŠ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330207711690762/39a6a460c6211b5d.png",
        "answers": ["Ù„ÙŠÙˆØ¨Ù„ÙŠØ§Ù†Ø§"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330217971089418/e5e323d8e8ce00ad.png",
        "answers": ["Ù‡ÙˆØ§ÙˆÙŠ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330224316940329/7872c68940fd6f08.png",
        "answers": ["ÙŠØ§Ø®Ø±Ø§"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330229140652032/2419fe025b8b35f2.png",
        "answers": ["ÙŠÙˆÙ… Ø§Ù„Ø®Ù…ÙŠØ³"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330238330241044/DO_YOU_KNOW_THE_WAY.png",
        "answers": ["DO YOU KNOW THE WAY"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330246840483842/23dc3a67e7bedc9e.png",
        "answers": ["Ø§Ù„Ø£Ø±Ø¶"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330256256827414/9f90c0fcbfc60a0d.png",
        "answers": ["Ø§Ù„Ø¨ÙˆØ§Ø¨Ø©"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330261663285259/0e41e6dcefc80cd3.png",
        "answers": ["Ø§Ù„Ø¬Ù…Ù„ Ø§Ø¨Ùˆ Ø±Ø§Ø³ÙŠÙ†"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330264901287946/6459ace62733c477.png",
        "answers": ["Ø§Ù„Ø­ÙˆØª Ø§Ù„Ø£Ø²Ø±Ù‚Ø¡"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330272920797226/de084748fdbe524b.png",
        "answers": ["Ø§Ù„Ù‚Ø§Ø±Ø¨ Ø§Ù„Ù…ÙƒØ³ÙˆØ±"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330281372057622/bcae99355befcd06.png",
        "answers": ["Ø§Ù„Ù…Ø¯Ø±Ø³Ø©"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330289769054230/c030902a9d21637c.png",
        "answers": ["Ø§Ù„ÙŠØ§Ø¨Ø§Ù†"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330298585481218/2ca3d0f29283cced.png",
        "answers": ["Ø¨Ù„Ø§ÙŠØ³ØªØ§ÙŠØ´Ù†"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330311558725632/6dc92ab82d3df0e4.png",
        "answers": ["Ø¬Ø²Ø± Ø§Ù„Ù‚Ù…Ø±"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330312842182657/f50f4fab4b6559c0.png",
        "answers": ["Ø­Ø´ÙŠØ´"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932988625584139/3333333.png",
        "answers": ["Ø³ÙˆØ¨Ø±Ø§Ø´ÙŠ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932994351071233/3333333.png",
        "answers": ["Ù‚ÙˆØªØ´ÙŠ"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933002399940609/3333333.png",
        "answers": ["Ø§ÙŠÙÙˆÙ†"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933012164149249/3333333.png",
        "answers": ["ØªÙŠØ³ØªØ§ Ù„Ø§ØºÙˆØ³Ø§"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933033009840129/3333333.png",
        "answers": ["Ø¨Ø³ÙƒÙˆØª Ø§Ø¨Ùˆ ÙˆÙ„Ø¯"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933041033674753/3333333.png",
        "answers": ["ØªÙƒØ£ÙƒØ£ØªÙ…"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933050139246592/3333333.png",
        "answers": ["Ø§Ù„Ø¬Ù…Ù„Ø© Ø§Ù„Ù…ÙÙŠØ¯Ø©"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933059278635028/204ba71fbee91a03.png",
        "answers": ["Ø§Ù„Ø£ÙˆØ³ÙƒØ§Ø±"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040573269901332/3333333.png",
        "answers": ["ÙƒÙ†Øª Ø§Ù…Ø´ÙŠ ÙˆØ£Ù…Ø´ÙŠ"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040585357754368/3333333.png",
        "answers": ["Ù„Ø§Ø§Ø§Ø§Ù‚ Ø¨ÙˆØªØ¡"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040593595629568/3333333.png",
        "answers": ["Ø§Ø¨Ùˆ Ù†Ø§ØµØ± Ø³Ø±Ù‰ Ù„ÙŠÙ„Ù‡"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040602235895810/fghfghfgh.png",
        "answers": ["Ø¹Ø¯Ø¯ Ø§Ù„Ù„ÙŠ Ø¨Ø±Ù…Ø¬ÙˆÙ†ÙŠ 2"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040608825147412/hhhhyyrf87654.png",
        "answers": ["Dark_Neet"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040611819749387/354d9e28fd1264f5.png",
        "answers": ["Ø¨Ø§Ø¨Ø§ Ø³Ù†ÙÙˆØ± Ù…ØªØ¹Ø§Ø·ÙŠ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040619331878922/4b24f4792476c04f.png",
        "answers": ["Ù…ÙŠØ±Ù†Ø¯Ø§ Ø­Ù…Ø¶ÙŠØ§Øª ÙŠÙ„Ø¯"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040624603987968/5ff29b1066a3b9c7.png",
        "answers": ["Ù‡Ù„ Ø§Ù„Ø¯Ù…Ø¹ Ù…Ù† Ø¹ÙŠÙ†Ù‡"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040631885299722/77f33951be682d8f.png",
        "answers": ["Ø·Ø§Ø±Øª Ø§Ù„Ø·ÙŠØ§Ø±Ù‡ Ø·Ø§Ø±Øª"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040640928219136/29c240679c04c148.png",
        "answers": ["Ø£Ù†Ø§ ÙÙˆÙ‚ Ø±Ø§Ø³ÙŠ Ø±ÙŠØ´Ù‡"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png",
        "answers": ["ÙØ±ÙŠÙ‚ Ø§Ù„Ù†Ø¬Ù…Ø©"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040659437813780/69df1a1ea78bf05c.png",
        "answers": ["Ø®Ø§Ù„Ø¯ Ø¹Ø¨Ø¯Ø§Ù„Ø±Ø­Ù…Ù†"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040666895024128/8bc7742b95673c38.png",
        "answers": ["Ø­Ø¨ÙŠØª Ù…Ø±Ù‡ Ù…Ù† Ù‚Ù„Ø¨ÙŠ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040674067546113/9d1a9eee36622271.png",
        "answers": ["ÙƒØ±Ø³ØªÙŠØ§Ù†Ùˆ ÙŠØ²Ù‚"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040682913333248/f19a97c10ac739e1.png",
        "answers": ["Ø£Ù†Øª Ù‚Ù…Ø± ÙŠØ§ Ù‚Ù…Ø±"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040692140539904/0a25039aa164a42b.png",
        "answers": ["Ø§Ù†Ø§ Ø§Ø¬Ù…Ù„ Ù…Ø®Ù„ÙˆÙ‚"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040699317256192/da72e3e3fe6bfceb.png",
        "answers": ["Ø¯ÙˆÙ†Øª ØªØ§ØªØ´"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040706464350218/d6339ed123a20afe.png",
        "answers": ["ØªÙˆÙ… ÙˆØ¬ÙŠØ±ÙŠ"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040714588454912/965f8266e9501b35.png",
        "answers": ["Ø¯Ø¨Ø§Ø¨ Ø§Ø±Ø¨Ø¹ ÙƒÙØ±Ø§Øª"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040721601331211/ae8cf2598c441e76.png",
        "answers": ["Ø§Ù„Ù‚Ø±Ø´ Ø§Ù„Ø£Ø³ÙˆØ¯Ø¯"]
 
              },
    {
   
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040729637748747/bf76692d54e6a0dd.png",
        "answers": ["Ø¯Ø¯Ø³Ù† Ù…ÙˆØ¯ÙŠÙ„ 85"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040736835043341/e66ff909a6330b13.png",
        "answers": ["Ø§Ù„Ø­Ø§Ø±Ø«ÙŠØ¡"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040746503176194/351af3b19fc53323.png",
        "answers": ["Ø¹Ø²Ø§Ø²ÙŠ Ù…Ø³Ø±Ø¹"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040751557181440/6777776666.png",
        "answers": ["Ø¬Ø§ÙƒÙŠ Ø´Ø§Ø§Ù†"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040758108684289/2613844efcb8b05b.png",
        "answers": ["Ø¯Ø§Ø±Ùƒ Ù†Øª"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040765671014401/c89aa167715a85b9.png",
        "answers": ["ÙØ§Ù†ØªØ§Ø³ØªÙŠÙƒ"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040772818239489/01d73182b48785e1.png",
        "answers": ["Ø²Ø¨Ø§Ù„Ù‡ Ù…ØªÙ†Ù‚Ù„Ø©"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040778467835924/9dff572a5bf1b602.png",
        "answers": ["Ø§ÙƒØ³ Ø¨ÙˆÙƒØ³ ÙŠÙ„Ø¯"]
 
        },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040783228370964/91ebb70e0dd936be.png",
        "answers": ["Ø¨ÙƒØ³Ù„ ÙŠØ§Ù„ÙˆØµØ®Ø®"]

    }
];
 
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
  if(!message.guild) return;
    let id = message.author.id,prefix="-";
    if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) {
        let r = (new Date).getTime() - spee[id];
        r = 15*1000 - r;
    message.channel.send(`**Sorry, Please Wait ${pretty(r, {verbose:true})}...**`).then(m => m.delete(5000));
    return;
    }
    if ( message.content == prefix+'speed'){
       
        try{
}catch(e){
 
}
 
    if(!message.channel.guild) return message.reply('**Ù‡Ø°Ø§ Ø§Ù„Ø£Ù…Ø± Ù„Ù„Ø³ÙŠØ±ÙØ±Ø§Øª ÙÙ‚Ø·**').then(m => m.delete(3000));
 
 
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {  
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**Game is Start now...!**').then(msg => {
 
 const embed = new Discord.RichEmbed()
 .setColor("0054dd")
     .setAuthor(`â³ |You have Â»15Â« seconds to type the word`)
          .setImage(`${item.type}`)
 .setFooter(`${message.author.tag}`, message.author.avatarURL)
 
 
         
msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
                  const sh = new Discord.RichEmbed()
  .setColor("04791c")
  .setDescription('**âœ… |Good Job +1P**')
   .setFooter(`${collected.first().author}`)
  message.channel.sendEmbed(sh);
            let won = collected.first().author; // ÙÙŠ Ù‡Ø°Ø§ Ø§Ù„Ø³Ø·Ø± ÙŠÙ‚ÙˆÙ… Ø§Ù„ÙƒÙˆØ¯ Ø¨Ø³Ø­Ø¨ Ø§Ù„Ø£ÙŠ Ø¯ÙŠ Ø§Ù„Ø°ÙŠ Ù‚Ø§Ù… Ø¨Ø§Ù„Ø£Ø¬Ø§Ø¨Ø© Ø§ÙˆÙ„Ø§Ù‹
            points[won.id].points++;
          })
          .catch(collected => { // ÙÙŠ Ø­Ø§Ù„ Ù„Ù… ÙŠÙ‚Ù… Ø£Ø­Ø¯ Ø¨Ø§Ù„Ø¥Ø¬Ø§Ø¨Ø©
            message.channel.send(`ðŸ”š |**Time Is End**`);
          })
        })
    })
    spee[id] = (new Date).getTime()
}
});





 client.on('message', message => {
	 var prefix = "-";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "za5") {
    let say = new Discord.RichEmbed()
        .setTitle('Text emboss :')
   message.channel.send(`**#** \n ${zalgo(args.join(' '))}`);
  }

});


client.on("message", message => {
	var prefix = "-";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__You Dont Have Permissions__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: Mention User**' );
		if( !args[1] ) return message.reply( '**:x: Write Name Of Role To Remove it From The User**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: Mention Role To Remove it From The User**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: Success Removed Role [ '+role1.name+' ] From [ '+args[0]+' ]**');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ]  From All**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ] From All Bots**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ] From All Humans**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: Mention User**' );
		if( !args[1] ) return message.reply( '**:x: Write Name Of Role To Give It To User**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: Write Name Of Role To Give It To User**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark:Success Gived Rank [ '+role1.name+' ] To [ '+args[0]+' ]**');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: Success Gived All Rank [ '+role1.name+' ]**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: Success Gived All Bots Rank [ '+role1.name+' ] **');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: Success Gived All Humans Rank [ '+role1.name+' ]**');
		} 
	} 
});

client.on('message', message => {
    if (message.content === "-rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "-roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});
 
client.on('ready', () => {
	console.log('I am ready!'); 
  });

client.on('message', message => {
var prefix = "-";
      if(message.content === prefix + "hchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
 }
});


client.on('message', message => {
var prefix = "-";
      if(message.content === prefix + "schannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});



client.on('message', message => { 
let prefix = '-'
    if (message.content.startsWith(prefix + 'emojis')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('âž¡ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});

client.on('message',function(message) {
	let prefix = "-";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`**# ${args}**`); 
}
});

  

client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "-";

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply(":x: You Dont Have Perms `MANAGE_MESSAGES`").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("The Bot Haven't Perms `MANAGE_MESSAGES`").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("**You Should Create A Rank Name `Muted`**").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('**You Have To Mention SomeOne**').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  User**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  By**", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  Reason**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} You Are Muted Because You Broke Rules 
${message.author.tag} By
[ ${reason} ] : Reason
If You Didnt Any Thing GGO To Staff
`)
		.setFooter(`Server : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage(":x: You Dont Have Perms `MANAGE_MESSAGES`").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("The Bot Haven't Perms `MANAGE_MESSAGES`").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage(":x: You Have To Mention SomeOne ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage(":x: This User In Not Muted")

  await toMute.removeRole(role)
  message.channel.sendMessage(":white_check_mark: Succes Has Been Unmuted The User");

  return;

  }

});
 


client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**Thank You For Adding The Bot To Your Server If You Need Any Help In The Bot Go To Suuport Server** https://discord.gg/htNpU3J`)
      guild.owner.send(embed)
});

    
var fkk =[
        {f:"ÙÙƒÙƒ Ø¨Ø³Ù… Ø§Ù„Ù„Ù‡ Ø§Ù„Ø±Ø­Ù…Ù† Ø§Ù„Ø±Ø­ÙŠÙ…",k:"Ø¨ Ø³ Ù… Ø§ Ù„ Ù„ Ù‡ Ø§ Ù„ Ø± Ø­ Ù… Ù† Ø§ Ù„ Ø± Ø­ ÙŠ Ù…"},
        {f:"ÙÙƒÙƒ Ø¨Ø§Øµ",k:"Ø¨ Ø§ Øµ"},
        {f:"ÙÙƒÙƒ Ø¹Ø±Ø¨Ø© ",k:"Ø¹ Ø± Ø¨ Ø©"},
        {f:"ÙÙƒÙƒ Ø³ÙŠØ§Ø±Ø©",k:"Ø³ ÙŠ Ø§ Ø± Ø©"},
        {f:"ÙÙƒÙƒ Ø³ÙŠØ±ÙØ±Ù†Ø§ Ø§Ø­Ù„Ù‰ Ø³ÙŠØ±ÙØ±",k:"Ø³ ÙŠ Ø± Ù Ø± Ù† Ø§ Ø§ Ø­ Ù„ Ù‰ Ø³ ÙŠ Ø± Ù Ø±"},
        {f:"ÙÙƒÙƒ Ø§Ù„Ø¹Ù†ÙˆØ¯ ",k:"Ø§ Ù„ Ø¹ Ù† Ùˆ Ø¯"},
        {f:"ÙÙƒÙƒ Ø§Ù„Ù…Ø³ØªØªÙƒØ¹ÙƒØ¨ØªÙŠÙ‡",k:"Ø§ Ù„ Ù… Ø³ Øª Øª Ùƒ Ø¹ Ùƒ Ø¨ Øª ÙŠ Ù‡"},
        {f:"ÙÙƒÙƒ Ø¯Ø­ÙˆÙ…",k:"Ø¯ Ø­ Ùˆ Ù…"},
        {f:"ÙÙƒÙƒ Ø§ÙˆÙ†Ø±Ù†Ø§ Ø§Ø­Ù„Ù‰ Ø§ÙˆÙ†Ø±",k:"Ø§ Ùˆ Ù† Ø± Ù† Ø§ Ø§ Ø­ Ù„ Ù‰ Ø§ Ùˆ Ù† Ø±"},
        {f:"ÙÙƒÙƒ Ø§Ù„Ø­ÙŠØ§Ø© Ø­Ù„ÙˆØ©",k:"Ø§ Ù„ Ø­ ÙŠ Ø§ Ø© Ø­ Ù„ Ùˆ Ø©"},
        {f:"ÙÙƒÙƒ ÙƒØ§Ø²Ø®Ø³ØªØ§Ù† ",k:"Ùƒ Ø§ Ø² Ø® Ø³ Øª Ø§ Ù†"},
        {f:"Ù„Ø­Ù… Ø§Ù„Ø­Ù…Ø§Ù… Ø­Ù„Ø§Ù„ ÙˆÙ„Ø­Ù… Ø§Ù„Ø­Ù…Ø§Ø± Ø­Ø±Ø§Ù… ",k:"Ù„ Ø­ Ù… Ø§ Ù„ Ø­ Ù… Ø§ Ù… Ø­ Ù„ Ø§ Ù„ Ùˆ Ù„ Ø­ Ù… Ø§ Ù„ Ø­ Ù… Ø§ Ø± Ø­ Ø± Ø§ Ù…"},
        {f:"ÙÙƒÙƒ Ø§Ø³ØªÙˆÙ†ÙŠØ§ ",k:"Ø§ Ø³ Øª Ùˆ Ù† ÙŠ Ø§"},
        {f:"ÙÙƒÙƒ Ù„Ù‚Ù…Ø© ÙˆØ¬ØºÙ…Ù‡ ",k:"Ù„ Ù‚ Ù… Ø© Ùˆ Ø¬ Øº Ù… Ù‡"},
        {f:"ÙÙƒÙƒ Ø²Ù†Ø¯ÙŠÙ‚  ",k:"Ø² Ù† Ø¯ ÙŠ Ù‚"},
        {f:"ÙÙƒÙƒ Ø§Ø³ØªØ±Ø§Ù„ÙŠØ§ ",k:"Ø§ Ø³ Øª Ø± Ø§ Ù„ ÙŠ Ø§"},
        {f:"ÙÙƒÙƒ Ø³ÙˆØ±ÙŠØ§ ",k:"Ø³ Ùˆ Ø± ÙŠ Ø§"},
        {f:"ÙÙƒÙƒ Ø§Ù„Ø§Ø±Ø¯Ù† ",k:"Ø§ Ù„ Ø§ Ø± Ø¯ Ù†"},
        {f:"ÙÙƒÙƒ Ø·Ù…Ø§Ø·Ù… ",k:"Ø· Ù… Ø§ Ø· Ù…"},
        {f:"ÙÙƒÙƒ Ø³Ø§Ø±Ø© ",k:"Ø³ Ø§ Ø± Ø©"},
        {f:"ÙÙƒÙƒ Ø¯Ø±Ø§Ø¬ÙˆÙ† ",k:"Ø¯ Ø± Ø§ Ø¬ Ùˆ Ù†"},
        {f:"ÙÙƒÙƒ Ø³ÙŠØ±ÙØ± ",k:"Ø³ ÙŠ Ø± Ù Ø±"},
        {n:"ÙÙƒÙƒ Ø§Ù„Ø¬Ø¨Ù„",m:"Ø§ Ù„ Ø¬ Ø¨ Ù„"},
        {n:"ÙÙƒÙƒ Ù‡Ø¶Ø¨Ø©",m:"Ù‡ Ø¶ Ø¨ Ø©"},
        {n:"ÙÙƒÙƒ Ø®ÙˆØ§Ø·Ø±",m:"Ø® Ùˆ Ø§ Ø· Ø±"},
        {n:"ÙÙƒÙƒ Ø§Ø±Ø­Ø¨Ùˆ",m:"Ø§ Ø± Ø­ Ø¨ Ùˆ"},
        {n:"ÙÙƒÙƒ Ø§Ø·Ù†Ø® Ø³ÙŠØ±ÙØ±",m:"Ø§ Ø· Ù† Ø® Ø³ ÙŠ Ù Ø±"},
        {n:"ÙÙƒÙƒ Ø§Ø­Ø¨Ùƒ",m:"Ø§ Ø­ Ø¨ Ùƒ"},
        {n:"ÙÙƒÙƒ Ø³Ø¨Ø±Ø§ÙŠØ²",m:"Ø³ Ø¨ Ø± Ø§ ÙŠ Ø²"},
        {n:"ÙÙƒÙƒ ÙˆÙ„ÙŠ Ø¹Ù„Ù‰ Ø£Ù…ØªÙƒ",m:"Ùˆ Ù„ ÙŠ Ø¹ Ù„ Ù‰ Ø£ Ù… Øª Ùƒ"},
        {n:"ÙÙƒÙƒ Ø§Ù„Ùˆ Ù…Ø­Ø¯",m:"Ø§ Ù„ Ùˆ Ù… Ø­ Ù… Ø¯"},


   ];


   client.on("message", async message => {
	   var prefix = "-";
    if(message.content == prefix+"ÙÙƒÙƒ"){
        if(UserBlocked.has(message.guild.id)) return message.channel.send("Ù‡Ù†Ø§Ùƒ Ø¬Ù„Ø³Ø© .")
        UserBlocked.add(message.guild.id)
        var ask = fkk[Math.floor(Math.random() * fkk.length)];
        let embed = new Discord.RichEmbed()
        .setTitle('Ù„Ø¹Ø¨Ø© ÙÙƒÙƒ')
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("RANDOM")
        .setDescription(ask.f);
        message.channel.sendEmbed(embed).then(msg=> msg.delete(200000))
        const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:100000});
            UserBlocked.delete(message.guild.id)
        msgs.forEach(result => {
           if(result.author.id == client.user.id) return;
           if(result.content == "ÙÙƒÙƒ") return
           if(result.content == ask.k){

             let embeds = new Discord.RichEmbed()
             .setTitle(':white_check_mark: Ø§Ø¬Ø§Ø¨Ø© ØµØ­ÙŠØ­Ø©')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** Ø§Ù„Ø¥Ø¬Ø§Ø¨Ø© ØµØ­ÙŠØ­Ø©`);
                message.channel.sendEmbed(embeds);                return;
           } else {

                               var embedx = new Discord.RichEmbed()
             .setTitle(':x:Ø®Ø·Ø§Ø¡')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** Ø§Ù„Ø¥Ø¬Ø§Ø¨Ø© Ø®Ø§Ø·Ø¦Ø©`);

                message.channel.sendEmbed(embedx);
           }
     });
  }
});





   client.on("message", async message => {
var prefix = "-";
var aoasm =[
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ù„Ù…ØºØ±Ø¨**",a:"Ø§Ù„Ø±Ø¨Ø§Ø·"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§ÙØºØ§Ù†Ø³ØªØ§Ù†**",a:"ÙƒØ¨Ù„"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø§Ù„Ø¨Ø§Ù†ÙŠØ§**",a:"ØªÙŠØ±Ø§Ù†"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ù„Ø¬Ø²Ø§Ø¦Ø± **",a:"Ø§Ù„Ø¬Ø²Ø§Ø¦Ø±"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** **",a:"Ø§Ù„Ø¬Ø²Ø§Ø¦Ø±"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ù†Ø¯ÙˆØ±Ø§ Ù„Ø§ ÙÙŠÙ„Ø§ **",a:"Ø§Ù†Ø¯ÙˆØ±Ø§"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ù†Ø¬ÙˆÙ„Ø§**",a:"Ù„ÙˆØ§Ù†Ø¯Ø§"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ù†ØªÙŠØ¬ÙˆØ§ ÙˆØ¨Ø§Ø±Ø¨ÙˆØ¯Ø§**",a:"Ø³Ø§Ù† Ø¬ÙˆÙ†Ø²"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ù„Ø§Ø±Ø¬Ù†ØªÙŠÙ†**",a:"Ø¨ÙˆÙŠÙ†Ø³ Ø§ÙŠØ±Ø³"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ø±Ù…ÙŠÙ†ÙŠØ§**",a:"ÙŠØ±ÙŠÙØ§Ù†"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ù…ØµØ±**",a:"Ø§Ù„Ù‚Ø§Ù‡Ø±Ø©"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø§Ø³ØªØ±Ø§Ù„ÙŠØ§**",a:"ÙƒØ§Ù†Ø¨Ø±Ø§"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ù„Ù†Ù…Ø³Ø§**",a:"ÙÙŠÙŠÙ†Ø§"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø§Ø°Ø±Ø¨ÙŠØ¬Ø§Ù†**",a:"Ø¨Ø§ÙƒÙˆ"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø¬Ø²Ø± Ø§Ù„Ø¨Ù‡Ø§Ù…Ø§**",a:"Ù†Ø§Ø³Ø§Ùˆ"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ù„Ø¨Ø­Ø±ÙŠÙ†**",a:"Ø§Ù„Ù…Ù†Ø§Ù…Ø©"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø¨Ù†Ø¬Ù„Ø§Ø¯ï¿½ï¿½Ø´**",a:"Ø¯ÙƒÙ€Ø§"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø¨Ø§Ø±Ø¨Ø§Ø¯ÙˆØ³ **",a:"Ø¨Ø±ÙŠØ¯Ø¬ØªØ§ÙˆÙ†"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø¨ÙŠÙ„Ø§ Ø±ÙˆØ³ÙŠØ§**",a:"Ù…ÙŠÙ†Ø³Ùƒ"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø¨Ù„Ø¬ÙŠÙƒØ§**",a:"Ø¨Ø±ÙˆÙƒØ³Ù„"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø¨ÙŠÙ„ÙŠØ²**",a:"Ø¨Ù„ÙˆÙ… Ø¨Ø§Ù†"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø¨Ù†ÙŠÙ†**",a:"Ø¨ÙˆØ±ØªÙˆ Ù†ÙˆÙÙˆ"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø¨ÙˆØªØ§Ù†**",a:"Ø«ÙŠÙ…ÙÙˆ"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø¨ÙˆÙ„ÙŠÙÙŠØ§ **",a:"Ù„Ø§Ø¨Ø§Ø²"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø§Ù„Ø¨ÙˆØ³Ù†Ø© ÙˆØ§Ù„Ù‡Ø±Ø³Ùƒ**",a:"Ø³Ø±Ø§ÙŠÙŠÙÙˆ"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø¨ÙˆØªØ³ÙˆØ§Ù†Ø§**",a:"Ø¬Ø§Ø¨ÙˆØ±ÙˆÙ†"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø§Ù„Ø¨Ø±Ø§Ø²ÙŠÙ„**",a:"Ø¨Ø±Ø§Ø²ÙŠÙ„ÙŠØ§"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø¨Ø±ÙˆÙ†Ø§Ù‰**",a:"Ø¨Ù†Ø¯Ø± Ø³Ø±Ù‰ Ø¨ÙŠØ¬Ø§ÙˆØ§Ù†"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø¨Ù„ØºØ§Ø±ÙŠØ§**",a:"ØµÙˆÙÙŠØ§"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø¨ÙˆØ±ÙƒÙŠÙ†Ø§ ÙØ§Ø³Ùˆ**",a:"ÙˆØ§Ø¬Ø§Ø¯ÙˆØ¬Ùˆ"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø¨ÙˆØ±ÙˆÙ†Ø¯Ù‰ **",a:"Ø¨ÙˆØ¬ÙˆÙ…Ø¨ÙˆØ±Ø§"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **ÙƒÙ…Ø¨ÙˆØ¯ÙŠØ§ **",a:"Ø¨Ù†ÙˆÙ… Ø¨Ù†Ù€Ù‡"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø§Ù„ÙƒØ§Ù…ÙŠØ±ÙˆÙ†**",a:"ÙŠØ§ÙˆÙ†Ø¯Ù‰"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** ÙƒÙ†Ø¯Ø§**",a:"Ø§ÙˆØªØ§ÙˆØ§"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø§Ù„Ø±Ø£Ø³ Ø§Ù„Ø§Ø®Ø¶Ø±**",a:"Ø¨Ø±Ø§ÙŠØ§"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **ØªØ´Ø§Ø¯ **",a:"Ù†Ø¬Ø§Ù…ÙŠÙ†Ø§"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø´ÙŠÙ„Ù‰**",a:"Ø³Ø§Ù†ØªÙŠØ§Ø¬Ùˆ"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ù„ØµÙŠÙ† **",a:"Ø¨ÙƒÙŠÙ†"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** **",a:"Ù…ÙˆØ±ÙˆÙ†Ù‰"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **ÙƒÙˆØ³ØªØ§Ø±ÙŠÙƒØ§ **",a:"Ø³Ø§Ù† Ø®ÙˆØ³ÙŠÙ‡"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** ÙƒÙˆØª Ø¯ÙŠÙÙˆØ§Ø±**",a:"Ø§Ø¨ÙŠØ¯Ø¬Ø§Ù†"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **ÙƒØ±ÙˆØ§ØªÙŠØ§ **",a:"Ø²ØºØ±Ø¨"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** ÙƒÙˆØ¨Ø§**",a:"Ù‡Ø§ÙØ§Ù†Ø§"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ù‚Ø¨Ø±Øµ**",a:" "},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø¬Ù…Ù‡ÙˆØ±ÙŠØ© Ø§Ù„ØªØ´ÙŠÙƒ**",a:"Ø¨Ø±Ø§Øº"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ù„Ø¯Ù†Ù…Ø§Ø±Ùƒ **",a:"ÙƒÙˆØ¨Ù†Ù‡Ø§Ø¬Ù†"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø¬ÙŠØ¨ÙˆØªÙ‰**",a:"Ø¬ÙŠØ¨ÙˆØªÙ‰"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© ** Ø¯ÙˆÙ…ÙŠÙ†ÙŠÙƒØ§**",a:"Ø±ÙˆØ³ÙŠÙˆ"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ù„Ø¯ÙˆÙ…ÙŠÙ†ÙŠÙƒØ§Ù† **",a:"Ø³Ø§Ù† Ø¯ÙˆÙ…ÙŠÙ†Ø¬Ùˆ"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **ØªÙŠÙ…ÙˆØ± Ø§Ù„Ø´Ø±Ù‚ÙŠØ© **",a:"Ø¯ÙŠÙ„Ù‰"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ù‚Ø·Ø±  **",a:"Ø§Ù„Ø¯ÙˆØ­Ø©"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ù„Ø³Ø¹ÙˆØ¯ÙŠØ©  **",a:"Ø§Ù„Ø±ÙŠØ§Ø¶"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø³ÙˆØ±ÙŠØ§  **",a:"Ø¯Ù…Ø´Ù‚"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **ØªØ±ÙƒÙŠØ§  **",a:"Ø§Ù†Ù‚Ø±Ø©"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ù„Ø¹Ø±Ø§Ù‚  **",a:"Ø¨ØºØ¯Ø§Ø¯"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ù„Ø¨Ù†Ø§Ù†  **",a:"Ø¨ÙŠØ±ÙˆØª"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **ÙÙ„Ø³Ø·ÙŠÙ†  **",a:"Ø§Ù„Ù‚Ø¯Ø³"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ù…Ø±ÙŠÙƒØ§  **",a:"ÙˆØ§Ø´Ù†Ø·Ù†"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ù„Ø§Ø±Ø¯Ù†  **",a:"Ø¹Ù…Ø§Ù†"},    
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ù„Ø³ÙˆØ¯Ø§Ù†  **",a:"Ø®Ø±Ø·ÙˆÙ…"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ù„Ù…Ø§ï¿½ï¿½ÙŠØ§  **",a:"Ø¨Ø±Ù„ÙŠÙ†"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **ÙƒÙ†Ø¯Ø§  **",a:"Ø§ÙˆØªØ§ÙˆØ§"},
    {q:"Ù…Ø§ Ø¹Ø§ØµÙ…Ø© **Ø§Ù„Ø¨Ø±Ø§Ø²ÙŠÙ„  **",a:"Ø¨Ø±Ø§Ø²ÙŠÙ„ÙŠØ§"},
   ];
    if(message.content == prefix+"Ø¹ÙˆØ§ØµÙ…"){
        if(UserBlocked.has(message.guild.id)) return message.channel.send("Ù‡Ù†Ø§Ùƒ Ø¬Ù„Ø³Ø© .")
        UserBlocked.add(message.guild.id)
        var ask = aoasm[Math.floor(Math.random() * aoasm.length)];
        let embed = new Discord.RichEmbed()
        .setTitle('Ø³Ø¤Ø§Ù„ Ø¹ÙˆØ§ØµÙ…')
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("RANDOM")
        .setDescription(ask.q);
        message.channel.sendEmbed(embed).then(msg=> msg.delete(20000))
        const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:10000});
            UserBlocked.delete(message.guild.id)
        msgs.forEach(result => {
           if(result.author.id == client.user.id) return;
           if(result.content == "Ø¹Ø§ØµÙ…Ø©") return
           if(result.content == ask.a){
             let embeds = new Discord.RichEmbed()
             .setTitle(':white_check_mark: Ø§Ø¬Ø§Ø¨Ø© ØµØ­ÙŠØ­Ø©')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** Ø§Ù„Ø¥Ø¬Ø§Ø¨Ø© ØµØ­ÙŠØ­Ø©`);
                message.channel.sendEmbed(embeds);                return;
           } else {

                                  var embedx = new Discord.RichEmbed()
                .setTitle(':x:Ø®Ø·Ø§Ø¡')
                .setAuthor(message.author.username, message.author.avatarURL)
                .setColor("RANDOM")
                .setDescription(`**${result.author.username}** Ø§Ù„Ø¥Ø¬Ø§Ø¨Ø© Ø®Ø§Ø·Ø¦Ø©`);
                message.channel.sendEmbed(embedx);
           }
     });
  }
});

client.on("message", message => {
    const prefix = "-"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

client.on('message' , message => {
var prefix = "-"
if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;
let args = message.content.split(" ").slice(1).join(" ");
client.users.get("349616310734553088").send(
    "\n" + "**" + "â— Ø§Ù„Ø³ÙŠØ±ÙØ± :" + "**" +
    "\n" + "**" + "Â» " + message.guild.name + "**" +
    "\n" + "**" + " â— Ø§Ù„Ù…Ø±Ø³Ù„ : " + "**" +
    "\n" + "**" + "Â» " + message.author.tag + "**" +
    "\n" + "**" + " â— Ø§Ù„Ø±Ø³Ø§Ù„Ø© : " + "**" +
    "\n" + "**" + args + "**");


}
    
});

client.on('message', message => {
	var prefix = "-";
    if(message.content.startsWith(prefix + 'mvall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: You Dont Have Perms `MOVE_MEMBERS`**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**:white_check_mark: Success Moved All To Your Channel**`)


     }
       });

client.on('message', message => {
if(message.content.startsWith("-slots")) {
  let slot1 = ['ðŸ', 'ðŸ‡', 'ðŸ’', 'ðŸ', 'ðŸ…', 'ðŸ†', 'ðŸ‘', 'ðŸ“'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});

client.on('message' , message => {
var prefix = "-"
if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return message.reply("This Command Only For Servers");
let args = message.content.split(" ").slice(1).join(" ");
client.users.get("335027415619338240").send(
    "\n" + "**" + "â— Ø§Ù„Ø³ÙŠØ±ÙØ± :" + "**" +
    "\n" + "**" + "Â» " + message.guild.name + "**" +
    "\n" + "**" + " â— Ø§Ù„Ù…Ø±Ø³Ù„ : " + "**" +
    "\n" + "**" + "Â» " + message.author.tag + "**" +
    "\n" + "**" + " â— Ø§Ù„Ø±Ø³Ø§Ù„Ø© : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(':mailbox_with_mail: Succes The Message Has Been Sent To The Owners')
     .setThumbnail(message.author.avatarURL)
     .setFooter("Than YOU")
                                                

message.channel.send(embed);


}
    
});

client.on('message', message => {
	var prefix = "-"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
  if(!reason) return message.reply ("**Write A Reason**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**I Cant BAN SomeOne High Than My Rank**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
	var prefix = "-"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
  if(!reason) return message.reply ("**Write A Reason**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**I Cant Kick SomeOne High Than My Rank**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on('message', message => {
var prefix = "-";
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **You Dont Have Perms**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**:white_check_mark: Success Has Been Locked Channel**")
              });
                }
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You Dont Have Perms**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**:white_check_mark: Success Has Been UnLocked Channel**")
              });
    }
       
});

client.on('message', message => {
   if (message.content.startsWith("-id")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("ID:", "**[" + `${mentionavatar.id}` + "]**", true)
  .addField("Create At:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
     
     
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});


client.on('message', message => {
        if (message.content === "-invite") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`âž¡ Click Here `)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=505874050694774785&permissions=8&scope=bot`)
        .setThumbnail(" https://discordapp.com/api/oauth2/authorize?client_id=505874050694774785&permissions=8&scope=bot")        
     message.channel.sendEmbed(embed);
       }
   });
   
   client.on('message', message => {
        if (message.content === "-inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`âž¡ Click Here `)
        .setURL(`https://discordapp.com/api/oauth2/authorize?client_id=505874050694774785&permissions=8&scope=bot`)
        .setThumbnail(" https://discordapp.com/api/oauth2/authorize?client_id=505874050694774785&permissions=8&scope=bot")        
     message.channel.sendEmbed(embed);
       }
   });
 
client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            var prefix = "-";
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);

    if (command == "embed") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');
        let say = new Discord.RichEmbed()
            .setDescription(args.join("  "))
            .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
    }
});


   client.on('message', message => {
     if (message.content === "-support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" ** :gear: Server Support :gear: **" , "  ****")
     
     
  message.channel.sendEmbed(embed);
    }
});
client.on('message', omar => {
var prefix = "-";
if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
omar.guild.channels.forEach(m => {
m.delete();
});// omar jedol / Codes
}// omar jedol / Codes
if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
if (!omar.channel.guild) return;
if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
omar.guild.roles.forEach(m => {
m.delete();
});// omar jedol / Codes
omar.reply("âœ… `Success Deleted All Roles - Ranks`")
}// omar jedol / Codes
});

client.on('message', message => {
	var prefix = "-";
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('âœ…')
.then(() => msg.react('âŒ'))
.then(() =>msg.react('âœ…'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === 'âœ…' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === 'âŒ' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});


client.on('message', message => {
      if(message.content.startsWith ("-marry")) {
      if(!message.channel.guild) return message.reply('** This command only for servers **')
      var proposed = message.mentions.members.first()
     
      if(!message.mentions.members.first()) return message.reply(' ðŸ˜ **Ù„Ø§Ø²Ù… ØªØ·Ù„Ø¨ Ø§ÙŠØ¯ ÙˆØ­Ø¯Ø©**').catch(console.error);
      if(message.mentions.users.size > 1) return message.reply(' ðŸ˜³ **ÙˆÙ„Ø¯ Ù…Ø§ ÙŠØµØ­Ù„Ùƒ Ø§Ù„Ø§ Ø­Ø±Ù…Ø© ÙˆØ­Ø¯Ø© ÙƒÙ„ Ù…Ø±Ø©**').catch(console.error);
       if(proposed === message.author) return message.reply(`**Ø®Ù†Ø«Ù‰ ØŸ **`);
        if(proposed === client.user) return message.reply(`** ØªØ¨ÙŠ ØªØªØ²ÙˆØ¬Ù†ÙŠØŸ **`);
              message.channel.send(`**${proposed} 
 Ø¨Ø¯Ùƒ ØªÙ‚Ø¨Ù„ÙŠ Ø¹Ø±Ø¶ Ø§Ù„Ø²ÙˆØ§Ø¬ Ù…Ù† ${message.author} 
 Ø§Ù„Ø¹Ø±Ø¶ Ù„Ù…Ø¯Ø© 15 Ø«Ø§Ù†ÙŠØ©  
 Ø§ÙƒØªØ¨ÙŠ Ù…ÙˆØ§ÙÙ‚Ø© Ø§Ùˆ Ù„Ø§**`)

const filter = m => m.content.startsWith("Ù…ÙˆØ§ÙÙ‚Ø©");
message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
    message.channel.send(` **${message.author} Ùˆ ${proposed} Ø§Ù„Ù Ø§Ù„Ù Ù…Ø¨Ø±ÙˆÙƒ Ø§Ù„Ù„Ù‡ , ÙŠØ±Ø²Ù‚ÙƒÙ… Ø§Ù„Ø°Ø±ÙŠØ© Ø§Ù„ØµØ§Ù„Ø­Ø©** `);
})

   const filte = m => m.content.startsWith("Ù„Ø§");
message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
.then(collected =>{ 
   message.channel.send(`  **${message.author} ØªÙ… Ø±ÙØ¶ Ø¹Ø±Ø¶Ùƒ** `);
})
        
  }
});
  
client.on("message", message => {
    var prefix = "-";
    const command = message.content.split(" ")[0];

    if(command == prefix+"kv"){

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.reply('you do not have permission to perform this action!');
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if(!message.mentions.users){
            message.reply("please mention the member")
            return;
        }

    if(!member.voiceChannel){
    message.reply("i can't include voice channel for member!")
    return;
    }
              message.guild.createChannel('voicekick', 'voice').then(c => {
                member.setVoiceChannel(c).then(() => {
                    c.delete(305).catch(console.log)
        


    
      });
     });
    }
});

// THIS  MUST  BE  THIS  WAY
client.login('NTAwNzcwNDc1NjYwNjczMDM1.DreujQ.RkkJ4MDAzWQ_Q8T36HHYXGjeE9U');
