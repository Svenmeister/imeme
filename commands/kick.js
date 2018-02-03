module.exports = {
  main: function(bot, msg) {
    let modRole = msg.guild.roles.find("name", "Moderators");
    if(msg.member.roles.has(modRole.id)) {
      let kickMember = msg.guild.member(msg.mentions.users.first());
      msg.guild.member(kickMember).kick();
      msg.channel.send("Member Kicked.");
    } else {
      return msg.reply("You dont have the perms to kick members. scrub.");
    }
  }
}
