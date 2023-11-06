"use client";

import { useEffect, useState } from "react";

interface RandomWordProps {
  words: string[];
}

const RandomWord = ({ words }: RandomWordProps) => {
  const [randomWord, setRandomWord] = useState<string>();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setRandomWord(words[randomIndex]);

    document.title = "TIJD VOOR BIER 🍻";
  }, [words]);

  return (
    <div className="flex flex-row justify-center items-center">
      <div className="text-3xl font-bold text-white">{randomWord}</div>
    </div>
  );
};

export default RandomWord;
