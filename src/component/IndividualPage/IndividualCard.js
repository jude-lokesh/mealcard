import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  card,
  img,
  btn,
  heading,
  strIngredient,
  foodName,
} from "./IndividualPage.style";
import { mealCheckout } from "../../features/user";
import { useDispatch } from "react-redux";

export default function IndividualCard() {
  const { id } = useParams();
  const dispatch = useDispatch();


  const meal = useSelector((state) =>
    state.meal.value.meals.find((meal) => meal.idMeal === id)
  );

  const addMeal = () => {
    dispatch(mealCheckout(meal));
  }

  return (
    <React.Fragment>
      <div style={card}>
        <div>
          <img style={img} width={700} src={meal.strMealThumb} />
          <div style={foodName}>
            <div>
              <span style={{ color: "gray", fontSize: "19px" }}>
                Food name:
              </span>{" "}
              {meal.strMeal}
            </div>
            <div>
              <span style={{ color: "gray", fontSize: "19px" }}>
                Food area:
              </span>{" "}
              {meal.strArea}
            </div>
          </div>
        </div>
        <div>
          <div style={heading}>Ingredient</div>
          <div style={strIngredient}>
            <div>{meal.strIngredient1}</div>
            <div>{meal.strIngredient2}</div>
            <div>{meal.strIngredient3}</div>
            <div>{meal.strIngredient4}</div>
            <div>{meal.strIngredient5}</div>
            <div>{meal.strIngredient6}</div>
            <div>{meal.strIngredient7}</div>
            <div>{meal.strIngredient8}</div>
            <div>{meal.strIngredient9}</div>
            <div>{meal.strIngredient10}</div>
          </div>
          <div style={{ paddingLeft: "120px" }}>
            <Link to={`/mealcard/shipping`}>
              <button style={btn} onClick={addMeal}>Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
