import React from "react";
import LoadingAnimation from "./LoadingAnimation";

function Loading() {
  return (
    <>
    <div className="preloader">
    <div className="sub-preloader">
      <div className="spinner-border text-light" role="status"></div>
      <LoadingAnimation progress={75} duration={1000} />
    </div>      
        </div>
    </>
  );
}

export default Loading;
