import React, { useState } from 'react';

const Admin = () => {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], answer: 0 }]);

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], answer: 0 }]);
  };

  const handleQuestionChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index][event.target.name] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (qIndex, oIndex, event) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (qIndex, event) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].answer = parseInt(event.target.value, 10);
    setQuestions(newQuestions);
  };

  const handleSubmit = () => {
    localStorage.setItem('quiz', JSON.stringify({ title: quizTitle, questions }));
    alert('Quiz saved!');
  };

  return (
    <div className="min-h-screen bg-[url('/bg2.jpg')] bg-cover bg-center p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Admin Panel</h1>
      {/* <div className="mb-4">
        <label className="block mb-2">Quiz Title</label>
        <input
          type="text"
          value={quizTitle}
          onChange={(e) => setQuizTitle(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div> */}
      {questions.map((q, qIndex) => (
        <div key={qIndex} className="mb-4">
          <label className="block mb-2 text-white">Question {qIndex + 1}</label>
          <input
            type="text"
            name="question"
            value={q.question}
            onChange={(e) => handleQuestionChange(qIndex, e)}
            className="border p-2 rounded w-full lg:w-[70%] mb-2"
          />
          {q.options.map((option, oIndex) => (
            <div key={oIndex} className="flex items-center mb-2">
              <input
                type="radio"
                name={`answer-${qIndex}`}
                value={oIndex}
                checked={q.answer === oIndex}
                onChange={(e) => handleAnswerChange(qIndex, e)}
              />
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(qIndex, oIndex, e)}
                className="border p-2 rounded w-full lg:w-[60%] mr-2 lg:ml-4"
              />
              
            </div>
          ))}
        </div>
      ))}
      <button onClick={addQuestion} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Add Question</button>
      <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">Save Quiz</button>
    </div>
  );
};

export default Admin;
