import React, { useContext } from "react";
import { QuizContext } from "../../helpers/contexts";
import "./Start.css";
import { IoIosArrowForward } from "react-icons/io";

export default function Start() {
  const { setGameState } = useContext(QuizContext);

  let setQuizState = () => {
    setGameState("first");
  };
  return (
    <div className="start">
      <main className="startMain main">
        <div className="mainTitle title">
          <strong>Vítejte</strong>
          <p>v naší aplikaci.</p>
        </div>
        <div className="mainDescription description">
          <p className>
            <strong>Začněte vydělávat odkudkoli</strong>, ať jste kdekoli,
            potřebujete k tomu
            <strong>pouze chytrý telefon a internet</strong>
          </p>
          <p className>
            Chcete-li se <strong>zaregistrovat</strong>, musíte
            <strong>odpovědět na několik jednoduchých otázek.</strong>
          </p>
        </div>

        <div className="mainButton">
          <button onClick={setQuizState}>
            <p>pokračovat</p>
            <IoIosArrowForward className="arrowIcon" />
          </button>
        </div>
      </main>
    </div>
  );
}
