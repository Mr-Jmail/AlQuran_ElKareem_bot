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

bot.hears(s1, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBD2JIZnTkUi-194DB4Ash13u6XUxUAAJECwACjZI5UnctN6hhD0KDIwQ'))

bot.hears(s2, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBEGJIZnS2jhiaqZ5aEgp9ocjF-I3OAAL-EgACAjFBSiLbd398issEIwQ'))

bot.hears(s3, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBEWJIZnSllMURqlys9jIqfOOEL6rsAAICEwACAjFBSkyOp7eEJL3LIwQ'))

bot.hears(s4, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBEmJIZnRyVczR8xjubN3RUJg7nC0wAAIEEwACAjFBSplUlt_7j6TCIwQ'))

bot.hears(s5, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBE2JIZnSd3ympoROrdM7nL5c3d4x4AAIFEwACAjFBSpysxYKTyWxeIwQ'))

bot.hears(s6, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBFGJIZnSsGksNFpupz8Kqx2_A9iiZAAIHEwACAjFBSh_HgEIZlhUwIwQ'))

bot.hears(s7, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBFWJIZnScAh9_3ftFsk12Hw-M0MTKAAIIEwACAjFBSks3cgN0i7jnIwQ'))

bot.hears(s8, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBFmJIZnR7VUsxr3sVsabVQpeagw7wAAIKEwACAjFBSj71eR8QJMNsIwQ'))

bot.hears(s9, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBF2JIZnT8ZjzEdegneXgS8zdr3fAWAAILEwACAjFBStB4ydjkiaQ0IwQ'))

bot.hears(s10, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBGGJIZnQdsPQffCDXWxJF6HR-YnWMAAIMEwACAjFBSto0V3ye-wEzIwQ'))

bot.hears(s11, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBGWJIZnS5fRSjDKX53Ly3xMl0qZVzAAINEwACAjFBSqu_NNM3vUILIwQ'))

bot.hears(s12, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBGmJIZnR0fVgJXek0jaQYA1u-9bJgAAIPEwACAjFBSqYyChAnBRDRIwQ'))

bot.hears(s13, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBG2JIZnRk8jMOrZ8EnvV0yP0-EYQUAAIQEwACAjFBShGqTtL-rR32IwQ'))

bot.hears(s14, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBHGJIZnTky30DdiCyCOBD41NxdqHUAAIREwACAjFBSuOW0u96-IXNIwQ'))

bot.hears(s15, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBHWJIZnRGXfqu3dea9R_4LrAosuMJAAISEwACAjFBSo2OJ4Qt1JjBIwQ'))

bot.hears(s16, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBLWJIZ02zHo1S-LtOyUsBadHR9TIDAAITEwACAjFBSrAYE50lY54yIwQ'))

bot.hears(s17, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBLmJIZ03S4CuauuYhx3J-f3PPnFADAAL5FAAC_cpASkkFoKLcWd1kIwQ'))

bot.hears(s18, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBL2JIZ02QcF-OD3ju4CVz3LfzBp2pAAIVEwACAjFBSkk0_10rHFAdIwQ'))

bot.hears(s19, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBMGJIZ01E27riEWUUX89pRSHS3W37AAIWEwACAjFBSiTw0k6rMCZMIwQ'))

bot.hears(s20, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBMWJIZ03gcoEPo23mdZz-CuqOjKn1AAIXEwACAjFBSosZannL1yFQIwQ'))

bot.hears(s21, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBMmJIZ01RzdXvbdnD0cdeWNhI5hObAAIZEwACAjFBSvN52oHu03PdIwQ'))

bot.hears(s22, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBM2JIZ00fZ0yZoeLG6yw0MSQc2b9pAAIbEwACAjFBSh-LgNsulDSxIwQ'))

bot.hears(s23, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBNGJIZ00GAQzYA9Ytl_U28UXbGAeBAAIdEwACAjFBStuj8yWz_M7hIwQ'))

bot.hears(s24, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBNWJIZ01G2QNzXpfsaPCFtLNUXHZzAAIeEwACAjFBSor7J94_TEMYIwQ'))

bot.hears(s25, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBNmJIZ00BG4nmEz6sIUqgTxdC3QykAAIfEwACAjFBSu_68rwXaAHyIwQ'))

bot.hears(s26, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBN2JIZ03g0GIlTFZI1shiW2MyOIzRAAIgEwACAjFBSrFig23Qr-DDIwQ'))

bot.hears(s27, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBOGJIZ032gfvUTxxHj0D4eASodfXzAAIhEwACAjFBSrDf4QhO9ZD7IwQ'))

bot.hears(s28, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBOWJIZ03W_2RdlQ6EIak7rXBm0jaRAAIiEwACAjFBSkj0P6CzTQ_xIwQ'))

bot.hears(s29, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBOmJIZ03BY_qANOvECLOccbkSmGQdAAIkEwACAjFBSovvZE7TfC_oIwQ'))

bot.hears(s30, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBO2JIZ00hbXNRI_Q-I-nS23zoSNtJAAIlEwACAjFBSm6V9Op5MNOmIwQ'))

bot.hears(s31, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBPGJIaCPPg0VuwgxXOEkRImCwFWQGAAImEwACAjFBSivi_k5WyBbSIwQ'))

bot.hears(s32, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBPWJIaCN3rsLolscrOK4rA8fYrS_jAAInEwACAjFBSsePZxbPVL_xIwQ'))

bot.hears(s33, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBPmJIaCMfBJ8LAYYjotNsx2OYk8EhAAIoEwACAjFBShU5Dh6n9DbuIwQ'))

bot.hears(s34, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBP2JIaCPbwi4FAAHcNg1Digm88riQRAACKRMAAgIxQUrJ3DBBR1_KCCME'))

bot.hears(s35, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBQGJIaCP_FUfEe3i0i40QZ4ff_isYAAIrEwACAjFBSmTog26uNEKpIwQ'))

bot.hears(s36, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBQWJIaCPZnTNtKuxbDLgzXbuxQUQ3AAIsEwACAjFBSpLThR7P-VSFIwQ'))

bot.hears(s37, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBQmJIaCMX8YAqAkq4E90wKDZcCjcjAAItEwACAjFBSnxBkJ2UHxVyIwQ'))

bot.hears(s38, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBQ2JIaCMLPl7Yu6yyIcYZaDuLHjbwAAIuEwACAjFBSmTDutocGxA7IwQ'))

bot.hears(s39, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBRGJIaCOpxV2WIHCL1zeNfZByydZZAAIvEwACAjFBSvxo0u8xV2GkIwQ'))

bot.hears(s40, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBRWJIaCOtRunEiy53wPcOiJsz_DD2AAIwEwACAjFBSjGix4xNqInjIwQ'))

bot.hears(s41, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBRmJIaCPO6FxJ3AK3lditbVjPmeSBAAIxEwACAjFBSuu3taSzbdM_IwQ'))

bot.hears(s42, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBR2JIaCMwOZ4NiUC3xM-USUPu4_AuAAIyEwACAjFBSqnPYODrRAvUIwQ'))

bot.hears(s43, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBSGJIaCNF9Qrz1eJyaiecF1co4M2mAAIzEwACAjFBSsKYHJcColiaIwQ'))

bot.hears(s44, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBSWJIaCPBIDKMvkAf9tWpCgc5bMtQAAI0EwACAjFBSuJpWrewm4reIwQ'))

bot.hears(s45, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBSmJIaCPqPnMDaEijlQF026BN_jW3AAI1EwACAjFBSkvqGnmjJInBIwQ'))

bot.hears(s46, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBS2JIaSj8CZvetDOt6g5WS1rqz4-qAAI2EwACAjFBSgWcJP912l4iIwQ'))

bot.hears(s47, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBTGJIaSijTiMYchwtwaESwE8fJdOmAAI3EwACAjFBSnW2BxdiDggFIwQ'))

bot.hears(s48, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBTWJIaSgZ1WjlZWs4Scve-ib78jOcAAI4EwACAjFBSmQf5QbGZ_pVIwQ'))

bot.hears(s49, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBTmJIaSgU4krh_x8t0H2f6N-JYu_rAAI5EwACAjFBSuf1Qfkb35JHIwQ'))

bot.hears(s50, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBT2JIaSixtAmnAzDCIbDN5WCGzyTnAAI6EwACAjFBSiVl07we--0SIwQ'))

bot.hears(s51, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBUGJIaShg1FCOfxTdXp5csN4Hce6kAAL9CQACjZJBUqpHVSqut0bqIwQ'))

bot.hears(s52, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBUWJIaSjvywE_gwRbn4E8JKtwVK3tAAL-CQACjZJBUh3X0tUl9YBcIwQ'))

bot.hears(s53, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBUmJIaSjtcEfDAca9tPdoTekBhm40AAL_CQACjZJBUl6R0Wtt5OmVIwQ'))

bot.hears(s54, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBU2JIaSgYk_2graMAARrJPWdNXA8h6QADCgACjZJBUi5Og18MJ6neIwQ'))

bot.hears(s55, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBVGJIaSi-dOAo8LDFxqy51PjAm2KoAAKLFAACAjFBSuq_ZM_HTw3bIwQ'))

bot.hears(s56, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBVWJIaSiQ2YeHgpgCh4beP-dWhGj1AAKYFAACAjFBSgT0p91roLOQIwQ'))

bot.hears(s57, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIBVmJIaSi4hB1qp-Nq0ilSzd1wjn0SAAKhFAACAjFBSnc5ODtxpsG1IwQ'))

bot.hears(s58, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBV2JIaSg6dBgT0iAaEn9b6mP09D8qAAIFCgACjZJBUgeZVPP29BQgIwQ'))

bot.hears(s59, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBWGJIaShq5qu17RZUK8pIk8Pi4oJHAAIGCgACjZJBUqNVZ06U7nuBIwQ'))

bot.hears(s60, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBWWJIaSioeGNvtpKFjdMAAU9j2qJ_AQACBwoAAo2SQVLkRvqycbOmniME'))

bot.hears(s61, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBWmJIamg-WgFSaP8-vKZeo1VXjVb8AAIICgACjZJBUnHHhaBJs39cIwQ'))

bot.hears(s62, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBW2JIamg3nJNDSsRHolIwAfZ2dCiiAAIJCgACjZJBUkSZEZzES5MEIwQ'))

bot.hears(s63, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBXGJIamjT_1c-s8tOc5mup_3IiAUlAAIKCgACjZJBUk4QXhUIfUUgIwQ'))

bot.hears(s64, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBXWJIamgqdZRYAAH5nx3pjpGsRCLjxQACCwoAAo2SQVIVyEyG2rfqpiME'))

bot.hears(s65, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBXmJIami9dBzO3W1ZzPF8tOmbrSrxAAIMCgACjZJBUjHOYxlPwMLLIwQ'))

bot.hears(s66, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBX2JIamjOI_JkqbZwca3xO2sXAAEsKAACDQoAAo2SQVIWYFUdh32MlyME'))

bot.hears(s67, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBYGJIamgGwaWnVx8SPQ56jHj3Nc0jAAIPCgACjZJBUvKxwL45eqwYIwQ'))

bot.hears(s68, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBYWJIamglvphAC2to3DoQ23exE284AAIQCgACjZJBUityttG65hjKIwQ'))

bot.hears(s69, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBYmJIamiZftHAuB-i0rXssnCmQMuNAAIRCgACjZJBUrLzd_F7zr37IwQ'))

bot.hears(s70, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBY2JIamjYGDM3KOidp8diNGhDITISAAISCgACjZJBUsYz37O1j_dEIwQ'))

bot.hears(s71, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBZGJIamhYGPQVbgXMpEi3gDTMCTJHAAITCgACjZJBUtsSarHtX1X-IwQ'))

bot.hears(s72, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBZWJIamguTPCxKcThvaw_vS7TkUmDAAIUCgACjZJBUtEBmjUcPERwIwQ'))

bot.hears(s73, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBZmJIamhL30-sqQ15A8Jk8jjuAzjSAAIVCgACjZJBUhntZCnjP0mvIwQ'))

bot.hears(s74, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBZ2JIamjX73X_V5egm0sAAQGpDqEotwACFwoAAo2SQVKcJAGjaxdeAiME'))

bot.hears(s75, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBaGJIamgsAeQbf3xzokQ2wC1TFQryAAIYCgACjZJBUtOpSnum-tOGIwQ'))

bot.hears(s76, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBaWJIaxg8LqtNjdU90QwKp7mbomAOAAIZCgACjZJBUhr-98phd-MgIwQ'))

bot.hears(s77, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBamJIaxjpB2Zod6fS-xv8tyU3xCEbAAIaCgACjZJBUvBo5F4yeqzhIwQ'))

bot.hears(s78, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBa2JIaxi2GPrycyw7O3JRq6CRaEpZAAIbCgACjZJBUqsVER4odpbyIwQ'))

bot.hears(s79, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBbGJIaxjM-S8SPMjgAAG7h_A5wyQ5UwACHAoAAo2SQVKDJhxrL6K2WSME'))

bot.hears(s80, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBbWJIaxgRPEe6oxTuntTmlX5efaHlAAIdCgACjZJBUubd7etr30UOIwQ'))

bot.hears(s81, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBbmJIaxgEHiTMxMkSS6DASXPki_qpAAIeCgACjZJBUqTyW1ax4zUTIwQ'))

bot.hears(s82, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBb2JIaxjp0xfWU_SY4_C0XekW-ZbSAAIgCgACjZJBUgoBB9CH6Ho0IwQ'))

bot.hears(s83, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBcGJIaxjdhgu2pVpp-sZwGrALKeZ5AAIhCgACjZJBUoJUTFJRrv2IIwQ'))

bot.hears(s84, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBcWJIaxhsr-OBJoPRrMrMxOtt873AAAIjCgACjZJBUt_iq_lat8B6IwQ'))

bot.hears(s85, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBcmJIaxgIrzCplJtLHaRX7IzanR-dAAIkCgACjZJBUlf3wk6BaZ9wIwQ'))

bot.hears(s86, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBc2JIaxh5As5UFgABDBoTmGVFFyBsVgACJgoAAo2SQVKVXsy1Qt4hfyME'))

bot.hears(s87, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBdGJIaxj5hHFNkR0MjPajFf739M2BAAIlCgACjZJBUnDNczrs4co0IwQ'))

bot.hears(s88, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBdWJIaxjMTYuXyctgOBFdzsWGD-d4AAInCgACjZJBUnI6V2KWY255IwQ'))

bot.hears(s89, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBdmJIaxidLYonaLQ8nb77LpoVXp3NAAIoCgACjZJBUrZN-AK4UbXOIwQ'))

bot.hears(s90, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBd2JIaxgSReGeBcVURO_l4HUt_-tcAAIpCgACjZJBUreU0r4AAdpqFiME'))

bot.hears(s91, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBeGJIa79XHrVZv1OTDLQXbflwU0VLAAIqCgACjZJBUgP_eiRTYuwzIwQ'))

bot.hears(s92, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBeWJIa79P8xo_uH90uFMcvBr13AbRAAIrCgACjZJBUui2rkxSvf1vIwQ'))

bot.hears(s93, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBemJIa7_Myp0lARwzvpyI6eANIK7aAAIsCgACjZJBUokSdO_85_BAIwQ'))

bot.hears(s94, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBe2JIa7_vTKjOByKhN96LWaait2N2AAItCgACjZJBUhVgeAY_wE4jIwQ'))

bot.hears(s95, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBfGJIa7-n6OmKnJHjD5Ew8dN5_p8RAAIuCgACjZJBUjVXbrc_7b4lIwQ'))

bot.hears(s96, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBfWJIa79hT6xaNbfCEtXE0kdDqce8AAIvCgACjZJBUtO0o9bhQ8oiIwQ'))

bot.hears(s97, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBfmJIa78O8AABCRLcVoQE2yZwZQNwUgACMAoAAo2SQVJ3aRdxVqkjESME'))

bot.hears(s98, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBf2JIa785rUiG_qc72TGahoEsHgJPAAIxCgACjZJBUsMHVx5Z0yw6IwQ'))

bot.hears(s99, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBgGJIa78AAX2FggJIBPChkFMoG51E8wACMgoAAo2SQVJvB7w13_4lEyME'))

bot.hears(s100, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBgWJIa7-eThRGgXaJE0fcgU1joea8AAIzCgACjZJBUngqdXLGToCsIwQ'))

bot.hears(s101, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBgmJIa79WtuYsdjizBlXHzax8bAy4AAI0CgACjZJBUnRahIlrr17wIwQ'))

bot.hears(s102, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBg2JIa796jOGyQp9VW-H1Q9wyfr5AAAI2CgACjZJBUo8g_WIO-P4VIwQ'))

bot.hears(s103, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBhGJIa79QwEqKXnEf-H5g7sfm18UoAAI3CgACjZJBUm20Z-GjNSgcIwQ'))

bot.hears(s104, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBhWJIa7_7w_lsUVVTIWzyS--GAd3LAAI4CgACjZJBUjQQKmsLMrayIwQ'))

bot.hears(s105, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBhmJIa7_rsu7uB0ml0A4eGZiRuyAGAAI5CgACjZJBUuEWk2ucrKtoIwQ'))

bot.hears(s106, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBh2JIbU-CVDRsa4FnDM46ZzAfX08TAAI6CgACjZJBUqnpLgSIYavAIwQ'))

bot.hears(s107, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBiGJIbU9Ny_okgJ0imveusZlllrMrAAI7CgACjZJBUoUyqMLQBtX2IwQ'))

bot.hears(s108, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBiWJIbU8veojskf5jz-1QoFtLXnU2AAI8CgACjZJBUq4MojHuv1BwIwQ'))

bot.hears(s109, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBimJIbU-FQjo__TJ57NsMkZZWF2JwAAI9CgACjZJBUqZ5EdtDR7CrIwQ'))

bot.hears(s110, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBi2JIbU9QZ-znFaTho8TU_0fNi3-zAAI-CgACjZJBUjCv8fMtzvPVIwQ'))

bot.hears(s111, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBjGJIbU-JsrOfNhYqN970Ng2RAAF7qQACPwoAAo2SQVLK2UcWnMGvqiME'))

bot.hears(s112, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBjWJIbU8AAXO_eaYPq9_YNGauBdHlDAACQAoAAo2SQVLvy6FzCsKGXSME'))

bot.hears(s113, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBjmJIbU_3xwVeutSnTuwjObhSvbD4AAJBCgACjZJBUgfkcKQWQBDnIwQ'))

bot.hears(s114, async (ctx) => ctx.replyWithAudio('CQACAgQAAxkBAAIBj2JIbU_o1jiTEH2YuO6Mjm2NSLBKAAJCCgACjZJBUiEteXSWfNPqIwQ'))

//bot hearсы на клаву конец

const ReaderChoise = Keyboard.make([
    ['Аль-Афаси'], ['Абдуль-Басит Абдус-Самад'], ['Ахмад бин Али Аль-Аджми'], ['Мохамед Махмуд Таблави']
]).oneTime()

bot.command('change_reader', (ctx) => ctx.reply('Выбери нового чтеца', ReaderChoise.reply()))

bot.start(async (ctx) => {
	ctx.scene.enter('helloWizard')
})

bot.hears('Аль-Афаси', async (ctx) => {
	await ctx.reply('Отлично, ты выбрал Аль-Афаси, ты в любой момент можешь сменить написав команду /change_reader \nНу а теперь выбери выбери суру', sura.reply())
})
bot.hears('Абдуль-Басит Абдус-Самад', ctx => ctx.scene.enter('SecondReaderWizard'))
bot.hears('Ахмад бин Али Аль-Аджми', ctx => ctx.scene.enter('ThirdReaderWizard'))
bot.hears('Мохамед Махмуд Таблави', ctx => ctx.scene.enter('FourthReaderWizard'))

const FirstReaderScene = new Scenes.WizardScene('FirstReaderWizard', bot)
module.exports = FirstReaderScene