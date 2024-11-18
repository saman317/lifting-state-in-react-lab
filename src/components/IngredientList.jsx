import React from "react";

const IngredientList = (props) => {
    //if you use props it would be props.ingredients.map & props.addToBurger
console.log(props.ingredients)
    return(
    
    <ul>
        {props.ingredients.map((ingredient,index)=>(
            
    
    <li style={{backgroundColor: ingredient.color}}key={index}>
        <p>Name: {ingredient.name}</p>
        <button onClick={()=>props.addToBurger(ingredient)}><strong>+</strong></button>
    </li>
))}
    </ul>
  )};
  
  export default IngredientList;
  