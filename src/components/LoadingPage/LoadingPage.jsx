import React from "react";
import "./LoadingPage.css";
import DotLoader from "react-spinners/DotLoader";

function LoadingPage(props) {
  return (
    <div className="loaderPage">
      <div className="loaderCircle">
        <div className="loader">
          <DotLoader color={"#fff"} loading={props.loading} size={80} />
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
