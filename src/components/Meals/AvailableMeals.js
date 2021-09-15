import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'SUSHI',
    description: 'Maki Surimi, Avocado',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'SAKURA-BOX',
    description: 'Maki Rolls mit Lachssalat!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'TOKIO-BOX',
    description: 'Nigiri Lachs, Avocado und Surimi',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'OSAKA BOX',
    description: 'California Roll mit Lachs und Avocado',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;