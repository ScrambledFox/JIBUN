interface RandomWordProps {
  words: string[];
}

const RandomWord = ({ words }: RandomWordProps) => {
  const randomWord = words[Math.floor(Math.random() * words.length)];

  return (
    <div className="flex flex-row justify-center items-center">
      <div className="text-3xl font-bold text-white">{randomWord}</div>
    </div>
  );
};

export default RandomWord;
