import React, { useState, useEffect } from "react";
import "./FinalPage.css";
import { IoIosArrowForward } from "react-icons/io";
import LoadingPage from "../LoadingPage/LoadingPage";

export default function FinalPage(props) {
  const [loading, setLoading] = useState(false);

  // hook useEffect для лоадера
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <div className="finalPage">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div className="finalInner">
          <div className="finalDescription description">
            <p>
              Chcete-li začít vydělávat, musíte na svůj obchodní účet přidat
              alespoň
            </p>
          </div>
          <div className="finalTitle title">€250</div>
          <div className="finalDescription description">
            <p>tyto prostředky patří vám a můžete je kdykoli vybrat:</p>
          </div>
          <div className="finalLink">
            <a
              href="https://domfir.xyz/8HD4MY"
              target="_blank"
              rel="noreferrer"
            >
              <p>Přejděte na registraci účtu obchodníka</p>
              <IoIosArrowForward className="arrowIconFinal" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
