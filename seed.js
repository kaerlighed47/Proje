const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Test = require('./models/Test');

dotenv.config();
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB Bağlandı'))
.catch(err => console.log('❌ MongoDB Bağlantı Hatası:', err));

// Test Soruları
const tests = [
    
        // Zeka Soruları (50 Soru)
        { type: 'Zeka', questionNo: 1, question: '[■□□■] [■□■□] [□■□□] Sonraki nedir?', options: ['[□■□■]', '[■□□□]', '[□■■□]', '[■□■□]'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 2, question: 'Üç daire, her birinde bir siyah nokta: Birinci üstte, ikinci solda, üçüncü altta. Dördüncü nerede olmalı?', options: ['Sağda', 'Ortada', 'Üstte', 'Solda'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 3, question: '[▲] [▲▲] [▲▲▲] Sonraki nedir?', options: ['[▲▲▲▲]', '[▲▲]', '[▲]', '[▲▲▲▲▲]'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 4, question: 'Bir kare içinde bir daire, daire içinde bir üçgen. Sonraki adımda ne eklenir?', options: ['Üçgen içinde kare', 'Kare içinde yıldız', 'Daire içinde kare', 'Üçgen içinde daire'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 5, question: '[○●○] [●○●] [○●●] Sonraki nedir?', options: ['[●●○]', '[○○●]', '[●○○]', '[●●●]'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 6, question: 'Bir çizgi üstünde iki nokta; sonraki adımda çizgi uzar ve üç nokta olur. Üçüncü adımda ne olur?', options: ['Çizgi daha uzun, dört nokta', 'Çizgi kısa, iki nokta', 'Çizgi aynı, üç nokta', 'Çizgi yok, dört nokta'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 7, question: '[■□] [□■] [■□] Sonraki nedir?', options: ['[□■]', '[■□]', '[□□]', '[■■]'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 8, question: 'Bir daire içinde bir kare döner: İlk konum 0°, ikinci 45°, üçüncü 90°. Dördüncü nedir?', options: ['135°', '180°', '45°', '0°'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 9, question: '[●○○] [○●○] [○○●] Sonraki nedir?', options: ['[●○●]', '[○●●]', '[●●○]', '[○○○]'], correctAnswer: 'B' },
        { type: 'Zeka', questionNo: 10, question: 'Bir üçgen, bir kareyle çevrelenir; sonra kare bir daireyle çevrelenir. Sonraki nedir?', options: ['Daire bir üçgenle çevrelenir', 'Üçgen bir kareyle çevrelenir', 'Kare bir yıldızla çevrelenir', 'Daire kaybolur'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 11, question: '[○○●] [○●○] [●○○] Sonraki nedir?', options: ['[○○○]', '[●○●]', '[○●●]', '[●●○]'], correctAnswer: 'B' },
        { type: 'Zeka', questionNo: 12, question: 'Bir kare içinde üç yatay çizgi; sonra iki dikey çizgi eklenir. Üçüncü adımda ne olur?', options: ['Üç yatay çizgi kaybolur', 'Bir daire eklenir', 'İki yatay çizgi eklenir', 'Dikey çizgiler üçe çıkar'], correctAnswer: 'D' },
        { type: 'Zeka', questionNo: 13, question: '[▲□] [□▲] [▲□] Sonraki nedir?', options: ['[□▲]', '[▲▲]', '[□□]', '[▲□]'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 14, question: 'Bir daire içinde bir nokta, sonra iki nokta, sonra üç nokta. Dördüncü adımda ne olur?', options: ['Dört nokta', 'İki nokta', 'Nokta kaybolur', 'Daire kare olur'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 15, question: '[■●] [●■] [■●] Sonraki nedir?', options: ['[●■]', '[■□]', '[●●]', '[□□]'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 16, question: 'Bir üçgen içinde bir daire döner: İlk 0°, ikinci 60°, üçüncü 120°. Dördüncü nedir?', options: ['180°', '240°', '0°', '60°'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 17, question: '[○○○] [○○●] [○●●] Sonraki nedir?', options: ['[●●●]', '[●○●]', '[○○○]', '[●●○]'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 18, question: 'Bir kare, köşelerinde dört nokta; sonra üç nokta; sonra iki nokta. Sonraki nedir?', options: ['Bir nokta', 'Dört nokta', 'Nokta yok', 'İki nokta'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 19, question: '[□■□] [■□■] [□■□] Sonraki nedir?', options: ['[■□■]', '[□■□]', '[□□□]', '[■■■]'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 20, question: 'Bir daire içinde bir yıldız, sonra yıldız bir kareyle çevrelenir. Sonraki nedir?', options: ['Kare bir daireyle çevrelenir', 'Yıldız kaybolur', 'Daire büyür', 'Kare üçgen olur'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 21, question: '[●●○] [●○●] [○●●] Sonraki nedir?', options: ['[●●●]', '[○○●]', '[●○○]', '[○●○]'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 22, question: 'Bir üçgen içinde iki çizgi, sonra üç çizgi, sonra dört çizgi. Sonraki nedir?', options: ['Beş çizgi', 'İki çizgi', 'Çizgi yok', 'Üçgen kaybolur'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 23, question: '[○●] [●○] [○●] Sonraki nedir?', options: ['[●○]', '[○○]', '[●●]', '[○●]'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 24, question: 'Bir kare içinde bir daire döner: İlk 0°, ikinci 90°, üçüncü 180°. Dördüncü nedir?', options: ['270°', '360°', '0°', '90°'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 25, question: '[■□□] [□■□] [□□■] Sonraki nedir?', options: ['[■□□]', '[□■□]', '[□□□]', '[■■□]'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 26, question: 'Bir daire içinde bir nokta sağa kayar: İlk solda, ikinci ortada, üçüncü sağda. Dördüncü nedir?', options: ['Solda', 'Ortada', 'Yok', 'İki nokta'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 27, question: '[▲▲□] [▲□▲] [□▲▲] Sonraki nedir?', options: ['[▲▲□]', '[□▲□]', '[▲□□]', '[□□▲]'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 28, question: 'Bir kare içinde bir üçgen, sonra üçgen bir daireyle çevrelenir. Sonraki nedir?', options: ['Daire bir kareyle çevrelenir', 'Üçgen kaybolur', 'Kare büyür', 'Daire üçgen olur'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 29, question: '[○○●] [○●●] [●●●] Sonraki nedir?', options: ['[●○○]', '[○○○]', '[●●○]', '[○●○]'], correctAnswer: 'C' },
        { type: 'Zeka', questionNo: 30, question: 'Bir daire içinde iki nokta, sonra üç nokta, sonra dört nokta. Sonraki nedir?', options: ['Beş nokta', 'İki nokta', 'Nokta yok', 'Daire kare olur'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 31, question: '[■□■] [□■□] [■□■] Sonraki nedir?', options: ['[□■□]', '[■□■]', '[□□□]', '[■■■]'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 32, question: 'Bir üçgen içinde bir kare döner: İlk 0°, ikinci 45°, üçüncü 90°. Dördüncü nedir?', options: ['135°', '180°', '0°', '45°'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 33, question: '[●○○] [○●○] [○○●] Sonraki nedir?', options: ['[●○●]', '[○●●]', '[●●○]', '[○○○]'], correctAnswer: 'B' },
        { type: 'Zeka', questionNo: 34, question: 'Bir kare içinde bir daire, sonra daire bir üçgenle çevrelenir. Sonraki nedir?', options: ['Üçgen bir kareyle çevrelenir', 'Daire kaybolur', 'Kare büyür', 'Üçgen daire olur'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 35, question: '[○●●] [●○●] [●●○] Sonraki nedir?', options: ['[○○●]', '[●○○]', '[○●○]', '[●●●]'], correctAnswer: 'B' },
        { type: 'Zeka', questionNo: 36, question: 'Bir daire içinde bir yıldız, sonra iki yıldız, sonra üç yıldız. Sonraki nedir?', options: ['Dört yıldız', 'Bir yıldız', 'Yıldız yok', 'Daire kare olur'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 37, question: '[□■□] [■□■] [□■□] Sonraki nedir?', options: ['[■□■]', '[□■□]', '[□□□]', '[■■■]'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 38, question: 'Bir kare içinde bir daire döner: İlk 0°, ikinci 90°, üçüncü 180°. Dördüncü nedir?', options: ['270°', '360°', '0°', '90°'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 39, question: '[●○●] [○●○] [●○●] Sonraki nedir?', options: ['[○●○]', '[●○●]', '[○○○]', '[●●●]'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 40, question: 'Bir üçgen içinde bir daire, sonra daire bir kareyle çevrelenir. Sonraki nedir?', options: ['Kare bir üçgenle çevrelenir', 'Daire kaybolur', 'Üçgen büyür', 'Kare daire olur'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 41, question: '[○○●] [○●○] [●○○] Sonraki nedir?', options: ['[○○○]', '[●○●]', '[○●●]', '[●●○]'], correctAnswer: 'B' },
        { type: 'Zeka', questionNo: 42, question: 'Bir kare içinde iki yatay çizgi, sonra üç yatay çizgi, sonra dört yatay çizgi. Sonraki nedir?', options: ['Beş yatay çizgi', 'İki yatay çizgi', 'Çizgi yok', 'Kare daire olur'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 43, question: '[■□■] [□■□] [■□■] Sonraki nedir?', options: ['[□■□]', '[■□■]', '[□□□]', '[■■■]'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 44, question: 'Bir daire içinde bir üçgen döner: İlk 0°, ikinci 60°, üçüncü 120°. Dördüncü nedir?', options: ['180°', '240°', '0°', '60°'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 45, question: '[●●○] [●○●] [○●●] Sonraki nedir?', options: ['[●●●]', '[○○●]', '[●○○]', '[○●○]'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 46, question: 'Bir kare içinde bir daire, sonra daire bir yıldızla çevrelenir. Sonraki nedir?', options: ['Yıldız bir kareyle çevrelenir', 'Daire kaybolur', 'Kare büyür', 'Yıldız üçgen olur'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 47, question: '[○●○] [●○●] [○●●] Sonraki nedir?', options: ['[●●○]', '[○○●]', '[●○○]', '[●●●]'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 48, question: 'Bir üçgen içinde bir nokta, sonra iki nokta, sonra üç nokta. Sonraki nedir?', options: ['Dört nokta', 'Bir nokta', 'Nokta yok', 'Üçgen kare olur'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 49, question: '[□■□] [■□■] [□■□] Sonraki nedir?', options: ['[■□■]', '[□■□]', '[□□□]', '[■■■]'], correctAnswer: 'A' },
        { type: 'Zeka', questionNo: 50, question: 'Bir daire içinde bir kare, sonra kare bir üçgenle çevrelenir. Sonraki nedir?', options: ["Üçgen bir daireyle çevrilir","Kare Kaybolur","Daire büyür","Üçgen kare olur"] , correctAnswer:"A"},

    
        { type: 'Patoloji', questionNo: 1, question: 'Son bir ayda odaklanmakta sürekli zorluk çektiniz mi?', options: ['Evet', 'Hayır'], correctAnswer: 'Evet' },
    
        { type: 'Kişilik', questionNo: 1, question: 'Yeni fikirlere karşı meraklı mısınız?', options: ['Evet', 'Hayır'], correctAnswer: 'Evet' }
    // Buraya diğer soruları ekleyebilirsin...
];

const seedDB = async () => {
    await Test.deleteMany({});
    await Test.insertMany(tests);
    console.log('✅ Test Soruları MongoDB’ye Eklendi!');
    mongoose.connection.close();
};

seedDB();