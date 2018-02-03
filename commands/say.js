module.exports = {
  main: function(bot, msg) {
    console.log('yeet!');
    let modRole = msg.guild.roles.find("name", "Moderators");
    if(msg.member.roles.has(modRole.id)) {
      // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
      msg.delete().catch(O_o=>{});
      // And we get the bot to say the thing:
      bot.sendNotification(msg.content, "info", msg)
    } else {
      bot.sendNotification("You do not have permission to use this command.", "error", msg);
    }
  },
  help: 'Say things as the bot!'
};
