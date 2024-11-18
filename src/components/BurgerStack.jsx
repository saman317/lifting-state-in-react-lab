
import React from "react";

const BurgerStack = ({stack, removeFromBurger}) => {
    console.log(stack)
    return (
    <ul>
          {stack.map((ingredient,index)=>(
            
    
            <li style={{backgroundColor: ingredient.color}} key={index}>
                <p>Name: {ingredient.name}</p>
                <button onClick={()=>removeFromBurger(index)}><strong>-</strong></button>
            </li>
    ))}
            </ul>
  )};
  
  export default BurgerStack;
  