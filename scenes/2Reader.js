const {Scenes, Composer} = require('telegraf')
const { Keyboard } = require('telegram-keyboard')

const bot = new Composer()

const s1 = `1. Открывающая Коран [АЛЬ-ФАТИХА](الفاتحة)`
const s2 = `2. Корова [АЛЬ-БАКАРА] (البقرة)`
const s3 = `3. Семейство Имрана [Алю Имран] (آل عمران)`
const s4 = `4. Женщины [Ан-Ниса] (النساء)`
const s5 = `5. Трапеза [Аль-Маида] (المائدة)`
const s6 = `6. Скот [Аль-Ан'ам](الأنعام)`
const s7 = `7. Преграды [Аль-А'раф] (الأعراف)`
const s8 = `8. Добыча [Аль-Анфаль] (الأنفال)`
const s9 = `9. Ат-Тауба [Ат-Тауба] (التوبة)`
const s10 = `10. Йунус [Йунус] (يونس)`
const s11 = `11. Худ [Худ] (هود)`
const s12 = `12. Йусуф [Йусуф] (يوسف)`
const s13 = `13. Гром [Ар-Ра'д] (الرعد)`
const s14 = `14. Ибрахим [Ибрахим] (إبراهيم)`
const s15 = `15. Аль-Хиджр [Аль-Хиджр] (الحجر)`
const s16 = `16. Пчёлы [Ан-Нахль] (النحل)`
const s17 = `17. Ночной перенос [Аль-Исра] (الإسراء)`
const s18 = `18. Аль-Кахф [Пещера] (الكهف)`
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
const s33 = `33. Сонмы [Аль-Ахзаб] (الأحزاب)`
const s34 = `34. Саба' [Саба'] (سبأ)`
const s35 = `35. Творец [Фатыр] (فاطر)`
const s36 = `36. Йа Син [Йа Син] (يس)`
const s37 = `37. Выстроившиеся в ряды [Ас-Саффат] (الصافات)`
const s38 = `38. Сад [Сад] (ص)`
const s39 = `39. Толпы [Аз-Зумар] (الزمر)`
const s40 = `40. Прощающий [Гафер] (غافر)`
const s41 = `41. Разъяснены [Фуссилат] (فصلت)`
const s42 = `42. Совет [Аш-Шура] (الشورى)`
const s43 = `43. Украшения [Аз-Зухруф] (الزخرف)`
const s44 = `44. Дым [Ад-Духан] (الدخان)`
const s45 = `45. Коленопреклонённые [Аль-Джасийа] (الجاثية)`
const s46 = `46. Аль-Ахкаф [Аль-Ахкаф] (الأحقاف)`
const s47 = `47. Мухаммад [Мухаммад] (محمد)`
const s48 = `48. Аль-Фатх [Победа] (الفتح)`
const s49 = `49. Покои [Аль-Худжурат] (الحجرات)`
const s50 = `50. Каф [Каф] (ق)`
const s51 = `51. Рассеивающие [Аз-Зарийат] (الذاريات)`
const s52 = `52. Гора [Ат-Тур] (الطور)`
const s53 = `53. Месяц [Аль-Камар] (القمر)`
const s54 = `54. Звезда [Ан-Наджм] (القمر)`
const s55 = `55. Милостивый [Ар-Рахман] (الرحمن)`
const s56 = `56. Воскресение [Аль-Ваки'а] (الواقعة)`
const s57 = `57. Железо [Аль-Хадид] (الحديد)`
const s58 = `58. Препирательство [Аль-Муджадала] (المجادلة)`
const s59 = `59. Собрание [Аль-Хашр] (الحشر)`
const s60 = `60. Испытуемая [Аль-Мумтахана] (الممتحنة)`
const s61 = `61. Ряды [Ас-Сафф] (الصف)`
const s62 = `62. День пятничной молитвы [Аль-Джуму'а] (الجمعة)`
const s63 = `63. Лицемеры [Аль-Мунафикун] (المنافقون)`
const s64 = `64. Раскрытие самообмана [Ат-Тагабун] (التغابن)`
const s65 = `65. Развод [Ат-Талак] (الطلاق)`
const s66 = `66. Запрещение [Ат-Тахрим] (التحريم)`
const s67 = `67. Власть [Аль-Мульк] (الملك)`
const s68 = `68. Аль-Калам [Аль-Калам] (القلم)`
const s69 = `69. Судный День [АЛЬ-ХАККА] (الحاقة)`
const s70 = `70. Ступени [Аль-Ма'аридж] (المعارج)`
const s71 = `71. Нух [Нух] (نوح)`
const s72 = `72. Джинны [Аль-Джинн] (الجن)`
const s73 = `73. Завернувшийся [Аль-Муззамиль] (المزمل)`
const s74 = `74. Закутавшийся [Аль-Мудассир] (المدثر)`
const s75 = `75. Воскресение [Аль-Кийама] (القيامة)`
const s76 = `76. Человек [Аль-Инсан] (الإنسان)`
const s77 = `77. Посылаемые [Аль-Мурсалят] (المرسلات)`
const s78 = `78. Весть [Ан-Наба] (النبأ)`
const s79 = `79. Вырывающие [Ан-Нази'ат] (النازعات)`
const s80 = `80. Нахмурился ['Абаса] (عبس)`
const s81 = `81. Погружение во мрак [Ат-Таквир] (التكوير)`
const s82 = `82. Раскалывание [Аль-Инфитар] (الإنفطار)`
const s83 = `83. Обвешивающие [Аль-Мутаффифин] (المطففين)`
const s84 = `84. Раскалывание [Аль-Иншикак] (الانشقاق)`
const s85 = `85. Созведия зодиака [Аль-Бурудж] (البروج)`
const s86 = `86. Звезда, восходящая ночью [Ат-Тарик] (الطارق)`
const s87 = `87. Высочайший [Аль-А'ла] (الأعلى)`
const s88 = `88. Покрывающее [Аль-Гашиййа] (الغاشية)`
const s89 = `89. Заря [Аль-Фаджр] (الفجر)`
const s90 = `90. Город [Аль-Балад] (البلد)`
const s91 = `91. Солнце [Аш-Шамс] (الشمس)`
const s92 = `92. Ночь [Аль-Лайл] (الليل)`
const s93 = `93. Утро [Ад-Духа] (الضحى)`
const s94 = `94. Раскрытие [Аш-Шарх] (الشرح)`
const s95 = `95. Смоковница [Ат-Тин] (التين)`
const s96 = `96. Сгусток [Аль-Алак] (العلق)`
const s97 = `97. Предопределение [Аль-Кадр] (القدر)`
const s98 = `98. Ясное знамение [Аль-Баййина] (البينة)`
const s99 = `99. Землетрясение [Аз-Залзала] (الزلزلة)`
const s100 = `100. Скачущие [Аль-Адийат] (العاديات)`
const s101 = `101. Сокрушающая беда [Аль-Кари'а] (القارعة)`
const s102 = `102. Приумножение [Ат-Такасур] (التكاثر)`
const s103 = `103. Время [Аль-'Аср] (العصر)`
const s104 = `104. Хулитель [Аль-Хумаза] (الهمزة)`
const s105 = `105. Слон [Аль-Филь] (الفيل)`
const s106 = `106. Курайш [Курайш] (قريش)`
const s107 = `107. Милостыня [Аль-Ма'ун] (الماعون)`
const s108 = `108. Аль-Каусар [Обильный] (الكوثر)`
const s109 = `109. Неверные [Аль-Кафирун] (الكافرون)`
const s110 = `110. Помощь [Ан-Наср] (النصر)`
const s111 = `111. Пальмовые волокна [Аль-Масад] (المسد)`
const s112 = `112. Искренность [Аль-Ихлас] (الإخلاص)`
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

bot.hears(s1, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICM2JItS05U3eMYf3Zc7rqzroeSBK6AAKuFgACwtNBSoOFT6eb16LEIwQ'))

bot.hears(s2, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICM2JItS05U3eMYf3Zc7rqzroeSBK6AAKuFgACwtNBSoOFT6eb16LEIwQ'))

bot.hears(s3, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICNWJItUhun45tB_Oih11-Vzoz3N_2AAKwFgACwtNBShT4H3mo2jwDIwQ'))

bot.hears(s4, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICNmJItV8pSdUQzlRm_n4Kl1pWnEL-AAKyFgACwtNBSropR4RMfJ2OIwQ'))

bot.hears(s5, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICN2JItYIbRcej1_ec7-_XDqnSWE8JAAKzFgACwtNBSo4bM-yJMgGcIwQ'))

bot.hears(s6, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICOGJItZb774wyeNZwb0bSNfTJHiGtAAK0FgACwtNBSgABlL8ym4whjyME'))

bot.hears(s7, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICOWJItaztQU6o3FB3RYgHQfT7QBZyAAK1FgACwtNBSgRqzVkL7pbgIwQ'))

bot.hears(s8, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICOmJItbPoIDZuARN9CGC9D8rSL6JKAAK2FgACwtNBSt84Bsp-67rUIwQ'))

bot.hears(s9, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICO2JItcG7ImKjMgm3wSIISBOArZ-QAAK3FgACwtNBSnFU7YOIRsjHIwQ'))

bot.hears(s10, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICPGJItcyGAwyjSEG2x6QZ42l3j0gVAAK4FgACwtNBSpcuiBg724fGIwQ'))

bot.hears(s11, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICPWJItdetihTpLk3OG9c8LuKxaGOpAAK6FgACwtNBSgoVl7N29cHUIwQ'))

bot.hears(s12, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICPmJIteMRl6t6x_pz3_W649MCtBqZAAK7FgACwtNBSpxgxkNc7QOjIwQ'))

bot.hears(s13, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICP2JItei7kFhvpZG_9SJqqzhn8dH0AAK8FgACwtNBSkwQFjUUZ9dPIwQ'))

bot.hears(s14, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICQGJIte5QU2pTeUXa3chwx3uqXzMuAAK9FgACwtNBSu6xs064dRZvIwQ'))

bot.hears(s15, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICQWJItfPQzVYknPeAacLoqnxksevMAAK-FgACwtNBSqWEY9Oz7sRCIwQ'))

bot.hears(s16, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICRmJIt3VL5RuuuagSq016n9En3YV2AALIFgACwtNBSj09c-Qoo1ETIwQ'))

bot.hears(s17, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICR2JIt30-1hQ_16C_aO3_2IHx-VC1AALLFgACwtNBSsOQuq6A2kEvIwQ'))

bot.hears(s18, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICSGJIt4aVryTP-tt7K8bsGwhtzsy3AALPFgACwtNBSpDS28ab9SOYIwQ'))

bot.hears(s19, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICSWJIt4y1Cyj_5HB6U4lLuI90YgXlAALQFgACwtNBSj9TO43F-1AMIwQ'))

bot.hears(s20, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICSmJIt5VdsYhM98DTCMTr7Anfsp7EAALSFgACwtNBSmIUTz4ymqsKIwQ'))

bot.hears(s21, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICS2JIt52ipgz0jEoY5ibjIoC7cui7AALTFgACwtNBSkczDr8Q0BJ6IwQ'))

bot.hears(s22, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICTGJIt6SWX3bplyfn9Cb-3NFxQM3XAALVFgACwtNBSotR9cOkvf1zIwQ'))

bot.hears(s23, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICTWJIt6p2LfHwOmnNZ50p0YjEnkcyAALWFgACwtNBSocpOhaou_b-IwQ'))

bot.hears(s24, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICTmJIt7THDr9Nae136q1gs9hTGz9JAALXFgACwtNBSqqX3CNQ2DFaIwQ'))

bot.hears(s25, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICT2JIt7wLL51MBe_SoMI4oTRA1BTtAALYFgACwtNBSvflGujZ1Sg3IwQ'))

bot.hears(s26, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICUGJIt8aFtiBjwtRuy4YXNnckpyrmAALaFgACwtNBSpVNkzz4SpbQIwQ'))

bot.hears(s27, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICUWJIt8z0mPDxuSBpm1AudJ1_oGMfAALbFgACwtNBSmDoRT6HRO5hIwQ'))

bot.hears(s28, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICUmJIt9YXkWjzh1wilAU3TY0R5xrnAALcFgACwtNBSoie86kZLW4CIwQ'))

bot.hears(s29, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICU2JIt9-GrtxArXK91XybZVRBGCz1AALdFgACwtNBShoy1VVSYwVFIwQ'))

bot.hears(s30, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICVGJIt_NRAb_D0B6RZUiEciTCrU09AALeFgACwtNBSsRyyjbmKjV4IwQ'))

bot.hears(s31, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICVWJIu4huyHNhnwE7UbQ5bySV-xVRAALiFgACwtNBSgABup-mkmC7OyME'))

bot.hears(s32, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICVmJIu4qId7WxI1oT62AjDzC5jfuDAALjFgACwtNBSuicleTkFuIoIwQ'))

bot.hears(s33, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICV2JIu5Jj527g6rfwwVu9Ntr-oWHQAALkFgACwtNBSgOkinjch0YLIwQ'))

bot.hears(s34, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICWGJIu5ebBB_G25cqAwFLrvKst3_-AALlFgACwtNBSr0os0lwcUqvIwQ'))

bot.hears(s35, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICWWJIu6rtlmHEqvFWeEu9i7pXJyM6AALmFgACwtNBSrwFJOZ3AoKuIwQ'))

bot.hears(s36, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICWmJIu8bQzh115VfOHjU2v8YGf_ttAALnFgACwtNBSsyt-WIZa9ZSIwQ'))

bot.hears(s37, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICW2JIu87_WBOrX4ka0QX2XtV9Fqs_AALoFgACwtNBSsWqvXwwE678IwQ'))

bot.hears(s38, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICXGJIu9StWLB4PbB6aQNr6hFEL6MuAALpFgACwtNBSpWOCgzIdmLIIwQ'))

bot.hears(s39, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICXWJIu9rsId4dMVq2Ll_UFYU0KnxbAALqFgACwtNBSh-o7VO-M55DIwQ'))

bot.hears(s40, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICXmJIu-Fb-kpTjQYXvI69ogYqT7b6AALrFgACwtNBSpydN2n7rTSpIwQ'))

bot.hears(s41, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICX2JIu_XmK1FEfILDdGLI8vchydk4AALsFgACwtNBSmu54YMcM3r1IwQ'))

bot.hears(s42, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICYGJIu_z5XuFoQhR-_8SvuLO_fbvbAALtFgACwtNBSof7mSuK7GHCIwQ'))

bot.hears(s43, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICYWJIvAHpjnj80n3rVoWUppVef5hYAALuFgACwtNBSn7_32nN8TJKIwQ'))

bot.hears(s44, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICYmJIvANC2U8G6H-rG-8p0UKiU8kdAALvFgACwtNBStH7tL2WEyuxIwQ'))

bot.hears(s45, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICY2JIvAUO0JdO7hCS3ifZ6N96ZrwZAALwFgACwtNBSjOpsabI2XMZIwQ'))

bot.hears(s46, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICc2JIvbtlWlN0RghOUvQ0RIFq7-wnAAIOFwACwtNBSuSPAhouq_YsIwQ'))

bot.hears(s47, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICdGJIvb6eyybyIpFBFRQYO2NTSnH0AAIPFwACwtNBSsGTcha5zYLkIwQ'))

bot.hears(s48, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICdWJIvcJfGWWiLlhBYI5N6P_U1G0ZAAIQFwACwtNBSt9ys_5LGKl4IwQ'))

bot.hears(s49, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICdmJIvcRbHvmPiXKyxxa9G9UJGrncAAIRFwACwtNBSsxladfgfbQGIwQ'))

bot.hears(s50, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICd2JIvcbwxFFx85PIcjXomuQpOpfnAAISFwACwtNBSvx4pPgCQEkUIwQ'))

bot.hears(s51, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICeGJIvcmDO0leQ6fidiRI4QT9wzyNAAITFwACwtNBSryPCt2rGSg8IwQ'))

bot.hears(s52, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICeWJIvcuKt5p5U_ESbRlkJqw8ZjcOAAIUFwACwtNBSlpuDikTkrRhIwQ'))

bot.hears(s53, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICemJIvc2NOq455nNYe-r6c-9DqMoAAxUXAALC00FKTJ4LSMRrExUjBA'))

bot.hears(s54, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICe2JIvdC1wjhBOCKghUtu2L78nFyLAAIWFwACwtNBSieXlqAaB8WIIwQ'))

bot.hears(s55, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICfGJIvdQUX-PM-Ha_mS2bDrUm8c5AAAIYFwACwtNBSr5lzWJAc-WVIwQ'))

bot.hears(s56, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICfWJIvdcgubasAoYO3BYi1CZKHN57AAIZFwACwtNBSv8h_x_cmCHgIwQ'))

bot.hears(s57, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICfmJIvduAAt1BPc3tn-jQzAXoEXSVAAIaFwACwtNBSm7i4kq0jLVXIwQ'))

bot.hears(s58, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICf2JIvd6Lr_IInjMmhnVvcqVxxbMAAxsXAALC00FKTucv0vmIGbcjBA'))

bot.hears(s59, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICgGJIveF7IBQgp4taAZsc9sIg6c77AAIcFwACwtNBStWiUjSiQxefIwQ'))

bot.hears(s60, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICgWJIveNJ08mnBBLBgijyAccbMNWMAAIdFwACwtNBSu7pVfa-0U6FIwQ'))

bot.hears(s61, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICgmJIv1VkcvQ-Ludr_eq6CBT0SMv3AAIhFwACwtNBSlTpqpGuz3WwIwQ'))

bot.hears(s62, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICg2JIv1ZVKgf8Ero-f2kC4vUUhfEqAAIiFwACwtNBSm6kqbYG1XEHIwQ'))

bot.hears(s63, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIChGJIv1d2MPQ-mfw3zo-rYIdKv2nXAAIjFwACwtNBShihSGqnX2FkIwQ'))

bot.hears(s64, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIChWJIv1lAFzouxpmJ6UOmBJ7rjtnGAAIkFwACwtNBShRMEC-ZB3oQIwQ'))

bot.hears(s65, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIChmJIv1tvbJLiGo_a-CcfJc7Ozb1OAAIlFwACwtNBSvP9tZ9rEFcMIwQ'))

bot.hears(s66, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICh2JIv1w0Z4jNGqrdcIbBpZ56Bi5DAAImFwACwtNBSkGv00LR7-coIwQ'))

bot.hears(s67, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICiGJIv19g5V-fq2ykJEiWQionGj8NAAInFwACwtNBSg6rSFUBCz4aIwQ'))

bot.hears(s68, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICiWJIv2Eq-O-WZMSd7yL78_TPypp0AAIoFwACwtNBStrmKIxZfaEpIwQ'))

bot.hears(s69, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICimJIv2PkTMl7nFA24BbRqvLH_T8TAAIpFwACwtNBSkT2B8rwagOrIwQ'))

bot.hears(s70, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICi2JIv2VitiCDN2hYS3XP-IpHtcRfAAIqFwACwtNBSk0JppU72Et2IwQ'))

bot.hears(s71, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICjGJIv2a6uXQAAWyvj7oTPTeMGMUKjQACKxcAAsLTQUr5tuXwHVk8HyME'))

bot.hears(s72, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICjWJIv2clZANJf6vllqZ_n_3j-w6FAAIsFwACwtNBSncix3SYNsWrIwQ'))

bot.hears(s73, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICjmJIv2jBdWky64ssJBLUfDYFmvHoAAItFwACwtNBSmRjYNzffl8-IwQ'))

bot.hears(s74, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICj2JIv2rp-CcjQoW9YCmy8zphtZTuAAIuFwACwtNBSk4cfsqLjfuoIwQ'))

bot.hears(s75, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICkGJIv2u6hqXLD1RoA80OunjAfmSMAAIvFwACwtNBSrZ0UN0oNW7XIwQ'))

bot.hears(s76, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICkWJIwBNLtUS6_gpGxftfi4OuBgePAAIxFwACwtNBSl0cdRBKjotlIwQ'))

bot.hears(s77, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICkmJIwBVeIwu7jSOTxf2NGOrMzxOrAAIyFwACwtNBSpbYPU5w-xhhIwQ'))

bot.hears(s78, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICk2JIwBZf8i2GMCOVkQTObJeZfdQnAAIzFwACwtNBSrvHd47c7A3JIwQ'))

bot.hears(s79, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIClGJIwBf9m0hSaiYES6BFgnyzci0lAAI0FwACwtNBShu81cBnUfZIIwQ'))

bot.hears(s80, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIClWJIwBrrh7oCYVs3UDlvuvqAYrfiAAI1FwACwtNBSvw-eF0GFaIKIwQ'))

bot.hears(s81, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIClmJIwBu2Hyzef6z8IbAAAQNwrA53OQACNhcAAsLTQUpTi4BrOsB2ZCME'))

bot.hears(s82, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICl2JIwBxXE8SsdmLuLYzwTb5Xlk9NAAI3FwACwtNBSuZE_rVB0KNmIwQ'))

bot.hears(s83, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICmGJIwB2BjF-4sPK0vie1wsPOf3ypAAI4FwACwtNBSpVYa35J7SEGIwQ'))

bot.hears(s84, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICmWJIwB7cLFF1W9Bd1oZXGqkDoEwQAAI5FwACwtNBSvYBuSp5U8YpIwQ'))

bot.hears(s85, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICmmJIwB9tmdkiDoXjL1ewMyBNomJIAAI6FwACwtNBStltcjA69xQXIwQ'))

bot.hears(s86, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICm2JIwCB_vulwivvNi27KBQNehntuAAI7FwACwtNBShUluvZbbdgnIwQ'))

bot.hears(s87, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICnGJIwCGbZRbclu3yWikKXLTuKFX5AAI8FwACwtNBSpL1-VDEZ8rJIwQ'))

bot.hears(s88, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICnWJIwCOdPEPVmLFdrskTTPwK4ZhZAAI9FwACwtNBSlXt_uHSvRBoIwQ'))

bot.hears(s89, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICnmJIwCQmluR-pJ6cZno7KX777U6mAAI-FwACwtNBSu_ai35dYlvDIwQ'))

bot.hears(s90, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICn2JIwCXJY1NNuYN4PkD_i8yH0VHEAAI_FwACwtNBSryEoYeS-N-wIwQ'))

bot.hears(s91, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICoGJIwNy9UZVe6qT4IKclBLXTvmuqAAJBFwACwtNBShuVNuR4H9UWIwQ'))

bot.hears(s92, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICoWJIwN0NE4qMFNWJwU2FmPCp3tMIAAJCFwACwtNBSp3RLsy3SoV8IwQ'))

bot.hears(s93, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIComJIwN5CWh1RvV8lOtj1Moj3I92uAAJDFwACwtNBSoAXP2XrTT4MIwQ'))

bot.hears(s94, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICo2JIwN5nkB24mxMVWIsYPj3HFAV5AAJEFwACwtNBSgM6WtZBOJCJIwQ'))

bot.hears(s95, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICpGJIwN8etImCIXg11r8mPWX-4WOvAAJFFwACwtNBSponrye8FVgtIwQ'))

bot.hears(s96, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICpWJIwOB59YpTxQNXN3Oe-Ra5wuZMAAJGFwACwtNBShXR87RMVjuFIwQ'))

bot.hears(s97, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICpmJIwODgqRkj5QhhgK1XyD2tCmdLAAJHFwACwtNBSrRDL_ZgkdF3IwQ'))

bot.hears(s98, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICp2JIwOGtnlEs-VpwQlS88jTyoLfYAAJJFwACwtNBSoQsmaE-PvDjIwQ'))

bot.hears(s99, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICqGJIwOLdpOH7WUixS-RpvKNNkZGDAAJKFwACwtNBSpfbWHUHzXKdIwQ'))

bot.hears(s100, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICqWJIwOI-PLMGjXAWHX6OMaOZipOGAAJLFwACwtNBSmBB6uMlA3McIwQ'))

bot.hears(s101, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICqmJIwOOpwjnINr4s1_Dy824E0n_FAAJMFwACwtNBSho3mVvDlf5dIwQ'))

bot.hears(s102, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICq2JIwOT67qICuvx7ns3o-b4d38sUAAJNFwACwtNBSiT_jdHnKB19IwQ'))

bot.hears(s103, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICrGJIwOTY84mBWjsr7sokfE5MzLiRAAJOFwACwtNBSvOOIZJ7Hib6IwQ'))

bot.hears(s104, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICrWJIwOWwEYtqX1sOddIDJC_JO51OAAJPFwACwtNBSonDOaaPVfgrIwQ'))

bot.hears(s105, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICrmJIwOVL6IU9lQKW11lqKpGOPetQAAJQFwACwtNBSlacjUqolryPIwQ'))

bot.hears(s106, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICr2JIwmNHu0bp1h1Ora10kPDKjA-UAAJTFwACwtNBStNfzhv8CLS_IwQ'))

bot.hears(s107, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICsGJIwmQZAx0u04xIZ_YCBtLY4ivFAAJUFwACwtNBSiHS1vpvGEO6IwQ'))

bot.hears(s108, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICsWJIwmSwCtNzRpZfMaQTJdKe-y7yAAJVFwACwtNBSg6QhGHtcWW1IwQ'))

bot.hears(s109, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICsmJIwmXpgtnvmHPdOwYS46LMz9rrAAJWFwACwtNBSjqk3SUVVxRpIwQ'))

bot.hears(s110, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICs2JIwmXDqKSh5Onfo9a-uKyusI55AAJXFwACwtNBSnkdU_-2-6RsIwQ'))

bot.hears(s111, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICtGJIwmaz98QtRhLNvt6guZgkQPW9AAJYFwACwtNBSj_iJHKTelIMIwQ'))

bot.hears(s112, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICtWJIwmbrSjo2pUTarU4ZEJbRytRjAAJZFwACwtNBSvJjR2zspevNIwQ'))

bot.hears(s113, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICtmJIwmecn_e_LTSLLKW_S7Fv8b20AAJaFwACwtNBSlUjcOtarTkdIwQ'))

bot.hears(s114, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAICt2JIwmfychOVQv6-dHFvNKw0MqXmAAJbFwACwtNBShUKouW5bTo3IwQ'))

//bot hearсы на клаву конец

const ReaderChoise = Keyboard.make([
    ['Аль-Афаси'], ['Абдуль-Басит Абдус-Самад'], ['Ахмад бин Али Аль-Аджми'], ['Мохамед Махмуд Таблави']
]).oneTime()

bot.command('change_reader', (ctx) => ctx.reply('Выбери нового чтеца', ReaderChoise.reply()))

bot.start(async (ctx) => {
	ctx.scene.enter('helloWizard')
})

bot.hears('Аль-Афаси', ctx => ctx.scene.enter('FirstReaderWizard'))
bot.hears('Абдуль-Басит Абдус-Самад', async (ctx) => {
	await ctx.reply('Отлично, ты выбрал Абдуль-Басит Абдус-Самад, ты в любой момент можешь сменить написав команду /change_reader \nНу а теперь выбери выбери суру', sura.reply())
})
bot.hears('Ахмад бин Али Аль-Аджми', ctx => ctx.scene.enter('ThirdReaderWizard'))
bot.hears('Мохамед Махмуд Таблави', ctx => ctx.scene.enter('FourthReaderWizard'))

const SecondReaderScene = new Scenes.WizardScene('SecondReaderWizard', bot)
module.exports = SecondReaderScene

