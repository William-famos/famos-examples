import { BiEdit } from 'react-icons/bi'
import Capa from '../Assets/Capa.jpg'
import Photo from '../Assets/Perfil.jpg'
import { Avatar } from './Avatar'
export function Sidebar(){

    return(
        <>
         <aside className='-bg--gray-800 rounded-[8px] overflow-hidden'>
            <img className='w-full h-[72px] object-cover'
                src={Capa} alt='Capa-perfil' 
            />
            <div className='flex flex-col items-center mt-[-1rem]'>
                <Avatar src={Photo}/>
                <strong className='mt-[0.5rem] -text--gray-100 leading-[1.6]'>William Fámos</strong>
                <p className='-text--gray-400 text-[0.875rem] leading-[1.6]'>UI Designer</p>
            </div>

            <footer className='ASfooter flex items-center justify-center'>
                <a href="#" className='a'> 
                <BiEdit className='size-5'/>
                Editar seu Perfil</a>
               
            </footer>
           
         </aside>
        </>
    )
}