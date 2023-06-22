const TelegramBot = require("node-telegram-bot-api");
const token = "5977160436:AAFiq2vwNN5ELztdMd432xlVBCXz37F0Rkk";
const chatId = "@runmallofficial";
const bot = new TelegramBot(token);

const message = `⁣🌈🄽🄾.1 🅃🅁🅄🅂🅃🄴🄳 🄿🄻🄰🅃🄵🄾🅁🄼🤗

WELCOME IN RUN MALL 🤗

 https://runmall.online/?code=A3OGUETY6L

🥰✅𝖗𝖊𝖈𝖍𝖆𝖗𝖌𝖊 𝖆𝖓𝖉 𝖜𝖎𝖙𝖍𝖉𝖗𝖆𝖜𝖆𝖑 𝖛𝖊𝖗𝖞 𝖋𝖆𝖘𝖙🔥𝖒𝖎𝖓 𝖗𝖊𝖈𝖍𝖆𝖗𝖌𝖊 = 300𝖗𝖘🔥
𝖒𝖎𝖓 𝖜𝖎𝖙𝖍𝖉𝖗𝖆𝖜𝖆𝖑 = 230𝖗𝖘

🌈𝐃𝐀𝐈𝐋𝐘 𝐏𝐑𝐎𝐅𝐈𝐓𝐀𝐁𝐋𝐄 𝐅𝐎𝐑𝐄𝐂𝐀𝐒𝐓 𝐓𝐈𝐌𝐄

1 - ⏱️ 10.00 ⒶⓂ
2 - ⏱️ 02.00 ⓅⓂ
3 - ⏱️ 05.00 ⓅⓂ
4 - ⏱️ 08.00 ⓅⓂ

🎁🅟🅔🅡 🅡🅔🅕🅔🅡 : 100🅡🅢

🅆🄸🅃🄷🄳🅁🄰🅆🄰🄻 🅃🄸🄼🄸🄽🄶 24×7

𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐑𝐄𝐆𝐈𝐒𝐓𝐄𝐑 𝐋𝐈𝐍𝐊 :

https://runmall.online/?code=A3OGUETY6L
`;

bot.sendMessage(chatId, message)
  .then((message) => {
    process.exit(1);
  })
  .catch((error) => {
    process.exit(1);
  });
