// import React from "react";
// // import LoadingAnimation from "./LoadingAnimation";

// function Loading() {
//   return (
//     <>
//       <div className="preloader">
//         <div className="sub-preloader">
//           <div className="spinner-border text-light" role="status"></div>
//           {/* <LoadingAnimation progress={75} duration={1000} /> */}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Loading;

import React from "react";
import LoadingAnimation from "./LoadingAnimation";

const Loading = () => {
  return (
    <>
      <div className="fixed right-0 bottom-0 bg-black opacity-40 flex flex-col items-center justify-center z-10 2xl:h-[100%] h-[100%] 2xl:w-[90%] w-[85%]">
        <img src="/images/home/logo_white.png" className="w-[200px]" />
        <div style={{ marginTop: 10 }}>
          <LoadingAnimation progress={75} duration={1000} />
        </div>
      </div>
    </>
  );
};

export default Loading;
