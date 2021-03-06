import ullamo1 from "./assets/imgs/ullamo1.png";
import ullamo2 from "./assets/imgs/ullamo2.png";
import newArr from "./assets/imgs/ullamo3.png";
import ullamo4 from "./assets/imgs/ullamo4.png";
import ullamo5 from "./assets/imgs/ullamo5.png";
import ullamo6 from "./assets/imgs/ullamo6.png";
import ullamo7 from "./assets/imgs/ullamo7.png";
import ullamo8 from "./assets/imgs/ullamo8.png";
import ullamo9 from "./assets/imgs/ullamo9.png";
import ullamo10 from "./assets/imgs/ullamo10.png";
import ullamo11 from "./assets/imgs/ullamo11.png";
// import kitob1 from "./assets/imgs/books-img/book1.1.jpg";
// import kitob2 from "./assets/imgs/books-img/book1.2.jpg";
// import kitob3 from "./assets/imgs/books-img/book1.3.jpg";
// import kitob4 from "./assets/imgs/books-img/book1.4.jpg";

let obj = [
  {
    id: 1,
    userName: "Abdulla Avloniy",
    birth: 1748,
    dead: 1784,
    userImg: ullamo1,
    
    desc: `XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobi Abdulla Avloniydir. U 1878 yilning 12 iyulida Toshkentning Mergancha mahallasida, toquvchi Miravlon aka oilasida dunyoga keldi. Bolaligi Mirobod mahallasining egri-bugri kochalarida, kopchilik qismini ruslar tashkil qilgan temir yol ishchilari bolalari orasida kechdi. Oqchidagi eski maktabda, song madrasada oqidi (1885–1886). Mustaqil mutolaa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    books: [
      {
        bookId: 1,
        nomi: "Qo'rqma",
        shoir: "Abdulla Avloniy",
        img: "https://s3-alpha-sig.figma.com/img/f198/6286/4ee6e5bd5696d8975c54e5fce6b334c5?Expires=1654473600&Signature=TP1hji1sbfiKA1WFJp7BxpcoUvCFTwVHiGkz9~~ASWqtpIon2gpPXzChjSdUysYFw9meAZeeVBQl0SA55RHNLO0MLQMCYa6Liyj~olXpjKNvxCkJ4jyV87WfoIrUw5HCxdH8w3NDcpwV17ndhwtDBQs3fKjQmlANaxQaUAOO1f8fCp3FSA0TnxRsM6wRixIL6byVn4~AQ989Zxzh1ZSn06aS8SBiX7nlCBRm0NTnjfZXb2shYEed5REP6nBxjWWJM8z-QM~Q0RoxOi1kRV63MT102EU7a8YCujaZAc--NjDncOPLZVhgxwV1jt-DAF9ov4SpwhkSdHa637ZKQjozAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 250,
        chopEtilgan: 2019,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 27000,
        audio: 623,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 2,
        nomi: "Amerika Fojiasi",
        shoir: "Abdulla Avloniy",
        img: "https://s3-alpha-sig.figma.com/img/f198/6286/4ee6e5bd5696d8975c54e5fce6b334c5?Expires=1654473600&Signature=TP1hji1sbfiKA1WFJp7BxpcoUvCFTwVHiGkz9~~ASWqtpIon2gpPXzChjSdUysYFw9meAZeeVBQl0SA55RHNLO0MLQMCYa6Liyj~olXpjKNvxCkJ4jyV87WfoIrUw5HCxdH8w3NDcpwV17ndhwtDBQs3fKjQmlANaxQaUAOO1f8fCp3FSA0TnxRsM6wRixIL6byVn4~AQ989Zxzh1ZSn06aS8SBiX7nlCBRm0NTnjfZXb2shYEed5REP6nBxjWWJM8z-QM~Q0RoxOi1kRV63MT102EU7a8YCujaZAc--NjDncOPLZVhgxwV1jt-DAF9ov4SpwhkSdHa637ZKQjozAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 650,
        chopEtilgan: 2017,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 36000,
        audio: 793,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 3,
        nomi: "O'tgan kunlar",
        shoir: "Abdulla Avloniy",
        img: "https://s3-alpha-sig.figma.com/img/f198/6286/4ee6e5bd5696d8975c54e5fce6b334c5?Expires=1654473600&Signature=TP1hji1sbfiKA1WFJp7BxpcoUvCFTwVHiGkz9~~ASWqtpIon2gpPXzChjSdUysYFw9meAZeeVBQl0SA55RHNLO0MLQMCYa6Liyj~olXpjKNvxCkJ4jyV87WfoIrUw5HCxdH8w3NDcpwV17ndhwtDBQs3fKjQmlANaxQaUAOO1f8fCp3FSA0TnxRsM6wRixIL6byVn4~AQ989Zxzh1ZSn06aS8SBiX7nlCBRm0NTnjfZXb2shYEed5REP6nBxjWWJM8z-QM~Q0RoxOi1kRV63MT102EU7a8YCujaZAc--NjDncOPLZVhgxwV1jt-DAF9ov4SpwhkSdHa637ZKQjozAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 347,
        chopEtilgan: 2010,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 18000,
        audio: 463,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
      {
        bookId: 4,
        nomi: "Boy va Kambagal Ota",
        shoir: "Abdulla Avloniy",
        img: "https://s3-alpha-sig.figma.com/img/f198/6286/4ee6e5bd5696d8975c54e5fce6b334c5?Expires=1654473600&Signature=TP1hji1sbfiKA1WFJp7BxpcoUvCFTwVHiGkz9~~ASWqtpIon2gpPXzChjSdUysYFw9meAZeeVBQl0SA55RHNLO0MLQMCYa6Liyj~olXpjKNvxCkJ4jyV87WfoIrUw5HCxdH8w3NDcpwV17ndhwtDBQs3fKjQmlANaxQaUAOO1f8fCp3FSA0TnxRsM6wRixIL6byVn4~AQ989Zxzh1ZSn06aS8SBiX7nlCBRm0NTnjfZXb2shYEed5REP6nBxjWWJM8z-QM~Q0RoxOi1kRV63MT102EU7a8YCujaZAc--NjDncOPLZVhgxwV1jt-DAF9ov4SpwhkSdHa637ZKQjozAg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 180,
        chopEtilgan: 2015,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 23500,
        audio: 213,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
    ],
  },

  {
    id: 2,
    userName: "Nusrat Rahmat",
    birth: 1972,
    dead: 2034,
    userImg: ullamo2,
    desc: `XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobi Abdulla Avloniydir. U 1878 yilning 12 iyulida Toshkentning Mergancha aa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    books: [
      {
        bookId: 1,
        nomi: "Qo'rqma",
        shoir: "Nusrat Rahmat",
        img: "https://s3-alpha-sig.figma.com/img/2811/987d/e3a28cd1b4fd0c1e78834179cc8f7512?Expires=1654473600&Signature=FF7d~GNn3Y9iGsuz7rJNUo5KjGXaxp7kE24kt4H-APsmrsmhUxXDeWEQQbONCnqYBkb0zWwrIY5keBFhx4AMWI~GeNqwbzS9VddyKXBOstykw9XKX9vz6t95gzSIif9X7uaxaQWieCmZrz~W0A5eJOul~fa70ADl5BxWZFSnSaEYg1SD2C~48yEDJEJGyroalXn9waROUWc1uFEnrmMciNFW7mKPIn5Iy-7dLBAzASgivIs2Gf0U6DMvQvSLwGRXMbRy10Ck8xONdg62iq~VFIBgHfeReos4KTA3DowhoP55x5VmW6HPvgKs19qzPTuNg0sa~~iY5EDHlJ-EoBeKCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 250,
        chopEtilgan: 2019,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 27000,
        audio: 623,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 2,
        nomi: "Amerika Fojiasi",
        shoir: "Nusrat Rahmat",
        img: "https://s3-alpha-sig.figma.com/img/2811/987d/e3a28cd1b4fd0c1e78834179cc8f7512?Expires=1654473600&Signature=FF7d~GNn3Y9iGsuz7rJNUo5KjGXaxp7kE24kt4H-APsmrsmhUxXDeWEQQbONCnqYBkb0zWwrIY5keBFhx4AMWI~GeNqwbzS9VddyKXBOstykw9XKX9vz6t95gzSIif9X7uaxaQWieCmZrz~W0A5eJOul~fa70ADl5BxWZFSnSaEYg1SD2C~48yEDJEJGyroalXn9waROUWc1uFEnrmMciNFW7mKPIn5Iy-7dLBAzASgivIs2Gf0U6DMvQvSLwGRXMbRy10Ck8xONdg62iq~VFIBgHfeReos4KTA3DowhoP55x5VmW6HPvgKs19qzPTuNg0sa~~iY5EDHlJ-EoBeKCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 650,
        chopEtilgan: 2017,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 36000,
        audio: 793,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 3,
        nomi: "O'tgan kunlar",
        shoir: "Nusrat Rahmat",
        img: "https://s3-alpha-sig.figma.com/img/2811/987d/e3a28cd1b4fd0c1e78834179cc8f7512?Expires=1654473600&Signature=FF7d~GNn3Y9iGsuz7rJNUo5KjGXaxp7kE24kt4H-APsmrsmhUxXDeWEQQbONCnqYBkb0zWwrIY5keBFhx4AMWI~GeNqwbzS9VddyKXBOstykw9XKX9vz6t95gzSIif9X7uaxaQWieCmZrz~W0A5eJOul~fa70ADl5BxWZFSnSaEYg1SD2C~48yEDJEJGyroalXn9waROUWc1uFEnrmMciNFW7mKPIn5Iy-7dLBAzASgivIs2Gf0U6DMvQvSLwGRXMbRy10Ck8xONdg62iq~VFIBgHfeReos4KTA3DowhoP55x5VmW6HPvgKs19qzPTuNg0sa~~iY5EDHlJ-EoBeKCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 347,
        chopEtilgan: 2010,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 18000,
        audio: 463,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
      {
        bookId: 4,
        nomi: "Boy va Kambagal Ota",
        shoir: "Nusrat Rahmat",
        img: "https://s3-alpha-sig.figma.com/img/2811/987d/e3a28cd1b4fd0c1e78834179cc8f7512?Expires=1654473600&Signature=FF7d~GNn3Y9iGsuz7rJNUo5KjGXaxp7kE24kt4H-APsmrsmhUxXDeWEQQbONCnqYBkb0zWwrIY5keBFhx4AMWI~GeNqwbzS9VddyKXBOstykw9XKX9vz6t95gzSIif9X7uaxaQWieCmZrz~W0A5eJOul~fa70ADl5BxWZFSnSaEYg1SD2C~48yEDJEJGyroalXn9waROUWc1uFEnrmMciNFW7mKPIn5Iy-7dLBAzASgivIs2Gf0U6DMvQvSLwGRXMbRy10Ck8xONdg62iq~VFIBgHfeReos4KTA3DowhoP55x5VmW6HPvgKs19qzPTuNg0sa~~iY5EDHlJ-EoBeKCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 180,
        chopEtilgan: 2015,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 23500,
        audio: 213,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
    ],
  },

  {
    id: 3,
    userName: "Rahmonberdi Madazimov",
    birth: 1505,
    dead: 1557,
    userImg: newArr,
    desc: `XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobi Abdulla Avloniydir. U 1878 yilning 12 iyulida Toshkentning Mergancha mahallasida, toquvchi Miravlon aka oilasida dunyoga keldi. Bolaligi Mirobod mahallifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    books: [
      {
        bookId: 1,
        nomi: "Qo'rqma",
        shoir: "Rahmonberdi Madazimov",
        img: "https://s3-alpha-sig.figma.com/img/8a8b/d23f/66dc708d0099b37691b367682ad3a31f?Expires=1654473600&Signature=h08tEvZzoa-yEX1HJaTsPh69-4ufu3MewFQHlWsMA-Ghqq3hSND~i6TyTLVdqfT3h-JVSY-fLo4B1lw8oYbMU-iNlTArQU72A6GkC6XPbGhu-J5pycY5P6kmdd9kcRRdjcHb7GnjsU5XcnwByA1tV8C1cAGhh-Ts3w20hcSMH07HeYav2rzTg6TG~1JbQFJIt-wIWgKI9Ec3DyMFUGv570AHuWBVIeVJxY751ii3vkaHAMxUgX4CTNzuxbJC3URgTsrigu51~Ip8EHy5z-gX8vbdd4exCQ4i03U~tER~1uxiLpPSvSeKyn25Q3v23epDzMDSc4RuUcAKjREBlqfnBA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 250,
        chopEtilgan: 2019,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 27000,
        audio: 623,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 2,
        nomi: "Amerika Fojiasi",
        shoir: "Rahmonberdi Madazimov",
        img: "https://s3-alpha-sig.figma.com/img/8a8b/d23f/66dc708d0099b37691b367682ad3a31f?Expires=1654473600&Signature=h08tEvZzoa-yEX1HJaTsPh69-4ufu3MewFQHlWsMA-Ghqq3hSND~i6TyTLVdqfT3h-JVSY-fLo4B1lw8oYbMU-iNlTArQU72A6GkC6XPbGhu-J5pycY5P6kmdd9kcRRdjcHb7GnjsU5XcnwByA1tV8C1cAGhh-Ts3w20hcSMH07HeYav2rzTg6TG~1JbQFJIt-wIWgKI9Ec3DyMFUGv570AHuWBVIeVJxY751ii3vkaHAMxUgX4CTNzuxbJC3URgTsrigu51~Ip8EHy5z-gX8vbdd4exCQ4i03U~tER~1uxiLpPSvSeKyn25Q3v23epDzMDSc4RuUcAKjREBlqfnBA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 650,
        chopEtilgan: 2017,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 36000,
        audio: 793,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 3,
        nomi: "O'tgan kunlar",
        shoir: "Rahmonberdi Madazimov",
        img: "https://s3-alpha-sig.figma.com/img/8a8b/d23f/66dc708d0099b37691b367682ad3a31f?Expires=1654473600&Signature=h08tEvZzoa-yEX1HJaTsPh69-4ufu3MewFQHlWsMA-Ghqq3hSND~i6TyTLVdqfT3h-JVSY-fLo4B1lw8oYbMU-iNlTArQU72A6GkC6XPbGhu-J5pycY5P6kmdd9kcRRdjcHb7GnjsU5XcnwByA1tV8C1cAGhh-Ts3w20hcSMH07HeYav2rzTg6TG~1JbQFJIt-wIWgKI9Ec3DyMFUGv570AHuWBVIeVJxY751ii3vkaHAMxUgX4CTNzuxbJC3URgTsrigu51~Ip8EHy5z-gX8vbdd4exCQ4i03U~tER~1uxiLpPSvSeKyn25Q3v23epDzMDSc4RuUcAKjREBlqfnBA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 347,
        chopEtilgan: 2010,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 18000,
        audio: 463,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
      {
        bookId: 4,
        nomi: "Boy va Kambagal Ota",
        shoir: "Rahmonberdi Madazimov",
        img: "https://s3-alpha-sig.figma.com/img/8a8b/d23f/66dc708d0099b37691b367682ad3a31f?Expires=1654473600&Signature=h08tEvZzoa-yEX1HJaTsPh69-4ufu3MewFQHlWsMA-Ghqq3hSND~i6TyTLVdqfT3h-JVSY-fLo4B1lw8oYbMU-iNlTArQU72A6GkC6XPbGhu-J5pycY5P6kmdd9kcRRdjcHb7GnjsU5XcnwByA1tV8C1cAGhh-Ts3w20hcSMH07HeYav2rzTg6TG~1JbQFJIt-wIWgKI9Ec3DyMFUGv570AHuWBVIeVJxY751ii3vkaHAMxUgX4CTNzuxbJC3URgTsrigu51~Ip8EHy5z-gX8vbdd4exCQ4i03U~tER~1uxiLpPSvSeKyn25Q3v23epDzMDSc4RuUcAKjREBlqfnBA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 180,
        chopEtilgan: 2015,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 23500,
        audio: 213,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
    ],
  },

  {
    id: 4,
    userName: "Hamza Hakimzoda Niyoziy",
    birth: 1623,
    dead: 1687,
    userImg: ullamo4,
    desc: `XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobi Abdulla Avloniydir. U 1878 yilning 12 iyulida Toshkentning Mergancha mahallasida, toquvchi Miravlon aka oilasida dunyoga keldi. Bolaligi Mirobod mahallasiningchiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    books: [
      {
        bookId: 1,
        nomi: "Qo'rqma",
        shoir: "Hamza Hakimzoda Niyoziy",
        img: "https://s3-alpha-sig.figma.com/img/849c/d8bc/9c728d578e3da6768abe348a9e1cba0b?Expires=1654473600&Signature=CtgEfIbGcGMlkR-mvE8nnhcOwT4BsLBvRC270yYAJQ-ruByVKBVRBZZ4iZw3OfSZfQjJ5HUvCp0sLxhCjIVb7cNZfzAizJMpEYtr9571vpLmdgND7NipDKDu~ogNCnRcsxwGF5OVVzsRLewePe0OsGUuuftZ5XJrE3HvvIE0ghKLIFGm5zmtkKOPpk3GMEDyBSlK83OOTwdwptuShmnmJEFtcgCxACipdDVN8QT3k3NLZeTC-8AQHFu3NDJALtMsXH-XGiO5X39NPUugXf7WVaUoD82RpZtSPZtapUabnz6M6TGN8y0mbf73hmHTzCv9C22fx5YPh7zCkwN8frGQjw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 250,
        chopEtilgan: 2019,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 27000,
        audio: 623,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 2,
        nomi: "Amerika Fojiasi",
        shoir: "Hamza Hakimzoda Niyoziy",
        img: "https://s3-alpha-sig.figma.com/img/849c/d8bc/9c728d578e3da6768abe348a9e1cba0b?Expires=1654473600&Signature=CtgEfIbGcGMlkR-mvE8nnhcOwT4BsLBvRC270yYAJQ-ruByVKBVRBZZ4iZw3OfSZfQjJ5HUvCp0sLxhCjIVb7cNZfzAizJMpEYtr9571vpLmdgND7NipDKDu~ogNCnRcsxwGF5OVVzsRLewePe0OsGUuuftZ5XJrE3HvvIE0ghKLIFGm5zmtkKOPpk3GMEDyBSlK83OOTwdwptuShmnmJEFtcgCxACipdDVN8QT3k3NLZeTC-8AQHFu3NDJALtMsXH-XGiO5X39NPUugXf7WVaUoD82RpZtSPZtapUabnz6M6TGN8y0mbf73hmHTzCv9C22fx5YPh7zCkwN8frGQjw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 650,
        chopEtilgan: 2017,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 36000,
        audio: 793,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 3,
        nomi: "O'tgan kunlar",
        shoir: "Hamza Hakimzoda Niyoziy",
        img: "https://s3-alpha-sig.figma.com/img/849c/d8bc/9c728d578e3da6768abe348a9e1cba0b?Expires=1654473600&Signature=CtgEfIbGcGMlkR-mvE8nnhcOwT4BsLBvRC270yYAJQ-ruByVKBVRBZZ4iZw3OfSZfQjJ5HUvCp0sLxhCjIVb7cNZfzAizJMpEYtr9571vpLmdgND7NipDKDu~ogNCnRcsxwGF5OVVzsRLewePe0OsGUuuftZ5XJrE3HvvIE0ghKLIFGm5zmtkKOPpk3GMEDyBSlK83OOTwdwptuShmnmJEFtcgCxACipdDVN8QT3k3NLZeTC-8AQHFu3NDJALtMsXH-XGiO5X39NPUugXf7WVaUoD82RpZtSPZtapUabnz6M6TGN8y0mbf73hmHTzCv9C22fx5YPh7zCkwN8frGQjw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 347,
        chopEtilgan: 2010,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 18000,
        audio: 463,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
      {
        bookId: 4,
        nomi: "Boy va Kambagal Ota",
        shoir: "Hamza Hakimzoda Niyoziy",
        img: "https://s3-alpha-sig.figma.com/img/849c/d8bc/9c728d578e3da6768abe348a9e1cba0b?Expires=1654473600&Signature=CtgEfIbGcGMlkR-mvE8nnhcOwT4BsLBvRC270yYAJQ-ruByVKBVRBZZ4iZw3OfSZfQjJ5HUvCp0sLxhCjIVb7cNZfzAizJMpEYtr9571vpLmdgND7NipDKDu~ogNCnRcsxwGF5OVVzsRLewePe0OsGUuuftZ5XJrE3HvvIE0ghKLIFGm5zmtkKOPpk3GMEDyBSlK83OOTwdwptuShmnmJEFtcgCxACipdDVN8QT3k3NLZeTC-8AQHFu3NDJALtMsXH-XGiO5X39NPUugXf7WVaUoD82RpZtSPZtapUabnz6M6TGN8y0mbf73hmHTzCv9C22fx5YPh7zCkwN8frGQjw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 180,
        chopEtilgan: 2015,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 23500,
        audio: 213,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
    ],
  },

  {
    id: 5,
    userName: "Abdulhamid Cho'lpon",
    birth: 1878,
    dead: 1934,
    userImg: ullamo5,
    desc: `8 yilning 12 iyulida Toshkentning Mergancha mahallasida, toquvchi Miravlon aka oilasida dunyoga keldi. Bolaligi Mirobod mahallasining egri-bugri kochalarida, kopchilik qismini ruslar tashkil qilgan temir yol ishchilari bolalari orasida kechdi. Oqchidagi eski maktabda, song madrasada oqidi (1885–1886). Mustaqil mutolaa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    books: [
      {
        bookId: 1,
        nomi: "Qo'rqma",
        shoir: "Abdulhamid Cho'lpon",
        img: "https://s3-alpha-sig.figma.com/img/dfe6/c42b/a19fa03b63c395f146732a07f7c6faf9?Expires=1654473600&Signature=Hp9ymqN~gJOpThhzQnfUHYZo0VNM04FkDyKw9WITGTvA10oqmE3DJbKqTHfP0k3OJ6v0hZ6u7GkEhRxuqEjGhsP-GbMwREqDOuY4aQGNLPbgfpat6ApDhq7DjaKZUW6qcuxLLuGHXYk6q0JLw6v6jBwWDyF~NopDWRmSz~IP-TIcQqTCSxHscRmX6hz~s4kpe4FMlvdQbUbk1wE6syJ3qp~NHSCNP1fKazXg5kQ-JHwrUvyfdSV9~6cQaoCmNn9KY9ZQIUhLYiVdPqrJEmDh23Qzs5zqqCkd-LLK3vgW7ao9TCrUyi9QgDVUiC3jNEKKXg8n-VYdBA071LBeVSeTUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 250,
        chopEtilgan: 2019,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 27000,
        audio: 623,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 2,
        nomi: "Amerika Fojiasi",
        shoir: "Abdulhamid Cho'lpon",
        img: "https://s3-alpha-sig.figma.com/img/dfe6/c42b/a19fa03b63c395f146732a07f7c6faf9?Expires=1654473600&Signature=Hp9ymqN~gJOpThhzQnfUHYZo0VNM04FkDyKw9WITGTvA10oqmE3DJbKqTHfP0k3OJ6v0hZ6u7GkEhRxuqEjGhsP-GbMwREqDOuY4aQGNLPbgfpat6ApDhq7DjaKZUW6qcuxLLuGHXYk6q0JLw6v6jBwWDyF~NopDWRmSz~IP-TIcQqTCSxHscRmX6hz~s4kpe4FMlvdQbUbk1wE6syJ3qp~NHSCNP1fKazXg5kQ-JHwrUvyfdSV9~6cQaoCmNn9KY9ZQIUhLYiVdPqrJEmDh23Qzs5zqqCkd-LLK3vgW7ao9TCrUyi9QgDVUiC3jNEKKXg8n-VYdBA071LBeVSeTUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 650,
        chopEtilgan: 2017,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 36000,
        audio: 793,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 3,
        nomi: "O'tgan kunlar",
        shoir: "Abdulhamid Cho'lpon",
        img: "https://s3-alpha-sig.figma.com/img/dfe6/c42b/a19fa03b63c395f146732a07f7c6faf9?Expires=1654473600&Signature=Hp9ymqN~gJOpThhzQnfUHYZo0VNM04FkDyKw9WITGTvA10oqmE3DJbKqTHfP0k3OJ6v0hZ6u7GkEhRxuqEjGhsP-GbMwREqDOuY4aQGNLPbgfpat6ApDhq7DjaKZUW6qcuxLLuGHXYk6q0JLw6v6jBwWDyF~NopDWRmSz~IP-TIcQqTCSxHscRmX6hz~s4kpe4FMlvdQbUbk1wE6syJ3qp~NHSCNP1fKazXg5kQ-JHwrUvyfdSV9~6cQaoCmNn9KY9ZQIUhLYiVdPqrJEmDh23Qzs5zqqCkd-LLK3vgW7ao9TCrUyi9QgDVUiC3jNEKKXg8n-VYdBA071LBeVSeTUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 347,
        chopEtilgan: 2010,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 18000,
        audio: 463,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
      {
        bookId: 4,
        nomi: "Boy va Kambagal Ota",
        shoir: "Abdulhamid Cho'lpon",
        img: "https://s3-alpha-sig.figma.com/img/dfe6/c42b/a19fa03b63c395f146732a07f7c6faf9?Expires=1654473600&Signature=Hp9ymqN~gJOpThhzQnfUHYZo0VNM04FkDyKw9WITGTvA10oqmE3DJbKqTHfP0k3OJ6v0hZ6u7GkEhRxuqEjGhsP-GbMwREqDOuY4aQGNLPbgfpat6ApDhq7DjaKZUW6qcuxLLuGHXYk6q0JLw6v6jBwWDyF~NopDWRmSz~IP-TIcQqTCSxHscRmX6hz~s4kpe4FMlvdQbUbk1wE6syJ3qp~NHSCNP1fKazXg5kQ-JHwrUvyfdSV9~6cQaoCmNn9KY9ZQIUhLYiVdPqrJEmDh23Qzs5zqqCkd-LLK3vgW7ao9TCrUyi9QgDVUiC3jNEKKXg8n-VYdBA071LBeVSeTUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 180,
        chopEtilgan: 2015,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 23500,
        audio: 213,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
    ],
  },

  {
    id: 6,
    userName: "Abdurauf Fitrat",
    birth: 1878,
    dead: 1934,
    userImg: ullamo6,
    desc: `qchidagi eski maktabda, song madrasada oqidi (1885–1886). Mustaqil mutolaa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    books: [
      {
        bookId: 1,
        nomi: "Qo'rqma",
        shoir: "Abdurauf Fitrat",
        img: "https://s3-alpha-sig.figma.com/img/cbbe/7036/5a761f46e09eafc7ddd7d317540e44b2?Expires=1654473600&Signature=azmp6QMTEdvJ3Mf74Cdr3CjE7l~46LTJiJZ0unmbMeSOHfPenMYRXzd8v4rZh2vfPS9ck1eAtlVfX9C9ZapbhWd0-~iSml7C4PPkrWn-EzQCigE2LuzgH310sKd9hOUNi1L214Qs8bqpVGyq-X0VOIknOIlZzNmFl0w8dA9E4VByNVImxDu8qDa3NHpY8kir6LxZ8q-JlHv~JDhIiDbxMKay8Wm4Ak-0D~AuK~SruTXlvJn~gkfAbm0ulCjE8DbfPlAewkDyRE-NUuw-LQq~qj-3-JNWnrKnQl6Ts3Cw7WPRbzV7j8AYWz~h-uKhAiYrJ~vNnLszBxOi7FyQvxgb0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 250,
        chopEtilgan: 2019,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 27000,
        audio: 623,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 2,
        nomi: "Amerika Fojiasi",
        shoir: "Abdurauf Fitrat",
        img: "https://s3-alpha-sig.figma.com/img/cbbe/7036/5a761f46e09eafc7ddd7d317540e44b2?Expires=1654473600&Signature=azmp6QMTEdvJ3Mf74Cdr3CjE7l~46LTJiJZ0unmbMeSOHfPenMYRXzd8v4rZh2vfPS9ck1eAtlVfX9C9ZapbhWd0-~iSml7C4PPkrWn-EzQCigE2LuzgH310sKd9hOUNi1L214Qs8bqpVGyq-X0VOIknOIlZzNmFl0w8dA9E4VByNVImxDu8qDa3NHpY8kir6LxZ8q-JlHv~JDhIiDbxMKay8Wm4Ak-0D~AuK~SruTXlvJn~gkfAbm0ulCjE8DbfPlAewkDyRE-NUuw-LQq~qj-3-JNWnrKnQl6Ts3Cw7WPRbzV7j8AYWz~h-uKhAiYrJ~vNnLszBxOi7FyQvxgb0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 650,
        chopEtilgan: 2017,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 36000,
        audio: 793,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 3,
        nomi: "O'tgan kunlar",
        shoir: "Abdurauf Fitrat",
        img: "https://s3-alpha-sig.figma.com/img/cbbe/7036/5a761f46e09eafc7ddd7d317540e44b2?Expires=1654473600&Signature=azmp6QMTEdvJ3Mf74Cdr3CjE7l~46LTJiJZ0unmbMeSOHfPenMYRXzd8v4rZh2vfPS9ck1eAtlVfX9C9ZapbhWd0-~iSml7C4PPkrWn-EzQCigE2LuzgH310sKd9hOUNi1L214Qs8bqpVGyq-X0VOIknOIlZzNmFl0w8dA9E4VByNVImxDu8qDa3NHpY8kir6LxZ8q-JlHv~JDhIiDbxMKay8Wm4Ak-0D~AuK~SruTXlvJn~gkfAbm0ulCjE8DbfPlAewkDyRE-NUuw-LQq~qj-3-JNWnrKnQl6Ts3Cw7WPRbzV7j8AYWz~h-uKhAiYrJ~vNnLszBxOi7FyQvxgb0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 347,
        chopEtilgan: 2010,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 18000,
        audio: 463,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
      {
        bookId: 4,
        nomi: "Boy va Kambagal Ota",
        shoir: "Abdurauf Fitrat",
        img: "https://s3-alpha-sig.figma.com/img/cbbe/7036/5a761f46e09eafc7ddd7d317540e44b2?Expires=1654473600&Signature=azmp6QMTEdvJ3Mf74Cdr3CjE7l~46LTJiJZ0unmbMeSOHfPenMYRXzd8v4rZh2vfPS9ck1eAtlVfX9C9ZapbhWd0-~iSml7C4PPkrWn-EzQCigE2LuzgH310sKd9hOUNi1L214Qs8bqpVGyq-X0VOIknOIlZzNmFl0w8dA9E4VByNVImxDu8qDa3NHpY8kir6LxZ8q-JlHv~JDhIiDbxMKay8Wm4Ak-0D~AuK~SruTXlvJn~gkfAbm0ulCjE8DbfPlAewkDyRE-NUuw-LQq~qj-3-JNWnrKnQl6Ts3Cw7WPRbzV7j8AYWz~h-uKhAiYrJ~vNnLszBxOi7FyQvxgb0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 180,
        chopEtilgan: 2015,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 23500,
        audio: 213,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
    ],
  },

  {
    id: 7,
    userName: "Abdulmajid Qodiriy",
    birth: 1878,
    dead: 1934,
    userImg: ullamo7,
    desc: `XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biri maʼrifatparvar shoir, dramaturg, jurnalist, olim, davlat va jamoat arbobipchilik qismini ruslar tashkil qilgan temir yol ishchilari bolalari orasida kechdi. Oqchidagi eski maktabda, song madrasada oqidi (1885–1886). Mustaqil mutolaa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    books: [
      {
        bookId: 1,
        nomi: "Qo'rqma",
        shoir: "Abdulmajid Qodiriy",
        img: "https://s3-alpha-sig.figma.com/img/39e8/b0e0/918cb5d0b298e59be7e889b35dc5d503?Expires=1654473600&Signature=D1SjP8UADUSD38AV9I75hk28cS~gZKSF44mjEnbY1mF~Wzywqd5hOj3ut2YhCsw9t0NyUjVIFtiDbyUfA9I-ic2Hhe0HvT55nzVWPtT0ep2bOzbdzS8zJcIvqNqBJiFPgEMlXVEU~Z9qYRxoWK42rjwS-tkbWNuzGIKpuYoVIZ71JdzEBi2bwDIEDesVp2ShWW6yOHdmpozu1UgheNrK6sXDHilf35x7q~SaJqRylV8TNU1ajGm7VFPhnOdflEGIIOPrdPSbU1lzUjeKPYeOKNlkkQmyzpdD4rz680m6rMmE4~PkudmMei1Yb1F4rzn25QvJc6JE~efGgmYoZF3Shw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 250,
        chopEtilgan: 2019,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 27000,
        audio: 623,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 2,
        nomi: "Amerika Fojiasi",
        shoir: "Abdulmajid Qodiriy",
        img: "https://s3-alpha-sig.figma.com/img/39e8/b0e0/918cb5d0b298e59be7e889b35dc5d503?Expires=1654473600&Signature=D1SjP8UADUSD38AV9I75hk28cS~gZKSF44mjEnbY1mF~Wzywqd5hOj3ut2YhCsw9t0NyUjVIFtiDbyUfA9I-ic2Hhe0HvT55nzVWPtT0ep2bOzbdzS8zJcIvqNqBJiFPgEMlXVEU~Z9qYRxoWK42rjwS-tkbWNuzGIKpuYoVIZ71JdzEBi2bwDIEDesVp2ShWW6yOHdmpozu1UgheNrK6sXDHilf35x7q~SaJqRylV8TNU1ajGm7VFPhnOdflEGIIOPrdPSbU1lzUjeKPYeOKNlkkQmyzpdD4rz680m6rMmE4~PkudmMei1Yb1F4rzn25QvJc6JE~efGgmYoZF3Shw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 650,
        chopEtilgan: 2017,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 36000,
        audio: 793,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 3,
        nomi: "O'tgan kunlar",
        shoir: "Abdulmajid Qodiriy",
        img: "https://s3-alpha-sig.figma.com/img/39e8/b0e0/918cb5d0b298e59be7e889b35dc5d503?Expires=1654473600&Signature=D1SjP8UADUSD38AV9I75hk28cS~gZKSF44mjEnbY1mF~Wzywqd5hOj3ut2YhCsw9t0NyUjVIFtiDbyUfA9I-ic2Hhe0HvT55nzVWPtT0ep2bOzbdzS8zJcIvqNqBJiFPgEMlXVEU~Z9qYRxoWK42rjwS-tkbWNuzGIKpuYoVIZ71JdzEBi2bwDIEDesVp2ShWW6yOHdmpozu1UgheNrK6sXDHilf35x7q~SaJqRylV8TNU1ajGm7VFPhnOdflEGIIOPrdPSbU1lzUjeKPYeOKNlkkQmyzpdD4rz680m6rMmE4~PkudmMei1Yb1F4rzn25QvJc6JE~efGgmYoZF3Shw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 347,
        chopEtilgan: 2010,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 18000,
        audio: 463,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
      {
        bookId: 4,
        nomi: "Boy va Kambagal Ota",
        shoir: "Abdulmajid Qodiriy",
        img: "https://s3-alpha-sig.figma.com/img/39e8/b0e0/918cb5d0b298e59be7e889b35dc5d503?Expires=1654473600&Signature=D1SjP8UADUSD38AV9I75hk28cS~gZKSF44mjEnbY1mF~Wzywqd5hOj3ut2YhCsw9t0NyUjVIFtiDbyUfA9I-ic2Hhe0HvT55nzVWPtT0ep2bOzbdzS8zJcIvqNqBJiFPgEMlXVEU~Z9qYRxoWK42rjwS-tkbWNuzGIKpuYoVIZ71JdzEBi2bwDIEDesVp2ShWW6yOHdmpozu1UgheNrK6sXDHilf35x7q~SaJqRylV8TNU1ajGm7VFPhnOdflEGIIOPrdPSbU1lzUjeKPYeOKNlkkQmyzpdD4rz680m6rMmE4~PkudmMei1Yb1F4rzn25QvJc6JE~efGgmYoZF3Shw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 180,
        chopEtilgan: 2015,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 23500,
        audio: 213,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
    ],
  },

  {
    id: 8,
    userName: "Munavvarqori Abdurashidxonov",
    birth: 1878,
    dead: 1934,
    userImg: ullamo8,
    desc: `XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biga keldi. Bolaligi Mirobod mahallasining egri-bugri kochalarida, kopchilik qismini uslar tashkil qilgan temir yol ishchilari bolalari orasida kechdi. Oqchidagi eski maktabda, song madrasada oqidi (1885–1886). Mustaqil mutolaa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,

    books: [
      {
        bookId: 1,
        nomi: "Qo'rqma",
        shoir: "Munavvarqori Abdurashidxonov",
        img: "https://s3-alpha-sig.figma.com/img/4581/a57c/ef509c2462875f7263376a791df4c801?Expires=1654473600&Signature=cXnalk~VcGiaCywo2Vt46a6sEzhbaAWxcpLO-ukAwTKnUki0ymWrgORpgFyT9K1iYwejjZaDSUcZw40w0tosfu~FxbtVuDtSwR7FYiPM9QvAxCXurn0m8xuj3nDgiB6TT7jG-ZFj2Gjl89v2NR-bOVZ8vtqQItFgdryoe6fyTBDv2stHwNELtLtPycV~34krPIL-1kH8twykb9bMjm~d0BaeA7Nfgz1Lpl1ZrJpIFMOHvrZo5yKlFuqbF~7qBGjAQQRQuZZb0ESY9ocTOd5YmAIryw7D3wdUSNYwBNxPt6WTx-dJsODuYs-mmaDa3a1z~9n3Uk7CmbAQbFsYkZPi-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 250,
        chopEtilgan: 2019,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 27000,
        audio: 623,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 2,
        nomi: "Amerika Fojiasi",
        shoir: "Munavvarqori Abdurashidxonov",
        img: "https://s3-alpha-sig.figma.com/img/4581/a57c/ef509c2462875f7263376a791df4c801?Expires=1654473600&Signature=cXnalk~VcGiaCywo2Vt46a6sEzhbaAWxcpLO-ukAwTKnUki0ymWrgORpgFyT9K1iYwejjZaDSUcZw40w0tosfu~FxbtVuDtSwR7FYiPM9QvAxCXurn0m8xuj3nDgiB6TT7jG-ZFj2Gjl89v2NR-bOVZ8vtqQItFgdryoe6fyTBDv2stHwNELtLtPycV~34krPIL-1kH8twykb9bMjm~d0BaeA7Nfgz1Lpl1ZrJpIFMOHvrZo5yKlFuqbF~7qBGjAQQRQuZZb0ESY9ocTOd5YmAIryw7D3wdUSNYwBNxPt6WTx-dJsODuYs-mmaDa3a1z~9n3Uk7CmbAQbFsYkZPi-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 650,
        chopEtilgan: 2017,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 36000,
        audio: 793,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 3,
        nomi: "O'tgan kunlar",
        shoir: "Munavvarqori Abdurashidxonov",
        img: "https://s3-alpha-sig.figma.com/img/4581/a57c/ef509c2462875f7263376a791df4c801?Expires=1654473600&Signature=cXnalk~VcGiaCywo2Vt46a6sEzhbaAWxcpLO-ukAwTKnUki0ymWrgORpgFyT9K1iYwejjZaDSUcZw40w0tosfu~FxbtVuDtSwR7FYiPM9QvAxCXurn0m8xuj3nDgiB6TT7jG-ZFj2Gjl89v2NR-bOVZ8vtqQItFgdryoe6fyTBDv2stHwNELtLtPycV~34krPIL-1kH8twykb9bMjm~d0BaeA7Nfgz1Lpl1ZrJpIFMOHvrZo5yKlFuqbF~7qBGjAQQRQuZZb0ESY9ocTOd5YmAIryw7D3wdUSNYwBNxPt6WTx-dJsODuYs-mmaDa3a1z~9n3Uk7CmbAQbFsYkZPi-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 347,
        chopEtilgan: 2010,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 18000,
        audio: 463,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
      {
        bookId: 4,
        nomi: "Boy va Kambagal Ota",
        shoir: "Munavvarqori Abdurashidxonov",
        img: "https://s3-alpha-sig.figma.com/img/4581/a57c/ef509c2462875f7263376a791df4c801?Expires=1654473600&Signature=cXnalk~VcGiaCywo2Vt46a6sEzhbaAWxcpLO-ukAwTKnUki0ymWrgORpgFyT9K1iYwejjZaDSUcZw40w0tosfu~FxbtVuDtSwR7FYiPM9QvAxCXurn0m8xuj3nDgiB6TT7jG-ZFj2Gjl89v2NR-bOVZ8vtqQItFgdryoe6fyTBDv2stHwNELtLtPycV~34krPIL-1kH8twykb9bMjm~d0BaeA7Nfgz1Lpl1ZrJpIFMOHvrZo5yKlFuqbF~7qBGjAQQRQuZZb0ESY9ocTOd5YmAIryw7D3wdUSNYwBNxPt6WTx-dJsODuYs-mmaDa3a1z~9n3Uk7CmbAQbFsYkZPi-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 180,
        chopEtilgan: 2015,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 23500,
        audio: 213,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
    ],
  },

  {
    id: 9,
    userName: "Abdulla Qodiriy",
    birth: 1878,
    dead: 1934,
    userImg: ullamo9,
    desc: `XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biga keldi. Bolaligi Mirobod mahallasining egri-bugri kochalarida, kopchilik qismini uslar tashkil qilgan temir yol ishchilari bolalari orasida kechdi. Oqchidagi eski maktabda, song madrasada oqidi (1885–1886). Mustaqil mutolaa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    books: [
      {
        bookId: 1,
        nomi: "Qo'rqma",
        shoir: "Abdulla Qodiriy",
        img: "https://s3-alpha-sig.figma.com/img/4b68/2aca/652a1628693c92df44373e7499acdaad?Expires=1654473600&Signature=WYsqZiWcE8644BR7fjWwqta2UuoqLtLpNZuLHwI56d-RoJBhfg819fGLRCOWI7gD7W7LRBMg3oOQTk07feMyNr8FMSrDyPtm4Fa9mTd8jolk18SzMqrBParUY62qUayKNOyY6iSGSCz0Xua~Q2p-2CLlXr7s4roUYTb~UqCkY2vK6K~fI00rMl91h77nCF~kT1aQaCp-aBLDoOIvPebQyAFd6MY-cU5hyKj7zGQVZMbpoDm2Wqt~jYFfhMNaeVz5MtulfknMJskWbnvpwVvwu5XEBl9Up5jRQz11un6YWOmjjUAgKym7GAxPfKdy9tGwvU3bc2S93ot5almPBLRcGw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 250,
        chopEtilgan: 2019,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 27000,
        audio: 623,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 2,
        nomi: "Amerika Fojiasi",
        shoir: "Abdulla Qodiriy",
        img: "https://s3-alpha-sig.figma.com/img/4b68/2aca/652a1628693c92df44373e7499acdaad?Expires=1654473600&Signature=WYsqZiWcE8644BR7fjWwqta2UuoqLtLpNZuLHwI56d-RoJBhfg819fGLRCOWI7gD7W7LRBMg3oOQTk07feMyNr8FMSrDyPtm4Fa9mTd8jolk18SzMqrBParUY62qUayKNOyY6iSGSCz0Xua~Q2p-2CLlXr7s4roUYTb~UqCkY2vK6K~fI00rMl91h77nCF~kT1aQaCp-aBLDoOIvPebQyAFd6MY-cU5hyKj7zGQVZMbpoDm2Wqt~jYFfhMNaeVz5MtulfknMJskWbnvpwVvwu5XEBl9Up5jRQz11un6YWOmjjUAgKym7GAxPfKdy9tGwvU3bc2S93ot5almPBLRcGw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 650,
        chopEtilgan: 2017,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 36000,
        audio: 793,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 3,
        nomi: "O'tgan kunlar",
        shoir: "Abdulla Qodiriy",
        img: "https://s3-alpha-sig.figma.com/img/4b68/2aca/652a1628693c92df44373e7499acdaad?Expires=1654473600&Signature=WYsqZiWcE8644BR7fjWwqta2UuoqLtLpNZuLHwI56d-RoJBhfg819fGLRCOWI7gD7W7LRBMg3oOQTk07feMyNr8FMSrDyPtm4Fa9mTd8jolk18SzMqrBParUY62qUayKNOyY6iSGSCz0Xua~Q2p-2CLlXr7s4roUYTb~UqCkY2vK6K~fI00rMl91h77nCF~kT1aQaCp-aBLDoOIvPebQyAFd6MY-cU5hyKj7zGQVZMbpoDm2Wqt~jYFfhMNaeVz5MtulfknMJskWbnvpwVvwu5XEBl9Up5jRQz11un6YWOmjjUAgKym7GAxPfKdy9tGwvU3bc2S93ot5almPBLRcGw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 347,
        chopEtilgan: 2010,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 18000,
        audio: 463,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
      {
        bookId: 4,
        nomi: "Boy va Kambagal Ota",
        shoir: "Abdulla Qodiriy",
        img: "https://s3-alpha-sig.figma.com/img/4b68/2aca/652a1628693c92df44373e7499acdaad?Expires=1654473600&Signature=WYsqZiWcE8644BR7fjWwqta2UuoqLtLpNZuLHwI56d-RoJBhfg819fGLRCOWI7gD7W7LRBMg3oOQTk07feMyNr8FMSrDyPtm4Fa9mTd8jolk18SzMqrBParUY62qUayKNOyY6iSGSCz0Xua~Q2p-2CLlXr7s4roUYTb~UqCkY2vK6K~fI00rMl91h77nCF~kT1aQaCp-aBLDoOIvPebQyAFd6MY-cU5hyKj7zGQVZMbpoDm2Wqt~jYFfhMNaeVz5MtulfknMJskWbnvpwVvwu5XEBl9Up5jRQz11un6YWOmjjUAgKym7GAxPfKdy9tGwvU3bc2S93ot5almPBLRcGw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 180,
        chopEtilgan: 2015,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 23500,
        audio: 213,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
    ],
  },

  {
    id: 10,
    userName: "Mahmuxoja Behbudiy",
    birth: 1878,
    dead: 1934,
    userImg: ullamo10,
    desc: `XIX asr oxiri XX asr boshidagi ozbek milliy madaniyatining mashhur vakillaridan biga keldi. Bolaligi Mirobod mahallasining egri-bugri kochalarida, kopchilik qismini uslar tashkil qilgan temir yol ishchilari bolalari orasida kechdi. Oqchidagi eski maktabda, song madrasada oqidi (1885–1886). Mustaqil mutolaa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    books: [
      {
        bookId: 1,
        nomi: "Qo'rqma",
        shoir: "Mahmuxoja Behbudiy",
        img: "https://s3-alpha-sig.figma.com/img/1aec/2021/712ad4edf5272e2b6a53a8b44b18b97c?Expires=1654473600&Signature=dAiU3g~4qR0KTUTy3wSZrttqYp7eOZFt1F4KUY6-wb412tG4PXRBNBbHDOhtihmiakudXQCWNjOShbLzA71EyVwNiZj76bnjZ63-U-ROFkrleYzECjvICMh7k-AnzFfboeKZ65HiF~1H9QJP1Gr4zkAVewbWK5MSVGzL0Iu5gg554OKvvOaFlHUe6CPD~i~TlYyU6uS-n04Ephmq9eescOy637bjhaLQgXgh8j4pYDr4nvoZL4sn~Jh3V3B8S0qBVIDDXRcJgyZSXEsQzPJSP~UxdLqMJl8BpW99BCHr5DNbwQdNubXoGmCwFEgtCNTPGeL2HgMQrNvpXZG9qpcyiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 250,
        chopEtilgan: 2019,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 27000,
        audio: 623,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 2,
        nomi: "Amerika Fojiasi",
        shoir: "Mahmuxoja Behbudiy",
        img: "https://s3-alpha-sig.figma.com/img/1aec/2021/712ad4edf5272e2b6a53a8b44b18b97c?Expires=1654473600&Signature=dAiU3g~4qR0KTUTy3wSZrttqYp7eOZFt1F4KUY6-wb412tG4PXRBNBbHDOhtihmiakudXQCWNjOShbLzA71EyVwNiZj76bnjZ63-U-ROFkrleYzECjvICMh7k-AnzFfboeKZ65HiF~1H9QJP1Gr4zkAVewbWK5MSVGzL0Iu5gg554OKvvOaFlHUe6CPD~i~TlYyU6uS-n04Ephmq9eescOy637bjhaLQgXgh8j4pYDr4nvoZL4sn~Jh3V3B8S0qBVIDDXRcJgyZSXEsQzPJSP~UxdLqMJl8BpW99BCHr5DNbwQdNubXoGmCwFEgtCNTPGeL2HgMQrNvpXZG9qpcyiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 650,
        chopEtilgan: 2017,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 36000,
        audio: 793,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 3,
        nomi: "O'tgan kunlar",
        shoir: "Mahmuxoja Behbudiy",
        img: "https://s3-alpha-sig.figma.com/img/1aec/2021/712ad4edf5272e2b6a53a8b44b18b97c?Expires=1654473600&Signature=dAiU3g~4qR0KTUTy3wSZrttqYp7eOZFt1F4KUY6-wb412tG4PXRBNBbHDOhtihmiakudXQCWNjOShbLzA71EyVwNiZj76bnjZ63-U-ROFkrleYzECjvICMh7k-AnzFfboeKZ65HiF~1H9QJP1Gr4zkAVewbWK5MSVGzL0Iu5gg554OKvvOaFlHUe6CPD~i~TlYyU6uS-n04Ephmq9eescOy637bjhaLQgXgh8j4pYDr4nvoZL4sn~Jh3V3B8S0qBVIDDXRcJgyZSXEsQzPJSP~UxdLqMJl8BpW99BCHr5DNbwQdNubXoGmCwFEgtCNTPGeL2HgMQrNvpXZG9qpcyiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 347,
        chopEtilgan: 2010,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 18000,
        audio: 463,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
      {
        bookId: 4,
        nomi: "Boy va Kambagal Ota",
        shoir: "Mahmuxoja Behbudiy",
        img: "https://s3-alpha-sig.figma.com/img/1aec/2021/712ad4edf5272e2b6a53a8b44b18b97c?Expires=1654473600&Signature=dAiU3g~4qR0KTUTy3wSZrttqYp7eOZFt1F4KUY6-wb412tG4PXRBNBbHDOhtihmiakudXQCWNjOShbLzA71EyVwNiZj76bnjZ63-U-ROFkrleYzECjvICMh7k-AnzFfboeKZ65HiF~1H9QJP1Gr4zkAVewbWK5MSVGzL0Iu5gg554OKvvOaFlHUe6CPD~i~TlYyU6uS-n04Ephmq9eescOy637bjhaLQgXgh8j4pYDr4nvoZL4sn~Jh3V3B8S0qBVIDDXRcJgyZSXEsQzPJSP~UxdLqMJl8BpW99BCHr5DNbwQdNubXoGmCwFEgtCNTPGeL2HgMQrNvpXZG9qpcyiQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 180,
        chopEtilgan: 2015,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 23500,
        audio: 213,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
    ],
  },

  {
    id: 11,
    userName: "Hoji Muin",
    birth: 1878,
    dead: 1934,
    userImg: ullamo11,
    desc: `XIX  qismini ruslar tashkil qilgan temir yol ishchilari bolalari orasida kechdi. Oqchidagi eski maktabda, song madrasada oqidi (1885–1886). Mustaqil mutolaa bilan shugʻullandi. Arab, fors, rus tillarini organdi. Orenburg, Qozon, Tiflisda chiqib turgan gazeta-jurnallarni kuzatib bordi. Qisqa muddat ichida u maʼrifatparvar sifatida tanildi va olkadagi ijgimoiy-madaniy harakatchilikning faol namoyandalaridan biriga aylandi.`,
    books: [
      {
        bookId: 1,
        nomi: "Qo'rqma",
        shoir: "Hoji Muin",
        img: "https://s3-alpha-sig.figma.com/img/0284/9760/884704f698ebce2372aeee4ebeab7d12?Expires=1654473600&Signature=RREPfBPnYG05BDcmXSPs0cQ3Sp7Wg36-Wm66Rbf7hRerZ4EJZOklxvoEPFJk64EUaiKJKhfBghgIEpAroIAXRwbDQtl6P9n5zznMMwZad72Ynn38OBdc-MpSFt0VsP7z6VtDvRKycHZiLh6QfUKxXjVbTm0Mrz~OXRgs~G2ww2BpNFwobV2Uwbdn9JNm0rgnMLKlzpCs73m1zZhoYtoNZyKP8pEXnuoT~NNi5uggVXpDHY6wNPst4eaDt7mPIE35362Ty7C-0DWh42l157w3u75rMhy16m2osaDu5ruJGiaZsa3GG9DJxrNfy0jHIjFewL5I7AvhtK1PaVekSPdTMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 250,
        chopEtilgan: 2019,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 27000,
        audio: 623,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 2,
        nomi: "Amerika Fojiasi",
        shoir: "Hoji Muin",
        img: "https://s3-alpha-sig.figma.com/img/0284/9760/884704f698ebce2372aeee4ebeab7d12?Expires=1654473600&Signature=RREPfBPnYG05BDcmXSPs0cQ3Sp7Wg36-Wm66Rbf7hRerZ4EJZOklxvoEPFJk64EUaiKJKhfBghgIEpAroIAXRwbDQtl6P9n5zznMMwZad72Ynn38OBdc-MpSFt0VsP7z6VtDvRKycHZiLh6QfUKxXjVbTm0Mrz~OXRgs~G2ww2BpNFwobV2Uwbdn9JNm0rgnMLKlzpCs73m1zZhoYtoNZyKP8pEXnuoT~NNi5uggVXpDHY6wNPst4eaDt7mPIE35362Ty7C-0DWh42l157w3u75rMhy16m2osaDu5ruJGiaZsa3GG9DJxrNfy0jHIjFewL5I7AvhtK1PaVekSPdTMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 650,
        chopEtilgan: 2017,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 36000,
        audio: 793,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },

      {
        bookId: 3,
        nomi: "O'tgan kunlar",
        shoir: "Hoji Muin",
        img: "https://s3-alpha-sig.figma.com/img/0284/9760/884704f698ebce2372aeee4ebeab7d12?Expires=1654473600&Signature=RREPfBPnYG05BDcmXSPs0cQ3Sp7Wg36-Wm66Rbf7hRerZ4EJZOklxvoEPFJk64EUaiKJKhfBghgIEpAroIAXRwbDQtl6P9n5zznMMwZad72Ynn38OBdc-MpSFt0VsP7z6VtDvRKycHZiLh6QfUKxXjVbTm0Mrz~OXRgs~G2ww2BpNFwobV2Uwbdn9JNm0rgnMLKlzpCs73m1zZhoYtoNZyKP8pEXnuoT~NNi5uggVXpDHY6wNPst4eaDt7mPIE35362Ty7C-0DWh42l157w3u75rMhy16m2osaDu5ruJGiaZsa3GG9DJxrNfy0jHIjFewL5I7AvhtK1PaVekSPdTMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 347,
        chopEtilgan: 2010,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 18000,
        audio: 463,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
      {
        bookId: 4,
        nomi: "Boy va Kambagal Ota",
        shoir: "Hoji Muin",
        img: "https://s3-alpha-sig.figma.com/img/0284/9760/884704f698ebce2372aeee4ebeab7d12?Expires=1654473600&Signature=RREPfBPnYG05BDcmXSPs0cQ3Sp7Wg36-Wm66Rbf7hRerZ4EJZOklxvoEPFJk64EUaiKJKhfBghgIEpAroIAXRwbDQtl6P9n5zznMMwZad72Ynn38OBdc-MpSFt0VsP7z6VtDvRKycHZiLh6QfUKxXjVbTm0Mrz~OXRgs~G2ww2BpNFwobV2Uwbdn9JNm0rgnMLKlzpCs73m1zZhoYtoNZyKP8pEXnuoT~NNi5uggVXpDHY6wNPst4eaDt7mPIE35362Ty7C-0DWh42l157w3u75rMhy16m2osaDu5ruJGiaZsa3GG9DJxrNfy0jHIjFewL5I7AvhtK1PaVekSPdTMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        sahifaSoni: 180,
        chopEtilgan: 2015,
        janr: "Tarixiy",
        nashriyot: "Nihol nashr",
        narxi: 23500,
        audio: 213,
        elekt: "pdf bepul",
        tuliq:
          "Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.",
      },
    ],
  },
];

export default obj;
