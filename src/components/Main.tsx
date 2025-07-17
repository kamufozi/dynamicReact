export default function Main(){
    return (
        <main className="px-[30px] py-[10px] mt-4">
            <form className="flex justify-center gap-[12px]">
                <input
                 className="border-[1px] shadow-md grow-1 min-w-[150px]  max-w-[450px]"
                 type="text"
                 placeholder="   umushyushyo"
                 aria-label="Add ingredient" />
                 <button className="border-[1px] bg-[#141413] text-white px-5 py-2 rounded-sm ">+ Add ingredient</button>
            </form>
        </main>
    )
}