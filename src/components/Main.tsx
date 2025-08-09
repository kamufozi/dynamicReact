import { useState } from "react";
import Claude from "./ClaudeIngredients"
import Recipe from "./Recipe";
export default function Main(){
    const [ingredients,setIngredients] = useState<string[]>([])
    const ingredientListItems = ingredients.map(i=>(
        <li key={i}>{i}</li>
    ))
    const [recipeShown,setRecipeShown]= useState(false);
    const handleSubmit = function (FormData:FormData){
        const inputx  = FormData.get("ingredient")
        if (typeof(inputx)==="string"){
        setIngredients(prevIngredient=>[...prevIngredient,inputx])

    }}

    return (
        <main className="px-[30px] py-[10px] mt-4">
            <form className="flex justify-center gap-[12px]" action={handleSubmit}>
                <input
                 className="border-[1px] shadow-md grow-1 min-w-[150px]  max-w-[450px] px-5"
                 type="text"
                 name="ingredient"
                 placeholder="eg : Oregano"
                 aria-label="Add ingredient" />
                 <button className="border-[1px] bg-[#141413] text-white px-5 py-2 rounded-sm ">+ Add ingredient</button>
            </form>
            <Claude 
                ingredients={ingredients}
                ingredientListItems={ingredientListItems}
                recipeShown={recipeShown}
                setRecipeShown={setRecipeShown}
            />
                {
                  recipeShown && <Recipe />
                }

        </main>
    )
}