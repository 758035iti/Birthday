// Countdown Timer
function updateCountdown() {
    const countdownDate = new Date("September 1, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        document.getElementById("countdown-timer").innerHTML = "It's your birthday!";
    }
}

setInterval(updateCountdown, 1000);

// Populate language wishes
const languages = [
    "English: Happy Advance Birthday BHAI!",
    "Spanish: ¡Feliz Cumpleaños Anticipado BHAI!",
    "French: Joyeux Anniversaire en Avance BHAI!",
    "English: Advance Happy Birthday, BHAI",
    "Spanish: Feliz Cumpleaños Adelantado, BHAI",
    "French: Joyeux Anniversaire en Avance, BHAI",
    "German: Alles Gute zum Geburtstag im Voraus, BHAI",
    "Italian: Buon Compleanno in Anticipo, BHAI",
    "Portuguese: Feliz Aniversário Antecipado, BHAI",
    "Dutch: Van tevoren Gefeliciteerd, BHAI",
    "Russian: С днём рождения заранее, BHAI (S dnyom rozhdeniya zaranee)",
    "Chinese (Simplified): 提前生日快乐, BHAI (Tíqián shēngrì kuàilè)",
    "Japanese: 前もってお誕生日おめでとうございます, BHAI (Maemotte otanjōbi omedetō gozaimasu)",
    "Korean: 미리 생일 축하해, BHAI (Miri saengil chukhahae)",
    "Hindi: अग्रिम जन्मदिन की शुभकामनाएँ, BHAI (Agarim janmadin ki shubhkamnaayein)",
    "Arabic: عيد ميلاد سعيد مقدماً, BHAI (Eid milad sa'id muqaddaman)",
    "Turkish: Şimdiden Doğum Günün Kutlu Olsun, BHAI",
    "Greek: Πρόωρα Χρόνια Πολλά, BHAI (Próra Chrónia Pollá)",
    "Hebrew: יומולדת שמח מראש, BHAI (Yom huledet same'ach me-rosh)",
    "Swedish: Förskott Grattis på födelsedagen, BHAI",
    "Danish: Forsinket Tillykke med Fødselsdagen, BHAI",
    "Norwegian: Forsinket Gratulerer med Dagen, BHAI",
    "Finnish: Ennakkoon Hyvää Syntymäpäivää, BHAI",
    "Polish: Wczesne Życzenia Urodzinowe, BHAI",
    "Czech: Předem Šťastné a Veselé Narozeniny, BHAI",
    "Hungarian: Előre Boldog Születésnapot, BHAI",
    "Romanian: La Mulți Ani din Timp, BHAI",
    "Bulgarian: Честит Рожден Ден предварително, BHAI (Chestit Rozhden Den predvaritelno)",
    "Ukrainian: З Днем Народження заздалегідь, BHAI (Z Dnem Narodzhennya zazdalehidʹ)",
    "Serbian: Срећан Рођендан унапред, BHAI (Srećan Rođendan unapred)",
    "Croatian: Sretan Rođendan unaprijed, BHAI",
    "Slovak: Šťastné a Veselé Narodeniny vopred, BHAI",
    "Lithuanian: Išankstinė Gimtadienio Sveikinimai, BHAI",
    "Latvian: Priecīgas Dzimšanas dienas priekšlaicīgi, BHAI",
    "Estonian: Aeg-ajaline Sünnipäeva Tervitused, BHAI",
    "Swahili: Heri ya Siku ya Kuzaliwa Mapema, BHAI",
    "Malay: Selamat Hari Lahir Awal, BHAI",
    "Indonesian: Selamat Ulang Tahun Lebih Awal, BHAI",
    "Thai: สุขสันต์วันเกิดล่วงหน้า, BHAI (S̄uk̄s̄ạnt̒ wạn keid̒ lū̂āng n̂ā)",
    "Vietnamese: Sinh Nhật Sớm, BHAI",
    "Bengali: আগাম জন্মদিনের শুভেচ্ছা, BHAI (Āgām janmadinēra śubhēcchā)",
    "Punjabi: ਪੂਰਵ-ਜਨਮ ਦਿਨ ਦੀਆਂ ਵਧਾਈਆਂ, BHAI(Pūrav-janam din dī'āṁ vadhā'ī'āṁ)",
    "Tamil: முன் பிறந்த நாள் வாழ்த்துகள், BHAI(Muṉ piṟanta nāḷ vāḻttugaḷ)",
    "Telugu: ముందస్తు పుట్టినరోజు శుభాకాంక్షలు, BHAI (Mundastu puṭṭinarōju śubhākāṅkṣalu)",
    "Korean: 미리 생일 축하해, BHAI (Miri saengil chukhahae)",
    "Kannada: ಮುಂಚಿನ ಹುಟ್ಟಿದ ದಿನದ ಶುಭಾಷಯಗಳು, BHAI (Munciṇa huṭṭida dinada śubhāṣayagaḷu)",
    "Marathi: आगाऊ वाढदिवसाच्या शुभेच्छा, BHAI (Āgā'ū vāḍhadvasācyā śubhēcchā)",
    "Gujarati: પૂર્વજન્મદિવસની શુભેચ્છાઓ, BHAI (Pūrva janmadivasanī śubhēcchā'ō)",
    "Nepali: अघिल्लो जन्मदिनको शुभकामना, BHAI (Aghillō janmadinkō śubhakāmanā)",
    "Sinhala: පූර්ව උපන් දිනය සුබ පතමි, BHAI (Pūrva upan dinaya suba patami)",
    "Urdu: پیشگی سالگرہ کی مبارکباد, BHAI (Peshgi salgirah ki mubarakbad)",
    "Persian: تولدت پیشاپیش مبارک، BHAI (Tavallodat pishapish mobarak)",
    "Hebrew: יומולדת שמח מראש, BHAI (Yom huledet same'ach me-rosh)",
    "Armenian: Նախընթաց Ծննդյան Տոնի Շնորհավոր, BHAI (Nakhənt’ats’ tsnndyan t’oni shnorhavor)",
    "Georgian: ადრე დაბადების დღე, BHAI (Adre dabeibis dge)",
    "Mongolian: Урьдчилан төрсөн өдрийн мэндчилгээ, BHAI (Uriadchilan törsön üdrin mendchilge)",
    "Kazakh: Ерте туған күнмен құттықтаймын, BHAI (Erte tugan künmen quttıqtaımy)",
    "Uzbek: Oldindan Tug'ilgan Kun bilan Tabriklayman, BHAI",
    "Kyrgyz: Алдын ала туулган күн менен куттуктайм, BHAI (Aldyn ala turalgan kün menen kuttuktaıım)",
    "Tajik: Ба рӯзи таваллуди пешакӣ, BHAI (Ba ruzi tavalludi peshakī)",
    "Pashto: مخکې له مخکې د زېږېدنې ورځ خوشحالي, BHAI (Mukhke lə mukhe da zaygednay wray khušhālī)",
    "Burmese: အစောပိုင်းမွေးနေ့ဆုမွေ့၊ BHAI (Ahsawpaing mhway nay hsu myay)",
    "Khmer: សួស្តីថ្ងៃកំណើតមុនពេល, BHAI (Soursdey thngai kamneat mun pel)",
    "Lao: ສຸກສົດວັນເກີດລ່ວງໜ້າ, BHAI (Suksot wan keut luang na)",
    "Tagalog: Maagang Maligayang Kaarawan, BHAI",
    "Hmong: Txaus siab hnub yug ntxov, BHAI",
    "Fijian: Marau na Siga Ni Sucu, BHAI",
    "Samoan: Fa'amanuiaga i le aso fanau i le taimi muamua, BHAI",
    "Tongan: Fakamanatu atu he 'aho fakamatala, BHAI",
    "Haitian Creole: Bon Fèt an Avans, BHAI",
    "Javanese: Sugeng Ambal Warsa Wis Luwih, BHAI",
    "Malayalam: മുൻകൂർ ജന്മദിനാശംസകൾ, BHAI (Muṉkūr janmadināśaṁsakaḷ)",
    "Telugu: ముందస్తు పుట్టినరోజు శుభాకాంక్షలు, BHAI (Mundastu puṭṭinarōju śubhākāṅkṣalu)",
    "Oriya: ପୂର୍ବାଗମୀ ଜନ୍ମଦିନ ଶୁଭେଚ୍ଛା, BHAI (Pūrbāgamī janmadina śubhecchā)",
    "Assamese: আগৰ জন্মদিনৰ শুভেচ্ছা, BHAI (Āgar janmadinor śubhēcchā)",
    "Santali: ᱢᱮᱢᱮᱡᱚᱲᱤ ᱯᱟᱢᱟᱸ ᱨᱷᱟᱭᱩᱴᱟᱜᱚᱸ, BHAI",
    "Yoruba: Ayẹyẹ Ọjọ-ibi Lati ṣaaju, BHAI",
    "Ibo: Ezi ụbọchị ọmụmụ mbụ, BHAI",
    "Zulu: Usuku lokuzalwa kusenesikhathi, BHAI",
    "Xhosa: Usuku lokuzalwa ngaphambi kokuba, BHAI",
];

document.getElementById("language-wishes").innerHTML = languages
    .map(language => `<p class="blinking-text">${language}</p>`)
    .join("");

// Array of daily messages leading up to her birthday on September 11
const dailyMessages = [
    "Just 30 days to go! Your birthday countdown starts now! 🎉",
    "Only 29 days left until your special day! Can't wait! 🥳",
    "28 days and counting! I'm getting more excited by the day! 🎂",
    "27 days to go! Every day brings us closer to the big celebration! 🎁",
    "26 days left! Your birthday is going to be amazing! ✨",
    "25 days remaining! I can’t wait to celebrate you! 💖",
    "24 days to go! Thinking about all the joy you bring into my life! 😊",
    "23 days left! Your special day is approaching quickly! 🌟",
    "22 days to go! I’m counting down the days with excitement! 🎈",
    "21 days remaining! Each day brings us closer to the celebration! 🎉",
    "20 days left! I’m so lucky to have you in my life! 💝",
    "19 days to go! Your birthday is going to be unforgettable! 🎂",
    "18 days left! Can’t wait to make your day special! 🎁",
    "17 days remaining! Your smile lights up my world! 🌟",
    "16 days to go! I’m so excited for your big day! 🎉",
    "15 days left! Every moment with you is a gift! 💖",
    "14 days remaining! Two weeks to go until your special day! 🥳",
    "13 days left! Your birthday is going to be filled with joy! 😊",
    "12 days to go! Counting down with love and excitement! 🎂",
    "11 days left! Your special day is almost here! 🎁",
    "10 days remaining! Can’t wait to celebrate you! ✨",
    "9 days to go! You mean the world to me! 💖",
    "8 days left! The anticipation is building! 🎉",
    "7 days remaining! Just one week until your big day! 🌟",
    "6 days to go! Your birthday is going to be magical! 🎁",
    "5 days left! So excited to celebrate your special day! 🎂",
    "4 days remaining! The countdown is almost over! 🥳",
    "3 days to go! Your birthday is right around the corner! 🎉",
    "2 days left! Can’t wait to shower you with love and joy! 💝",
    "1 day remaining! Tomorrow is your big day! I’m so excited! 🎂",
    "Happy Birthday, my BROTHER! Today we celebrate YOU! 🥳🎉"
];

// Function to calculate the index of the daily message based on the date
function getDailyMessageIndex() {
    const today = new Date();
    const startDate = new Date(today.getFullYear(), 8, 24); // August 12
    const diff = today - startDate;
    const index = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (index >= 0 && index < dailyMessages.length) {
        return dailyMessages[index];
    } else {
        return "I can't wait to celebrate your special day BHAI! 🎉";
    }
}

// Set the daily message
document.getElementById('daily-message').textContent = getDailyMessageIndex();

