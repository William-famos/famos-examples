import { NavLink } from 'react-router-dom'
import logo from '../assets/Logo-ToNight ver 2.png'
import {BiTime, BiListUl } from 'react-icons/bi'

export function Header(){
    return(
        <header className="flex items-center justify-between -mt-2">
            <NavLink to='/gluedhub'><img src={logo} alt="logotipo-dfamosHub" className='h-[30px]' /></NavLink>
            <nav className='flex gap-2'>
                <NavLink to="/" title='Timer' className='w-10 h-10 flex justify-center -text--gray-100 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent hover:-border-b--green-500 focus:shadow-none'>
                    <BiTime size={24}/>
                </NavLink>
                <NavLink to="/history" title='Histórico' className='w-10 h-10 flex justify-center -text--gray-100 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent hover:-border-b--green-500 focus:shadow-none'>
                    <BiListUl size={24}/>
                </NavLink>
            </nav>
        </header>
    )
}