module.exports = {
     main: function(bot, msg) {
       msg.channel.send(msg.author.id);
    },
    help: 'Get your user id!'
};
