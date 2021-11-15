import React, { useState } from "react";
import "./App.css";
import { QuizContext } from "./helpers/contexts";
import Start from "./components/StartPage/Start";
import Header from "./components/Header/Header";
import FirstQuestion from "./components/FirstQuestion/FirstQuestion";
import SecondQuestion from "./components/SecondQuestion/SecondQuestion";
import ThirdQuestion from "./components/ThirdQuestion/ThirdQuestion";
import FourthQuestion from "./components/FourthQuestion/FourthQuestion";
import FinalPage from "./components/FinalPage/FinalPage";

function App() {
  const [gameState, setGameState] = useState("start");

  return (
    <div className="app">
      <QuizContext.Provider value={{ gameState, setGameState }}>
        {<Header />}
        {gameState === "start" && <Start />}
        {/* importing quiz pages */}
        {gameState === "first" && <FirstQuestion />}
        {gameState === "second" && <SecondQuestion />}
        {gameState === "third" && <ThirdQuestion />}
        {gameState === "fourth" && <FourthQuestion />}
        {gameState === "ref" && <FinalPage />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
