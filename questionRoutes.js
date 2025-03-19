const express = require('express');
const router = express.Router();
const Question = require('../models/Question');
const auth = require('../middleware/auth');

// Tüm soruları getir
router.get('/', auth, async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Kategori bazında soruları getir
router.get('/:category', auth, async (req, res) => {
  try {
    const { category } = req.params;
    const questions = await Question.find({ category });
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

// Soru ekle (admin için)
router.post('/', auth, async (req, res) => {
  try {
    const newQuestion = new Question(req.body);
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
});

module.exports = router;