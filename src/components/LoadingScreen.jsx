import React, { useEffect, useState, useRef } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Welcome";
  const indexRef = useRef(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setText(fullText.substring(0, indexRef.current));
      indexRef.current++; 
      if (indexRef.current > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          if (onComplete) onComplete(); 
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval); 
  }, [fullText, onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col justify-center items-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1"></span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-purple-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;