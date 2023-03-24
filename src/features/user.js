import { createSlice } from "@reduxjs/toolkit";

export const mealSlice = createSlice({
  name: "meal",
  initialState: { value: {}, checkoutMeal: [] },
  reducers: {
    mealsData: (state, action) => {
      state.value = action.payload;
    },
    
    mealCheckout: (state, action) => {
        state.checkoutMeal= [
            ...state.checkoutMeal,
            action.payload
        ]
      },
  },
});

export const { mealsData } = mealSlice.actions;
export const { mealCheckout } = mealSlice.actions;
export default mealSlice.reducer;
