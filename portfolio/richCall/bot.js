const TelegramBot = require("node-telegram-bot-api");

const botToken = "6233714210:AAF0YGdvyV44wsO1PsMwFe3kBF9zwg7U4b0";
const bot = new TelegramBot(botToken, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const text = "Ниже будет кнопка";
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Сделать видеозвонок",
            callback_data: "load_web_app",
          },
        ],
      ],
    },
  };

  bot.sendMessage(chatId, text, options);
});

bot.on("callback_query", (query) => {
  const chatId = query.message.chat.id;
  const messageId = query.message.message_id;
  const action = query.data;

  if (action === "load_web_app") {
    const webAppURL =
      "https://iqos.richcall.io/client?company-id=4db48d7f-8443-4521-8234-4354a459b57e&menu-id=bedf58f5-a231-4783-9ed6-0b47907c53d0&themeColor=ffcd00&fontColor=4a4a4a";

    request.get(webAppURL, (error, response, body) => {
      if (error) {
        bot.sendMessage(chatId, "Ошибка загрузки веб-приложения.");
      } else {
        const htmlContent = body;

        bot.editMessageText("Загрузка веб-приложения...", {
          chat_id: chatId,
          message_id: messageId,
        });

        bot.sendHTML(chatId, htmlContent);
      }
    });
  }
});
