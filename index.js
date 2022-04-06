const { Telegraf, session, Markup, Scenes} = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)
// const bot = new Telegraf(process.env.BOT_TOKEN_TEST)

const { Keyboard } = require('telegram-keyboard')

const helloScene = require("./scenes/hello.js")
const ChangeReaderScene = require("./scenes/changeReader.js")
const FirstReaderScene = require("./scenes/1Reader.js")
const SecondReaderScene = require("./scenes/2Reader.js")
const ThirdReaderScene = require("./scenes/3Reader.js")
const FourthReaderScene = require("./scenes/4Reader.js")
const FifthReaderScene = require("./scenes/5Reader.js")
const SixthReaderScene = require("./scenes/6Reader.js")
const SeventhReaderScene = require("./scenes/7Reader.js")
const EighthReaderScene = require("./scenes/8Reader.js")
const NinthReaderScene = require("./scenes/9Reader.js")
const TenthReaderScene = require("./scenes/10Reader.js")

const stage = new Scenes.Stage([helloScene, ChangeReaderScene, FirstReaderScene, SecondReaderScene, ThirdReaderScene, FourthReaderScene, FifthReaderScene, SixthReaderScene, SeventhReaderScene, EighthReaderScene, NinthReaderScene, TenthReaderScene])
bot.use(session())
bot.use(stage.on())

bot.start(async (ctx) => {
	ctx.scene.enter('helloWizard')
})

bot.hears('lol', ctx => ctx.reply('lol'))
bot.launch()