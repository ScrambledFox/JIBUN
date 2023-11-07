import React from "react";

import RandomWord from "@/components/util/random-word";

const BeerTime = () => {
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <RandomWord
        words={[
          "🍺",
          "🍻",
          "JA",
          "Ja",
          "Jazeker, het is bier tijd.",
          "Jazeker, de kroegen zijn weer open.",
          "Jazeker, de hypotheker.",
          "Als je het mij vraagt wel.",
          "Als drie + drie nog steeds zes is, dan wel.",
          "Volgens mij wel.",
          "Ja, ééntje dan.",
          "Ik heb er al een open.",
          "Zeker wel.",
          "Natuurlijk.",
          "Groene smoothie tijd.",
          "Sowieso.",
          "Ik heb er al een open.",
          "Waarom vraag je het nog?",
        ]}
      ></RandomWord>
    </main>
  );
};

export default BeerTime;
