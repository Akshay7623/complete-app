const TelegramBot = require("node-telegram-bot-api");
const token = "5977160436:AAFiq2vwNN5ELztdMd432xlVBCXz37F0Rkk";
const chatId = "@runmallofficial";
const bot = new TelegramBot(token);
const imagePath = 'https://i.ibb.co/f8ZWqsB/text2photo-3ae3252065018e3161b2a9d64a432b6c.jpg';

const captionText = `⁣Don't forget to promote your Run mall link and invite friends to join when you participate in the prediction and make a profit

❤️Don't ignore the commission income and referral bonus of Run Mall

❤️You can invite all your contacts to register your link and participate in predictions
In this way, not only can you profit from forecasts

❤️You can also get referral bonuses, and at the same time get rich commission income from team members' transactions

💋Referral bonus + commission income + forecast profit = high profit income

Level 1 commission : 50% of total commission
Level 2 commission : 25% of total commission`;

bot
  .sendPhoto(chatId, imagePath, { caption: captionText })
  .then((message) => {
    process.exit(1);
  })
  .catch((error) => {
    process.exit(1);
  });

