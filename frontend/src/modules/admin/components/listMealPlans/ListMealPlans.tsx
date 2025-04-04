import React, { useState } from "react";
import ListMealsTable from "./ListMealsTable";

const ListMealPlans: React.FC = () => {
  const [mealPlans, setMealPlans] = useState([
    { id: 1, name: "Pancakes", type: "breakfast", description: "Soft and fluffy", calories: 350, protein: 8, fats: 10 },
    { id: 2, name: "Oatmeal with Berries", type: "breakfast", description: "Warm oats with fresh berries", calories: 280, protein: 10, fats: 5 },
    { id: 3, name: "Avocado Toast with Eggs", type: "breakfast", description: "Whole grain toast with avocado and poached eggs", calories: 400, protein: 15, fats: 18 },
    { id: 4, name: "Grilled Chicken Salad", type: "lunch", description: "Grilled chicken with mixed greens and vinaigrette", calories: 450, protein: 35, fats: 12 },
    { id: 5, name: "Quinoa and Chickpea Bowl", type: "lunch", description: "Nutritious quinoa with roasted chickpeas and veggies", calories: 420, protein: 20, fats: 8 },
    { id: 6, name: "Brown Rice with Lentils", type: "lunch", description: "Healthy brown rice with spiced lentils", calories: 480, protein: 22, fats: 6 },
    { id: 7, name: "Salmon with Steamed Broccoli", type: "dinner", description: "Grilled salmon with lemon seasoning", calories: 500, protein: 40, fats: 20 },
    { id: 8, name: "Stir-fried Tofu and Vegetables", type: "dinner", description: "Tofu stir-fried with bell peppers and soy sauce", calories: 350, protein: 25, fats: 10 },
    { id: 9, name: "Grilled Paneer with Spinach", type: "dinner", description: "Indian-style grilled paneer with sautéed spinach", calories: 430, protein: 28, fats: 15 },
    { id: 10, name: "Banana Peanut Butter Smoothie", type: "snack", description: "Protein-rich smoothie with banana and peanut butter", calories: 300, protein: 15, fats: 12 },
  ]);

  return <ListMealsTable title="MEAL PLANS" data={mealPlans} />;
};

export default ListMealPlans;
