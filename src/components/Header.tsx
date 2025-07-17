import chef from '/src/assets/imgs/chef.svg'

export default function Header(){
    return (
        <header className='flex justify-center items-center shadow-md'>
            <img className=' ' src={chef} alt="chef's photo" />
            <h1 className='text-lg font-medium'>Chef Fozi</h1>
        </header>
    )
}