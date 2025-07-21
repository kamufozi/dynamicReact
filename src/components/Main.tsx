import type React from "react";

export default function Main(){
    const ingredients = ['amata','creme vanille','igikakarubamba']
    const ingredientListItems = ingredients.map(i=>(
        <li key={i}>{i}</li>
    ))
    const handleSubmit = function (event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const inputx  = formData.get("ingredient")
        if (typeof(inputx)==="string"){
        ingredients.push(inputx);}
        console.log(ingredients)

    }
    return (
        <main className="px-[30px] py-[10px] mt-4">
            <form className="flex justify-center gap-[12px]" onSubmit={handleSubmit}>
                <input
                 className="border-[1px] shadow-md grow-1 min-w-[150px]  max-w-[450px] px-5"
                 type="text"
                 placeholder="umushyushyo"
                 name="ingredient"
                 aria-label="Add ingredient" />
                 <button className="border-[1px] bg-[#141413] text-white px-5 py-2 rounded-sm ">+ Add ingredient</button>
            </form>
            <ul className="list-disc pl-5 mt-2.5">
                {ingredientListItems}
            </ul>
        </main>
    )
}