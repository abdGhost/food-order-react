import { useState, useEffect } from "react";
import useHttp from "../hooks/useHttp.js";

import MealItem from "./MealItem.jsx";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);
  // const [loadedMeals, setLoadedMeals] = useState([]);

  // useEffect(() => {
  //   async function fetchMeals() {
  //     const response = await fetch('http://localhost:3000/meals');

  //     if (!response.ok) {
  //       // ...
  //     }

  //     const meals = await response.json();
  //     setLoadedMeals(meals);
  //   }

  //   fetchMeals();
  // }, []);

  if (isLoading) {
    return <p className="center">Fecthing meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals " message={error} />;
  }

  // if (!data) {
  //   return <p>No Meals found.</p>;
  // }
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
