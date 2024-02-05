import React from 'react';
import Card from '../card';
import lexicalCategory from "../../utils/lexicalCategory";
import '../../styles/index.module.scss';

interface CardProps {
  word: string,
  lexicalCategory: string,
}

function App() {
  const card: CardProps = {
    word: "Julia",
    lexicalCategory: lexicalCategory.noun,
  };

  return (
      <Card card={card} />
  );
}

export default App;
