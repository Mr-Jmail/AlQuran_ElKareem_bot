const {Scenes, Composer} = require('telegraf')
const { Keyboard } = require('telegram-keyboard')

const bot = new Composer()

const s1 = `1. Открывающая Коран [АЛЬ-ФАТИХА](الفاتحة)`
const s2 = `2. Корова [АЛЬ-БАКАРА] (البقرة)`
const s3 = `3. Семейство Имран [Алю Имран] (آل عمران)`
const s4 = `4. Женщины [Ан-Ниса] (النساء)`
const s5 = `5. Трапеза [Аль-Маида] (المائدة)`
const s6 = `6. Скот [Аль-Ан'ам](الأنعام)`
const s7 = `7. Преграды [Аль-А'раф] (الأعراف)`
const s8 = `8. Добыча [Аль-Анфаль] (الأنفال)`
const s9 = `9. Покаяние [Ат-Тауба] (التوبة)`
const s10 = `10. Йунус [Йунус] (يونس)`
const s11 = `11. Худ [Худ] (هود)`
const s12 = `12. Йусуф [Йусуф] (يوسف)`
const s13 = `13. Гром [Ар-Ра'д] (الرعد)`
const s14 = `14. Ибрахим [Ибрахим] (إبراهيم)`
const s15 = `15. Аль-Хиджр [Аль-Хиджр] (الحجر)`
const s16 = `16. Пчёлы [Ан-Нахль] (النحل)`
const s17 = `17. Ночной перенос [Аль-Исра] (الإسراء)`
const s18 = `18. Пещера[Аль-Кахф] (الكهف)`
const s19 = `19. Марйам [Марйам] (مريم)`
const s20 = `20. Та Ха [Та Ха] (طه)`
const s21 = `21. Пророки [Аль-Анбийа] (الأنبياء)`
const s22 = `22. Паломничество [Аль-Хаджж] (الحج)`
const s23 = `23. Верующие [Аль-Му'минун] (المؤمنون)`
const s24 = `24. Свет [Ан-Нур] (النور)`
const s25 = `25. Различение [Аль-Фуркан] (الفرقان)`
const s26 = `26. Поэты [Аш-Шу'ара] (الشعراء)`
const s27 = `27. Муравьи [Ан-Намль] (النمل)`
const s28 = `28. Повествование [Аль-Касас] (القصص)`
const s29 = `29. Паук [Аль-'нкабут] (العنكبوت)`
const s30 = `30. Румы [Ар-Рум] (الروم)`
const s31 = `31. Лукман [Лукман] (لقمان)`
const s32 = `32. Поклон [Ас-Саджда] (السجدة)`
const s33 = `33. Союзники [Аль-Ахзаб] (الأحزاب)`
const s34 = `34. Саба' [Саба'] (سبأ)`
const s35 = `35. Творец [Фатыр] (فاطر)`
const s36 = `36. Йа Син [Йа Син] (يس)`
const s37 = `37. Выстроившиеся в ряды [Ас-Саффат] (الصافات)`
const s38 = `38. Сад [Сад] (ص)`
const s39 = `39. Толпы [Аз-Зумар] (الزمر)`
const s40 = `40. Прощающий [Гафер] (غافر)`
const s41 = `41. Разъяснены [Фуссилат] (فصلت)`
const s42 = `42. Совет [Аш-Шура] (الشورى)`
const s43 = `43. (Золотые) Украшения [Аз-Зухруф] (الزخرف)`
const s44 = `44. Дым [Ад-Духан] (الدخان)`
const s45 = `45. Коленопреклонённые [Аль-Джасийа] (الجاثية)`
const s46 = `46. Песчаные дюны [Аль-Ахкаф] (الأحقاف)`
const s47 = `47. Мухаммад [Мухаммад] (محمد)`
const s48 = `48. Победа [Аль-Фатх] (الفتح)`
const s49 = `49. Покои [Аль-Худжурат] (الحجرات)`
const s50 = `50. Каф [Каф] (ق)`
const s51 = `51. Рассеивающие [Аз-Зарийат] (الذاريات)`
const s52 = `52. Гора [Ат-Тур] (الطور)`
const s53 = `53. Звезда [Ан-Наджм] (القمر)`
const s54 = `54. Месяц [Аль-Камар] (القمر)`
const s55 = `55. Милостивый [Ар-Рахман] (الرحمن)`
const s56 = `56. Воскресение [Аль-Ваки'а] (الواقعة)`
const s57 = `57. Железо [Аль-Хадид] (الحديد)`
const s58 = `58. Препирательство [Аль-Муджадала] (المجادلة)`
const s59 = `59. Переселение [Аль-Хашр] (الحشر)`
const s60 = `60. Испытуемая [Аль-Мумтахана] (الممتحنة)`
const s61 = `61. Ряды [Ас-Сафф] (الصف)`
const s62 = `62. День пятничной молитвы [Аль-Джуму'а] (الجمعة)`
const s63 = `63. Лицемеры [Аль-Мунафикун] (المنافقون)`
const s64 = `64. Раскрытие самообмана [Ат-Тагабун] (التغابن)`
const s65 = `65. Развод [Ат-Талак] (الطلاق)`
const s66 = `66. Запрещение [Ат-Тахрим] (التحريم)`
const s67 = `67. Власть [Аль-Мульк] (الملك)`
const s68 = `68. Перо [Аль-Калам] (القلم)`
const s69 = `69. Судный День [Аль-Хакка] (الحاقة)`
const s70 = `70. Ступени [Аль-Ма'аридж] (المعارج)`
const s71 = `71. Нух [Нух] (نوح)`
const s72 = `72. Джинны [Аль-Джинн] (الجن)`
const s73 = `73. Завернувшийся [Аль-Муззамиль] (المزمل)`
const s74 = `74. Закутавшийся [Аль-Мудассир] (المدثر)`
const s75 = `75. Воскресение [Аль-Кийама] (القيامة)`
const s76 = `76. Человек [Аль-Инсан] (الإنسان)`
const s77 = `77. Посылаемые [Аль-Мурсалят] (المرسلات)`
const s78 = `78. Великая весть [Ан-Наба] (النبأ)`
const s79 = `79. Вырывающие [Ан-Нази'ат] (النازعات)`
const s80 = `80. Нахмурился ['Абаса] (عبس)`
const s81 = `81. Погружение во мрак [Ат-Таквир] (التكوير)`
const s82 = `82. Разрушение [Аль-Инфитар] (الإنفطار)`
const s83 = `83. Плутовство [Аль-Мутаффифин] (المطففين)`
const s84 = `84. Раскалывание [Аль-Иншикак] (الانشقاق)`
const s85 = `85. Знаки зодиаки [Аль-Бурудж] (البروج)`
const s86 = `86. Звезда, восходящая ночью [Ат-Тарик] (الطارق)`
const s87 = `87. Всевышний [Аль-А'ла] (الأعلى)`
const s88 = `88. Покрывающее [Аль-Гашиййа] (الغاشية)`
const s89 = `89. Заря [Аль-Фаджр] (الفجر)`
const s90 = `90. Город [Аль-Балад] (البلد)`
const s91 = `91. Солнце [Аш-Шамс] (الشمس)`
const s92 = `92. Ночь [Аль-Лайл] (الليل)`
const s93 = `93. Утро [Ад-Духа] (الضحى)`
const s94 = `94. Раскрытие [Аш-Шарх] (الشرح)`
const s95 = `95. Смоковница [Ат-Тин] (التين)`
const s96 = `96. Сгусток [Аль-Алак] (العلق)`
const s97 = `97. Ночь величия [Аль-Кадр] (القدر)`
const s98 = `98. Ясное знамение [Аль-Баййина] (البينة)`
const s99 = `99. Землетрясение [Аз-Залзала] (الزلزلة)`
const s100 = `100. Скачущие [Аль-Адийат] (العاديات)`
const s101 = `101. Бичевание [Аль-Кари'а] (القارعة)`
const s102 = `102. Накопление [Ат-Такасур] (التكاثر)`
const s103 = `103. Знак времени [Аль-'Аср] (العصر)`
const s104 = `104. Клеветник [Аль-Хумаза] (الهمزة)`
const s105 = `105. Слон [Аль-Филь] (الفيل)`
const s106 = `106. Корейшиты [Курайш] (قريش)`
const s107 = `107. Милостыня [Аль-Ма'ун] (الماعون)`
const s108 = `108. Обильный [Аль-Каусар] (الكوثر)`
const s109 = `109. Неверные [Аль-Кафирун] (الكافرون)`
const s110 = `110. Помощь [Ан-Наср] (النصر)`
const s111 = `111. Пальмовые волокна [Аль-Масад] (المسد)`
const s112 = `112. Очищение [Аль-Ихлас] (الإخلاص)`
const s113 = `113. Рассвет [Аль-Фалак] (الفلق)`
const s114 = `114. Люди [Ан-Нас] (الناس)`

const sura = Keyboard.make([
    ['/change_reader'],
    [s1], [s2], [s3],
    [s4], [s5], [s6],
    [s7], [s8], [s9],
    [s10], [s11], [s12],
    [s13], [s14], [s15],
    [s16], [s17], [s18],
    [s19], [s20], [s21],
    [s22], [s23], [s24],
    [s25], [s26], [s27],
    [s28], [s29], [s30],
    [s31], [s32], [s33],
    [s34], [s35], [s36],
    [s37], [s38], [s39],
    [s40], [s41], [s42],
    [s43], [s44], [s45],
    [s46], [s47], [s48],
    [s49], [s50], [s51],
    [s52], [s53], [s54],
    [s55], [s56], [s57],
    [s58], [s59], [s60],
    [s61], [s62], [s63],
    [s64], [s65], [s66],
    [s67], [s68], [s69],
    [s70], [s71], [s72],
    [s73], [s74], [s75],
    [s76], [s77], [s78],
    [s79], [s80], [s81],
    [s82], [s83], [s84],
    [s85], [s86], [s87],
    [s88], [s89], [s90],
    [s91], [s92], [s93],
    [s94], [s95], [s96],
    [s97], [s98], [s99],
    [s100], [s101], [s102],
    [s103], [s104], [s105],
    [s106], [s107], [s108],
    [s109], [s110], [s111],
    [s112], [s113], [s114]
])

//bot hearсы на клаву начало

bot.hears(s1, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s2, async (ctx) => ctx.replyWithAudio('ffffffff'))

bot.hears(s3, async (ctx) => ctx.replyWithAudio('fffffff'))

bot.hears(s4, async (ctx) => ctx.replyWithAudio('ffffffffffff'))

bot.hears(s5, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s6, async (ctx) => ctx.replyWithAudio('ffffffff'))

bot.hears(s7, async (ctx) => ctx.replyWithAudio('fffffffffff'))

bot.hears(s8, async (ctx) => ctx.replyWithAudio('fffffffffff'))

bot.hears(s9, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s10, async (ctx) => ctx.replyWithAudio('fffffff'))

bot.hears(s11, async (ctx) => ctx.replyWithAudio('ffffffffff'))

bot.hears(s12, async (ctx) => ctx.replyWithAudio('fffffffffff'))

bot.hears(s13, async (ctx) => ctx.replyWithAudio('ffffffffffff'))

bot.hears(s14, async (ctx) => ctx.replyWithAudio('ffffffff'))

bot.hears(s15, async (ctx) => ctx.replyWithAudio('ffffffff'))

bot.hears(s16, async (ctx) => ctx.replyWithAudio('ffffffffff'))

bot.hears(s17, async (ctx) => ctx.replyWithAudio('ffffffff'))

bot.hears(s18, async (ctx) => ctx.replyWithAudio('ffffffffffff'))

bot.hears(s19, async (ctx) => ctx.replyWithAudio('ffffffffffff'))

bot.hears(s20, async (ctx) => ctx.replyWithAudio('ffffffff'))

bot.hears(s21, async (ctx) => ctx.replyWithAudio('ffffffffff'))

bot.hears(s22, async (ctx) => ctx.replyWithAudio('fffffffffff'))

bot.hears(s23, async (ctx) => ctx.replyWithAudio('fffffffffff'))

bot.hears(s24, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s25, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s26, async (ctx) => ctx.replyWithAudio('fffffff'))

bot.hears(s27, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s28, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s29, async (ctx) => ctx.replyWithAudio('fffffff'))

bot.hears(s30, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s31, async (ctx) => ctx.replyWithAudio('ffffffffff'))

bot.hears(s32, async (ctx) => ctx.replyWithAudio('fffffffffff'))

bot.hears(s33, async (ctx) => ctx.replyWithAudio('ffffffff'))

bot.hears(s34, async (ctx) => ctx.replyWithAudio('fffffff'))

bot.hears(s35, async (ctx) => ctx.replyWithAudio('fffffffffffff'))

bot.hears(s36, async (ctx) => ctx.replyWithAudio('fffffff'))

bot.hears(s37, async (ctx) => ctx.replyWithAudio('fffffffffffff'))

bot.hears(s38, async (ctx) => ctx.replyWithAudio('fffffff'))

bot.hears(s39, async (ctx) => ctx.replyWithAudio('ffffff'))

bot.hears(s40, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s41, async (ctx) => ctx.replyWithAudio('ffffffff'))

bot.hears(s42, async (ctx) => ctx.replyWithAudio('fffffffffff'))

bot.hears(s43, async (ctx) => ctx.replyWithAudio('fffffff'))

bot.hears(s44, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s45, async (ctx) => ctx.replyWithAudio('ffffffff'))

bot.hears(s46, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s47, async (ctx) => ctx.replyWithAudio('fffffff'))

bot.hears(s48, async (ctx) => ctx.replyWithAudio('fffffffffff'))

bot.hears(s49, async (ctx) => ctx.replyWithAudio('fffffffffffff'))

bot.hears(s50, async (ctx) => ctx.replyWithAudio('ffffffffff'))

bot.hears(s51, async (ctx) => ctx.replyWithAudio('ffffffffff'))

bot.hears(s52, async (ctx) => ctx.replyWithAudio('fffffffffffff'))

bot.hears(s53, async (ctx) => ctx.replyWithAudio('ffffffff'))

bot.hears(s54, async (ctx) => ctx.replyWithAudio('ffffffffff'))

bot.hears(s55, async (ctx) => ctx.replyWithAudio('fffffff'))

bot.hears(s56, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s57, async (ctx) => ctx.replyWithAudio('ffffff'))

bot.hears(s58, async (ctx) => ctx.replyWithAudio('ffffffffffff'))

bot.hears(s59, async (ctx) => ctx.replyWithAudio('fffffffffff'))

bot.hears(s60, async (ctx) => ctx.replyWithAudio('fffffff'))

bot.hears(s61, async (ctx) => ctx.replyWithAudio('fffffff'))

bot.hears(s62, async (ctx) => ctx.replyWithAudio('ffffffffff'))

bot.hears(s63, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s64, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s65, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s66, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s67, async (ctx) => ctx.replyWithAudio('ffffffff'))

bot.hears(s68, async (ctx) => ctx.replyWithAudio('fffffffffff'))

bot.hears(s69, async (ctx) => ctx.replyWithAudio('fffffffffffffff'))

bot.hears(s70, async (ctx) => ctx.replyWithAudio('fffffffffff'))

bot.hears(s71, async (ctx) => ctx.replyWithAudio('ffffffffffff'))

bot.hears(s72, async (ctx) => ctx.replyWithAudio('ffffffffffff'))

bot.hears(s73, async (ctx) => ctx.replyWithAudio('ffffffffffff'))

bot.hears(s74, async (ctx) => ctx.replyWithAudio('fffffffffffff'))

bot.hears(s75, async (ctx) => ctx.replyWithAudio('ffffffffffffff'))

bot.hears(s76, async (ctx) => ctx.replyWithAudio('ffffffff'))

bot.hears(s77, async (ctx) => ctx.replyWithAudio('fffffff'))

bot.hears(s78, async (ctx) => ctx.replyWithAudio('ffffffffff'))

bot.hears(s79, async (ctx) => ctx.replyWithAudio('ffffff'))

bot.hears(s80, async (ctx) => ctx.replyWithAudio('fffffffffffff'))

bot.hears(s81, async (ctx) => ctx.replyWithAudio('fffffffffff'))

bot.hears(s82, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s83, async (ctx) => ctx.replyWithAudio('ffffffffff'))

bot.hears(s84, async (ctx) => ctx.replyWithAudio('ffffffff'))

bot.hears(s85, async (ctx) => ctx.replyWithAudio('ffffff'))

bot.hears(s86, async (ctx) => ctx.replyWithAudio('ffffff'))

bot.hears(s87, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s88, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s89, async (ctx) => ctx.replyWithAudio('ffffffff'))

bot.hears(s90, async (ctx) => ctx.replyWithAudio('ffffffffff'))

bot.hears(s91, async (ctx) => ctx.replyWithAudio('ffffffffff'))

bot.hears(s92, async (ctx) => ctx.replyWithAudio('ffffff'))

bot.hears(s93, async (ctx) => ctx.replyWithAudio('fffffff'))

bot.hears(s94, async (ctx) => ctx.replyWithAudio('ffffffffffffff'))

bot.hears(s95, async (ctx) => ctx.replyWithAudio('ffffffff'))

bot.hears(s96, async (ctx) => ctx.replyWithAudio('ffffffffff'))

bot.hears(s97, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s98, async (ctx) => ctx.replyWithAudio('fffffff'))

bot.hears(s99, async (ctx) => ctx.replyWithAudio('ffffffffff'))

bot.hears(s100, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s101, async (ctx) => ctx.replyWithAudio('fffffffffff'))

bot.hears(s102, async (ctx) => ctx.replyWithAudio('fffffff'))

bot.hears(s103, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s104, async (ctx) => ctx.replyWithAudio('ffffffffffff'))

bot.hears(s105, async (ctx) => ctx.replyWithAudio('ffffffffff'))

bot.hears(s106, async (ctx) => ctx.replyWithAudio('fffffffffff'))

bot.hears(s107, async (ctx) => ctx.replyWithAudio('ffffffff'))

bot.hears(s108, async (ctx) => ctx.replyWithAudio('ffffffff'))

bot.hears(s109, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s110, async (ctx) => ctx.replyWithAudio('fffffff'))

bot.hears(s111, async (ctx) => ctx.replyWithAudio('ffffff'))

bot.hears(s112, async (ctx) => ctx.replyWithAudio('fffffffff'))

bot.hears(s113, async (ctx) => ctx.replyWithAudio('ffffff'))

bot.hears(s114, async (ctx) => ctx.replyWithAudio('ffffff'))

//bot hearсы на клаву конец

bot.command('change_reader', (ctx) => ctx.scene.enter('ChangeReaderWizard'))

bot.start(async (ctx) => {
	ctx.scene.enter('helloWizard')
})

bot.hears('Мухаммад Сиддик аль-Миншави (محمد صديق المنشاوي)', async (ctx) => {
	await ctx.reply('Отлично, ты выбрал Мухаммад Сиддик аль-Миншави (محمد صديق المنشاوي), ты в любой момент можешь сменить написав команду /change_reader \nНу а теперь выбери выбери суру', sura.reply())
})

const TenthReaderScene = new Scenes.WizardScene('TenthReaderWizard', bot)
module.exports = TenthReaderScene