const express = require('express');
const router = express.Router();
const Result = require('../models/Result');
const User = require('../models/User');
const auth = require('../middleware/auth');
const axios = require('axios');

// Sonuçları hesapla ve kaydet
router.post('/', auth, async (req, res) => {
  try {
    const { answers } = req.body;
    const userId = req.user.id;

    // IQ hesaplamalarını yap
    const iqScore = calculateIQ(answers.intelligence);
    
    // Kişilik hesaplamalarını yap
    const personalityScores = calculatePersonality(answers.personality);
    
    // Patoloji hesaplamalarını yap
    const pathologyScores = calculatePathology(answers.pathology);
    
    // Deepseek API'a gönder ve yorum al
    const aiAnalysis = await getAIAnalysis({
      iq: iqScore,
      personality: personalityScores,
      pathology: pathologyScores
    });
    
    // Sonucu kaydet
    const newResult = new Result({
      user: userId,
      iq: iqScore,
      personality: personalityScores,
      pathology: pathologyScores,
      aiAnalysis
    });
    
    await newResult.save();
    
    // Kullanıcının sonuçlarını güncelle
    await User.findByIdAndUpdate(userId, {
      $push: { results: newResult._id }
    });
    
    res.status(201).json(newResult);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Kullanıcının tüm sonuçlarını getir
router.get('/user', auth, async (req, res) => {
  try {
    const results = await Result.find({ user: req.user.id }).sort({ testDate: -1 });
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Belirli bir sonucu getir
router.get('/:id', auth, async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);
    
    if (!result) {
      return res.status(404).json({ message: 'Sonuç bulunamadı' });
    }
    
    // Kullanıcının kendi sonuçlarını görmesini sağla
    if (result.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Yetkisiz erişim' });
    }
    
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Yardımcı fonksiyonlar
function calculateIQ(intelligenceAnswers) {
  // Basit IQ hesaplama algoritması
  // Doğru cevapların toplamını hesapla ve zorluk seviyesine göre ağırlıklandır
  let totalScore = 0;
  let maxScore = 0;
  
  intelligenceAnswers.forEach(answer => {
    if (answer.isCorrect) {
      // Zorluk seviyesine göre puan ver
      switch (answer.difficulty) {
        case 'easy':
          totalScore += 1;
          break;
        case 'medium':
          totalScore += 2;
          break;
        case 'hard':
          totalScore += 3;
          break;
      }
    }
    // Maksimum puanı hesapla
    switch (answer.difficulty) {
      case 'easy':
        maxScore += 1;
        break;
      case 'medium':
        maxScore += 2;
        break;
      case 'hard':
        maxScore += 3;
        break;
    }
  });
  
  // IQ hesapla (basit formül: (toplam puan / maksimum puan) * 100 + 50)
  const iqScore = Math.round((totalScore / maxScore) * 60 + 70);
  return iqScore;
}

function calculatePersonality(personalityAnswers) {
  // Kişilik özellikleri için tüm puanları topla
  const personality = {
    extraversion: 0,
    agreeableness: 0,
    conscientiousness: 0,
    neuroticism: 0,
    openness: 0
  };
  
  personalityAnswers.forEach(answer => {
    for (const trait in personality) {
      if (answer.weights && answer.weights[trait]) {
        personality[trait] += answer.weights[trait];
      }
    }
  });
  
  // Her özellik için 0-100 arasında normalize et
  for (const trait in personality) {
    personality[trait] = Math.min(100, Math.max(0, personality[trait]));
  }
  
  return personality;
}

function calculatePathology(pathologyAnswers) {
  // Patolojik durumlar için tüm puanları topla
  const pathology = {
    depression: 0,
    anxiety: 0,
    bipolar: 0,
    ocd: 0,
    schizophrenia: 0,
    ptsd: 0
  };
  
  pathologyAnswers.forEach(answer => {
    for (const condition in pathology) {
      if (answer.weights && answer.weights[condition]) {
        pathology[condition] += answer.weights[condition];
      }
    }
  });
  
  // Her durum için 0-100 arasında normalize et
  for (const condition in pathology) {
    pathology[condition] = Math.min(100, Math.max(0, pathology[condition]));
  }
  
  return pathology;
}

async function getAIAnalysis(data) {
  try {
    // Deepseek API'ya istek gönder
    const response = await axios.post(process.env.DEEPSEEK_API_URL, {
      model: "deepseek-chat",
      messages: [
        {
          role: "system",
          content: "Sen bir psikolog ve zeka analisti olarak çalışıyorsun. Kullanıcının IQ, kişilik özellikleri ve patolojik durum verilerine göre detaylı bir analiz yapman gerekiyor."
        },
        {
          role: "user",
          content: `Kullanıcının test sonuçları şu şekildedir:
          
          IQ: ${data.iq}
          
          Kişilik Özellikleri:
          - Dışadönüklük: ${data.personality.extraversion}/100
          - Uyumluluk: ${data.personality.agreeableness}/100
          - Sorumluluk: ${data.personality.conscientiousness}/100
          - Duygusal Denge: ${data.personality.neuroticism}/100
          - Deneyime Açıklık: ${data.personality.openness}/100
          
          Patolojik Durumlar:
          - Depresyon: ${data.pathology.depression}/100
          - Anksiyete: ${data.pathology.anxiety}/100
          - Bipolar Bozukluk: ${data.pathology.bipolar}/100
          - OKB: ${data.pathology.ocd}/100
          - Şizofreni: ${data.pathology.schizophrenia}/100
          - PTSD: ${data.pathology.ptsd}/100
          
          Bu verilere göre kullanıcının bilişsel yetenekleri, kişilik özellikleri ve psikolojik durumu hakkında detaylı bir analiz yapar mısın? Güçlü yönleri, gelişim alanları ve kendini geliştirmek için öneriler sunabilir misin?`
        }
      ]
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Deepseek API hatası:', error);
    return "AI analizi şu anda kullanılamıyor. Lütfen daha sonra tekrar deneyin.";
  }
}

module.exports = router;