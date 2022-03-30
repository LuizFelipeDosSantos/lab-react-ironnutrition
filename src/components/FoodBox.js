import { Card, Col, Button } from 'antd';

export function FoodBox({ name, image, calories, servings, deleteFood }) {
    
  const deleteThisFood = () => {
      deleteFood(name);
  }

    return (
        <Col>
          <Card
            title={name}
            style={{ width: 230, height: 300, margin: 10 }}
          >
            <img src={image} height={60} alt="food" />
            <p>Calories: {calories}</p>
            <p>Servings: {servings}</p>
            <p>
              <b>Total Calories: {calories * servings} </b> kcal
            </p>
            <Button type="primary" onClick={deleteThisFood}> Delete </Button>
          </Card>
        </Col>
    );
}