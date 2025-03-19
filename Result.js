const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  testDate: {
    type: Date,
    default: Date.now
  },
  // Zeka skorları
  iq: {
    type: Number,
    default: 0
  },
  // Kişilik özellikleri
  personality: {
    extraversion: {
      type: Number,
      default: 0
    },
    agreeableness: {
      type: Number,
      default: 0
    },
    conscientiousness: {
      type: Number,
      default: 0
    },
    neuroticism: {
      type: Number,
      default: 0
    },
    openness: {
      type: Number,
      default: 0
    }
  },
  // Patolojik durumlar
  pathology: {
    depression: {
      type: Number,
      default: 0
    },
    anxiety: {
      type: Number,
      default: 0
    },
    bipolar: {
      type: Number,
      default: 0
    },
    ocd: {
      type: Number,
      default: 0
    },
    schizophrenia: {
      type: Number,
      default: 0
    },
    ptsd: {
      type: Number,
      default: 0
    }
  },
  // AI yorumu
  aiAnalysis: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model('Result', ResultSchema);