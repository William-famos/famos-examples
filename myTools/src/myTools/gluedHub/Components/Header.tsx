import { NavLink } from 'react-router-dom'
import logo from '../Assets/Logo-ToNight ver 2.png'
export function Header(){
    return(
        <>
            <header className='-bg--gray-800 flex justify-center p-[1.25rem]'>
                <NavLink to='/todoList'><img className=' h-[2rem]' src={logo} alt='Logotipo'/></NavLink>
                <h1 className='mt-2'>Glued <span className='-text--green-500 font-black text-sm'>Hub</span></h1>
            </header>
        </>

    )
}