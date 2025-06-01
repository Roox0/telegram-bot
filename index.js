require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    'Hoş geldin! Aşağıdan uygulamayı başlatabilirsin:',
    Markup.keyboard([
      [Markup.button.webApp('🚀 Uygulamayı Başlat', 'https://senin-domain.epizy.com/uygulama/index.html')],
    ]).resize()
  );
});

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
