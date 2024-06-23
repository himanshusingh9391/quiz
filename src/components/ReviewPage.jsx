import React, { useState, useEffect } from 'react';

const ReviewPage = () => {
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const savedQuiz = JSON.parse(localStorage.getItem('quiz'));
    const savedAnswers = JSON.parse(localStorage.getItem('quizAnswers'));
    if (savedQuiz && savedAnswers) {
      setQuiz(savedQuiz);
      setAnswers(savedAnswers);
    }
  }, []);

  if (!quiz) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Review Answers</h1>
      {quiz.questions.map((q, qIndex) => (
        <div key={qIndex} className="mb-4">
          <p className="mb-2">{q.question}</p>
          {q.options.map((option, oIndex) => (
            <div key={oIndex} className={`flex items-center mb-2 ${q.answer === oIndex ? 'bg-green-100' : ''}`}>
              <input
                type="radio"
                name={`question-${qIndex}`}
                value={oIndex}
                checked={answers[qIndex] === oIndex}
                readOnly
                className="mr-2"
              />
              <label>{option}</label>
            </div>
          ))}
          <p className="text-red-500">Correct answer: {q.options[q.answer]}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewPage;
