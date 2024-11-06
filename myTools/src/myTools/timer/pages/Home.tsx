import {useForm} from 'react-hook-form'
import zod  from 'zod' 
import {zodResolver} from '@hookform/resolvers/zod'
import {CiPlay1} from 'react-icons/ci'
import '../styles/Global.css'


export function Home(){

    const FormValidationSchema =zod.object({
        task: zod.string({message:'digite um nome para o projeto'}).min(5, 'O nome do projeto deve ter no mínimo 5 caracteres'),
        minutsAmount: zod.number({message:'digite o tempo de duração'}).min(5,'A duração deve ter no mínimo 5min').max(60,'A duração deve ter no maximo 60min')
    })

    type NewCycleFormData = zod.infer<typeof FormValidationSchema>

    const {register, handleSubmit, watch,formState,reset} = useForm<NewCycleFormData>({
        resolver:zodResolver(FormValidationSchema),
        defaultValues:{
            task:''
        }
    })
    
    function CreateCountDown(data:NewCycleFormData){
        console.log(data);
        reset()
    }


    console.log(formState.errors);


    const task = watch('task')
    const IsDisabled = !task

    return(

        <div className='h-full flex flex-col items-center justify-center -mt-4'>
            <form onSubmit={handleSubmit(CreateCountDown)} className='flex flex-col items-center gap-14'>
                <div className='w-full breacker flex items-center justify-center gap-2 -text--gray-100 text-[1rem] font-bold flex-wrap'>
                   <div className='flex gap-1 items-center'>
                    <label htmlFor='task'>vou trabalhar em</label>
                        <input className='bg-transparent flex-1 text-inherit h-10 border-b-[2px] -border-b--gray-500 font-medium text-[1rem] py-0 px-2 focus:shadow-none placeholder:-text--gray-500 focus:-border-b--green-500 webkit' 
                        id='task' {...register('task')} list='task-sugestions' placeholder='dê um nome para o seu projeto' type='text' />
                        <datalist id='task-sugestions'>
                            <option value="Projeto 1"/>
                            <option value="Projeto 2"/>
                            <option value="Projeto 3"/>
                        </datalist>
                   </div>

                    <div>
                        <label htmlFor="minutsAmount">durante</label> 
                        <input className='bg-transparent text-inherit h-10 w-16 border-b-[2px] -border-b--gray-500 font-medium text-[1rem] py-0 px-2 focus:shadow-none placeholder:-text--gray-500 focus:-border-b--green-500' 
                        id='minutsAmount' {...register('minutsAmount', {valueAsNumber:true})} placeholder='00' type='number' />
                        <span>minutos.</span>
                    </div>
                </div>

                <div className=' fontFamily text-[10rem]  amounted leading-[8rem] -text--gray-100 flex gap-4'>
                    <span className='-bg--gray-700 py-8 px-8 rounded-[8px] numbers'>
                        0
                    </span>
                    <span className='-bg--gray-700 py-8 px-8 rounded-[8px] numbers'>
                        0
                    </span>
                    <span className='py-4 px-0 -text--green-500 point rounded-[8px] w-16 overflow-hidden flex justify-center'>
                        :
                    </span>
                    <span className='-bg--gray-700 py-8 px-8 rounded-[8px] numbers'>
                        0
                    </span>
                    <span className='-bg--gray-700 py-8 px-8 rounded-[8px] numbers'>
                        0
                    </span>
                </div>

                <button className='p-4 w-full rounded-[8px] flex items-center justify-center gap-2 font-bold cursor-pointer -bg--green-500 -text--gray-100 hover:-bg--green-700 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:-bg--green-500 disabled:hover:opacity-70'
                    type="submit" disabled={IsDisabled}>
                    <CiPlay1 size={27}/> Começar
                </button>
            </form>
        </div>
        
    )
}