const TelegramBot = require('node-telegram-bot-api');
const token = '1776878804:AAHiD6tXpC3C1R2GDezCPOr43wGWqiP2ar8';
const bot = new TelegramBot(token, { polling: true });

bot.on('message', msg => {
	var dust = '垃圾';
	if (
		msg.text
			.toString()
			.toLowerCase()
			.indexOf(dust) === 0
	) {
		bot.deleteMessage(msg.chat.id, msg.message_id);
	}
	var wc = '卧槽';
	if (
		msg.text
			.toString()
			.toLowerCase()
			.indexOf(wc) === 0
	) {
		bot.deleteMessage(msg.chat.id, msg.message_id);
	}
	var sex = '色情';
	if (
		msg.text
			.toString()
			.toLowerCase()
			.indexOf(sex) === 0
	) {
		bot.deleteMessage(msg.chat.id, msg.message_id);
	}
	var porn = 'porn';
	if (
		msg.text
			.toString()
			.toLowerCase()
			.indexOf(porn) === 0
	) {
		bot.deleteMessage(msg.chat.id, msg.message_id);
	}
  var ad = '广告';
	if (
		msg.text
			.toString()
			.toLowerCase()
			.indexOf(ad) === 0
	) {
		bot.deleteMessage(msg.chat.id, msg.message_id);
	}
  var ad = '你好';
	if (
		msg.text
			.toString()
			.toLowerCase()
			.indexOf(ad) === 0
	) {
		bot.sendMessage(msg.chat.id, "你好呀");
	}
});
