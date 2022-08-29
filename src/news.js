import pic1 from "./assets/images/pic1.jpeg";
import pic2 from "./assets/images/pic2.jpeg";
import pic31 from "./assets/images/pic31.jpeg";
import pic32 from "./assets/images/pic32.jpeg";
import pic33 from "./assets/images/pic33.jpeg";
import pic34 from "./assets/images/pic34.jpeg";
import pic41 from "./assets/images/pic41.jpeg";
import pic42 from "./assets/images/pic42.jpeg";
import pic5 from "./assets/images/pic5.jpeg";
import pic6 from "./assets/images/pic6.jpeg";
import pic71 from "./assets/images/pic71.jpeg";
import pic72 from "./assets/images/pic72.jpeg";
import pic81 from "./assets/images/pic81.jpeg";
import pic82 from "./assets/images/pic82.jpeg";
import pic83 from "./assets/images/pic83.jpeg";
import pic9 from "./assets/images/pic9.jpeg";
import pic10 from "./assets/images/pic10.jpeg";
import pic11 from "./assets/images/pic11.jpeg";
import pic12 from "./assets/images/pic12.jpeg";
import pic13 from "./assets/images/pic13.jpeg";
import pic14 from "./assets/images/pic14.jpeg";
import pic121 from "./assets/images/pic121.jpeg";
import pic122 from "./assets/images/pic122.jpeg";
import pic123 from "./assets/images/pic123.jpeg";
import pic124 from "./assets/images/pic124.jpeg";

const News = [
  {
    id: 1012,
    type: "meetings",
    watches: "122",
    title:
      "Qisqa tanaffusdan so’ng, mahorat darslarimiz yana boshlandi Ayni damda esa biz Namangan shahridamiz",
    photos: [pic121, pic122, pic123, pic124],
    date: "18.08.2022",
    text: "'Zamin Education' hamda “Raqamli avlod” loyihasi doirasida tashkil etilgan mahorat darslari 46-sonli zaif eshituvchi bolalar uchun ixtisoslashtirilgan davlat maktab-internati o’quvchilari, Oilaviy bolalar uyi tarbiyalanavuchilar hamda Namangan shahridagi Prezident maktabi o’quvchilari uchun bo’lib o’tmoqda. Bilimga chanqoq o’quvchi yoshlarga mutaxassislar tomonidan Robototexnika va Dasturlash bo’yicha mahorat darslari o’rgatilmoqda. ",
  },
  {
    id: 1011,
    type: "meetings",
    watches: "154",
    title: "“Raqamli avlod” jamoasi Farg’onada ",
    photos: [pic11, pic12, pic13, pic14],
    date: "18.08.2022",
    text: "«Digital Generation Uzbekistan» nodavlat notijorat muassasasi,  'Zamin' xalqaro jamoat fondi hamda Prezident ta'lim muassasalari agentligi bilan birgalikda 'Zamin Education' loyihasi doirasida tashkil etilgan mahorat darslari 90-sonli zaif eshituvchi bolalar uchun ixtisoslashtirilgan davlat maktab-internati o’quvchilari, Oilaviy bolalar uyi tarbiyalanuvchilari hamda Farg’ona shahridagi Prezident maktabi o’quvchilari uchun bo’lib o’tmoqda.",
  },
  {
    id: 1010,
    type: "meetings",
    watches: "382",
    title:
      "Online “Raqamli avlod - 2022” IT oromgohi haqida ma'lumot olishni istaysizmi?",
    photos: [pic10],
    date: "18.08.2022",
    text: "Bizda ajoyib yangilik! DG Contest - Respublika miqyosida o'tkaziluvchi dasturchilar musobaqasi haqida Sunnatillo Hojiyev va Muhammadkarim To'xtaboyev bilan suhbat olib boramiz! Bugun soat 18:00da bo'lib o'tadigan streamda siz oromgoh va boshqa tanlovlar haqida barcha savollaringizga javob olasiz! Streamda ko'rishguncha  https://youtu.be/IAaoVNAOufs",
  },
  {
    id: 1009,
    type: "ordinary",
    watches: "264",
    title:
      "O’z bilimlaringizni sinashga nima deysiz? IT musobaqada ishtirok etishgachi?",
    photos: [pic9],
    date: "25.08.2022",
    text: "24-avgustdan 28-avgustga qadar quyidagi yo’nalishlar bo’yicha online hamda offline tarzda tashkil etiladigan musobaqalarga taklif etamiz: DG Contest 24-avgust (online) 27-avgust (offline) final Robototexnika Labirint (smart car) 28-avgust (offline) Oromgohimizga tashrif buyuring, faol ishtirokchiga aylaning va qimmatbaho sovg’alarni qo’lga kiriting Ro’yxatdan o’tish uchun havola musobaqa.raqamliavlod.uz ",
  },
  {
    id: 1008,
    type: "oromgoh",
    watches: "534",
    title:
      "Bugun Prezident ta'lim muassasalari agentligi hamda 'Digital Generation Uzbekistan' NNT bilan hamkorlikda 'Raqamli avlod-2022' IT oromgohining ochilish marosimi bo'lib o'tdi. ",
    photos: [pic81, pic82, pic83],
    date: "25.08.2022",
    text: "Tadbirni Agentlik direktori Hilola Umarova ochib berdi: - So’nggi yillarda axborot texnologiyalari sohasiga qiziquvchi yoshlar ko'payib borayotgani quvonarli holat. Ustoz-shogird an'anasi asosida 5 kun davomida ishtirokchilar  IT sohasini chuqurroq va yaxshiroq o'rganishlariga aminman. Umid qilamanki, mashg’ulotlar davomida egallagan bilimlaringiz kelgusidagi faoliyatingizda ham o’z samarasini beradi. Ma'lumot uchun, IT oromgoh 30-avgust kuniga qadar davom etadi.",
  },
  {
    id: 1007,
    type: "oromgoh",
    watches: "113",
    title: "Mahorat darslarimizga start berildi!",
    photos: [pic71, pic72],
    date: "25.08.2022",
    text: "Ayni damda o’quvchi yoshlar o’z qiziqishlari bo’yicha guruhlarga ajralib, dars jarayonlariga kirishib ketishdi.",
  },
  {
    id: 1006,
    type: "ordinary",
    watches: "534",
    title: "Raqamli avlod Respublika bosqichi",
    photos: [pic6],
    date: "26.08.2022",
    text: "Mardlar maydonda sinaladi Online DGContest musobaqasida 2 va undan ortiq masalalarga to'g'ri javob taqdim etgan o’quvchi yoshlarimizni Muhammad al-Xorazmiy nomidagi AKTga ixtisoslashtirilgan maktabida 27-avgust kuni soat 12:00da offline tarzda bo’lib o’tadigan final bosqichiga taklif etamiz! P.s: Saralash bosqichidan muvaffaqiyatli o’tgan quyidagi ishtirokchilar bilan bog’lana olmaganligimiz sababli, ulardan mazkur raqamga aloqaga chiqishlarini so’rab qolamiz: +998974026466 \n1. Husanboy Mansuraliyev \n2. Shohruh Nosirov \n3. Zebiniso Ibadullayeva \n4. Abdurahmon Muhibbillayev\n5. Zoyirov Jakhongir\n6. Dostonbek Ibragimov\nBarchaga omad tilab qolamiz",
  },
  {
    id: 1005,
    type: "oromgoh",
    watches: "192",
    title: "IT oromgoh",
    photos: [pic5],
    date: "26.08.2022",
    text: "Bugun soat 18:00da jonli tarzda bo’lib o’tadigan kun sarhisobida barchangizni kutib qolamiz",
  },
  {
    id: 1004,
    type: "oromgoh",
    watches: "113",
    title: "“Raqamli avlod-2022” IT oromgoh o’quvchilarining kun sarhisobi",
    photos: [pic41, pic42],
    date: "26.08.2022",
    text: "An’anaga muvofiq kun yakunida  har bir ishtirokchilarimiz o’z guruhida o’tilgan mavzular, mahorat darslaridan olgan bilimlari  yuzasidan  taqdimot tayyorlab berishadi. Eng kreativ taqdimotlar uchun esa maxsus sovg’alar tayyorlangan! Maxsus sovg’lar IT oromgoh tashkilotchilari tomonidan o’z egalariga topshiriladi! ",
  },
  {
    id: 1003,
    type: "oromgoh",
    watches: "113",
    title: "Oromgoh o'quvchilari",
    photos: [pic31, pic32, pic33, pic34],
    date: "27.08.2022",
    text: "Oromgoh o’quvchilari o’z yo’nalishlari bo’yicha o’tilayotgan darslarni faol o’zlashtirishmoqda",
  },
  {
    id: 1002,
    type: "meetings",
    watches: "153",
    title:
      "Massachusets texnologiya instituti vitsa-prezidenti bilan uchrashuv",
    photos: [pic2],
    date: "27.08.2022",
    text: "Musobaqalarimiz davom etmoqda Bugun 28-avgust soat 16:00da Robototexnika yo’nalishi bo’yicha tashkil etilgan musobaqaga start beriladi! Barcha ishtirokchilar smart car va smart car kodi bilan birga kelishingizni so’rab qolamiz! Musobaqa yanada shaffof o’tishi uchun ishtirokchilarimiz mentorlar nazoratida maxsus kodlarni qaytadan yuklab ko’rsatishlariga to’g’ri keladi.  Soat 14:00da Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabga kelib startga qadar tayyorgarlik ko’rib turish imkoniyatiga egasiz!",
  },
  {
    id: 1001,
    type: "ordinary",
    watches: "13",
    title: "Raqamli avlod Respublika musobaqasi",
    photos: [pic1],
    date: "28.08.2022",
    text: "Ajoyib yangilik Bugun 27-avgust soat 20:00da Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktabning faollar zalida offline oromgoh o’quvchilari uchun MASSACHUSETS TEXNOLOGIYA INSTITUTI (MIT) VITSE-PREZIDENTI SANJAY SHARMA bilan maxsus eksklyuziv intervyu taqdim etiladi",
  },
];

export default News;
