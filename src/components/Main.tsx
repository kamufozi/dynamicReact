import { useState } from "react";

export default function Main(){
    const [ingredients,setIngredients] = useState<string[]>([])
    const ingredientListItems = ingredients.map(i=>(
        <li key={i}>{i}</li>
    ))
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
                 aria-label="Add ingredient" />
                 <button className="border-[1px] bg-[#141413] text-white px-5 py-2 rounded-sm ">+ Add ingredient</button>
            </form>
            {ingredients.length>0&&<section className="flex flex-col gap-18 mt-5">
            <div>
            <h2 className="font-medium text-3xl">Ingredients on hand:</h2>
            <ul className="list-disc pl-5 mt-2.5">
                {ingredientListItems}
            </ul>
            </div>
            <div className="flex justify-between items-center rounded-[8px] bg-[#F0EFEB] p-5 ">
                <div>
                    <h3 className="text-[1.125rem] font-[500]">Ready for a recipe?</h3>
                    <p className="text-[#6B7280]  mt-4 ">Generete a recipe from your list of ingredients</p>
                </div>
                <button className="rounded-[6px] bg-[#D17557] text-[#FAFAF8] px-5 py-2  font-sans cursor-pointer">Get a recipe</button>
            </div>
            </section>}
        </main>
    )
}