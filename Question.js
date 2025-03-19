const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['intelligence', 'personality', 'pathology'],
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: function() {
      return this.category === 'intelligence';
    }
  },
  options: [{
    text: String,
    isCorrect: Boolean,
    weights: {
      // Zeka için
      intelligence: Number,
      
      // Kişilik için
      extraversion: Number,
      agreeableness: Number,
      conscientiousness: Number,
      neuroticism: Number,
      openness: Number,
      
      // Patoloji için
      depression: Number,
      anxiety: Number,
      bipolar: Number,
      ocd: Number,
      schizophrenia: Number,
      ptsd: Number
    }
  }]
});

module.exports = mongoose.model('Question', QuestionSchema);
