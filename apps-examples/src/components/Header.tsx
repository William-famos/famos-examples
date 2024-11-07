import perfil from '../assets/perfil.jpg'
import {BiSolidDownArrow} from 'react-icons/bi'
import logo from '../assets/pLogo.png'
import { NavLink } from 'react-router-dom'

export function Header(){
    return(
        <header>
            <div className="h-16 w-full flex items-center justify-between p-9">
                <div className='flex gap-2'>
                    <NavLink to='/Vihos'><img className='h-10' src={logo} alt="logotipo Travelers" /></NavLink>
                    <div>
                        <h1 className='font-black text-[#707070]'>Travelers</h1>
                        <h2 className='font-light text-sm text-[#5D5B5B]'>Slogan do site em baixo</h2>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className=''><img className='w-11 h-11 object-cover rounded-[9999px] ' src={perfil} alt="perfil photo" /></div>
                    <BiSolidDownArrow color='#707070'/>
                </div>
            </div>
            <nav className="bg-[#EBEBEB] text-sm font-light text-[#5D5B5B] ancor gap-12 flex h-12 w-full items-center justify-end">
                <a href="">Home</a>
                <a href="">Hotéis</a>
                <a href="">Atualizações</a>
                <a href="">Empressas</a>
            </nav>
        </header>
    )
}