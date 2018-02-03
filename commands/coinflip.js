module.exports = {
     main: function(bot, msg) {
       let flip = Math.floor(Math.random() * 2) + 1;
       if(flip == 1) var flipw = 'Head!';
       if(flip == 2) var flipw = 'Tail!';
       bot.sendNotification(flipw, "info", msg);
    },
    help: 'Flips a virtual coin.'
};
