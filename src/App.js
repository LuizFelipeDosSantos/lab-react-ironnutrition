import { useState } from 'react';
import './App.css';
import { FoodBox } from './components/FoodBox';
import foods from './foods.json';
import { Row, Divider, Button } from 'antd';
import { AddFoodForm } from './components/AddFoodForm';
import { Search } from './components/Search';

function App() {
  const [allFoods, setAllFoods] = useState(foods);
  const [filter, setFilter] = useState("");
  const [isShowingForm, setIsShowingForm] = useState(false);
  const [isArrayFoodsEmpty, setIsArrayFoodsEmpty] = useState(false);

  const addFood = (newFood) => {
    setAllFoods([newFood, ...allFoods]);
  };

  const filterFoods = (filter) => {
    setFilter(filter);
  }

  const deleteFood = (foodName) => {
    setAllFoods((oldFoods) => {
      return oldFoods.filter((food) => food.name !== foodName);
    });
    setIsArrayFoodsEmpty(allFoods.length === 1);
  }

  const toFoodBoxComponent = (food, index) => {
    return (
      <FoodBox 
        key={index}
        name={food.name}
        image={food.image}
        calories={food.calories}
        servings={food.servings}
        deleteFood={deleteFood}
      />
    )
  }

  const handleFormShow = () => {
    setIsShowingForm(!isShowingForm);
  }

  return (
    <div className='App'>
      {isShowingForm 
      ? <AddFoodForm 
          addFood={addFood}
        />
      : null
      }

      {<Button onClick={handleFormShow}>{isShowingForm ? "Hide Form" : "Add New Food"}</Button>}

      <Search 
        filterFoods={filterFoods}
      />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {isArrayFoodsEmpty 
         ? <h3>Oops! There is no more content to show!</h3>
         : filter === "" 
          ? allFoods.map(toFoodBoxComponent)
          : allFoods.filter((food) => food.name.toLowerCase().includes(filter)).map(toFoodBoxComponent)
        }
      </Row>
    </div>
  );
}

export default App;
