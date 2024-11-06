import { format, formatDistanceToNow } from 'date-fns'
import {ptBR} from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'


interface postProps{
    autor:{
        id: number,
        nome: string,
        photo: string,
        cargo: string
    },

    tema:{
        tema:string,
        post:string,
        p:{
            emoji:string,
            par:string
        }
    },

    links:{
        l1:string,
        l2:string,
        l3:string
    },

    datePost:Date
}

export function Post({autor,tema,links,datePost}:postProps){

// const all = new Intl.DateTimeFormat('pt-BR', {
//     day:'2-digit',
//     month:'long',
//     hour:'2-digit',
//     minute:'2-digit'
// }).format(datePost)

const formateddData = format(datePost, "d 'de' LLLL 'ás' HH:mm'h'",{
    locale:ptBR
})


const formattedRelative = formatDistanceToNow(datePost,{
    locale:ptBR,
    addSuffix:true,
}) 

const [coments, setComents] = useState(['Fizeste mesmo sozinho wy🤔?? sem plágiu??'])
const [newComent, setNewComent] = useState('')

function handleSubmit(e:FormEvent){ 
    e.preventDefault();
    setComents([...coments, newComent])
    setNewComent('')
}

function deleteComent(c:string){
   const updateComent = coments.filter(i=> i !== c)
   setComents(updateComent)
     
}

    return(
        <article className='-bg--gray-800 rounded-[8px] p-10 last:mt-5'>
            <header className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <Avatar hasBorder={true} src={autor.photo}/>
                    <div className='flex flex-col '>
                        <strong className='-text--gray-100 leading-[1.6]'>{autor.nome}</strong>
                        <p className='text-[0.875rem] -text--gray-400 leading-[1.6]'>{autor.cargo}</p>
                    </div>
                </div>

                <time className='text-[0.875rem] -text--gray-400' title={formateddData} dateTime={datePost.toISOString()}>
                    {formattedRelative}
                </time>
            </header>

            <div className='leading-[1.6] -text--gray-300 mt-6'>
                <p className='mt-4'>{tema.tema}</p>
                <p className='mt-4'>{tema.post}</p>
                <p className='mt-4'>
                    {tema.p.emoji +' '}<a className='-text--green-500 font-bold hover:-text--green-300' href="#">{tema.p.par}</a>
                </p>
                <p className='mt-4 '>
                    <a className='-text--green-500 font-bold hover:-text--green-300' href="#">{links.l1}</a>
                    <a className='-text--green-500 font-bold hover:-text--green-300' href="#">{links.l2}</a>
                    <a className='-text--green-500 font-bold hover:-text--green-300' href="#">{links.l3}</a>
                </p>             
            </div>

            <form onSubmit={handleSubmit} className='w-full mt-6 pt-6 border-t -border-t--gray-600 desapear'>
                <strong className='leading-[1.6] -text--gray-100'>Deixe seu feedback</strong>
                
                <textarea className='w-full -bg--gray-900 border-0 resize-none h-[6rem] p-4 rounded-[8px] -text--gray-100 leading-[1.4] mt-4'
                    name='txtComent'
                    value={newComent}
                    onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>{setNewComent(e.target.value); e.target.setCustomValidity('')}}
                    required
                    onInvalid={(e:InvalidEvent<HTMLTextAreaElement>)=>e.target.setCustomValidity('Preencha este Campo por favor')}
                    placeholder='Deixe seu coméntario'
                />
                
                <footer>
                    <button disabled={newComent.length === 0} 
                        className='disabled:opacity-60 disabled:hover:-bg--green-500 disabled:cursor-not-allowed py-4 px-10 mt-4 rounded-[8px] border-0 -bg--green-500 -text--gray-100 font-bold cursor-pointer hover:bg-green-700 transition-[1s]'
                        type='submit'>
                        Publicar
                    </button>
                </footer>
            </form>
            
            <div className='mt-8'>
               {coments.map(i =>{
                return <Comment onDeleteComent={()=>deleteComent(i)} key={i} content ={i}/>
               })}
            </div>

        </article>
    )
}