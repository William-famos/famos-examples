import React, { ChangeEvent, FormEvent, useState } from 'react'
import { BiPlusCircle, BiSolidFoodMenu, BiTrash,BiEditAlt } from 'react-icons/bi'
import { NavLink} from 'react-router-dom'
import { BsJournalText } from 'react-icons/bs'
import { FiCheck } from 'react-icons/fi'
import '../styles/global.css'


export default function TodoHeader(){

    const [tarefa, setTarefa] = useState('')
    const [tarefas, setTarefas] = useState([])
    const [concluidas, setConcluidas] = useState([])
    const [edited, setEdited] = useState('')
    const [editing, setEditing] = useState(-1)

    //Verificar se já existem tarefas ao iniciar a aplicação....
    React.useEffect(() => {            
        const dates = JSON.parse(localStorage.getItem('storage')!) || {}
        const Checkeds = JSON.parse(localStorage.getItem('Checkeds')!) || {}
        
        if(dates[0] !== undefined) setTarefas(dates);
        if(Checkeds[0] !== undefined) setConcluidas(Checkeds);


    }, [])

    
    //Adicionando................
    const handleSubmit = (event:FormEvent)=>{
        event.preventDefault()
        let storage = JSON.parse(localStorage.getItem('storage')!) || []

        storage.push(
            {
                then:tarefa
            }
        )

        localStorage.setItem('storage', JSON.stringify(storage))
        setTarefas(storage)
        setTarefa('')

    }


    const handleTarefa = (event:ChangeEvent<HTMLInputElement>)=>{
        setTarefa(event.target.value)
    }


    //Apagando..............

    interface ob{then:string}

    const handleDelete = (object:ob)=>{
        const get = JSON.parse(localStorage.getItem('storage')!) || []
        let deleting = get.filter((i:any)=>i.then !== object.then)
        localStorage.setItem('storage', JSON.stringify(deleting))
        setTarefas(deleting)
    }

    const handleDeleteChecked = (object:ob)=>{
        const get = JSON.parse(localStorage.getItem('Checkeds')!) || []
        let deleting = get.filter((i:any)=>i.then !== object.then)
        localStorage.setItem('Checkeds', JSON.stringify(deleting))
        setConcluidas(deleting)
    }


    //Feito..................
    const handleCheck = (object:ob)=>{

        const get = JSON.parse(localStorage.getItem('storage')!) || []
        let content = get.find((i:any)=> i.then === object.then)

        const Checkeds = JSON.parse(localStorage.getItem('Checkeds')!) || []
        Checkeds.push(content)
        localStorage.setItem('Checkeds', JSON.stringify(Checkeds))
        setConcluidas(Checkeds)

        let filter = get.filter((i:any)=>i.then !== object.then)
        localStorage.setItem('storage', JSON.stringify(filter))
        setTarefas(filter)
        
        
    }

    //Editando..............
    const callEdit = (object:ob ,index:number)=>{
        setEdited(object.then)
        setEditing(index)
        console.log(editing);
        
    }

    const handleEdit = (object:ob, index:number)=>{
        const get = JSON.parse(localStorage.getItem('storage')!) || []
        let him = get.find((i:any)=>i.then === object.then)
        him.then = edited
        get[index] = him
        localStorage.setItem('storage', JSON.stringify(get))
        setTarefas(get)

        cancelarEdicao()
    } 

    function cancelarEdicao() {
        setEditing(-1)
        setEdited('')
    }

    let tarefasCriadas = tarefas.length + concluidas.length;

    let isDisabled
    if (tarefa === '')isDisabled = true;



    

    return (

        <>

        <header className='-bg---gray-700 text-white h-32 w-full flex items-center justify-center flex-col'>
            <div className=' mt-12 mb-9 flex items-center gap-1'>
                <NavLink to='/' ><BiSolidFoodMenu className='text-3xl text-bluey'/></NavLink>
                <h1 className='text-bluey font-bold text-3xl'>to<span className='text-purpleDark'>do</span></h1>
            </div>
            <form onSubmit={handleSubmit} className='flex justify-center w-full items-center gap-2'>
                <input value={tarefa} onChange={handleTarefa} className='text-sm pl-6 h-12 w-[30rem] formmism rounded-[7px] -bg---gray-500 -text---gray-300 focus:outline-none focus:outline-purple' type="text" placeholder='adicione uma nova tarefa'></input> 
                <button className='text-sm flex h-12 p-5 rounded-[7px] items-center gap-1 text-white bg-blueDark hover:bg-bluey disabled:opacity-50 disabled:hover:bg-blueDark' disabled={isDisabled} type="submit">Criar <BiPlusCircle/></button>
            </form>
        </header>


        <div className='flex items-center justify-center flex-col w-full mt-20'>
            <div className='flex items-center justify-between w-[37rem] asps text-sm text-bluey'>
                <p>Tarefas criadas <span className='-bg---gray-400 text-white rounded-[45px] text-[12px] px-[10px] py-[5px]'> {tarefasCriadas} </span></p>
                <p className='text-purpleDark'>Concluidas <span className='-bg---gray-400 rounded-[45px] text-white text-[12px] px-[10px] py-[5px]'> { concluidas.length + " de " + tarefasCriadas }</span></p>
            </div>

            {concluidas[0] === undefined && tarefas[0] === undefined ? 
            
                <div className='flex items-center justify-center w-full py-12 border-t-[1px] -border---gray-400 mt-5'>
                    <div className='flex items-center flex-col'>
                    <div><BsJournalText className=' -text---gray-300 mb-4' size={60}/></div>
                    <div>
                            <p className='text-sm -text---gray-300'>Você ainda não tem tarefas cadastradas</p>
                            <p className='text-sm -text---gray-400 font-bold'>Crie tarefas e organize seus itens a fazer</p>
                        </div> 
                    </div>
                </div> 
                
                :

                <div className='flex items-center justify-center flex-col mt-9 gap-4'>
                    {
                        tarefas?.map((i:any , index)=>(

                            editing === index ? 
                                
                               
                                    <div key={index} className='flex dispencer justify-between rounded-[7px] morning p-5 -bg---gray-500 gap-4'>
                                       <input type="text" className='text-sm pl-6 h-12 w-[30rem] rounded-[7px] -bg---gray-400 -text---gray-300 focus:outline-none focus:outline-purple' onChange={(e:ChangeEvent<HTMLInputElement>)=>setEdited(e.target.value)} value={edited} />
                                       <div className='flex gap-4 miss '>
                                        <button onClick={()=>cancelarEdicao()} type="button" className='text-sm flex h-12 p-5 rounded-[7px] items-center text-white bg-blueDark hover:bg-bluey'>Cancelar</button>
                                        <button onClick={()=>handleEdit(i,index)} type="button" className='text-sm flex h-12 p-5 rounded-[7px] items-center text-blueDark font-bold bg-transparent hover:text-bluey border border-blueDark'>Salvar</button>
                                       </div>
                                    </div>

                                :
                                    <div key={index} className='flex justify-between w-[37rem] morning rounded-[7px] p-5 -bg---gray-500 gap-4'>
                                        <div onClick={()=>handleCheck(i)} className='py-[7px] absolute px-[7px] hover:bg-bluey hover:bg-opacity-15 border-bluey border-[2px] rounded-[100%]'></div>
                                        <p className=' ml-10 max-w-[28rem] text-sm -text---gray-200'>{i.then}</p>
                                        <BiEditAlt onClick={()=>callEdit(i, index)} className='-text---gray-300 absolute ml-[500px] notabsolute hover:-text---gray-200' size={18}/>
                                        <BiTrash onClick={()=>handleDelete(i)} className='-text---gray-300 absolute ml-[33rem] hover:text-danger notabsolute' size={18}/>
                                    </div>
                            
                            
                        ))
                    }

                    
                    <div className='w-full flex justify-start'><h1 className='text-[#9ca3af] pt-3 text-sm font-bold'>Tarefas Concluidas</h1></div>

                   {
                    concluidas?.map((i:any, index:number)=>(

                        <div key={index} className='flex justify-between w-[37rem] rounded-[7px] morning p-5 -bg---gray-500 gap-4'>
                            <div className='py-[5px] absolute px-[5px] bg-purpleDark hover:bg-purple rounded-[100%]'><FiCheck className='text-white' size={10}/></div>
                            <p className=' ml-10 pr-4 max-w-[31rem] text-sm -text---gray-300 line-through'>{i.then}</p>
                            <BiTrash onClick={()=>handleDeleteChecked(i)} className='-text---gray-300 absolute ml-[33rem] notabsolute1 hover:text-danger' size={18}/>
                        </div>

                    ))
                   }
                </div>

            }
            
        </div>


        </>
        
    )    
}