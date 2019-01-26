const Discord = require('discord.js');
const fs = require("fs"); 
const jimp = require('jimp');
var prefix = "$"
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity("",{type: 'watching'})
  console.log('xR1')
  console.log('MdAx77x')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('S.P.z')
  console.log('ٍ :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Welcome Mdax`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     xR1Server' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setStatus("dnd")
 
});





const adminprefix = "$";
const devs = ['335484868479811584','335484868479811584'];
client.on('message', message => {
 var argresult = message.content.split(` `).slice(1).join(' ');
   if (!devs.includes(message.author.id)) return;
   
if (message.content.startsWith(adminprefix + 'setgame')) {
 client.user.setGame(argresult);
   message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else
 if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
   message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
 if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
 message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
     } else    
if (message.content.startsWith(adminprefix + 'setT')) {
 client.user.setGame(argresult, "https://www.twitch.tv/MdAx77x");//حقوق دايموند كودز
   message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)//حقوق دايموند كودز
}
});



client.on('message', msg => {

    if (msg.content == '$join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client.on('ready', () => { //code bot not leave room voice //Bot Is Online
    client.channels.get("529986045857497099").join(); //by : iBeAnthonyD
    });


client.login(process.env.BOT_TOKEN);
