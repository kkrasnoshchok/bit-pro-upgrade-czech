import React, { useState, useEffect, useContext } from "react";
import { QuizContext } from "../../helpers/contexts";
import "./ThirdQuestion.css";
import LoadingPage from "../LoadingPage/LoadingPage";

function ThirdQuestion(props) {
  const [loading, setLoading] = useState(false);
  const { setGameState } = useContext(QuizContext);

  let setQuizState = () => {
    setGameState("fourth");
  };

  // hook useEffect для лоадера
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="quiz">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div className="quizPage">
          <div className="container">
            <div className="quizInner">
              <div className="quizQuestion question">
                Máte neustálý přístup ke svému smartphonu a internetu?
              </div>
              <div className="quizAnswers answers">
                <div className="answer" onClick={setQuizState}>
                  Ano
                </div>
                <div className="answer" onClick={setQuizState}>
                  Ne
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ThirdQuestion;
