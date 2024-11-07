import '../pages/Vihos/style/index.css'
import iuser from '../assets/icons8_male_user_26px.png'
import logo from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { useState } from 'react'

export function VihosHeader() {

    const [Hidden, setHidden] = useState('hidden')
    function isHidden(){
        setHidden('')
        
        if(Hidden === ''){
            setHidden('hidden')
        };
    }

    return(
        <>

            <header className='w-full z-[999] flex justify-center max-md:gap-[15rem] items-center riscas p-3 h-[55%] bg-[transparent]'>
                
                
                    <div>
                        <NavLink to='/Ecommerce'><img  src={logo} className='h-[30px] w-[110px] rounded' /></NavLink>
                    </div>
                   
                    <div className='riscassom'>
                        <div className='w-full '>
                                <div className='flex w-[100%] pl-[40px]'>
                                    <a href='/' className=' text-[11px] cursor-pointer w-[80px] h-[40px] flex justify-center items-center rounded'> Inicio</a>
                                    <a href='/' className=' text-[11px] cursor-pointer w-[100px] h-[40px] flex justify-center items-center rounded'>Hospedagem</a>
                                    <a href='/' className=' text-[11px] cursor-pointer w-[120px] h-[40px] flex justify-center items-center rounded'>Passagens Aérias</a>
                                    <a href='/' className=' text-[11px] cursor-pointer w-[150px] h-[40px] flex justify-center items-center rounded'>Passagens Rodoviárias</a>
                                    <a href='/' className=' text-[11px] cursor-pointer w-[80px] h-[40px] flex justify-center items-center rounded'>Restaurantes</a>
                                    <a href='/' className=' text-[11px] cursor-pointer w-[100px] h-[40px] flex justify-center items-center rounded '>Pacotes</a>
                                </div>
                        
                        </div>

                    </div>

                    <div className='w-[16%] flex items-center rick justify-end '>
            
                        <a href={'/'} className='
                            pt-[10px]
                            cursor-pointer
                            font-bold 
                            text-[11px] 
                            w-[100px] 
                            h-[40px] 
                            rounded'
                            >Entrar</a>
                        
                        <a href={'/'} className='
                            cursor-pointer 
                            text-white 
                            p-2 
                            bg-[#F9B13E] 
                            rounded-[9px]  
                            flex 
                            items-center 
                            font-bold 
                            justify-center'
                        
                            >
                            <div className='flex items-center justify-between w-full'>
                                <span className='text-[10px]'>Criar Conta</span>
                                <div className='w-[25%] justify-center items-center flex '>
                                <img src={iuser}/>
                                </div>
                            </div> 
                        </a>
                    </div>
            </header>
            <div className='qest' onClick={isHidden}><BiMenu size={24}/>
                <div className={`flex flex-col gap-1 ${Hidden}`}>
                    <span>Inicio</span>
                    <span>Hospedagem</span>
                    <span>Restaurantes</span>
                    <span>Passagens Aérias</span>
                    <span>Passagens Rodoviárias</span>
                    <span>Pacotes</span>
                
                </div>
            </div>
        </>
    )
}
