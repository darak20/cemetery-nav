// Данные о захоронениях Старого кладбища Таганрога
// Все объекты из документа list-okn-sectors.docx

const gravesData = [
    // ==================== ХРАМЫ И ЧАСОВНИ ====================
    {
        id: 1,
        name: "Церковь во имя Всех Святых",
        description: "Главный храм некрополя. Построен в 1824 году в стиле русского классицизма. Является объектом культурного наследия регионального значения.",
        lat: 47.207884,
        lon: 38.902625,
        category: "Храмы и часовни",
        forRoute: true,
        photo: "https://i.ibb.co/gZYKVyQS/photo-57-2025-10-29-18-58-38.jpg"
    },
    {
        id: 2,
        name: "Часовня старца Павла Таганрогского",
        description: "Часовня над местом захоронения блаженного Павла Таганрогского (1792-1879). Почитаемое место паломничества.",
        lat: 47.209764,
        lon: 38.902888,
        category: "Храмы и часовни",
        forRoute: true,
        photo: "https://i.ibb.co/ycqMPHKy/photo-72-2025-11-01-22-37-46.jpg"
    },

    // ==================== УСЫПАЛЬНИЦЫ И МАВЗОЛЕИ ====================
    {
        id: 3,
        name: "Родовая усыпальница Ф. Д. Котопули",
        description: "Родовая усыпальница представителя греческой диаспоры. Внесена в реестр объектов культурного наследия.",
        lat: 47.207441,
        lon: 38.9035,
        category: "Усыпальницы",
        forRoute: true,
        photo: "https://i.ibb.co/9mnvmV0N/photo-28-2025-10-29-18-58-38.jpg"
    },
    {
        id: 4,
        name: "Мавзолей в эклектическом стиле",
        description: "Архитектурный памятник конца XIX века с элементами эклектики.",
        lat: 47.207578,
        lon: 38.903572,
        category: "Мавзолеи",
        forRoute: true,
        photo: "https://i.ibb.co/HDhvFQMg/photo-33-2025-10-29-18-58-38.jpg"
    },
    {
        id: 5,
        name: "Мавзолей в классическом стиле",
        description: "Образец классицистической погребальной архитектуры.",
        lat: 47.207151,
        lon: 38.902145,
        category: "Мавзолеи",
        forRoute: true,
        photo: "https://i.ibb.co/HTDWZ48n/photo-30-2025-11-01-22-37-46.jpg"
    },
    {
        id: 6,
        name: "Мавзолей с утраченным покрытием",
        description: "Мавзолей с утраченным покрытием.",
        lat: 47.208095,
        lon: 38.904776,
        category: "Мавзолеи",
        forRoute: true,
        photo: "https://i.ibb.co/ZpXH6kZB/photo-2025-11-02-20-20-34.jpg"
    },
    {
        id: 7,
        name: "Родовая усыпальница",
        description: "Родовая усыпальница.",
        lat: 47.2075,
        lon: 38.9042,
        category: "Усыпальницы",
        forRoute: true,
        photo: "https://i.ibb.co/FbnMdcXS/photo-95-2025-10-29-18-58-38.jpg"
    },
    {
        id: 8,
        name: "Полуподземный склеп с беседкой",
        description: "Полуподземный склеп, надземная часть - беседка.",
        lat: 47.2069,
        lon: 38.9022,
        category: "Склепы",
        forRoute: true,
        photo: "https://i.ibb.co/LhhLQY9p/photo-33-2025-11-01-22-37-46.jpg"
    },

    // ==================== НАДГРОБИЯ ====================
    {
        id: 9,
        name: "Надгробие П. И. Шортана",
        description: "Надгробие на могиле П. И. Шортана.",
        lat: 47.208054,
        lon: 38.902794,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/zVvpJZ2D/photo-75-2025-10-29-18-58-38.jpg"
    },
    {
        id: 10,
        name: "Надгробие Корнилия Алексеевича Мартовицкого",
        description: "Надгробие на могиле Корнилия Алексеевича Мартовицкого.",
        lat: 47.20819,
        lon: 38.904879,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/W4NnqMSZ/photo-24-2025-10-29-18-59-16.jpg"
    },
    {
        id: 11,
        name: "Надгробие Софьи Афанасьевны Попандопуло",
        description: "Надгробие на могиле Софьи Афанасьевны Попандопуло.",
        lat: 47.208102,
        lon: 38.90276,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/7d8jJLFJ/photo-40-2025-10-29-18-58-38.jpg"
    },
    {
        id: 12,
        name: "Надгробие Натальи Грековой",
        description: "Надгробие на могиле Натальи Грековой.",
        lat: 47.20681294,
        lon: 38.90244558,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/Kpn34WpH/photo-34-2025-10-29-18-58-38-1.jpg"
    },
    {
        id: 13,
        name: "Надгробие Н. И. Рафаиловича",
        description: "Надгробие на могиле Н. И. Рафаиловича.",
        lat: 47.207418,
        lon: 38.903671,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/TMwSpMd9/photo-27-2025-10-29-18-58-38.jpg"
    },
    {
        id: 14,
        name: "Надгробие И. Г. Фирсова",
        description: "Надгробие на могиле И. Г. Фирсова.",
        lat: 47.207224,
        lon: 38.902104,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/60yXYhmH/photo-40-2025-11-01-22-37-46.jpg"
    },
    {
        id: 15,
        name: "Надгробие А. Л. Громачевского",
        description: "Надгробие на могиле А. Л. Громачевского.",
        lat: 47.20632641,
        lon: 38.90248294,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/ynM3v4Zc/photo-22-2025-11-01-22-37-46.jpg"
    },
    {
        id: 16,
        name: "Надгробие Матильды Даржан",
        description: "Надгробие на могиле Матильды Даржан (урожденная Даванс).",
        lat: 47.20793966,
        lon: 38.90466749,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/RpXn0VJW/photo-97-2025-10-29-18-58-38.jpg"
    },
    {
        id: 17,
        name: "Надгробие М. С. Магулы",
        description: "Надгробие на могиле М. С. Магулы.",
        lat: 47.20793225,
        lon: 38.90288177,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/7xR7bwrP/photo-55-2025-10-29-18-58-38.jpg"
    },
    {
        id: 18,
        name: "Надгробие М. Кулика",
        description: "Надгробие на могиле М. Кулика.",
        lat: 47.20776,
        lon: 38.904534,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/DxV6S2R/IMG-20250925-161819.jpg"
    },
    {
        id: 19,
        name: "Надгробие Д. А. Нечаева и А. С. Фишман-Нечаевой",
        description: "Надгробие на могиле Д. А. Нечаева и А. С. Фишман-Нечаевой.",
        lat: 47.208195,
        lon: 38.903126,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/c9xRSnG/photo-88-2025-10-29-18-58-38.jpg"
    },
    {
        id: 20,
        name: "Надгробие Х. И. Лукиной",
        description: "Надгробие на могиле Х. И. Лукиной.",
        lat: 47.207323,
        lon: 38.904088,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/1J9rbBps/photo-13-2025-10-29-18-58-38.jpg"
    },
    {
        id: 21,
        name: "Надгробие Е. П. Сыровацкой",
        description: "Надгробие на могиле Е. П. Сыровацкой.",
        lat: 47.20819,
        lon: 38.904879,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/zWNjyNTt/photo-23-2025-10-29-18-59-16.jpg"
    },
    {
        id: 22,
        name: "Надгробие А. И. Рочеговой",
        description: "Надгробие на могиле А. И. Рочеговой.",
        lat: 47.20819,
        lon: 38.904879,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/8LYGHq8j/photo-22-2025-10-29-18-59-16.jpg"
    },
    {
        id: 23,
        name: "Надгробие Евстратовых",
        description: "Надгробие на могиле Евстратовых.",
        lat: 47.207654,
        lon: 38.902955,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/XxZn9j0p/photo-47-2025-10-29-18-58-38.jpg"
    },
    {
        id: 24,
        name: "Надгробие С. И. Логачева и Е. П. Логачевой",
        description: "Надгробие на могиле С. И. Логачева и Е. П. Логачевой.",
        lat: 47.20691001,
        lon: 38.9039113,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/VYPY3tF0/photo-10-2025-11-01-22-37-46.jpg"
    },
    {
        id: 25,
        name: "Надгробие Маргариты Ланской",
        description: "Надгробие на могиле Маргариты Ланской (Ланкау).",
        lat: 47.207057,
        lon: 38.901843,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/B28KStYY/photo-38-2025-11-01-22-37-46.jpg"
    },
    {
        id: 26,
        name: "Надгробие Цукановой А. П.",
        description: "Надгробие на могиле Цукановой А. П.",
        lat: 47.208357,
        lon: 38.904979,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/HyZLBLX/photo-18-2025-10-29-18-59-16.jpg"
    },
    {
        id: 27,
        name: "Надгробие М. И. Гиршфельд",
        description: "Надгробие на могиле М. И. Гиршфельд.",
        lat: 47.206865,
        lon: 38.901698,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/V01d6c5Y/photo-39-2025-11-01-22-37-46.jpg"
    },
    {
        id: 28,
        name: "Надгробие Дзаниди",
        description: "Надгробие на могиле Дзаниди.",
        lat: 47.20720636,
        lon: 38.90341083,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/8L6xT8ZH/photo-8-2025-11-01-22-37-46.jpg"
    },
    {
        id: 29,
        name: "Надгробие А. Я. Точиловского",
        description: "Надгробие на могиле А. Я. Точиловского.",
        lat: 47.208822,
        lon: 38.901729,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/nszG58nR/photo-60-2025-11-01-22-37-46.jpg"
    },
    {
        id: 30,
        name: "Надгробие Татьяны Константиновны Волгиной",
        description: "Надгробие на могиле Татьяны Константиновны Волгиной, урожденной Грековой.",
        lat: 47.207721,
        lon: 38.902131,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/fGCd095G/photo-70-2025-10-29-18-58-38.jpg"
    },
    {
        id: 31,
        name: "Надгробие И. К. Попова",
        description: "Надгробие на могиле И. К. Попова.",
        lat: 47.207717,
        lon: 38.901917,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/bjJFt9tf/photo-66-2025-10-29-18-58-38.jpg"
    },
    {
        id: 32,
        name: "Надгробие Е. К. Чахировой",
        description: "Надгробие на могиле Е. К. Чахировой.",
        lat: 47.208365,
        lon: 38.903186,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/7NnCfz7W/photo-8-2025-10-29-18-59-16.jpg"
    },
    {
        id: 33,
        name: "Надгробие Панайота Георгиевича Феохариди",
        description: "Надгробие на могиле Панайота Георгиевича Феохариди.",
        lat: 47.207619,
        lon: 38.904265,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/hxBCC7mL/photo-93-2025-10-29-18-58-38.jpg"
    },
    {
        id: 34,
        name: "Надгробие А. В. Платоновой",
        description: "Надгробие на могиле А. В. Платоновой.",
        lat: 47.20681294,
        lon: 38.90244558,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/s7zJBvG/photo-29-2025-11-01-22-37-46.jpg"
    },
    {
        id: 35,
        name: "Надгробие генерал-майора Евграфа Ивановича Платонова",
        description: "Надгробие на могиле генерал-майора Евграфа Ивановича Платонова.",
        lat: 47.20681294,
        lon: 38.90244558,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/9HMg03Cv/photo-28-2025-11-01-22-37-46.jpg"
    },
    {
        id: 36,
        name: "Надгробие А. Б. Малиджогло",
        description: "Надгробие на могиле А. Б. Малиджогло (Мамеледжогло).",
        lat: 47.207733,
        lon: 38.902291,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/hJwWLYkC/5384571366688290682.jpg"
    },
    {
        id: 37,
        name: "Надгробие А. М. Вальяно",
        description: "Надгробие на могиле А. М. Вальяно.",
        lat: 47.208304,
        lon: 38.902641,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/6hNm3f1/photo-84-2025-10-29-18-58-38.jpg"
    },
    {
        id: 38,
        name: " Барельеф слева от входных ворот «Ангелы над городом»",
        description: " Барельеф слева от входных ворот «Ангелы над городом»",
        lat: 47.207206,
        lon: 38.904362,
        category: "барельеф",
        forRoute: false,
        photo: "https://i.ibb.co/7xDV4vLF/photo-81-2025-11-01-22-37-46.jpg"
    },
    {
        id: 39,
        name: "Надгробие А. И. Мелентьевой",
        description: "Надгробие на могиле А. И. Мелентьевой.",
        lat: 47.207397,
        lon: 38.903018,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/hJGv4Fs2/photo-4-2025-10-29-18-58-38.jpg"
    },
    {
        id: 40,
        name: "Надгробие О. Н. Мелентьевой",
        description: "Надгробие на могиле О. Н. Мелентьевой.",
        lat: 47.207397,
        lon: 38.903018,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/2199LWvt/photo-5-2025-10-29-18-58-38.jpg"
    },
    {
        id: 41,
        name: "Надгробие Л. Н. Егоровой",
        description: "Надгробие на могиле Л. Н. Егоровой.",
        lat: 47.2084853,
        lon: 38.9038011,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/BKnmt6f4/photo-79-2025-11-01-22-37-46.jpg"
    },
    {
        id: 42,
        name: "Надгробие Н. Р. Егоровой",
        description: "Надгробие на могиле Н. Р. Егоровой.",
        lat: 47.2084853,
        lon: 38.9038011,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/b5tBN7Nc/photo-80-2025-11-01-22-37-46.jpg"
    },
    {
        id: 43,
        name: "Надгробие И. И. Шаронова",
        description: "Надгробие на могиле И. И. Шаронова.",
        lat: 47.20756593,
        lon: 38.90440291,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/LzVwjwpY/photo-1-2026-01-11-21-20-50.jpg"
    },
    {
        id: 44,
        name: "Надгробие Н. А. Редичкина",
        description: "Надгробие на могиле Н. А. Редичкина.",
        lat: 47.206861,
        lon: 38.903881,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/XkWbsNvm/photo-11-2025-11-01-22-37-46.jpg"
    },
    {
        id: 45,
        name: "Надгробие Петра Кузьмича Шаповалова",
        description: "Надгробие на могиле Петра Кузьмича Шаповалова.",
        lat: 47.208357,
        lon: 38.904979,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/S4RngWb0/photo-16-2025-10-29-18-59-16.jpg"
    },
    {
        id: 46,
        name: "Надгробие О. И. Ханжонковой",
        description: "Надгробие на могиле О. И. Ханжонковой.",
        lat: 47.20660553,
        lon: 38.90359841,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/LwDJVSw/photo-14-2025-11-01-22-37-46.jpg"
    },
    {
        id: 47,
        name: "Надгробие А. В. Ивановой",
        description: "Надгробие на могиле А. В. Ивановой.",
        lat: 47.20735234,
        lon: 38.90391686,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/0pYm3QPH/photo-2-2026-01-11-21-20-50.jpg"
    },
    {
        id: 48,
        name: "Надгробие А. Я. Кудрина",
        description: "Надгробие на могиле А. Я. Кудрина.",
        lat: 47.209674,
        lon: 38.903065,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/dRPZK56/photo-19-2026-01-11-21-20-50.jpg"
    },
    {
        id: 49,
        name: "Надгробие И. И. Гладкова",
        description: "Надгробие на могиле И. И. Гладкова.",
        lat: 47.207337,
        lon: 38.902804,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/WNfh4bMf/photo-6-2025-11-01-22-37-46.jpg"
    },
    {
        id: 50,
        name: "Надгробие И. Малеванского",
        description: "Надгробие на могиле И. Малеванского.",
        lat: 47.207974,
        lon: 38.902968,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/tTT1HMXG/photo-87-2025-10-29-18-58-38.jpg"
    },
    {
        id: 51,
        name: "Надгробие Марии Комнино-Варваци",
        description: "Надгробие на могиле Марии Комнино-Варваци.",
        lat: 47.207685,
        lon: 38.902893,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/0N4G6f7/photo-48-2025-10-29-18-58-38.jpg"
    },
    {
        id: 52,
        name: "Надгробие Ивана Амвросиевича Скараманга",
        description: "Надгробие на могиле Ивана Амвросиевича Скараманга.",
        lat: 47.207151,
        lon: 38.902145,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/4ZtTbWqY/photo-31-2025-11-01-22-37-46.jpg"
    },
    {
        id: 53,
        name: "Надгробие Леониды Даниловны Магула",
        description: "Надгробие на могиле Леониды Даниловны Магула.",
        lat: 47.206362,
        lon: 38.902382,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/ZzshcFhj/photo-52-2025-11-01-22-37-46.jpg"
    },
    {
        id: 54,
        name: "Надгробие К. Ф. Жолткевич",
        description: "Надгробие на могиле К. Ф. Жолткевич.",
        lat: 47.20768,
        lon: 38.904518,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/xtfrxcwF/photo-4-2026-01-11-21-20-50.jpg"
    },
    {
        id: 55,
        name: "Надгробие Н. Ф. Жолткевич",
        description: "Надгробие на могиле Н. Ф. Жолткевич.",
        lat: 47.20768,
        lon: 38.904518,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/SXgbDgdB/photo-3-2026-01-11-21-20-50.jpg"
    },
    {
        id: 56,
        name: "Надгробие братьев Монсон",
        description: "Надгробие на могиле братьев Монсон (Моиссон).",
        lat: 47.207408,
        lon: 38.903518,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/sJ92GDqY/photo-29-2025-10-29-18-58-38.jpg"
    },
    {
        id: 57,
        name: "Надгробие Г. Н. Федоровского",
        description: "Надгробие на могиле Г. Н. Федоровского.",
        lat: 47.208032,
        lon: 38.90082,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/yBy6R1Hb/photo-59-2025-11-01-22-37-46.jpg"
    },
    {
        id: 58,
        name: "Надгробие Георгия и Софии Монети",
        description: "Надгробие на могиле Георгия и Софии Монети.",
        lat: 47.208415,
        lon: 38.902894,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/PvT50FGS/photo-56-2025-11-01-22-37-46.jpg"
    },
    {
        id: 59,
        name: "Надгробие Нути Вроблевской",
        description: "Надгробие на могиле Нути (Нюты) Вро(у)блевской.",
        lat: 47.20854,
        lon: 38.902863,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/5HsjbXP/photo-57-2025-11-01-22-37-46.jpg"
    },
    {
        id: 60,
        name: "Надгробие Юлии Деминой",
        description: "Надгробие на могиле Юлии Деминой.",
        lat: 47.20745,
        lon: 38.904085,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/PZP6try3/20260304-124534.jpg"
    },
    {
        id: 61,
        name: "Надгробие Митрофанова Василия Митрофановича",
        description: "Надгробие на могиле Митрофанова Василия Митрофановича.",
        lat: 47.208475,
        lon: 38.904191,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/Z1NddfY2/photo-5-2025-10-29-18-59-16.jpg"
    },
    {
        id: 62,
        name: "Надгробие Малчевской Евгении Васильевны",
        description: "Надгробие на могиле Малчевской Евгении Васильевны.",
        lat: 47.20861725,
        lon: 38.90437718,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/JjgDb24X/image.png"
    },
    {
        id: 63,
        name: "Надгробие Секретева Якова Лавровича",
        description: "Надгробие на могиле Секретева Якова Лавровича.",
        lat: 47.20729,
        lon: 38.903085,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/F4rhZptN/photo-6-2025-10-29-18-58-38.jpg"
    },
    {
        id: 64,
        name: "Надгробие Ладохина Григория Григорьевича",
        description: "Надгробие на могиле Ладохина Григория Григорьевича.",
        lat: 47.2072644,
        lon: 38.90420296,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/Q34rd9Tw/photo-12-2025-10-29-18-58-38.jpg"
    },
    {
        id: 65,
        name: "Надгробие Краснокутской-Котовой Любови Анисифоровны",
        description: "Надгробие на могиле Краснокутской-Котовой Любови Анисифоровны.",
        lat: 47.20724087,
        lon: 38.90337875,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/ZzZYbt5z/photo-8-2025-10-29-18-58-38.jpg"
    },
    {
        id: 66,
        name: "Надгробие М. Ф. Алфераки",
        description: "Надгробие на могиле М. Ф. Алфераки.",
        lat: 47.207773,
        lon: 38.902496,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/8g7S0rHZ/photo-56-2025-10-29-18-58-38.jpg"
    },
    {
        id: 67,
        name: "Надгробие И. Е. Комнино-Варваци",
        description: "Надгробие на могиле И. Е. Комнино-Варваци.",
        lat: 47.206691,
        lon: 38.902062,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/nqWvHR7f/photo-37-2025-11-01-22-37-46.jpg"
    },
    {
        id: 68,
        name: "Надгробие Сивоконенко Николая Трифоновича",
        description: "Надгробие на могиле Сивоконенко Николая Трифоновича.",
        lat: 47.207314,
        lon: 38.902888,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/vxqzNcrQ/photo-10-2025-10-29-18-58-38.jpg"
    },
    {
        id: 69,
        name: "Надгробие инженер-майора Григория Матвеевича Толстого",
        description: "Надгробие на могиле инженер-майора Григория Матвеевича Толстого и младенца Матвея.",
        lat: 47.20802787,
        lon: 38.90220459,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/rG6gyKGy/photo-77-2025-10-29-18-58-38.jpg"
    },
    {
        id: 70,
        name: "Надгробие Пузанова Аркадия Ермиловича",
        description: "Надгробие на могиле Пузанова Аркадия Ермиловича.",
        lat: 47.20734418,
        lon: 38.90344108,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/XrcjHY8N/photo-9-2025-10-29-18-58-38.jpg"
    },
    {
        id: 71,
        name: "Надгробие Надежды Дмитриевны Комнино-Варваци",
        description: "Надгробие на могиле Надежды Дмитриевны Комнино-Варваци.",
        lat: 47.207685,
        lon: 38.902893,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/TqBr4hQT/photo-51-2025-10-29-18-58-38.jpg"
    },
    {
        id: 72,
        name: "Надгробие И. М. Андреева-Туркина",
        description: "Надгробие на могиле И. М. Андреева-Туркина.",
        lat: 47.207565,
        lon: 38.902852,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/bMtwkLpP/photo-1-2025-10-29-18-58-38.jpg"
    },
    {
        id: 73,
        name: "Надгробие Михалтициано",
        description: "Надгробие на могиле Михалтициано.",
        lat: 47.207441,
        lon: 38.9035,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/7TTdz93/photo-31-2025-10-29-18-58-38.jpg"
    },
    {
        id: 74,
        name: "Надгробие неизвестной «Заснувшая навсегда»",
        description: "Надгробие на могиле неизвестной «Заснувшая навсегда».",
        lat: 47.207337,
        lon: 38.904028,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/Jwm4g7R3/20251109-151038.jpg"
    },
    {
        id: 75,
        name: "Надгробие Н. А. Перестиани",
        description: "Надгробие на могиле Н. А. Перестиани.",
        lat: 47.2064776,
        lon: 38.90362047,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/hJdLQ41G/photo-15-2025-11-01-22-37-46.jpg"
    },
    {
        id: 76,
        name: "Надгробие Елизаветы Ивановны Дмитровой",
        description: "Надгробие на могиле Елизаветы Ивановны Дмитровой.",
        lat: 47.20775,
        lon: 38.902908,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/Cp4qZ7dS/photo-43-2025-10-29-18-58-38.jpg"
    },
    {
        id: 77,
        name: "Надгробие А. Тарле",
        description: "Надгробие на могиле А. Тарле.",
        lat: 47.207424,
        lon: 38.903037,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/4wKYg1mP/photo-3-2025-10-29-18-58-38.jpg"
    },
    {
        id: 78,
        name: "Надгробие А. П. Залесской",
        description: "Надгробие на могиле А. П. Залесской, урожденной Шауфус.",
        lat: 47.207721,
        lon: 38.902131,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/60dt68JM/photo-69-2025-10-29-18-58-38.jpg"
    },
    {
        id: 79,
        name: "Надгробие С. И. Назаренко",
        description: "Надгробие на могиле С. И. Назаренко.",
        lat: 47.209039,
        lon: 38.903328,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/fYfKFnS6/photo-77-2025-11-01-22-37-46.jpg"
    },
    {
        id: 80,
        name: "Надгробие Луневой А. И.",
        description: "Надгробие на могиле Луневой А. И.",
        lat: 47.207854,
        lon: 38.904197,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/6cwXpsq6/photo-91-2025-10-29-18-58-38.jpg"
    },
    {
        id: 81,
        name: "Надгробие О. К. Калашникова",
        description: "Надгробие на могиле О. К. Калашникова.",
        lat: 47.209119,
        lon: 38.904757,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/qY7B4wfh/image.png"
    },
    {
        id: 82,
        name: "Надгробие М. П. Рочегова",
        description: "Надгробие на могиле М. П. Рочегова.",
        lat: 47.2081,
        lon: 38.904879,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/XHkg8sd/photo-20-2025-10-29-18-59-16.jpg"
    },
    {
        id: 83,
        name: "Надгробие Новарного Георгия Григорьевича",
        description: "Надгробие на могиле Новарного Георгия Григорьевича.",
        lat: 47.20819,
        lon: 38.904879,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/cS21DKgZ/photo-19-2025-10-29-18-59-16.jpg"
    },
    {
        id: 84,
        name: "Надгробие Н. Муссури",
        description: "Надгробие на могиле Н. Муссури.",
        lat: 47.20632641,
        lon: 38.90248294,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/d0s954TZ/photo-25-2025-11-01-22-37-46.jpg"
    },
    {
        id: 85,
        name: "Надгробие Вальтера и Натальи Нейман",
        description: "Надгробие на могиле Вальтера и Натальи Нейман.",
        lat: 47.209091,
        lon: 38.90559,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/DfgjGvGV/photo-14-2025-10-29-18-59-16.jpg"
    },
    {
        id: 86,
        name: "Надгробие Т. И. Дышлового",
        description: "Надгробие на могиле Т. И. Дышлового.",
        lat: 47.205896,
        lon: 38.899972,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/B5mFD8sY/photo-45-2025-11-01-22-37-46.jpg"
    },
    {
        id: 87,
        name: "Надгробие М. М. Бензиной и М. А. Танцюра",
        description: "Надгробие на могиле М. М. Бензиной и М. А. Танцюра.",
        lat: 47.208351,
        lon: 38.904754,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/bM7DXh4v/photo-3-2025-10-29-18-59-16.jpg"
    },
    {
        id: 88,
        name: "Надгробие Фомы Ивановича Скасси",
        description: "Надгробие на могиле Фомы Ивановича Скасси.",
        lat: 47.207635,
        lon: 38.904306,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/QvcmNg1Y/photo-96-2025-10-29-18-58-38.jpg"
    },
    {
        id: 89,
        name: "Надгробие Я. И. Жужнева",
        description: "Надгробие на могиле Я. И. Жужнева.",
        lat: 47.206259,
        lon: 38.903232,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/1YbXqtNQ/photo-17-2025-11-01-22-37-46.jpg"
    },
    {
        id: 90,
        name: "Надгробие Надежды Зотиевны Денисовой",
        description: "Надгробие на могиле Надежды Зотиевны Денисовой.",
        lat: 47.207491,
        lon: 38.903306,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/xqrdwFyM/photo-30-2025-10-29-18-58-38.jpg"
    },
    
    {
        id: 92,
        name: "Надгробие Константина Петровича Македонского",
        description: "Надгробие на могиле Константина Петровича Македонского.",
        lat: 47.207715,
        lon: 38.902971,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/8LP9PRTh/photo-46-2025-10-29-18-58-38.jpg"
    },
    {
        id: 93,
        name: "Надгробие Георгия Властелицы",
        description: "Надгробие на могиле Георгия Властелицы.",
        lat: 47.207862,
        lon: 38.903171,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/998Shzh4/photo-45-2025-10-29-18-58-38-1.jpg"
    },
    {
        id: 94,
        name: "Надгробие неизвестного (Спиридон...)",
        description: "Надгробие на могиле неизвестного (Спиридон...).",
        lat: 47.207895,
        lon: 38.902753,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/Qv1ht8Vc/photo-86-2025-10-29-18-58-38.jpg"
    },
    {
        id: 95,
        name: "Саркофаг «Антон Никитин»",
        description: "Саркофаг с надписями на русском языке «Антон Никитин».",
        lat: 47.207813,
        lon: 38.902937,
        category: "Саркофаги",
        forRoute: true,
        photo: "https://i.ibb.co/9mvtVDZ1/photo-41-2025-10-29-18-58-38.jpg"
    },
    {
        id: 96,
        name: "Надгробие статского советника Яковенко",
        description: "Надгробие на могиле статского советника Яковенко.",
        lat: 47.207987,
        lon: 38.902635,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/nqf4m0RM/photo-81-2025-10-29-18-58-38.jpg"
    },

    {
        id: 98,
        name: "Надгробная плита Неофитос Элефтериос Хайма",
        description: "Надгробная плита Неофитос Элефтериос Хайма.",
        lat: 47.208081,
        lon: 38.902659,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/TBGmBm19/photo-74-2025-10-29-18-58-38.jpg"
    },
    {
        id: 99,
        name: "Надгробие Карла Орема",
        description: "Надгробие на могиле Карла Орема.",
        lat: 47.207987,
        lon: 38.901864,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/TMt2PYQ5/photo-65-2025-10-29-18-58-38.jpg"
    },
    {
        id: 100,
        name: "Надгробие Джона Емеса и детей Каррутерс",
        description: "Надгробие на могиле Джона Емеса, детей Каррутерс и Эмили Емес.",
        lat: 47.208057,
        lon: 38.902433,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/1Yb0StLj/photo-63-2025-10-29-18-58-38.jpg"
    },
  
    {
        id: 102,
        name: "Надгробие полковницы Елизаветы Иловайской",
        description: "Надгробие на могиле полковницы Елизаветы Иловайской.",
        lat: 47.207786,
        lon: 38.902277,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/pB4BtDzp/photo-60-2025-10-29-18-58-38.jpg"
    },
    {
        id: 103,
        name: "Надгробие журналиста В. Ф. Ханевского",
        description: "Надгробие на могиле журналиста В. Ф. Ханевского.",
        lat: 47.207769,
        lon: 38.902122,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/fd7WFXGh/photo-67-2025-10-29-18-58-38.jpg"
    },
    {
        id: 104,
        name: "Надгробие Анфии Семеновны Синоди-Поповой",
        description: "Надгробие на могиле Анфии Семеновны Синоди-Поповой.",
        lat: 47.20766,
        lon: 38.90209,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/W4CBnSV1/photo-68-2025-10-29-18-58-38.jpg"
    },
    {
        id: 105,
        name: "Надгробие прапорщика Атаманенко",
        description: "Надгробие на могиле прапорщика корпуса штурманов Атаманенко.",
        lat: 47.207691,
        lon: 38.902146,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/DHpnZ66L/IMG-5795.jpg"
    },

    // ==================== ВОИНСКИЕ ЗАХОРОНЕНИЯ ====================
    {
        id: 106,
        name: "Надгробие красногвардейцев",
        description: "Надгробие на могиле красногвардейцев, погибших в боях за установление Советской власти.",
        lat: 47.205777,
        lon: 38.900166,
        category: "Воинские захоронения",
        forRoute: true,
        photo: "https://i.ibb.co/bRF1TL4w/photo-44-2025-11-01-22-37-46.jpg"
    },
    {
        id: 107,
        name: "Братская могила советских воинов",
        description: "Братская могила советских воинов, погибших в боях за г. Таганрог.",
        lat: 47.205045,
        lon: 38.899527,
        category: "Воинские захоронения",
        forRoute: true,
        photo: "https://i.ibb.co/jv75MfJK/photo-48-2025-11-01-22-37-46.jpg"
    },
    {
        id: 108,
        name: "Надгробие чехов и словаков",
        description: "Надгробие на могиле чехов и словаков, погибших в боях за установление Советской власти.",
        lat: 47.205801,
        lon: 38.900169,
        category: "Воинские захоронения",
        forRoute: true,
        photo: "https://i.ibb.co/qYnTMrYX/photo-43-2025-11-01-22-37-46.jpg"
    },
    {
        id: 109,
        name: "Крест на захоронении юнкеров",
        description: "Крест на захоронении юнкеров.",
        lat: 47.206237,
        lon: 38.90296,
        category: "Воинские захоронения",
        forRoute: true,
        photo: "https://i.ibb.co/m5yd9J4Y/photo-18-2025-11-01-22-37-46.jpg"
    },
    {
        id: 110,
        name: "Надгробие рабочих, замученных белогвардейцами",
        description: "Надгробие на могиле рабочих, замученных белогвардейцами.",
        lat: 47.206243,
        lon: 38.899409,
        category: "Воинские захоронения",
        forRoute: true,
        photo: "https://i.ibb.co/nqTn4m9B/photo-46-2025-11-01-22-37-46.jpg"
    },
    {
        id: 111,
        name: "Обелиск советским морякам",
        description: "Обелиск на могиле советских моряков, погибших в боях за г. Таганрог.",
        lat: 47.206751,
        lon: 38.898189,
        category: "Воинские захоронения",
        forRoute: true,
        photo: "https://i.ibb.co/jkqk1RcS/photo-47-2025-11-01-22-37-46.jpg"
    },
    {
        id: 112,
        name: "Обелиск советским воинам",
        description: "Обелиск на могиле советских воинов, погибших в боях за г. Таганрог.",
        lat: 47.20485,
        lon: 38.90086,
        category: "Воинские захоронения",
        forRoute: true,
        photo: "https://i.ibb.co/3y50rw3Z/photo-50-2025-11-01-22-37-46.jpg"
    },
    {
        id: 113,
        name: "Надгробная плита советским воинам",
        description: "Надгробная плита на могиле советских воинов, погибших в боях за г. Таганрог.",
        lat: 47.205544,
        lon: 38.902727,
        category: "Воинские захоронения",
        forRoute: true,
        photo: "https://i.ibb.co/21yMn8yL/IMG-0401-1.jpg"
    },
    {
        id: 114,
        name: "Обелиск на могиле советских воинов",
        description: "Обелиск на могиле советских воинов, погибших в боях за Таганрог.",
        lat: 47.205151,
        lon: 38.901464,
        category: "Воинские захоронения",
        forRoute: true,
        photo: "https://i.ibb.co/8gMsZ769/photo-49-2025-11-01-22-37-46.jpg"
    },

    // ==================== ФАМИЛЬНЫЕ ЗАХОРОНЕНИЯ ====================
    {
        id: 115,
        name: "Фамильное захоронение Лакиеров и Комнино-Варваци",
        description: "Фамильное захоронение семьи Лакиеров и Комнино-Варваци. Подземный склеп.",
        lat: 47.208249,
        lon: 38.90252,
        category: "Фамильные захоронения",
        forRoute: true,
        photo: "https://i.ibb.co/s9HFTf4D/photo-83-2025-10-29-18-58-38.jpg"
    },
    {
        id: 116,
        name: "Фамильное захоронение Иордановых",
        description: "Фамильное захоронение семьи Иордановых.",
        lat: 47.2083,
        lon: 38.9028,
        category: "Фамильные захоронения",
        forRoute: true,
        photo: "https://i.ibb.co/cK91H0yc/photo-10-2025-10-29-18-59-16.jpg"
    },
    {
        id: 117,
        name: "Фамильное захоронение Дуровых",
        description: "Надгробия на фамильном захоронении Дуровых.",
        lat: 47.208017,
        lon: 38.9035,
        category: "Фамильные захоронения",
        forRoute: true,
        photo: "https://i.ibb.co/DgM8qsMc/photo-39-2025-10-29-18-58-38.jpg"
    },
    {
        id: 118,
        name: "Надгробие Ильи Никифоровича Лосева",
        description: "Надгробие на могиле надворного советника Ильи Никифоровича Лосева.",
        lat: 47.208325,
        lon: 38.903151,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/wNb4F53X/photo-7-2025-10-29-18-59-16.jpg"
    },
    {
        id: 119,
        name: "Надгробия Ивана Роя и Вильгельмины Паулини",
        description: "Надгробия на могилах Ивана Роя и Вильгельмины Паулини.",
        lat: 47.20835,
        lon: 38.90333,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/GQWK46KG/photo-9-2025-10-29-18-59-16.jpg"
    },
    {
        id: 120,
        name: "Надгробие А. Ф. Дьяконова",
        description: "Надгробие на могиле А. Ф. Дьяконова.",
        lat: 47.208966,
        lon: 38.903177,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/5g5kz4qC/photo-76-2025-11-01-22-37-46.jpg"
    },
    {
        id: 121,
        name: "Фамильное захоронение Билле и Базенер",
        description: "Надгробия на фамильном захоронении семьи Билле и Базенер.",
        lat: 47.208826,
        lon: 38.901911,
        category: "Фамильные захоронения",
        forRoute: true,
        photo: "https://i.ibb.co/84b3c5rf/photo-61-2025-11-01-22-37-46.jpg"
    },
    {
        id: 122,
        name: "Надгробие Ивана Ивановича Должникова",
        description: "Надгробие на могиле Ивана Ивановича Должникова, сына корабельного мастера.",
        lat: 47.20865,
        lon: 38.902839,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/cKdXhjBf/photo-64-2025-11-01-22-37-46.jpg"
    },
    {
        id: 123,
        name: "Надгробие Шапошниковой Агриппины Михайловны",
        description: "Надгробие на могиле Шапошниковой Агриппины Михайловны и ее супруга.",
        lat: 47.20917,
        lon: 38.902789,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/pBmGKQpX/photo-66-2025-11-01-22-37-46.jpg"
    },
    {
        id: 124,
        name: "Надгробие Котляровой",
        description: "Надгробие на могиле Котляровой.",
        lat: 47.20951685,
        lon: 38.9029036,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/prZkSyHT/photo-74-2025-11-01-22-37-46.jpg"
    },
    {
        id: 125,
        name: "Надгробие Котлярова",
        description: "Надгробие на могиле Котлярова.",
        lat: 47.20951685,
        lon: 38.9029036,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/8Q1fBZT/photo-73-2025-11-01-22-37-46.jpg"
    },
    {
        id: 126,
        name: "Надгробие Яниса Сильпауша",
        description: "Надгробие на могиле Яниса Сильпауша.",
        lat: 47.20780,
        lon: 38.903352,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/zHjdHJXg/photo-38-2025-10-29-18-58-38.jpg"
    },
    {
        id: 127,
        name: "Надгробие Валериана Гаэтановича Молла",
        description: "Надгробие на могиле Валериана Гаэтановича Молла.",
        lat: 47.20800,
        lon: 38.903697,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/Gvp8mMbS/photo-90-2025-10-29-18-58-38.jpg"
    },
    {
        id: 128,
        name: "Надгробие Клары Зминко-Техтерман",
        description: "Надгробие на могиле Клары Зминко-Техтерман.",
        lat: 47.208105,
        lon: 38.903665,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/F1RXDRx/photo-2-2026-01-12-01-20-51.jpg"
    },
    {
        id: 129,
        name: "Надгробие Исаковой Н. И.",
        description: "Надгробие на могиле Исаковой Н. И.",
        lat: 47.20924,
        lon: 38.904574,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/Psn3N9Py/image.jpg"
    },
    {
        id: 130,
        name: "Надгробие капитана Х. А. Мельникова",
        description: "Надгробие на могиле капитана дальнего плавания Х. А. Мельникова.",
        lat: 47.20854,
        lon: 38.902863,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/bMt0s3Mp/photo-58-2025-11-01-22-37-46.jpg"
    },
    {
        id: 131,
        name: "Надгробие Роберта-Вильгельма Орбинского",
        description: "Надгробие на могиле Роберта-Вильгельма Орбинского.",
        lat: 47.208815,
        lon: 38.901911,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/DPJ0n8Nj/photo-63-2025-11-01-22-37-46.jpg"
    },
    {
        id: 132,
        name: "Надгробие Николая Петровича и Борика Остряковых",
        description: "Надгробие на могиле потомственных дворян Николая Петровича и Борика Остряковых.",
        lat: 47.208389,
        lon: 38.904888,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/SDVxjqyf/photo-2-2025-10-29-18-59-16.jpg"
    },
    {
        id: 133,
        name: "Надгробие П. С. Ильченко и А. Е. Смысловой",
        description: "Надгробие на могиле П. С. Ильченко и А. Е. Смысловой (урожденная Ильченко).",
        lat: 47.209538,
        lon: 38.902769,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/Z6tcGkkn/photo-69-2025-11-01-22-37-46.jpg"
    },
    {
        id: 134,
        name: "Надгробие Ильи Исайиа",
        description: "Надгробие на могиле Ильи Исайиа.",
        lat: 47.20685921,
        lon: 38.90208638,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/5XFyWhLw/photo-34-2025-11-01-22-37-46.jpg"
    },
    {
        id: 135,
        name: "Надгробие Г. Ф. Депальдо",
        description: "Надгробие на могиле Г. Ф. Депальдо.",
        lat: 47.207764,
        lon: 38.902748,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/PZZfCqB5/photo-54-2025-10-29-18-58-38.jpg"
    },
    {
        id: 136,
        name: "Надгробие И. Деллапорте",
        description: "Надгробие на могиле И. Деллапорте.",
        lat: 47.20720636,
        lon: 38.90341083,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/dsZstPF7/photo-7-2025-11-01-22-37-46.jpg"
    },
    {
        id: 137,
        name: "Надгробие Ив. Вас. Бебешина",
        description: "Надгробие на могиле Ив. Вас. Бебешина.",
        lat: 47.208517,
        lon: 38.904876,
        category: "Надгробия",
        forRoute: false,
        photo: "https://i.ibb.co/SDVxjqyf/photo-2-2025-10-29-18-59-16.jpg"
    },

    // ==================== ЗАХОРОНЕНИЯ ДУХОВЕНСТВА ====================
    {
        id: 138,
        name: "Захоронение архиепископа Арсения",
        description: "Захоронение архиепископа Арсения.",
        lat: 47.206101,
        lon: 38.902998,
        category: "Захоронения духовенства",
        forRoute: true,
        photo: "https://i.ibb.co/4RLCgHtV/photo-20-2025-11-01-22-37-46.jpg"
    },

    // ==================== САРКОФАГИ ====================
    {
        id: 139,
        name: "Саркофаги Ивана и Е. И. Кобылиных",
        description: "Два каменных саркофага: потомственного почетного гражданина Ивана Евстратьевича Кобылина и Е. И. Кобылиной.",
        lat: 47.209169,
        lon: 38.90513,
        category: "Саркофаги",
        forRoute: true,
        photo: "https://i.ibb.co/hFNZ3VcH/photo-13-2025-10-29-18-59-16.jpg"
    }
];

// Категории ДЛЯ МАРШРУТА (исключаем "Надгробия")
const routeCategories = [...new Set(gravesData
    .filter(g => g.forRoute === true)
    .map(g => g.category))].sort();

// Все категории (для фильтрации в списке)
const allCategories = [...new Set(gravesData.map(g => g.category))].sort();

// Подсчет объектов
const objectsCount = gravesData.length;

console.log(`Загружено ${objectsCount} объектов, категорий для маршрута: ${routeCategories.length}`);