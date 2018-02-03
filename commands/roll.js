module.exports = {
  main: function(bot, msg) {
    bot.sendNotification(`And the dice rolled ${Math.floor(Math.random() * 6) + 1}!!!`, "info", msg);
  },
  help: "Rolls a virtual dice!"
};
