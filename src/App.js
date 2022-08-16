import { useState } from 'react';
import Game from './components/Game';
import Result from './components/Result';
import './index.scss';
import {questions} from './questions'

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect ] = useState(0);
  const quetion = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === quetion.correct){
      setCorrect(correct + 1);
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length 
        ? 
        <Game quetion={quetion} onClickVariant={onClickVariant} step={step}/>
        :
        <Result correct={correct}/>
      }
     
    
    </div>
  );
}

export default App;
