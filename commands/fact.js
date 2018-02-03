module.exports = {
  main: function(bot, msg) {
    const catFacts = require('cat-facts');
    let randomFact = catFacts.random();

    bot.sendNotification(randomFact, "info", msg)
  },
  help: 'Random facts about cats!'
};
