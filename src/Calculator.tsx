import React = require('react');
import { FC } from 'react';
import { InputComponent } from './Component/InputComponent';
import { Buttons } from './Component/Buttons';
import { buttonConst } from './util/ButtonConst';

const Calculator: FC = () => {
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');
  // const [buttonClicked, setButtonClicked] = React.useState('');

  const handleButtonClicked = (e) => {
    if (e.target.value === 'CE') {
      setOutput(' ');
    } else if (e.target.value === 'C') {
      setOutput('');
      setInput('');
    } else if (e.target.value === 'Back') {
      const outputStr = String(output).slice(0, -1);
      setOutput(outputStr);
    } else if (e.target.value === '=') {
      const computation = eval(output);
      setOutput(computation);
      setInput('');
    } else {
      setOutput(output + e.target.value);
      setInput(input + e.target.value);
    }
  };

  const handleOutputChange = (e) => {
    setInput(input);
    setOutput(output);
  };

  return (
    <div className="container">
      <h1 className="heading">Standard Calculator</h1>
      <div className="inputContainer">
        <InputComponent
          id="inputBox"
          value={input}
          handleOutputChange={handleOutputChange}
        />
        <InputComponent
          id="outputBox"
          value={output}
          handleOutputChange={handleOutputChange}
        />
      </div>
      <div className="buttonConatiner">
        {buttonConst.map((element) => (
          <Buttons
            key={element.button_id}
            buttonTitle={element.buttonName}
            handleButtonClicked={handleButtonClicked}
            btnId={element.button_id}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
