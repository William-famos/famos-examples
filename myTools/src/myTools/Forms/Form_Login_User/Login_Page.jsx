import bannerIMG from '../../../Assets/Svg/img baner 01.svg'
import Header from '../../Header/index';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { z } from 'zod';
import React from "react";






function Form_Login_User({backto}) {

    const nav = useNavigate();
    const location = useLocation();
    const previousPage = location.state && location.state.previousPage;



const esquema = z.object({
        name: z.string().min(3).max(50),
        senha:z.string().max(8, 'A senha deve possuir apenas 8 digitos').min(4, 'a senha deve ter no minimo 4 digitos')
      })

        const [formData, setFormData] = useState({
          name: '',
          senha: '',
        })



        useEffect(() => {
            const logge = localStorage.getItem('logue');
            if (logge) {
              setIsLoggedIn(true);
              setUserName(logge);
            }
          }, []);



        const [errors, setErrors] = useState({});
        const [userName, setUserName] = useState('')
        const [isLoggedIn, setIsLoggedIn] = useState(false);

        const handleChange = (e) => {
            e.preventDefault();
            const { name, value } = e.target;
            setFormData((prevData) => ({
              ...prevData,
              [name]: value
            }));
          }

        

            
            const Submit = (e) => {
                e.preventDefault();

                try {
                    esquema.parse(formData);


                
           
 
                        let items=JSON.parse(localStorage.getItem("ApiLocal"))||[];
                       
                       
                        console.log(items.Data_CLients)

                        let verify = items.Data_CLients.find(i=>i.senha==formData.senha)

                        console.log(verify)
                  
                        if(verify!=null) {

                           nav(previousPage)
                           let amaz = [verify]
                           localStorage.setItem("ApiLocal_Auth",JSON.stringify(amaz[0]))
                           window.location.reload()
                        }
                    
          
                    setErrors({});

                } catch (error) {
                
                    alert('Erros de validação:', error.errors);
                    if(formData.name === ''){
                        alert('O Campo Nome esta Vazio')
                    }
                    else if(formData.name.length <= 3){
                        alert('seu nome deve ser mais longo')
                    }
                    setErrors(error.errors);
                }

                            
        }

            const handleSignOut = () => {
                setIsLoggedIn(false);
                setUserName('')
                localStorage.removeItem('logue')
              };

              <Header fun={isLoggedIn}  nome={userName} sair={handleSignOut}/>

            

            

    return (
        <>
       
        <div className='flex justify-center items-center mt-[50px] z-[999] relative'> 
            <form className='flex flex-col justify-center shadow-xl items-center w-[600px] h-[400px] p-20 rounded-[20px]' onSubmit={Submit}>
                <h1 className='font-bold text-30'>Login</h1>
                <div className=' flex justify-around items-center w-full '>

                    <div className=' flex flex-col l'> 
                        <label htmlFor='name'>Nome</label>
                        <input placeholder="seu nome"
                         type="text"
                         id="name"
                         name="name"
                         value={formData.name}
                         onChange={handleChange}></input>
                         
                         
                        <label htmlFor='senha'>Senha</label>
                        <input placeholder="* * * *"
                         type="text"
                         id="senha"
                         name="senha"
                         value={formData.senha}
                         onChange={handleChange} 
                         ></input>
                       
                        
                    </div>

                    <div className='w-[350px]'><img className='Animation_Translate w-[200px] ml-[55px]' src={bannerIMG}></img></div>
                </div>
                
                <div className='flex justify-end items-center w-full yellow'>
                    <div className='flex justify-center items-center ml-[70px]'>
                            <button
                                type='button'
                                className='
                                text-[#F8A217] 
                                bt
                                mt-[9px]
                                h-[33px] 
                                w-[100px] 
                                font-bold 
                                rounded'
                                onClick={()=>{nav(previousPage)}} 
                                >Cancelar</button>

                        <button className='
                                bg-[#F8A217] 
                                text-white 
                                rounded 
                                ml-[15px]
                                mt-[9px] 
                                h-[33px] 
                                w-[100px] 
                                font-bold
                                'type='submit'
                            
                                 > Entrar </button>
                    </div>
                </div>
             
            </form>

                      
        </div>
          
        </>
    )
}


export default Form_Login_User