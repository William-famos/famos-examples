import img from '../../../Assets/img/Img_banner_Form_Transportes.png'
import ceta from '../../../Assets/icons/icons8_advance_32px.png'
import { useState,useRef } from 'react';
import { z } from 'zod';
import React from "react";
import { useNavigate,Link } from 'react-router-dom';

export function Form_Pacotes(){

    const nav = useNavigate()

     //settings do formulário
     const esquema = z.object({
        name: z.string().min(3).max(50).regex(/^[a-zA-ZáãâêéíóõôúçÁÃÂÉÊÍÓÔÕÚÇ ]+$/i),
        emailNumber:z.union([z.string().email(), z.string().regex(/^(\d{3})?[' ']?(\d{3})?[' ']?(\d{3})$/)]) 
      })
    
        const [formData, setFormData] = useState({
          name: '',
          emailNumber: '',
        })
    
        const [errors, setErrors] = useState({});
    
        const handleChange = (e) => {
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
                    alert('Dados válidos:', formData);
    
                        let items=JSON.parse(localStorage.getItem("Form_Pacotes"))||[];
    
    
                        items.push(
                        {
                            type:"Reservar",
                            nome:formData.name,
                            emailNumber:formData.emailNumber,
                        }
                        )
                    
                        localStorage.setItem("Form_Pacotes",JSON.stringify(items))   

                        setErrors({});
                        
                        nav('/Pacotes')
    
                } catch (error) {

                    console.log('Erros de validação:', error.errors);
                    
                    if(formData.name === ''){
                        alert('O Campo Nome esta Vazio')
                    }
                    else if(formData.name.length <= 3){
                        alert('seu nome deve ser mais longo')
                    }

                    setErrors(error.errors);
                }
              
            }

    return(

        <>

            <div className="flex w-full justify-center items-center">
                <form className=" 
                    flex 
                    justify-around 
                    items-center 
                    mt-20 
                    w-[600px] 
                    h-[400px] 
                    shadow-xl 
                    form_Takeaway
                    " 
                    onSubmit={Submit}>
                    <div className="w-[40%] h-full flex justify-center items-center pl-12"> <img className="w-[200px] img_TakeawayB Animation_Translate" src={img} /> </div>
        
                    <div className='w-[60%] pl-[50px]'>

                                    <div className="flex justify-center items-center">
                                        <h1 className="font-bold text-[25px] ml-[-70px] mb-[30px]">Comprar Pacote</h1>
                                    </div>
                                    <div className="flex flex-col inputs_take">

                                            <label htmlFor="">Nome Completo</label>
                                            <input className='
                                            w-[180px]'
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange} 
                                            placeholder="Seu Nome"
                                            ></input>


                                            <label htmlFor='emailNumber'>Email ou Número</label>
                                            <input className='
                                            w-[180px]'
                                            type="text"
                                            id="emailNumber"
                                            name="emailNumber"
                                            value={formData.emailNumber}
                                            onChange={handleChange} 
                                            placeholder="+244/ exemplo@email.com"
                                            ></input>
                        
                                    </div>

                                    <div className="pt-[50px]">

                                        <Link  className=" 
                                            mb-[-33px]
                                            flex
                                            justify-around
                                            items-center 
                                            h-[33px] 
                                            w-[75px] 
                                            rounded 
                                            bg-[#121a54] 
                                            text-[white]
                                            text-[10px]
                                            font-bold"
                                            to ='/Pacotes'
                                            type='button'
                                            
                                            >Cancelar</Link>

                                        <button className="
                                        ml-[100px]
                                        flex
                                        justify-around
                                        items-center 
                                        h-[33px] 
                                        w-[160px] 
                                        rounded 
                                        bg-[#F8A217] 
                                        text-[white] 
                                        font-bold"
                                        type='submit'
                                        >
                                            Seguir <img className="w-[30px]" src={ceta}/>
                                        </button>
                                    </div>
                            </div>
                    </form>
            </div>
        
        </>
    )
}