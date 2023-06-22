const TelegramBot = require("node-telegram-bot-api");
const token = "5977160436:AAFiq2vwNN5ELztdMd432xlVBCXz37F0Rkk";
const chatId = "@runmallofficial";
const bot = new TelegramBot(token);
const photo = "https://i.ibb.co/GnpNB3s/photo-6075752795706865080-y.jpg";

const caption = `✨💥Welcome to ✨💥 
🤝RUNMALL is one of the leading clubs in the market 💵 
 
👉 Reasons to choose RUNAMLL❔ 
 
✨💥💥🔥🔥💰💰💣💣🎁🎁 
👉Transactions start from 100 rupees💥 
👉Minimum recharge amount ₹100 
👉Minimum withdrawal amount ₹230 
👉₹100 invitation bonus🎁Available🔥 
👉Level 1 & Level 2 commissions are available💥💵 
👉Easily bet on colors and numbers 
     Double your money in 3 minutes💥🔥✨ 
Teacher  profit trend suggestions 
     No risk 😍 
Build trust and help members earn more 
😍🔥No scams❌ 
Get your top-up and withdrawal 
     Seconds🤝💰🔥 


Join here : -

https://www.runmall.online

🤝🤝🤝🤝🤝🤝🤝🤝🤝🤝🤝
`;

bot
  .sendPhoto(chatId, photo, { caption: caption })
  .then((message) => {
    process.exit(1);
  })
  .catch((error) => {
    process.exit(1);
  });
