import type { JSX } from "react";

interface ClaudeProps {
    ingredients: string[];
    ingredientListItems: JSX.Element[];
    recipeShown: boolean;
    setRecipeShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ClaudeIngredients(props:ClaudeProps){
    return (
        <>
             {props.ingredients.length>0&&<section className="flex flex-col gap-18 mt-5">
            <div>
            <h2 className="font-medium text-3xl">Ingredients on hand:</h2>
            <ul className="list-disc pl-5 mt-2.5">
                {props.ingredientListItems}
            </ul>
            </div>
            {props.ingredients.length>3 && <div className="flex justify-between items-center rounded-[8px] bg-[#F0EFEB] p-5 ">
                <div>
                    <h3 className="text-[1.125rem] font-[500]">Ready for a recipe?</h3>
                    <p className="text-[#6B7280]  mt-4 ">Generete a recipe from your list of ingredients</p>
                </div>
                <button onClick={()=>props.setRecipeShown(!props.recipeShown)} className="rounded-[6px] bg-[#D17557] text-[#FAFAF8] px-5 py-2  font-sans cursor-pointer">Get a recipe</button>
            </div>}
            </section>}
        </>
    )
}