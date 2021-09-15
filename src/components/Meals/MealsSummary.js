import classes from './MealsSummary.module.css'; 

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Welcome to SUSHI ATELIER</h2>
            <p>
            Our skilled sushi chefs serve modern sushi. 
            Think nigiri with toppings like ponzu jelly and rolls 
            filled with yellowtail and truffle mayonnaise.
      </p>
      <p>
      The menu is a showcase of our chef’s creativity with imaginative dishes 
      and exciting flavour combinations. As well as sushi you’ll find carpaccios, 
      steamed dumplings, salads and cervices.
      </p>
        </section>
    )
}; 

export default MealsSummary; 