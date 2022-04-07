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

bot.hears(s1, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIgWJN7KiE8BUODTbcD6vMmdOt_IKBAAKQFwACzQFwSkbGIREIZ7QWIwQ'))

bot.hears(s2, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIgmJN7P8rCNYfygmar2etk5IFYcX-AAKRFwACzQFwSlpA5IC4HDIEIwQ'))

bot.hears(s3, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIg2JN7TkMllWIMVViDJpJpXQnYSuZAAKSFwACzQFwSpXlT3ZJ0KaCIwQ'))

bot.hears(s4, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIhGJN7XsaWreWNnDM5KRkIqyW4XAmAAKUFwACzQFwSsN0Fzv3xdoLIwQ'))

bot.hears(s5, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIhWJN7aoiLQMc8x4_acUS85Z8UBnUAAKVFwACzQFwSlOEuZ5NAAHl_SME'))

bot.hears(s6, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIhmJN7c3Gk5de2-AC4ggHp9jLs5aAAAKXFwACzQFwSpLOwPTh8IfSIwQ'))

bot.hears(s7, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIh2JN7gjW-mOkI67nBmgmq1ZjKzJIAAKZFwACzQFwSvk30tDL3toOIwQ'))

bot.hears(s8, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIiGJN7i-Zcf3YVrAUl5T2YgABhXNHdgACmxcAAs0BcEoZRki-feX3xyME'))

bot.hears(s9, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIiWJN7l718ul1vNdBc7IzDAjLaQNRAAKcFwACzQFwSjmc6mtazGm_IwQ'))

bot.hears(s10, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIimJN7oH5WGIXOujY8JjL9qtUzdSpAAKdFwACzQFwShswrsnaPDTAIwQ'))

bot.hears(s11, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIi2JN7qOz3yw7hXOyYDrcXmgJBT1LAAKgFwACzQFwSgABPl1uBmYasSME'))

bot.hears(s12, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIjGJN7sOBoT2I41jAOyDdonZzNuaoAAKhFwACzQFwSvqEHK3s9htRIwQ'))

bot.hears(s13, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIjWJN7tlW1w-j4qVZpYQhw1if_1syAAKiFwACzQFwSki0nLiitCFlIwQ'))

bot.hears(s14, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIjmJN7vU2bvahFdzb7c06WB84hLivAAKjFwACzQFwSkradJZTuEDiIwQ'))

bot.hears(s15, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIj2JN7wjkVEMRczzzYGw5_haPjZOLAAKkFwACzQFwSj15SRZ5bCVYIwQ'))

bot.hears(s16, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIkGJN8HEvnhDVTbXlBLw1hKXgrsxKAAKnFwACzQFwSh6B4ifOw3hjIwQ'))

bot.hears(s17, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIkWJN8JJXpaLl_iMm1ntyfo88pWtmAAKoFwACzQFwSqmBpwlI5oVQIwQ'))

bot.hears(s18, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIkmJN8LpJub_-XOcM2jKeUNELap_dAAKpFwACzQFwSjHDdqrwN69hIwQ'))

bot.hears(s19, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIk2JN8NKRdUwJ1z5KGDSlq78p7Zq1AAKqFwACzQFwSmHP5mepEiH5IwQ'))

bot.hears(s20, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIlGJN8Oz_i6Z74fywc8MvsSoQsDVNAAKrFwACzQFwSvGu43FJRu-eIwQ'))

bot.hears(s21, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIlWJN8Q-ZL5boNq1jZ5Jq3aEwvHq1AAKsFwACzQFwSmi_7cHvHNmqIwQ'))

bot.hears(s22, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIlmJN8TUJimpm438BqxyJ9xn1jdE1AAKuFwACzQFwSoxgJ3dMMfoAASME'))

bot.hears(s23, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIl2JN8VNTD3hN_BdXGidCaTm9RfeKAAKwFwACzQFwStqD0iiK-eXfIwQ'))

bot.hears(s24, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIImGJN8XeEEemsBdpaNIfxRR9qyUnOAAKxFwACzQFwSoKYo47GDKvVIwQ'))

bot.hears(s25, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIImWJN8Y_nFvJerVy7L_FDjOq_DhaLAAKyFwACzQFwSgM-sU75232MIwQ'))

bot.hears(s26, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIImmJN8asHuJjnZBytNTD4KlSmXIGGAAKzFwACzQFwSuZtWKA7gKefIwQ'))

bot.hears(s27, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIm2JN8cfSepXraEAe4L4ltStgW6McAAK0FwACzQFwSlNmh9PyjWv3IwQ'))

bot.hears(s28, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIInGJN8eYGE2roE-SdwAemmPs-xJ2uAAK1FwACzQFwSsrjZ68mZLBbIwQ'))

bot.hears(s29, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIInWJN8fo0_s3CysSWc3yZ9fXh-oO4AAK2FwACzQFwSi2Nx54kZWrGIwQ'))

bot.hears(s30, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIInmJN8g7Vr-GYVVJWfQpLxsMM5_86AAK3FwACzQFwSj644_WVkNIsIwQ'))

bot.hears(s31, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIn2JN8suY4gk3yhfHnVvMOjMhRdeGAAK7FwACzQFwSil436UCHyidIwQ'))

bot.hears(s32, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIoGJN8tdfJ9X6fwHi9JjlBAehPPUGAAK8FwACzQFwSmtvUlfzwdASIwQ'))

bot.hears(s33, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIoWJN8ut4480lv08Qb8E3Uac6NGKIAAK9FwACzQFwSuPXyFDWaLTGIwQ'))

bot.hears(s34, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIomJN8wABdFX9eQjjFK2efP1Ufs_a8wACvhcAAs0BcEqNQX5BMmjKfCME'))

bot.hears(s35, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIo2JN8xIgLjfbgwPWooEy3ZP02-TKAAK_FwACzQFwSqvns81H2LE-IwQ'))

bot.hears(s36, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIpGJN8yRYBdwvWX3QFb4RuEwObdx8AALAFwACzQFwSjwYi_aNRN6VIwQ'))

bot.hears(s37, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIpWJN8zhgumd5BXD8jKnyjPARLMmDAALBFwACzQFwSmYYXJCJa3SQIwQ'))

bot.hears(s38, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIpmJN80itdtnLbjj8PwMq25OUdNABAALCFwACzQFwSt6iPumtXwb7IwQ'))

bot.hears(s39, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIp2JN82eG5dngDrddxL_JFesKC794AALEFwACzQFwSoxEiQbZ8NJJIwQ'))

bot.hears(s40, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIqGJN84jKcbPz0zRvpqd2wV-ZPsJrAALHFwACzQFwSq8cvnSkWEdvIwQ'))

bot.hears(s41, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIqWJN85slGVuXdJEIdFVNR1JfkFnKAALIFwACzQFwSh6PR0F9WGL_IwQ'))

bot.hears(s42, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIqmJN87PEi7MtHhHwE_XocSR8ymSpAALJFwACzQFwSnBca86SF-FYIwQ'))

bot.hears(s43, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIq2JN88x6unc3ZqHYbU8XVKR0OAR5AALKFwACzQFwSnfVb8FA-u6hIwQ'))

bot.hears(s44, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIrGJN89Zd9yuwuUiH62YjQBHRvJT1AALLFwACzQFwSu3qhrbnpP8tIwQ'))

bot.hears(s45, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIrWJN8-AsSvwK_9js7a3u5mjltUbSAALMFwACzQFwSntn-fs_iyj5IwQ'))

bot.hears(s46, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIrmJN9KY8cTYz_OA8o1fy3JGP7rF7AALOFwACzQFwSga1Dzv3Oc3vIwQ'))

bot.hears(s47, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIr2JN9LMwu3JAzvLiGSOUt0ii-xFGAALPFwACzQFwSopHj7zF3G2uIwQ'))

bot.hears(s48, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIsGJN9L5gYKo7bqFKyI7SuIvp6J-nAALRFwACzQFwSjfniqbQgx-WIwQ'))

bot.hears(s49, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIsWJN9Mg35JI6GDMwEu1M_lAAAZf5wQAC0hcAAs0BcEqxfgAB5she5cojBA'))

bot.hears(s50, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIsmJN9M_jsDANRZ9pennmZoDn7cB1AALTFwACzQFwSh88Cu5Q9Hn4IwQ'))

bot.hears(s51, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIs2JN9NatcDbJ3QWW5VSunteT6ePbAALUFwACzQFwSmFmbKG494p3IwQ'))

bot.hears(s52, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIItGJN9NwfuyqbfAcgn9e30piyJk7nAALVFwACzQFwSkSJsZ_pbeIyIwQ'))

bot.hears(s53, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIItWJN9OP26RuioD7u3oe-ZcMED4flAALWFwACzQFwSlEAAezDZ-TjkSME'))

bot.hears(s54, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIItmJN9OvuuMTv0xkqmXyEbQaljuOfAALXFwACzQFwSuMaAAHnLDjSIyME'))

bot.hears(s55, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIt2JN9PfXKHYcK7knuqQUI8FQWWFFAALYFwACzQFwSuKqRDemD66yIwQ'))

bot.hears(s56, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIuGJN9P6cvbsrOir8uDyk2AozPG3YAALZFwACzQFwSmSh7ajOzNS4IwQ'))

bot.hears(s57, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIuWJN9Qmmo4JiQifm5BEcblwrlc3EAALaFwACzQFwSqZoXTWh3cp2IwQ'))

bot.hears(s58, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIumJN9RQDPmcwB6w8nU0I2oF8mvXtAALbFwACzQFwShUfcdASQXUxIwQ'))

bot.hears(s59, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIu2JN9SCg318v5gZkUCtWQz_4nOvcAALcFwACzQFwSnC8KVmUoBXyIwQ'))

bot.hears(s60, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIvGJN9SgBAAEo0TLXvUztfXuDlMCRSQAC3RcAAs0BcEq6GW5INWFZpiME'))

bot.hears(s61, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIvWJN9Z4ame2OxqOU2_LO9MRMtatXAALfFwACzQFwSt9XZhwbjGEnIwQ'))

bot.hears(s62, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIvmJN9aJ3HieTPpbhJg0hai2Q9BymAALgFwACzQFwSn0Kf2zpKhgIIwQ'))

bot.hears(s63, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIv2JN9aeqGceK8Idj7t2j7zj3rIF3AALhFwACzQFwSiGu52qncT-sIwQ'))

bot.hears(s64, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIwGJN9a4MCrDzdhxzybN7KyRyZIyEAALiFwACzQFwSsxsyzvgmGPFIwQ'))

bot.hears(s65, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIwWJN9bWLpUn6RKDi46jAlg5Ki0fAAALjFwACzQFwSuUPra-4oQg4IwQ'))

bot.hears(s66, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIwmJN9bx58zvtjMeVBd-iU_7sscldAALkFwACzQFwSvTuyczkYRjHIwQ'))

bot.hears(s67, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIw2JN9cSPxZuIyt_3HO8m4zmLgb5eAALlFwACzQFwSgK2wOIB6rY7IwQ'))

bot.hears(s68, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIxGJN9c0ZG1IJDHk97MFCIN1Wf_9bAALmFwACzQFwStCiSdftnvcdIwQ'))

bot.hears(s69, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIxWJN9dLOuIn5CO8bEamIWcM0ifhhAALnFwACzQFwSu8qb8WT4PxTIwQ'))

bot.hears(s70, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIxmJN9dcQh-q1a4LF7SnKWDpgk-DlAALoFwACzQFwStGZMWxsC6-jIwQ'))

bot.hears(s71, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIx2JN9d6fndZX9FsGr4CSfR7atXRIAALqFwACzQFwSh468dKcmDLxIwQ'))

bot.hears(s72, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIyGJN9eTrfORfhePH4EEnbSBWyTEaAALrFwACzQFwSi9hjzP0V6tXIwQ'))

bot.hears(s73, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIyWJN9elM0zlSAAEPE7ok5E8kzmRL9wAC7RcAAs0BcErit5RYK0bnbyME'))

bot.hears(s74, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIymJN9e457uk_Z6U2acFRFkIRuA3rAALvFwACzQFwSooL1-jy2_r3IwQ'))

bot.hears(s75, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIy2JN9fHz4SBUZOJDnVr8_5KqcN1QAALwFwACzQFwSoOF4UpQDJq3IwQ'))

bot.hears(s76, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIzGJN9nfZ9ggXVXK_xsoBa5a8ImSEAALzFwACzQFwStqlSkO14u6iIwQ'))

bot.hears(s77, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIzWJN9ntzLfnAt5kX0wnxEpmSwe3JAAL0FwACzQFwSndYjvcDOcL5IwQ'))

bot.hears(s78, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIzmJN9oCDqMerS9j1kikYMPh8QlkLAAL1FwACzQFwSiHgaYiGZdn1IwQ'))

bot.hears(s79, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAIIz2JN9oUO6Hpjr6HjQ3xfwqrCarlWAAL2FwACzQFwSjkL4gGTSuOwIwQ'))

bot.hears(s80, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII0GJN9ojkulZCO4whTx10dOrDUrgfAAL3FwACzQFwSk62Tqh22YPKIwQ'))

bot.hears(s81, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII0WJN9opLL08oZO3wXdJKukDQB5bGAAL4FwACzQFwSppsTAABke9fDSME'))

bot.hears(s82, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII0mJN9o7pmCaGpZ7dVfRIKQxQOGIKAAL5FwACzQFwSmeGyt5vmXelIwQ'))

bot.hears(s83, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII02JN9pGuXyYZUeuwgkCUoChis6IdAAL6FwACzQFwSu6WiXwooJTwIwQ'))

bot.hears(s84, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII1GJN9pN6Hma9b3NxbNrJNN7jXKdIAAL8FwACzQFwSs8Ph37GAyFoIwQ'))

bot.hears(s85, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII1WJN9pUOA7XzEPU76WeJI4Z4ouMyAAL9FwACzQFwSlXa91GtR6A6IwQ'))

bot.hears(s86, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII1mJN9pZNkH--df3YE_69g7AZquZUAAL-FwACzQFwSpBFnHQyww27IwQ'))

bot.hears(s87, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII12JN9ph9fVvBMoqm5VzzrPzcSbeiAAL_FwACzQFwSpIikDGUD5kfIwQ'))

bot.hears(s88, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII2GJN9prsIUiSPuyrZiYgNNyvBmDTAAMYAALNAXBKt2qsZiCMPygjBA'))

bot.hears(s89, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII2WJN9p22UzEh2CwbrznFQxWysu5fAAIBGAACzQFwSgEw_s5GXuBYIwQ'))

bot.hears(s90, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII2mJN9p7A819q1nBrx3V0iSgzNgdPAAICGAACzQFwSt95HsNHhXDTIwQ'))

bot.hears(s91, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII22JN9yPIgmZoPF3nldvEoeV5DxitAAIFGAACzQFwSv8HqBltzFwMIwQ'))

bot.hears(s92, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII3GJN9yUrHpQcDJ32HVyg_b4cqsJOAAIGGAACzQFwSlDYm62HykiFIwQ'))

bot.hears(s93, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII3WJN9ybrVvDNLmJPdHceoljc_d64AAIHGAACzQFwSr7fpAJ0uByKIwQ'))

bot.hears(s94, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII3mJN9yjlFtne_QuYRz0rfHj-bWH9AAIIGAACzQFwSryk1rkOFMuzIwQ'))

bot.hears(s95, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII32JN9ylQpVsh1x5GAcS2Gej-0PtaAAIJGAACzQFwSghNiurN_BQSIwQ'))

bot.hears(s96, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII4GJN9yvt8AfLoTx_MPUen2JqeATrAAIKGAACzQFwSjiVaXKCF52FIwQ'))

bot.hears(s97, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII4WJN9yw6kZ5aTat1qItIA4bUwzkcAAILGAACzQFwSkOvVu0rQSNHIwQ'))

bot.hears(s98, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII4mJN9y6WRb01e8zxL4X81HDDqEpbAAIMGAACzQFwSrhb9nTcY7b1IwQ'))

bot.hears(s99, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII42JN9zBhDRNSqP1MH1EpmiATL8ikAAIOGAACzQFwSqqa9qERjJraIwQ'))

bot.hears(s100, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII5GJN9zKNVKA37tVm0mG2hjAh8J_OAAIPGAACzQFwSgWGjQumIpPvIwQ'))

bot.hears(s101, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII5WJN9zR-dIL2_mpy5KF_hEx_j8JRAAIQGAACzQFwSk5oJzsMimA0IwQ'))

bot.hears(s102, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII5mJN9zW_2DAhE1ndhC9wvj18tnNfAAIRGAACzQFwSo4eHXBi3dIxIwQ'))

bot.hears(s103, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII52JN9zbUij8DmA6tb2u22xtzLTPFAAISGAACzQFwSp1bnnfyxQ7WIwQ'))

bot.hears(s104, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII6GJN9zdFc74hPmh-M9sbMLECXOxpAAITGAACzQFwStmBsZ23y0vUIwQ'))

bot.hears(s105, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII6WJN9zjp5JuVcjPKXiMu2tSG_g9cAAIUGAACzQFwSgMPZ5U_kp4EIwQ'))

bot.hears(s106, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII6mJN97av0O1E1kcakELvoFl99ZKZAAIWGAACzQFwSlbRS9oMHo5UIwQ'))

bot.hears(s107, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII62JN97a2ph_Nr4rKlr-sEULeBGZcAAIXGAACzQFwSop0moqyrS9FIwQ'))

bot.hears(s108, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII7GJN97fE8jHDa8jHtXvvHCOb3tGIAAIYGAACzQFwSvt1QgqqChflIwQ'))

bot.hears(s109, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII7WJN97ktDpSuYMXhjDqGW6wpb76yAAIZGAACzQFwSk9iY4ahy84_IwQ'))

bot.hears(s110, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII7mJN97pRarnoNI0CDuLthLNayfbIAAIaGAACzQFwSiEODTldwozJIwQ'))

bot.hears(s111, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII72JN97vZcnsMkCTta-ZXSN8SV36zAAIbGAACzQFwSkNN9k1ygIhYIwQ'))

bot.hears(s112, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII8GJN972YUlb11iEuzTTxbNMqEFZjAAIcGAACzQFwSlCgy8VXRpqUIwQ'))

bot.hears(s113, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII8WJN973B7bNnJlsOSZDl8NA4ccoBAAIdGAACzQFwSkVVzrd5wmpPIwQ'))

bot.hears(s114, async (ctx) => ctx.replyWithAudio('CQACAgIAAxkBAAII8mJN975E57_ZhBTf6eGgn97GpMUMAAIeGAACzQFwSp2aJ2Vb9ILbIwQ'))

//bot hearсы на клаву конец

bot.command('change_reader', (ctx) => ctx.scene.enter('ChangeReaderWizard'))

bot.start(async (ctx) => {
	ctx.scene.enter('helloWizard')
})

bot.hears('Мухаммад Сиддик аль-Миншави (محمد صديق المنشاوي)', async (ctx) => {
	await ctx.reply('Отлично, ты выбрал Мухаммад Сиддик аль-Миншави (محمد صديق المنشاوي), ты в любой момент можешь сменить написав команду /change_reader \nНу а теперь выбери выбери суру', sura.reply())
})

const FifthReaderScene = new Scenes.WizardScene('FifthReaderWizard', bot)
module.exports = FifthReaderScene