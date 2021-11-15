import React, { useState, useEffect, useContext } from "react";
import { QuizContext } from "../../helpers/contexts";
import "./FourthQuestion.css";
import LoadingPage from "../LoadingPage/LoadingPage";

function FourthQuestion(props) {
  const [loading, setLoading] = useState(false);
  const { setGameState } = useContext(QuizContext);

  let setQuizState = () => {
    setGameState("ref");
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
                <strong>Po registraci vám zavolá váš osobní manažer,</strong>
                <p>jste připraveni s ním mluvit po telefonu?</p>
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

export default FourthQuestion;
