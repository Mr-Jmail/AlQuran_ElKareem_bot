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

bot.hears(s1, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDhmJJi3VAHLbA5_-xYPnSiCVOaDAIAAL1FAACPRJQSgbK3AJpEdDUIwQ'))

bot.hears(s2, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDh2JJi4q6oWzqW90i2uPOm_l5hbYnAAL2FAACPRJQSqdvqJG4IyRgIwQ'))

bot.hears(s3, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDiGJJi5jLZWL9-qXcqVTNJyvxKHQsAAL3FAACPRJQStMYhy2g11QJIwQ'))

bot.hears(s4, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDiWJJi6QaSsWlh9QytC1GcsdFC5cgAAL5FAACPRJQSv6R2nqgFdsVIwQ'))

bot.hears(s5, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDimJJi61WbpyaVMW_Wb4WG16FPp9SAAL6FAACPRJQSj_rbICYB8siIwQ'))

bot.hears(s6, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDi2JJi7Vh_CUhf9s49shxUWhNjosoAAL7FAACPRJQSj-1TjBGISOyIwQ'))

bot.hears(s7, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDjGJJi76hfdwvcJ0o2Qm-QQ1toQWFAAL8FAACPRJQSstnBnv9CWA3IwQ'))

bot.hears(s8, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDjWJJi8F-tS1eakXurkPXhEJh_0yKAAL9FAACPRJQSvs8mN8Ic-pSIwQ'))

bot.hears(s9, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDjmJJi8iCJsKD3IpPgzXiyrnBYGI2AAL-FAACPRJQSonmNwHue5b6IwQ'))

bot.hears(s10, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDj2JJi83850QUv7ggZUES-Ecxei9nAAL_FAACPRJQSugvNjqaNGvDIwQ'))

bot.hears(s11, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDkGJJi9PqEmIXlyjAeqAOXglZu4g0AAMVAAI9ElBKZyjETZB_ancjBA'))

bot.hears(s12, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDkWJJi9huJLyW7h9jiXKufhI4T4iqAAIBFQACPRJQSunnr0olA2tkIwQ'))

bot.hears(s13, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDkmJJi9qCuBdv_Q4b9M8Whj7MaePYAAICFQACPRJQSkqObkym4krCIwQ'))

bot.hears(s14, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDk2JJi9woQLV_KMmv-NdC94DQ5XDjAAIDFQACPRJQSntwSSrSad71IwQ'))

bot.hears(s15, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDlGJJi96YNkjm9LwMHvwqi45YYoSRAAIEFQACPRJQSt-XP_t0lfGNIwQ'))

bot.hears(s16, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDlWJJjMNtWH3aXxdcDjHnMCnB8C78AAIIFQACPRJQSh1l8KprCuhzIwQ'))

bot.hears(s17, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDlmJJjMdqD2mObfljFVcjCDdY1B3LAAILFQACPRJQSo73X4gLrThOIwQ'))

bot.hears(s18, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDl2JJjMz2oyXcHd4WM4XAXqYljHBlAAIMFQACPRJQSnt2Jf51WS1OIwQ'))

bot.hears(s19, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDmGJJjNALuz1xMxosHEPp2BUH-P2WAAIOFQACPRJQSg3w9U1eL3gPIwQ'))

bot.hears(s20, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDmWJJjNQk-uLCGkPcP9_vBZ0r_8NgAAIPFQACPRJQShBT_M8EEo63IwQ'))

bot.hears(s21, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDmmJJjNjGPsC6q6eDZqsq952TD6WFAAIQFQACPRJQSuC_S65TjA_OIwQ'))

bot.hears(s22, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDm2JJjNzRw52FO4V8kJbXN0VZZeLwAAIRFQACPRJQSqGr_GYvS48ZIwQ'))

bot.hears(s23, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDnGJJjODYHtd0OVhvU7ULEiBxqXT1AAISFQACPRJQSvKoYluJDugjIwQ'))

bot.hears(s24, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDnWJJjOUbeeDJzIE1lY-cnBN1iimsAAITFQACPRJQSkdJrSQMww6GIwQ'))

bot.hears(s25, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDnmJJjOc8ehPv4R4LX2efhGds16qEAAIUFQACPRJQSrbhmJsRbXMQIwQ'))

bot.hears(s26, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDn2JJjOqjFokm4bOgro0vCqdKF37NAAIVFQACPRJQSse_z-JcZbV2IwQ'))

bot.hears(s27, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDoGJJjO3RxA_8cm8MXCd58HlcHv6MAAIWFQACPRJQSn4tvjoruOnLIwQ'))

bot.hears(s28, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDoWJJjPArkeuU5MGPW1BNGFQpDx2-AAIXFQACPRJQSg5mFCF3knP1IwQ'))

bot.hears(s29, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDomJJjPLwzc4Ro2XlxixM-qLWSS96AAIYFQACPRJQSgJ9AAHvDJUCJCME'))

bot.hears(s30, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDo2JJjPSZuLlwBmOQnPVWlbEzNu5FAAIZFQACPRJQSrj8DrwEAzL7IwQ'))

bot.hears(s31, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDpGJJjYf_IqzRIGEO3tC4OLtcrYR_AAIhFQACPRJQStuo_1Em7xWRIwQ'))

bot.hears(s32, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDpWJJjYkfx3ydz7yhCh_ume3yWbTXAAIiFQACPRJQSuqyO4_5xXzhIwQ'))

bot.hears(s33, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDpmJJjY6nDZ3UV9dRJ9Hagy8TEjxZAAIjFQACPRJQSj1G_Epzs_wXIwQ'))

bot.hears(s34, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDp2JJjZFOxBGJCyfpe-g2bF35KHZhAAIlFQACPRJQSsUwdA9bGREQIwQ'))

bot.hears(s35, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDqGJJjZOxA99_RV_2BkmZ2auI9OjaAAInFQACPRJQSvL1cHHb-A8EIwQ'))

bot.hears(s36, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDqWJJjZfig9NJM5d80tF2QwABxq04BwACKBUAAj0SUEqHC9xUyFtaRyME'))

bot.hears(s37, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDqmJJjZoV2ART7lt7Xdc7HAnBdUkhAAIpFQACPRJQSsVHNR4BInBeIwQ'))

bot.hears(s38, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDq2JJjZ0QmGwNRkxvjYY4h0K4WcEpAAIrFQACPRJQShmN5mhxB87HIwQ'))

bot.hears(s39, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDrGJJjaDF1ZMYY4kIxwkr94T_VAQqAAIsFQACPRJQSu3MYu38SwgGIwQ'))

bot.hears(s40, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDrWJJjaPcpa6wGWlfBCxR6qztCty_AAItFQACPRJQSruzSWc8dycNIwQ'))

bot.hears(s41, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDrmJJjaa5B-urBm51tQzFhVM5ujywAAIuFQACPRJQSmtnceVJHfFaIwQ'))

bot.hears(s42, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDr2JJjaj_omPQhQpfByqWKL_WB19PAAIvFQACPRJQSgAB4WmnbylQvyME'))

bot.hears(s43, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDsGJJjatpA6i5icwRm0nRvysrMJ9KAAIwFQACPRJQSuzrITUletfpIwQ'))

bot.hears(s44, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDsWJJjaye56aQyb78OHXkIx7QxzHEAAIxFQACPRJQSliQ5NTIqH-IIwQ'))

bot.hears(s45, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDsmJJja3XqgGxr3vBSQjc2TeDYxYMAAIyFQACPRJQSnr7KGRj5Yf1IwQ'))

bot.hears(s46, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDs2JJjkXcEX7u4Isvb4TDAAGec6u0twACNRUAAj0SUEppZ3l8R8zVliME'))

bot.hears(s47, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDtGJJjkc8XK59dCdpOGpQECLkHMbIAAI2FQACPRJQSq5FQ8rca1UbIwQ'))

bot.hears(s48, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDtWJJjklMMXnRxC9Fi_FGVdOFOC98AAI3FQACPRJQSqVc-0yvBpPxIwQ'))

bot.hears(s49, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDtmJJjkwqRSZ65hLfQtCECS36jFQxAAI4FQACPRJQSqmgWcQGRq6LIwQ'))

bot.hears(s50, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDt2JJjk3UaG4W8NPWesDtPJAQ15r5AAI5FQACPRJQStw-bdmwbdxtIwQ'))

bot.hears(s51, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDuGJJjk4uw-QUAUjKFOMifI24EP1LAAI6FQACPRJQSs4fhHBGkhKpIwQ'))

bot.hears(s52, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDuWJJjlB8UrH3VgR1ic_djCYVZHXaAAI7FQACPRJQSjbIpMfmqeHRIwQ'))

bot.hears(s53, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDumJJjlLIm5u1SvgN2acd5b01GTijAAI8FQACPRJQSlhjdtwAASwIqiME'))

bot.hears(s54, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDu2JJjlPoCaI5JG9V4QmyuInroFbJAAI9FQACPRJQSi73zYEfY2lMIwQ'))

bot.hears(s55, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDvGJJjlQ5aLaFaIBvfk5agoEByE8hAAI-FQACPRJQSiEqxZ_llM72IwQ'))

bot.hears(s56, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDvWJJjlUB-EryLVSib4piidHmQWwcAAI_FQACPRJQSuvrCmwDr85wIwQ'))

bot.hears(s57, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDvmJJjldjApVVEndB7Y77kkaVxkS5AAJAFQACPRJQSvBPCGLGO2qcIwQ'))

bot.hears(s58, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDv2JJjlhvYMJicggR0fb7JTV85XHdAAJBFQACPRJQSmAiyiTQyrXPIwQ'))

bot.hears(s59, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDwGJJjlqD98WGlGEFCDQkvIKBMfjtAAJCFQACPRJQShxkWJr9lk7nIwQ'))

bot.hears(s60, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDwWJJjlwvpy5bi7hB71ULBzckf2UrAAJDFQACPRJQSvZrjKOXCobFIwQ'))

bot.hears(s61, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDwmJJjwRuvzkx2QTJwSzBhyXEAAHAbQACRxUAAj0SUEoay-wo6QRa8yME'))

bot.hears(s62, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDw2JJjwbR1M9fHcXyAAHdeuqZ5lwd0wACSBUAAj0SUEorvJjHHqbSMCME'))

bot.hears(s63, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDxGJJjwhyyYrkX9pYS0M2oik2KuQPAAJJFQACPRJQSu5tcf96juP2IwQ'))

bot.hears(s64, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDxWJJjwq1bhAhjvABIIoshZKpq4MSAAJKFQACPRJQSgwsvrTFtjU0IwQ'))

bot.hears(s65, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDxmJJjw1ZWQjJVIGOuHiRCOm8LXJXAAJLFQACPRJQSkyVqLI1SpR0IwQ'))

bot.hears(s66, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDx2JJjw_e9DXxAcBR-GrKMMlteeieAAJMFQACPRJQSmKbX3gNYeUGIwQ'))

bot.hears(s67, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDyGJJjxKF6M1YGJp6kuRy913mHKakAAJNFQACPRJQSvWVRwv_u6zQIwQ'))

bot.hears(s68, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDyWJJjxbDeFivDsewY85rFMjYXKPwAAJOFQACPRJQSuAmgXouTlTPIwQ'))

bot.hears(s69, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDymJJjxjFSiBvY5WsFoqMWJCc3jxGAAJPFQACPRJQSma8EeV3Ps0LIwQ'))

bot.hears(s70, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDy2JJjxyK-lmXGUIcF8AdqmrTZ3LeAAJQFQACPRJQSkHNNxYvNXHxIwQ'))

bot.hears(s71, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDzGJJjx504UoqAl_3kAMBV2PWrc3zAAJRFQACPRJQSmmULKMrwrDkIwQ'))

bot.hears(s72, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDzWJJjyB1ekXxHOe8-KqAG-_fZ9X5AAJSFQACPRJQSobKuJnRnKRVIwQ'))

bot.hears(s73, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDzmJJjyFE07TXf8VVJ9VvU6132P3eAAJTFQACPRJQSnzFjW6tfMCXIwQ'))

bot.hears(s74, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIDz2JJjyMLcsf7ZgABHBZkAn-5Jx0RHgACVBUAAj0SUEprhTQ3gqou5yME'))

bot.hears(s75, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID0GJJjyROK9Jin1ppIGDBRVxP_KT8AAJVFQACPRJQSgKZy8E_B8SHIwQ'))

bot.hears(s76, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID0WJJkPznpSztXhI6Ue0bkcsat61wAAJYFQACPRJQSlP4_78_9ql4IwQ'))

bot.hears(s77, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID0mJJkP4LFw6-iYrBF-IUT0gEKXbVAAJZFQACPRJQShMF87gCRa5PIwQ'))

bot.hears(s78, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID02JJkQAByq8OzJeUzqkWMEe1H4WROwACWhUAAj0SUEr6bWwBPJXhmSME'))

bot.hears(s79, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID1GJJkQEjEWV1gcnA6d_JdPSs3IZhAAJbFQACPRJQSkOoSEiFTfOZIwQ'))

bot.hears(s80, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID1WJJkQJKTjQhig1P9yGQT7wyZy5aAAJcFQACPRJQSjZDF0jEtM5LIwQ'))

bot.hears(s81, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID1mJJkQI9l2WgBgxGP3VEyo0g06MVAAJdFQACPRJQSn6swzjyvIDGIwQ'))

bot.hears(s82, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID12JJkQSeKhGB24QUQTs2F1tG4atCAAJeFQACPRJQSvwbe45n4j6eIwQ'))

bot.hears(s83, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID2GJJkQbTmQ_rERj5k6e8usgJN8QhAAJfFQACPRJQStuh81FkEnc9IwQ'))

bot.hears(s84, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID2WJJkQfR3QEIjCGqBL--WwqSRd-pAAJgFQACPRJQShmBzFqVaSyXIwQ'))

bot.hears(s85, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID2mJJkQjBwgrZkpVO2S4dd7b4A_TIAAJhFQACPRJQSjIBcRPaevrNIwQ'))

bot.hears(s86, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID22JJkQnD9ozI1ksC5r82X9vJCFDlAAJiFQACPRJQShzqJx9tx9TeIwQ'))

bot.hears(s87, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID3GJJkQmDJT-dPD_xhQWXt4YsWrkJAAJjFQACPRJQStuQSqQWI7ICIwQ'))

bot.hears(s88, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID3WJJkQuALSzUOCB1NZtvIWsHBsMLAAJkFQACPRJQSifbQ0KQcoF5IwQ'))

bot.hears(s89, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID3mJJkQwlpQGs_IeFTc2W1jjvoorrAAJlFQACPRJQSv6kgZiOt3nJIwQ'))

bot.hears(s90, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID32JJkQwXvBdjT3kOBb1ATsPuBoK5AAJmFQACPRJQSkNvvouJBx4-IwQ'))

bot.hears(s91, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID4GJJkY4EHNyAC7IwR9oGSzEESVDQAAJoFQACPRJQSgQWuWJ8yrJ8IwQ'))

bot.hears(s92, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID4WJJkY-VmSwI_iA8RLQxjC9tNDRqAAJpFQACPRJQSgzcHN6nXMRQIwQ'))

bot.hears(s93, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID4mJJkY_CFgbPvNLivswTCHwrOxhVAAJqFQACPRJQSpVNnI_FHT1DIwQ'))

bot.hears(s94, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID42JJkZAAAa0WC5KWmR1WaasntNYeigACaxUAAj0SUEr6Me5T_7GJvSME'))

bot.hears(s95, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID5GJJkZHJXZfepn73LHaqtgOc6gi6AAJsFQACPRJQSiBXYzhOkHygIwQ'))

bot.hears(s96, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID5WJJkZEXW5WsJJ2uiUaxGAVO3xm9AAJtFQACPRJQSt6lm62SGbTvIwQ'))

bot.hears(s97, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID5mJJkZJT4AoXV0iGAAEn-Rq2XF9ANQACbhUAAj0SUEoH0rT-BBO2ByME'))

bot.hears(s98, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID52JJkZK6mCToQEzrZO_2wU5HCXRqAAJvFQACPRJQSpZ2bsBOLqB8IwQ'))

bot.hears(s99, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID6GJJkZKSNUBlGCQpNHwhbbDiv0lwAAJwFQACPRJQSnkvI4YsVn5cIwQ'))

bot.hears(s100, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID6WJJkZP5Us6FmFN9wPfoqwk5EPQWAAJxFQACPRJQSiucJT0YR5h5IwQ'))

bot.hears(s101, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID6mJJkZPurXCGrN-TWvPz-kG_QjrlAAJyFQACPRJQSg3oIfrwXeqcIwQ'))

bot.hears(s102, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID62JJkZSmOdCRmHGSEVh2oc0--g02AAJzFQACPRJQSpUR4KGCsz6-IwQ'))

bot.hears(s103, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID7GJJkZS5mhUFOL4aS82wxsqTKexKAAJ0FQACPRJQSoUSv0qqpiq5IwQ'))

bot.hears(s104, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID7WJJkZQjf5IDyneADAUhFYsHSRf1AAJ1FQACPRJQSrtvTWeiicGAIwQ'))

bot.hears(s105, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID7mJJkZRIFUW2AvD17cW6OcrTQz3qAAJ2FQACPRJQSkTQmPsLLrKaIwQ'))

bot.hears(s106, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID72JJkhsrV884_f9AEFA8-p1RYE7XAAJ3FQACPRJQSrdGHn9YlR1xIwQ'))

bot.hears(s107, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID8GJJkhwCsNdwK0evhUkx3SM-pJlcAAJ4FQACPRJQSsIMqTfkaVQkIwQ'))

bot.hears(s108, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID8WJJkhxfi-XytwqTfqBAYmmNEj6xAAJ5FQACPRJQSvhloYdIOc85IwQ'))

bot.hears(s109, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID8mJJkhxTfqBDLdcUPcQjAUJ_p0FLAAJ6FQACPRJQSiWVsHTFTrs7IwQ'))

bot.hears(s110, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID82JJkhxH6UsyCUpjI-Mg6R3sBrt1AAJ7FQACPRJQSupR8b2DsdlwIwQ'))

bot.hears(s111, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID9GJJkh2xy3PXbrYjFDndft78Nvd1AAJ8FQACPRJQSrUSoz0fwi9HIwQ'))

bot.hears(s112, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID9WJJkh3QVL7hkKiU05JB9qYXgt4yAAJ9FQACPRJQSgMAAUve4HPL9SME'))

bot.hears(s113, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID9mJJkh7IJibBuV-OXxO45mVZm-XUAAJ-FQACPRJQSmp_ydFXBjP3IwQ'))

bot.hears(s114, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAID92JJkh7ZdV884vE381JCThM-8TalAAJ_FQACPRJQSnp1O2kiGOkUIwQ'))

//bot hearсы на клаву конец

bot.command('change_reader', (ctx) => ctx.scene.enter('ChangeReaderWizard'))

bot.start(async (ctx) => {
	ctx.scene.enter('helloWizard')
})

bot.hears('Мохамед Махмуд Таблави (محمد محمود الطبلاوي)', async (ctx) => {
	await ctx.reply('Отлично, ты выбрал Мохамед Махмуд Таблави (محمد محمود الطبلاوي), ты в любой момент можешь сменить написав команду /change_reader \nНу а теперь выбери выбери суру', sura.reply())
})

const FourthReaderScene = new Scenes.WizardScene('FourthReaderWizard', bot)
module.exports = FourthReaderScene