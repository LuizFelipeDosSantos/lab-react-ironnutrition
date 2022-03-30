import { Divider, Input } from 'antd';
import { useState } from 'react';

export function AddFoodForm({ addFood }) {
    const [food, setFood] = useState({
        name: "",
        image: "",
        calories: 0,
        servings: 0
    })

    const handleAddFood = (event) => {
        event.preventDefault();
        addFood(food);
        setFood({name: "",
                 image: "",
                 calories: 0,
                 servings: 0
        });
    }

    const handleChange = (event) => {
        setFood({
          ...food,
          [event.target.name]: event.target.value
        });
    }

    return (
        <form>
          <Divider>Add Food Entry</Divider>
    
          <label>Name</label>
          <Input name='name' value={food.name} type="text" onChange={handleChange} />
    
          <label>Image</label>
          <Input name='image' value={food.image} type="text" onChange={handleChange}/>
    
          <label>Calories</label>
          <Input name='calories' value={food.calories} type="number" onChange={handleChange}/>
    
          <label>Servings</label>
          <Input name='servings' value={food.servings} type="number" onChange={handleChange}/>
    
          <button type="submit" onClick={handleAddFood}>Add</button>
        </form>
    );
}