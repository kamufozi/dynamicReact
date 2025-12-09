import { getRecipeFromMistral } from "./ai";
import { useState,useEffect } from "react";
interface RecipepProps{
    ingredients: string[];
    recipeShown: boolean
}
export default function Recipe(props:RecipepProps){
    const [recipe,setRecipe]= useState('')
 
    useEffect(()=>{
    const generateRecipe = async ()=>{
    try{
    const response =  await getRecipeFromMistral(props.ingredients);
    const recipeContent = response.choices[0]?.message?.content || 'No recipe generated'
    setRecipe(recipeContent)
    }
    catch(err){
        console.error(`That's life ${err}`)
    }
    }
    generateRecipe()
    },[props.recipeShown])

    return(
            <section>
                {recipe}
           </section>
       
    )
}