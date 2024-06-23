import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ResultsPage = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    const savedQuiz = JSON.parse(localStorage.getItem('quiz'));
    const savedAnswers = JSON.parse(localStorage.getItem('quizAnswers'));
    if (savedQuiz && savedAnswers) {
      setQuiz(savedQuiz);
      setAnswers(savedAnswers);

      let calculatedScore = 0;
      savedQuiz.questions.forEach((q, qIndex) => {
        if (savedAnswers[qIndex] === q.answer) {
          calculatedScore += 1;
        }
      });
      setScore(calculatedScore);
    }
  }, []);

  if (!quiz) return <div>There is no Questions </div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/bg3.jpg')] bg-cover bg-center text-white p-4">
      <div className='bg-black p-6 bg-opacity-100'>
      <h1 className="text-2xl font-bold mb-4">Quiz Results</h1>
      <p className="mb-4">You scored {score} out of {quiz.questions.length}</p>
      <Link to="/review" className="bg-green-500 text-white px-4 py-2 rounded">Review Answers</Link>
      </div>
      
    </div>
  );
};

export default ResultsPage;
