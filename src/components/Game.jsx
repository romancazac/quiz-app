import React from 'react'
import { questions } from '../questions'
function Game({ quetion, onClickVariant, step }) {

   const percentage  = Math.round(step / questions.length * 100)

   return (
      <>
         <div className="progress">
            <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
         </div>
         <h1>{quetion.title}</h1>
         <ul>
            {
               quetion.variants.map((item, index) =>
                  <li
                     key={item}
                     onClick={() => onClickVariant(index)}
                  >{item}</li>
               )
            }

         </ul>
      </>
   );
}

export default Game