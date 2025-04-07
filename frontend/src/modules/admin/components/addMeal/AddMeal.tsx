import { useState } from "react";
import Dropdown from "../../../common/Dropdown"
import InputFieldWithoutIcon from "../../../common/InputFieldWithoutIcon"

const AddMeal = () => {
  const [addMealPlanData, setAddMealPlanData] = useState({ calories: '', protein: '', fats: '', description: ''});
  function handleGenderSelection() {

  }

  function handleInputChange() {

  }
  return (
    <div>
      <div className="flex-1 transition-all p-4 sm:ml-64 bg-color2 min-h-screen flex flex-col text-color3">
        <div className="p-4 border-2 border-color1 border-dashed space-y-12 flex-grow">
          <div className="mb-2 flex items-center justify-between px-12">
            <h1 className="font-oswald text-3xl">ADD MEAL</h1>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-color-3 ">Select an Option</label>
              <Dropdown options={["Breakfast", "Brunch", "Lunch", "Dinner", "Supper", "Snack", "Mid-Morning Snack", "Evening Snack", "Late Night Snack", "Pre-Workout", "Post-Workout", "Breakfast", "Brunch", "Lunch", "Dinner", "Supper", "Snack", "Mid-Morning Snack", "Evening Snack", "Late Night Snack", "Pre-Workout", "Post-Workout",]} onSelect={handleGenderSelection} />
            </div>
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-color-3 ">Image</label>
              <div className="border-2 border-color3 border-dashed w-[200px] h-[200px]"></div>
            </div>
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-color-3 ">Description</label>
              <textarea className="bg-color2 border-[1.5px] border-color3 w-full" onChange={handleInputChange} name="description" id=""></textarea>
            </div>
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-color-3 ">Calories</label>
              <InputFieldWithoutIcon inputValue={addMealPlanData.calories} onChange={handleInputChange} placeholder="Calories" name="calories" />
            </div>
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-color-3 ">Protein(g)</label>
              <InputFieldWithoutIcon inputValue={addMealPlanData.protein} onChange={handleInputChange} placeholder="Protein" name="protein" />
            </div>
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-color-3 ">Fats(g)</label>
              <InputFieldWithoutIcon inputValue={addMealPlanData.fats} onChange={handleInputChange} placeholder="Fats" name="fats" />
            </div>
            <div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div></div>
            <div>
              <button className="border-2 border-color3 w-44 h-10">ADD MEAL</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddMeal