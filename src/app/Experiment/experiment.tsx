import React, { useState } from "react";
import "./styles.css"; // アニメーション用のCSSファイルをインポート

const SlideInOutElement = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Toggle Element</button>
      {isVisible && (
        <div>
          <div className={`slide-in`}>Slide In/Out Content</div>
        </div>
      )}
    </div>
  );
};

export default SlideInOutElement;
