import { useState } from "react";

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
            {ingredients.length>0&&<section className="flex flex-col gap-18 mt-5">
            <div>
            <h2 className="font-medium text-3xl">Ingredients on hand:</h2>
            <ul className="list-disc pl-5 mt-2.5">
                {ingredientListItems}
            </ul>
            </div>
            {ingredients.length>3 && <div className="flex justify-between items-center rounded-[8px] bg-[#F0EFEB] p-5 ">
                <div>
                    <h3 className="text-[1.125rem] font-[500]">Ready for a recipe?</h3>
                    <p className="text-[#6B7280]  mt-4 ">Generete a recipe from your list of ingredients</p>
                </div>
                <button onClick={()=>setRecipeShown(!recipeShown)} className="rounded-[6px] bg-[#D17557] text-[#FAFAF8] px-5 py-2  font-sans cursor-pointer">Get a recipe</button>
            </div>}
            </section>}
                {
                  recipeShown &&  <section>
    <h2>Chef Claude Recommends:</h2>
    <article className="suggested-recipe-container" aria-live="polite">
        <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
        <h3>Beef Bolognese Pasta</h3>
        <strong>Ingredients:</strong>
        <ul>
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
        </ul>
        <strong>Instructions:</strong>
        <ol>
            <li>Bring a large pot of salted water to a boil for the pasta.</li>
            <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
            <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
            <li>Stir in the tomato paste and cook for 1 minute.</li>
            <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
            <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
            <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
            <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
            <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
        </ol>
    </article>
</section>
                }

        </main>
    )
}