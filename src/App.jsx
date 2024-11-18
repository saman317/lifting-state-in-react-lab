// src/App.jsx
import {useState} from "react"
import './App.css';
import BurgerStack from './components/BurgerStack';
import IngredientList from './components/IngredientList';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const[stack, setStack]=useState([]);
   const addToBurger=(ingredient)=>{
    //add to stack array
    const updatedStack = [ ingredient,...stack]
    setStack([ingredient,...stack])

   }
   const removeFromBurger=(item)=>{
    //remove ingredient from stack
   const removedStack = stack.filter((ingredient, index)=>index !== item)
   setStack(removedStack)



   }
  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList ingredients={availableIngredients} addToBurger={addToBurger}/>
      <BurgerStack stack={stack} removeFromBurger={removeFromBurger}/>
      </section>
    </main>

  );
};

export default App;
