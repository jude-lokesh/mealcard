import React from "react";
import HomeList from "./component/HomePage/HomeList";
import IndividualCard from "./component/IndividualPage/IndividualCard";
import { Route, Routes, Navigate } from "react-router-dom";
import ShippingDetails from "./component/ShippngInfo/ShippingDetails";
import Success from "./component/Success/Success";

function App() {
  return (
    <React.Fragment>
      <Routes>
        {/* <ShippingDetails /> */}
        <Route path={'/'} element={<Navigate to={'/mealcard/meals'} />} />
        <Route path={'/mealcard/meals'} element={<HomeList />} />
        {/* <Route path={'/mealcard/recipe'} element={<IndividualCard />} /> */}
        <Route path={'/mealcard/view/:id'} element={<IndividualCard />} />
        <Route path={'/mealcard/shipping'} element={<ShippingDetails />} />
        <Route path={'/mealcard/purches'} element={<Success />} />
        <Route path={'/mealcard/meals'} element={<HomeList />} />
      </Routes>
    </ React.Fragment>
  );
}

export default App;
