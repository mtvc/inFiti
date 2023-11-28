import React from "react";

const FoodList = ({ searchRes }) => {
  return (
    <div>
      {searchRes.map((food, index) => (
        <div className="food-item" key={index}>
          <div className="food-item-header">
            <h3>{food.name.toUpperCase()}</h3>
          </div>
          <ul>
            <li>
              <h4>Calories:</h4> <p>{food.calories}</p>
            </li>
            <li>
              <h4>Serving Size:</h4> <p>{food.serving_size_g}g</p>
            </li>
            <li>
              <h4>Total Fat:</h4> <p>{food.fat_total_g}g</p>
            </li>
            <li>
              <h4>Saturated Fat:</h4> <p>{food.fat_saturated_g}g</p>
            </li>
            <li>
              <h4>Protein:</h4> <p>{food.protein_g}g</p>
            </li>
            <li>
              <h4>Sodium:</h4> <p>{food.sodium_mg}mg</p>
            </li>
            <li>
              <h4>Potassium:</h4> <p>{food.potassium_mg}mg</p>
            </li>
            <li>
              <h4>Cholesterol:</h4> <p>{food.cholesterol_mg}mg</p>
            </li>
            <li>
              <h4>Total Carbohydrates:</h4> <p>{food.carbohydrates_total_g}g</p>
            </li>
            <li>
              <h4>Fiber:</h4> <p>{food.fiber_g}g</p>
            </li>
            <li>
              <h4>Sugar:</h4> <p>{food.sugar_g}g</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FoodList;
