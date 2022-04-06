const {Scenes, Composer} = require('telegraf')
const { Keyboard } = require('telegram-keyboard')
const bot = new Composer()

bot.start(async (ctx) => {
	await ctx.reply('Какое-то приветственное сообщение', ReaderChoise.reply())
    bot.hears('Аль-Афаси (مشاري العفاسي)', ctx => ctx.scene.enter('FirstReaderWizard'))
    bot.hears('Абдуль-Басит Абдус-Самад (عبد الباسط عبد الصمد)', ctx => ctx.scene.enter('SecondReaderWizard'))
    bot.hears('Ахмад бин Али Аль-Аджми (أحمد علي العجمي)', ctx => ctx.scene.enter('ThirdReaderWizard'))
    bot.hears('Мохамед Махмуд Таблави (محمد محمود الطبلاوي)', ctx => ctx.scene.enter('FourthReaderWizard'))
})

const ReaderChoise = Keyboard.make([
    ['Аль-Афаси (مشاري العفاسي)'], ['Абдуль-Басит Абдус-Самад (عبد الباسط عبد الصمد)'], ['Ахмад бин Али Аль-Аджми (أحمد علي العجمي)'], ['Мохамед Махмуд Таблави (محمد محمود الطبلاوي)']
]).oneTime()

bot.command('change_reader', (ctx) => ctx.reply('Выбери нового чтеца'), ReaderChoise.reply())


const helloScene = new Scenes.WizardScene('helloWizard', bot)
module.exports = helloScene