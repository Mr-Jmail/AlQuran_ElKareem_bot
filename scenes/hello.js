const {Scenes, Composer} = require('telegraf')
const { Keyboard } = require('telegram-keyboard')
const bot = new Composer()

bot.start(async (ctx) => {
	await ctx.reply('Какое-то приветственное сообщение', ReaderChoise.reply())
    bot.hears('Аль-Афаси', ctx => ctx.scene.enter('FirstReaderWizard'))
    bot.hears('Абдуль-Басит Абдус-Самад', ctx => ctx.scene.enter('SecondReaderWizard'))
    bot.hears('Ахмад бин Али Аль-Аджми', ctx => ctx.scene.enter('ThirdReaderWizard'))
    bot.hears('Мохамед Махмуд Таблави', ctx => ctx.scene.enter('FourthReaderWizard'))
})

const ReaderChoise = Keyboard.make([
    ['Аль-Афаси'], ['Абдуль-Басит Абдус-Самад'], ['Ахмад бин Али Аль-Аджми'], ['Мохамед Махмуд Таблави']
]).oneTime()

bot.command('change_reader', (ctx) => ctx.reply('Выбери нового чтеца'), ReaderChoise.reply())


const helloScene = new Scenes.WizardScene('helloWizard', bot)
module.exports = helloScene