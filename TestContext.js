//context/TestContext.js
import React, { createContext, useState } from 'react';
import { saveResults } from '../services/testService';

export const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const [currentTest, setCurrentTest] = useState(null);
  const [answers, setAnswers] = useState({
    intelligence: [],
    personality: [],
    pathology: []
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const startTest = (testType) => {
    setCurrentTest(testType);
    setCurrentQuestion(0);
    setAnswers({
      intelligence: [],
      personality: [],
      pathology: []
    });
    setResult(null);
    setError(null);
  };

  const answerQuestion = (question, option) => {
    const updatedAnswers = { ...answers };
    
    // Add the question-answer pair to the appropriate category
    if (question.category === 'intelligence') {
      updatedAnswers.intelligence.push({
        questionId: question._id,
        text: question.text,
        answer: option.text,
        isCorrect: option.isCorrect,
        difficulty: question.difficulty,
        weights: option.weights
      });
    } else if (question.category === 'personality') {
      updatedAnswers.personality.push({
        questionId: question._id,
        text: question.text,
        answer: option.text,
        weights: option.weights
      });
    } else if (question.category === 'pathology') {
      updatedAnswers.pathology.push({
        questionId: question._id,
        text: question.text,
        answer: option.text,
        weights: option.weights
      });
    }
    
    setAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitTest = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const resultData = await saveResults({
        answers
      });
      
      setResult(resultData);
      return resultData;
    } catch (err) {
      setError(err.message || 'Sonuçlar kaydedilemedi.');
      return null;
    } finally {
      setLoading(false);
    }
  };

  const resetTest = () => {
    setCurrentTest(null);
    setAnswers({
      intelligence: [],
      personality: [],
      pathology: []
    });
    setCurrentQuestion(0);
    setResult(null);
  };
  
  return (
    <TestContext.Provider
      value={{
        currentTest,
        answers,
        currentQuestion,
        loading,
        error,
        result,
        startTest,
        answerQuestion,
        nextQuestion,
        previousQuestion,
        submitTest,
        resetTest
      }}
    >
      {children}
    </TestContext.Provider>
  );
};