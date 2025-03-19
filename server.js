const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const questionRoutes = require('./routes/questionRoutes');
const resultRoutes = require('./routes/resultRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/results', resultRoutes);

// MongoDB Bağlantısı
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB bağlantısı başarılı'))
  .catch(err => console.error('MongoDB bağlantı hatası:', err));

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});

// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

// Kayıt
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Kullanıcı varlığını kontrol et
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'Bu email adresi zaten kullanılıyor' });
    }
    
    // Yeni kullanıcı oluştur
    user = new User({
      username,
      email,
      password
    });
    
    await user.save();
    
    // JWT oluştur
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    res.status(201).json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Giriş
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Kullanıcıyı kontrol et
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Geçersiz kimlik bilgileri' });
    }
    
    // Şifreyi kontrol et
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Geçersiz kimlik bilgileri' });
    }
    
    // JWT oluştur
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Kullanıcı bilgilerini getir
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

module.exports = router;