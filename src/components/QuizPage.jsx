import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    const savedQuiz = JSON.parse(localStorage.getItem("quiz"));
    if (savedQuiz) {
      setQuiz(savedQuiz);
    }
  }, []);

  const handleOptionChange = (qIndex, oIndex) => {
    setAnswers({
      ...answers,
      [qIndex]: oIndex,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    navigate("/results");
  };

  if (!quiz) return <div>Question not availabe at this moment...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center text-white p-4">
      <div className="bg-black bg-opacity-10 p-4 rounded-md w-full max-w-xl">
        <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>
        {quiz.questions.map((q, qIndex) => (
          <div key={qIndex} className="mb-4">
            <p className="mb-2">{q.question}</p>
            {q.options.map((option, oIndex) => (
              <div key={oIndex} className="flex items-center mb-2">
                <input
                  type="radio"
                  name={`question-${qIndex}`}
                  value={oIndex}
                  checked={answers[qIndex] === oIndex}
                  onChange={() => handleOptionChange(qIndex, oIndex)}
                  className="mr-2"
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md text-center"
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
