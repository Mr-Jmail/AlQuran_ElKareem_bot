const {Scenes, Composer} = require('telegraf')
const { Keyboard } = require('telegram-keyboard')

const bot = new Composer()


const ReaderChoise = Keyboard.make([
    ['Аль-Афаси (مشاري العفاسي)'], ['Абдуль-Басит Абдус-Самад (عبد الباسط عبد الصمد)'], ['Ахмад бин Али Аль-Аджми (أحمد علي العجمي)'], ['Мохамед Махмуд Таблави (محمد محمود الطبلاوي)'], ['Мухаммад Сиддик аль-Миншави (محمد صديق المنشاوي)']
]).oneTime()

bot.command('change_reader', (ctx) => ctx.reply('Выбери нового чтеца', ReaderChoise.reply()))

bot.hears('Аль-Афаси (مشاري العفاسي)', ctx => ctx.scene.enter('FirstReaderWizard'))
bot.hears('Абдуль-Басит Абдус-Самад (عبد الباسط عبد الصمد)', ctx => ctx.scene.enter('SecondReaderWizard'))
bot.hears('Ахмад бин Али Аль-Аджми (أحمد علي العجمي)', ctx => ctx.scene.enter('ThirdReaderWizard'))
bot.hears('Мохамед Махмуд Таблави (محمد محمود الطبلاوي)', ctx => ctx.scene.enter('FourthReaderWizard'))
bot.hears('Мухаммад Сиддик аль-Миншави (محمد صديق المنشاوي)', async (ctx) => ctx.scene.enter('FifthReaderWizard'))

const ChangeReaderScene = new Scenes.WizardScene('ChangeReaderWizard', bot)
module.exports = ChangeReaderScene