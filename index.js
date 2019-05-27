const SlackBot = require('slackbots');

const bot = new SlackBot({
  token: 'XXXXX',
  name: 'soal-bot'
});

var reg = /(@\w+)(\sis placed\s)/g;

// Error Handler
bot.on('error', err => console.log(err));

// Message Handler
bot.on('message', data => {
  if (data.type !== 'message') {
    return;
  }
  console.log(data.text);
  if(reg.test(data.text)){
    console.log("sent");
    bot.postMessageToChannel(
        'testing',//the channel to which message is to be sent
        data.text,
      );
  }
});