import { BiTrash } from 'react-icons/bi'
import foto from '../Assets/Perfil.jpg'
import { Avatar } from './Avatar'
import { FiThumbsUp } from 'react-icons/fi'
import { useState } from 'react'


interface commentProps{
    content:string,
    onDeleteComent: () => void
}


export function Comment({content,onDeleteComent}:commentProps){
    const  [like, setLike] = useState(0)
    return(
        <div className='mt-6 flex gap-4'>
            <Avatar hasBorder={false} src={foto}/>
            <div className='flex-1'>
                <div className='-bg--gray-700 rounded-[8px] p-4'>
                    <header className='flex items-start justify-between'>
                        <div className='flex flex-col' >
                            <strong className='text-[0.875rem] leading-[1.6]'>William Fámos</strong>
                            <time className='text-[0.75rem] leading-[1.6] -text--gray-400' title='05 Setembro ás 10:26' dateTime="05/09/2024">Cerca de 1h</time>
                        </div>
                        <button
                            onClick={onDeleteComent}
                            className='cursor-pointer rounded-[2px] hover:-text--red-500 leading-[0] '
                            title='Apagar comentário'>
                            <BiTrash size={20}/>
                        </button>
                    </header>

                    <p className='mt-4 -text--gray-300'>{content}</p>
                </div>

                <footer className='mt-4'>
                    <button onClick={()=>setLike(like + 1)} className='-text--gray-400 flex items-center hover:-text--green-300 focus:border-none focus:outline-none'>
                        <FiThumbsUp className='mr-2' size={20}/>
                        Aplaudir <span className='sp'>{like}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}