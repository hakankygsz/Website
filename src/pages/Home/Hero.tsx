import React, { useState, useEffect } from "react";
const transitionTexts = ["Software Developer", "Designer"];

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = transitionTexts[textIndex];
    const typingSpeed = 180;
    const deletingSpeed = 35;

    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prevText) => prevText.slice(0, prevText.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % transitionTexts.length);
        }
      }, deletingSpeed);
    } else {
      if (text !== currentText) {
        timeout = setTimeout(() => {
          setText((prevText) => currentText.slice(0, prevText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, textIndex]);
  return (
    <div className="h-full flex flex-col items-center mt-14 bg-black text-white">
      <div className="text-center space-y-10">
        <h2 className="text-5xl lg:text-8xl font-bold tracking-tight text-transparent bg-gradient-to-r from-violet-600 to-violet-950 bg-clip-text">
         Hakan Kaygusuz
        </h2>

        <p className="text-md lg:text-xl text-gray-200">
          I am a <span className="text-violet-600">{text}</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
