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

bot.hears(s1, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICxmJI0Jc9KZ7lesT5jidmmC_AdKl9AAI2FgACwtNJSisb6t4LDZqnIwQ'))

bot.hears(s2, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICx2JI0LdSPhSRfN4ymLRtt60KHwiXAAI3FgACwtNJSueewgbBreBrIwQ'))

bot.hears(s3, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICyGJI0M2xjCngOfzMSlSOmttHNwsAAzgWAALC00lK9b6Pl0wZhAIjBA'))

bot.hears(s4, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICyWJI0ON9TA0RT-h1MhMkZ0Py5OIyAAI5FgACwtNJSsUHCjkopKAHIwQ'))

bot.hears(s5, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICymJI0P5JRRmVjaqTFenxB9jIGVfDAAI6FgACwtNJSiV4QgbDJeB4IwQ'))

bot.hears(s6, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICy2JI0Rrk-CDKnaiPg8399o5_AzH9AAI7FgACwtNJSs-bSuIRYbAQIwQ'))

bot.hears(s7, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICzGJI0TruWSoTkzhaK6nptpKkDTwlAAI8FgACwtNJSkyB8bnWJotaIwQ'))

bot.hears(s8, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICzWJI0UeTzILzjiF4mJwme4HYmXbPAAI9FgACwtNJSh00G_Cw3yByIwQ'))

bot.hears(s9, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICzmJI0V7lw9j9-c-yWnZyROrbxaUeAAI-FgACwtNJSjLanHad8DFOIwQ'))

bot.hears(s10, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICz2JI0XC8RUmEVECgo31cJA7KE8IyAAI_FgACwtNJSlkmiAxApiBBIwQ'))

bot.hears(s11, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC0GJI0YIYgJ2TUk9iWaRbdoo8JgABDgACQRYAAsLTSUqHxtkhSkGkcSME'))

bot.hears(s12, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC0WJI0ZLPRmracMFq8wzg7sL1s1fXAAJCFgACwtNJShOMLuVVBG4PIwQ'))

bot.hears(s13, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC0mJI0ZrxmAXY4WKBXCfbnMuR5126AAJDFgACwtNJSpIC3q-QEJwBIwQ'))

bot.hears(s14, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC02JI0aTArJGT83i2f2UrPXLjEq4GAAJEFgACwtNJSpvpM-H26BwsIwQ'))

bot.hears(s15, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC1GJI0lJ6zhjgajIYnz6Hz2FqMPLgAAJFFgACwtNJSgsVbnISGr-RIwQ'))

bot.hears(s16, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC1WJI0zPgykZLC1gD_3rCT3-1Gwv7AAJGFgACwtNJSg2oZu89HAxyIwQ'))

bot.hears(s17, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC1mJI0z9KqaXTnBREJ9t4H23mCjSeAAJHFgACwtNJSu0skUv6oJB7IwQ'))

bot.hears(s18, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC12JI00wpPTXdprnAzD511NbiCSMaAAJIFgACwtNJSvwBuFwduwweIwQ'))

bot.hears(s19, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC2GJI01Wn9YiPCdQ0wZtL2zQvb4ZnAAJJFgACwtNJSlgoeicp6I9sIwQ'))

bot.hears(s20, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC2WJI02FEhjar-gPWQk2x316YNp9tAAJKFgACwtNJSp0sT3T7ck-SIwQ'))

bot.hears(s21, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC2mJI021x40E7Z7baxQABiHSG4xBvWQACSxYAAsLTSUr-OblEpCTzLCME'))

bot.hears(s22, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC22JI03yusLireXuJx5YrjsTftrTiAAJMFgACwtNJSls2kwIisuAtIwQ'))

bot.hears(s23, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC3GJI04ZNUZHg5pQgxDBDK6n5BiILAAJNFgACwtNJSgEQIobhmMy0IwQ'))

bot.hears(s24, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC3WJI05NXLKjxOlk7oD47aXmZvxLWAAJOFgACwtNJSia24X6qW5BEIwQ'))

bot.hears(s25, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC3mJI05osGv-Buv4V8mBhqzybRNqOAAJPFgACwtNJSk4OstgyZ6ivIwQ'))

bot.hears(s26, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC32JI06j5RhHbs1rrLqSTPjRfHZc3AAJQFgACwtNJSpZB5AUqpQE-IwQ'))

bot.hears(s27, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC4GJI07T-o01pYyIJus4xaYA6CC3PAAJSFgACwtNJSuUaXlBu1r9DIwQ'))

bot.hears(s28, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC4WJI08HaAwXuzPc4TZRLfSKrvQLtAAJTFgACwtNJSmZJwaxbNnMmIwQ'))

bot.hears(s29, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC4mJI083QCRCvrt1JQBoF1nXUrOmNAAJUFgACwtNJSkTPF8ramjOGIwQ'))

bot.hears(s30, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC42JI09ZCzn5OVOKrCz1m7kxXBHnKAAJVFgACwtNJSvXgA2L3Sxd3IwQ'))

bot.hears(s31, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC7WJI1Yv-2wWlKnI5wvDhkjrGt0ClAAJiFgACwtNJSon4ghX0ecjtIwQ'))

bot.hears(s32, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC7mJI1ZB9a6a0-dK99pNAEHw_OQa_AAJjFgACwtNJSgwpuc8D3EAuIwQ'))

bot.hears(s33, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC72JI1Z3jXnyyHKH8_ok6tsfXMtzAAAJkFgACwtNJSuhsUI3--uxaIwQ'))

bot.hears(s34, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC8GJI1aUAAVXKFXnjs84J5RRTZVgmaQACZRYAAsLTSUq_ryooReFCQSME'))

bot.hears(s35, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC8WJI1azz7J4VgibesNzPa80EcLMQAAJmFgACwtNJSgn53OBilkxHIwQ'))

bot.hears(s36, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC8mJI1bIFfQI_RPCPcauZE5tK7ALAAAJnFgACwtNJSvP87ShZ2eNPIwQ'))

bot.hears(s37, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC82JI1btWjjh1dPIy1cUHkGT7aL42AAJoFgACwtNJSk9mXIHstti7IwQ'))

bot.hears(s38, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC9GJI1cMtpPja1jXPZ-Dfu3P_k8qiAAJpFgACwtNJSqaiqV1K9VzaIwQ'))

bot.hears(s39, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC9WJI1c9FX7K1UTTWScZsrSme7W5eAAJqFgACwtNJStUgaqOpjzrgIwQ'))

bot.hears(s40, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC9mJI1dv_yduGbQFsY9eHaG0Y7IU6AAJrFgACwtNJSnvcGY98YILOIwQ'))

bot.hears(s41, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC92JI1eSlXLygSX0hynY75mvsVdRrAAJsFgACwtNJSg9Z9khKZ4a-IwQ'))

bot.hears(s42, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC-GJI1etOVtdWCp2RVXD5-WvseM_IAAJtFgACwtNJSrFsFQcnkYzBIwQ'))

bot.hears(s43, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC-WJI1fQzDx0z5EYkPQObCusMBXfBAAJuFgACwtNJSsw341wUQUH0IwQ'))

bot.hears(s44, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC-mJI1fg2u-4YtWjln1gWEqX7bL1MAAJvFgACwtNJSpExw2oNX7unIwQ'))

bot.hears(s45, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC-2JI1f0Iwcu4v2whkfknzdTBvhKgAAJwFgACwtNJSuLzvj0J4RaBIwQ'))

bot.hears(s46, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC_GJI1qPmCNUPdMtBfTtpdNDdUa2YAAJxFgACwtNJSt8mrVKlMrRmIwQ'))

bot.hears(s47, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC_WJI1qqP66FC2mS3ZUrrfh3_Kh0OAAJyFgACwtNJSrw9dzzUvGVSIwQ'))

bot.hears(s48, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC_mJI1rAu7y9MlogGzWCT-z1i8fO-AAJzFgACwtNJStPBxG_Rx67kIwQ'))

bot.hears(s49, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIC_2JI1rVQlgirUuSLfRYpxoCQJazfAAJ0FgACwtNJSuN85w9qTiTxIwQ'))

bot.hears(s50, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDAAFiSNa5KJ7yYv8U3BIpxNSl72CigwACdRYAAsLTSUqGZ6dR33hccSME'))

bot.hears(s51, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDAWJI1rwmVO9zD3w8Z8gw-HXOOpH1AAJ2FgACwtNJSicmzYq74gd6IwQ'))

bot.hears(s52, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDAmJI1r5IoO6jjBB3vKVw9Q1aK2stAAJ3FgACwtNJSoGX-CeZ88-tIwQ'))

bot.hears(s53, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDA2JI1sGP_2b6LS8WfLm84afPJqXZAAJ4FgACwtNJShYqOvQWhAPiIwQ'))

bot.hears(s54, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDBGJI1sMB56-cIHJwE4kBSxcLoMlHAAJ5FgACwtNJSnwIZuOT4D08IwQ'))

bot.hears(s55, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDBWJI1sdAkDZdSj5_OqVFGsnBdbutAAJ6FgACwtNJSuDe4YAAAX1ndCME'))

bot.hears(s56, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDBmJI1srjDjWszCezBWD68da8CglKAAJ7FgACwtNJSvXGe6yuQsMrIwQ'))

bot.hears(s57, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDB2JI1s8-xnKvudPBTPpAXkc0smXjAAJ8FgACwtNJSm69QVgQrjROIwQ'))

bot.hears(s58, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDCGJI1tSq3n_-b0_JZakpAV1MlphlAAJ9FgACwtNJSmJ88EhGpy_QIwQ'))

bot.hears(s59, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDCWJI1tp4VuxTZqtMWPaF63iZWhdwAAJ-FgACwtNJSqlkEYrgJDOxIwQ'))

bot.hears(s60, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDCmJI1t9AxBI9WUhHn0vBf4meEZJ3AAJ_FgACwtNJSpa3pupB5xJkIwQ'))

bot.hears(s61, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDC2JI16BnT6mDcjhxcfyKzzzBrzxXAAKAFgACwtNJSkdaGRGo7ee8IwQ'))

bot.hears(s62, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDDGJI16Mxa8QFQJXNBkIOJ6A5CYgzAAKBFgACwtNJSlwMYo20OA6TIwQ'))

bot.hears(s63, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDDWJI16UeZ3WSoiwHyxKMC7xortnSAAKCFgACwtNJSnXKIjCZ_tNIIwQ'))

bot.hears(s64, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDDmJI16lF25a0Qc5WScKEhydGNpLmAAKDFgACwtNJShfdsw_hZct-IwQ'))

bot.hears(s65, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDD2JI16u9MRMtIDsHDWrIbHDGAvwwAAKEFgACwtNJSlMYWlAjJV0kIwQ'))

bot.hears(s66, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDEGJI167GrbgS_yrbcgSBl28qixpNAAKFFgACwtNJSrT_aQdW3xt4IwQ'))

bot.hears(s67, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDEWJI17Kgbla65DQYUFgqz-FZwaWMAAKGFgACwtNJShJPa0DM4_5rIwQ'))

bot.hears(s68, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDEmJI17Vej2DZN0LIOrq-_tm0Z9V9AAKHFgACwtNJSoHcmmIM0ygiIwQ'))

bot.hears(s69, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDE2JI17lh3usDmJ2dkDPDAkTj6tbeAAKIFgACwtNJSt7j2P0Hw8s2IwQ'))

bot.hears(s70, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDFGJI17yS9YzUzzc6rftPMNFaYzoVAAKJFgACwtNJSjEDYh4N5jtwIwQ'))

bot.hears(s71, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDFWJI174qaZpE0Ih2F3AgM5LrFfS2AAKKFgACwtNJSj4nVnNv-3SPIwQ'))

bot.hears(s72, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDFmJI18AVSUsZmv6vBj70Vy3Ujt2RAAKLFgACwtNJStNCl8Tvr9LEIwQ'))

bot.hears(s73, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDF2JI18PRG_t_mLaRSQTag4NbHL4NAAKMFgACwtNJSlkrgKfR8X80IwQ'))

bot.hears(s74, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDGGJI18ZcXX_iNoEhPFhbCiZdd80xAAKNFgACwtNJSqED2y71Cs1JIwQ'))

bot.hears(s75, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDGWJI18kOJYLMxgKTbrrEL1U0shwYAAKOFgACwtNJSihiKZvs5XXKIwQ'))

bot.hears(s76, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDGmJI2Th-6FWt26rEqsHw1NCP-lfqAAKQFgACwtNJSre2DCDRfZWKIwQ'))

bot.hears(s77, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDG2JI2TlhNs5FHoVL8omSpGiJwWIjAAKRFgACwtNJSjFDYlTlAs71IwQ'))

bot.hears(s78, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDHGJI2TsqpFZckf7_Pdxy0ZkzccJ-AAKSFgACwtNJSuNMIU55W34pIwQ'))

bot.hears(s79, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDHWJI2T0gaw2Ksas7f4LSk3hTmqo7AAKTFgACwtNJSuVLSUQve7pFIwQ'))

bot.hears(s80, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDHmJI2T9p_Ia6zCoR2fmIjKklIDhFAAKUFgACwtNJSjXWG4a18VjEIwQ'))

bot.hears(s81, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDH2JI2UF_Dn61fEyAEMiQbJLQTWf8AAKVFgACwtNJSvKoho-mlnsXIwQ'))

bot.hears(s82, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDIGJI2UJvmlBG_tbh_wjrn4pjLRedAAKWFgACwtNJShab_gSZZllHIwQ'))

bot.hears(s83, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDIWJI2US6UYBCoJUSjIqvrSlO8uDxAAKXFgACwtNJSkwwEXH9NyQiIwQ'))

bot.hears(s84, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDImJI2UVBGWew3KtJBEtlt8KzVBkpAAKYFgACwtNJSk92CBHy9v2tIwQ'))

bot.hears(s85, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDI2JI2UaLAAFER2DPOLKvULLQYVu-uAACmRYAAsLTSUqwDULm807XbCME'))

bot.hears(s86, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDJGJI2Ueyk0l38RBvb-eVElajm4YYAAKaFgACwtNJSoFmrQwGdAa5IwQ'))

bot.hears(s87, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDJWJI2UhrhZLyNCjX9EkO3qaemT-MAAKbFgACwtNJSrNwQihqAd3xIwQ'))

bot.hears(s88, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDJmJI2Uq4YK3pmG0XLA4zISkM-I8LAAKcFgACwtNJSiCUYYrE8YtYIwQ'))

bot.hears(s89, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDJ2JI2UytD8vZgzzCovKbJx8Rx3LVAAKdFgACwtNJSvgEec4AAfvXSiME'))

bot.hears(s90, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDKGJI2U3iPkXf_AEQnOYyGhLdm9pBAAKeFgACwtNJSnzRVhduP6deIwQ'))

bot.hears(s91, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDKWJI2j1fT1mjWie5R5fgWFQY-wKzAAKfFgACwtNJSkJsfiIvOasFIwQ'))

bot.hears(s92, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDKmJI2j4KXSLKzmfSAAHU-J_Z6D3V7wACoBYAAsLTSUpLII71BCBLnSME'))

bot.hears(s93, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDK2JI2j5ZV-tNTgZgdKqXYaAOIckdAAKhFgACwtNJSkMybAOPoIGCIwQ'))

bot.hears(s94, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDLGJI2j8np-nTP8QDUKSm60jbofMTAAKiFgACwtNJSg-chHL2HE7BIwQ'))

bot.hears(s95, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDLWJI2j-yJIvVb9hHL6j1URyCeJ-RAAKjFgACwtNJSolNqgXOQ7OHIwQ'))

bot.hears(s96, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDLmJI2kCUk3H2dN3p9Tjd0qQN09b1AAKkFgACwtNJSuUAAcxX1mestyME'))

bot.hears(s97, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDL2JI2kFdlixVdTj72AF8sTlANkKcAAKlFgACwtNJShydXnAauBo_IwQ'))

bot.hears(s98, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDMGJI2kJlJMT0z_-cHtPL0ReOL3ujAAKmFgACwtNJSpV-fL7Qcvd0IwQ'))

bot.hears(s99, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDMWJI2kNyGIQX9g32qcffHYs995LOAAKnFgACwtNJStApbtjex9rZIwQ'))

bot.hears(s100, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDMmJI2kNsz_m96eZkDf5-X_6QsVX9AAKoFgACwtNJSsWmPJ-IuOngIwQ'))

bot.hears(s101, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDM2JI2kSdo7kkC0mtKtt1d-MSkgWXAAKpFgACwtNJSphzr0HgakScIwQ'))

bot.hears(s102, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDNGJI2kVcKiA3dZ7d3eQJTujwrqg1AAKqFgACwtNJSlZ6TtirL-bvIwQ'))

bot.hears(s103, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDNWJI2kVXmqCUZ6PN7XBRoVrgC-J8AAKrFgACwtNJSkpUkggabM_IIwQ'))

bot.hears(s104, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDNmJI2kaVjE96YotFjnJPVEIZcEWxAAKsFgACwtNJStK0G65_Z60JIwQ'))

bot.hears(s105, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDN2JI2kbW5vmvZX9OL-5gEy5qvaTVAAKtFgACwtNJSrTrwvCLEfwrIwQ'))

bot.hears(s106, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDOGJI2s5EkZu3epKzQJpQ3BD5T71mAAKxFgACwtNJSidzFHrq8bZ7IwQ'))

bot.hears(s107, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDOWJI2s7WiWKvvcEsaqt2QHIAAYQbiwACshYAAsLTSUqVBdYZ6p5rJiME'))

bot.hears(s108, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDOmJI2s5370bT4MSATxVLnccePSnGAAKzFgACwtNJShoAAZFBZGmdTSME'))

bot.hears(s109, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDO2JI2s8I9xtx_ZDTwBTtBZggCXzSAAK0FgACwtNJSv_yyZu6hdzWIwQ'))

bot.hears(s110, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDPGJI2s9ymIBMRbScM0woJmOlmHc2AAK1FgACwtNJSr7JFju3JpdxIwQ'))

bot.hears(s111, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDPWJI2s9_7YNlPz7JE33S8txSDAEKAAK2FgACwtNJSjV7_g8eV64fIwQ'))

bot.hears(s112, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDPmJI2tClopizkJk_T4j1X7_-tJ_ZAAK3FgACwtNJSgLiXTPxxE5GIwQ'))

bot.hears(s113, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDP2JI2tBQECAdofRvkKXwC0hQ0Rt2AAK4FgACwtNJSk6KakWRYk3TIwQ'))

bot.hears(s114, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDQGJI2tA6i8TIoiV_NXzzWGmjVvcdAAK5FgACwtNJSmOX-uneBQ7gIwQ'))

//bot hearсы на клаву конец

const ReaderChoise = Keyboard.make([
    ['Аль-Афаси'], ['Абдуль-Басит Абдус-Самад'], ['Ахмад бин Али Аль-Аджми'], ['Мохамед Махмуд Таблави']
]).oneTime()

bot.command('change_reader', (ctx) => ctx.reply('Выбери нового чтеца', ReaderChoise.reply()))

bot.start(async (ctx) => {
	ctx.scene.enter('helloWizard')
})

bot.hears('Аль-Афаси', ctx => ctx.scene.enter('FirstReaderWizard'))
bot.hears('Абдуль-Басит Абдус-Самад', ctx => ctx.scene.enter('SecondReaderWizard'))
bot.hears('Ахмад бин Али Аль-Аджми', async (ctx) => {
	await ctx.reply('Отлично, ты выбрал Ахмад бин Али Аль-Аджми, ты в любой момент можешь сменить написав команду /change_reader \nНу а теперь выбери выбери суру', sura.reply())
})
bot.hears('Мохамед Махмуд Таблави', ctx => ctx.scene.enter('FourthReaderWizard'))

const ThirdReaderScene = new Scenes.WizardScene('ThirdReaderWizard', bot)
module.exports = ThirdReaderScene