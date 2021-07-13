import React, { useState } from 'react';
import InputForm from '../inputForm/InputForm';
import OutputSymbol from '../outputSymbol/OutputSymbol';

export default function App() {
  const [inputNumber, setInputNumber] = useState('0');
  const [digitOne, setDigitOne] = useState('0');
  const [digitTwo, setDigitTwo] = useState('0');
  const [digitThree, setDigitThree] = useState('0');
  const [digitFour, setDigitFour] = useState('0');
  

  const onChange = (value) => {
    setInputNumber(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    let number = inputNumber;
    while(inputNumber.length != 4){
      number = '0' + number;
    }

    const [thousands, hundreds, tens, ones] = number.split('');
    setDigitOne(ones);
    setDigitTwo(tens);
    setDigitThree(hundreds);
    setDigitFour(thousands);
  };

  return (
    <>
      <InputForm
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <OutputSymbol
        digitOne={digitOne}
        digitTwo={digitTwo}
        digitThree={digitThree}
        digitFour={digitFour}
        inputNumber={inputNumber}
      />
    </>
  );
}
