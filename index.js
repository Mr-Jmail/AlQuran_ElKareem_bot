const { Telegraf, session, Markup, Scenes} = require('telegraf')
const bot = new Telegraf("5085600197:AAENIOP9ZtszbvmKM7agAHq0mnNKdzhFJ3k")
const { Keyboard } = require('telegram-keyboard')

const helloScene = require("./scenes/hello.js")
const FirstReaderScene = require("./scenes/1Reader.js")
const SecondReaderScene = require("./scenes/2Reader.js")
const ThirdReaderScene = require("./scenes/3Reader.js")
const FourthReaderScene = require("./scenes/4Reader.js")

const stage = new Scenes.Stage([helloScene, FirstReaderScene, SecondReaderScene, ThirdReaderScene, FourthReaderScene])
bot.use(session())
bot.use(stage.on())

bot.start(async (ctx) => {
	ctx.scene.enter('helloWizard')
})

bot.hears('lol', ctx => ctx.reply('lol'))
bot.launch()
