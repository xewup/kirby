const Discord = require("discord.js");
const kirby = new Discord.Client();

kirby.login(process.env.TOKEN);

kirby.on('ready', () => {
  console.log(` Kirby Prêt !`);
});

kirby.on('message', function(message) {
  if(message.content == 'Oui car il y a toujours un mais.' ) {
         message.channel.send("Surtout au mois de Mai.");
  }
});

kirby.on('ready', function() {
kirby.user.setGame("manger tout ce qu'il trouve").catch(console.error)

});

kirby.on("guildMemberAdd", member => {
    let role = member.guild.roles.find("name", "Abonnés")
    member.guild.channels.find("name","general").send(`Bienvenue sur le serveur ${member.user.username}. N'Hésite pas à faire un tour sur les #regles et à te présenter dans #presentations.`)
    member.addRole(role)
    });
