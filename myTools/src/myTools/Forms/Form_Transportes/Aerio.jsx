import React from "react"
import banner from '../../../Assets/img/Img_banner_Form_Transportes.png'
import ceta from '../../../Assets/icons/icons8_advance_32px.png'
import numeral from 'numeral'
import { useState,useRef } from 'react';
import { z } from 'zod';
import { Link, useLocation, useNavigate } from "react-router-dom";




export function Form_Aerio() {


    const nav = useNavigate()
    const location = useLocation()
    const previousPage = location.state && location.state.previousPage;


     //mudar de sessão
     const [currentIndex, setCurrentIndex] = useState(0);

     const handleNext = () => {
       setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
     };
   
     const handlePrev = () => {
       setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
     };

     const [selectedPrice, setSelectedPrice] = useState(null);

     const handleSend = (price) => {
         setSelectedPrice(price);
     };


    const esquema = z.object({
        name: z.string().min(3).max(50).regex(/^[a-zA-ZáãâêéíóõôúçÁÃÂÉÊÍÓÔÕÚÇ ]+$/i),
        number:z.string().regex(/^(\d{3})?[' ']?(\d{3})?[' ']?(\d{3})$/),
        quant: z.string().nonempty("O campo Quanto Tempo é Obrigatório, Preencha-o")
        
      })
    
        const [formData, setFormData] = useState({
          name: '',
          number:'',
          quant:''

          
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
                    alert("Viagem Agendada");
    
                        let items=JSON.parse(localStorage.getItem("Form_Aerio"))||[];
    
    
                        items.push(
                        {
                            type:"AgendarViagem",
                            nome:formData.name,
                            quant:formData.quant,
                            numero:formData.number,
                            viagem:'malange a luanda',
                            preco:'preco',
                            precoUnitario:'preco unitário'
                           
                        }
                        )
                    
                        localStorage.setItem("Form_Aerio",JSON.stringify(items))

                            nav(previousPage)

                    setErrors({});
    
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


    return (
        <>

        <div className="w-full mt-[30px] flex justify-center items-center">

            <form className='flex shadow-xl justify-center items-center w-[700px] p-10' onSubmit={Submit}>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-bold text-30">Agendar</h1>
                <div className="flex  items-center justify-around">
                    <div className="flex flex-col justify-center form_trans">

                    {currentIndex === 0 &&
                    <>
                            <label htmlFor="Name">Nome Completo</label>
                            <input className="rounded" 
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nome Completo"></input>


                            <label htmlFor="number">Telefone</label>
                            <input className="rounded" 
                            id="number"
                            name="number"
                            type="text"
                            value={formData.number}
                            onChange={handleChange}
                            placeholder="DDD + Seu número"></input>


                            <label htmlFor="quant">Quantos Bilhetes</label>
                            <select className="w-[170px] h-[40px] rounded"
                            id="quant"
                            name="quant"
                            value={formData.quant}
                            onChange={handleChange}
                            >
                                <option >Selecionar</option>
                                <option >01</option>
                                <option >02</option>
                                <option >03</option>
                                <option >04</option>
                                <option >05</option>
                                <option >06</option>
                                <option >07</option>
                                <option >08</option>
                                <option >09</option>
                                <option >10</option>
                            </select>

                            <div className="flex items-center justify-around w-[330px] pt-[72px] pb-[20px]">
                                    <Link to={previousPage} 
                                        className="
                                        flex
                                        justify-center
                                        items-center
                                        btn_form_trans_cancelar 
                                        rounded 
                                        font-bold"
                                        type="button"
                                        >Cancelar</Link>


                                    <button className="
                                        btn_form_trans_seguir 
                                        rounded 
                                        flex 
                                        items-center 
                                        justify-around 
                                        font-bold"
                                        type="button"
                                        onClick={handleNext}
                                        >
                                        Seguir
                                        <img className="w-[35px]" src={ceta}/>
                                    </button>
                                </div>
                        </> 

                        }

                        {currentIndex === 1 &&
                            <>
                             <div className="labeles">
                                    <span className="font-bold text-15" >Dados Pessoais</span>
                                    <label>{formData.name + '/ ' + formData.number}</label>
                                    <span className="font-bold text-15">Viagem</span>
                                    <label >De Luanda á Malange</label>
                                    <span className="font-bold text-15">Numero de Bilhetes</span>
                                    <label>{formData.quant}</label>
                                    <span className="font-bold text-15">Preço Unitário</span>
                                    <label>{numeral(selectedPrice).format('0,000.00')}</label>
                                    <span className="font-bold text-15">Preço Total</span>
                                    <label>{numeral(selectedPrice * formData.quantoQuartos).format('0,000.00')}</label>
                                </div>

                                <div className="flex items-center justify-around w-[330px] pt-[72px] pb-[20px]">
                                    <button className="
                                        btn_form_trans_cancelar 
                                        rounded 
                                        font-bold"
                                        type="button"
                                        onClick={handlePrev}
                                    >Cancelar</button>

                                    <button className="
                                        btn_form_trans_seguir 
                                        rounded 
                                        flex 
                                        items-center 
                                        justify-around 
                                        font-bold"
                                        type="submit"
                                        >
                                        Seguir
                                        <img className="w-[35px]" src={ceta}/>
                                    </button>
                                </div>
                            </>
                                }

                        
                    </div>
                    
                    
                    <div className="flex items-center justify-center"><img className="w-[200px] pb-[42px]" src={banner} /></div>
                </div>

                
                </div>
            </form>
            
        </div>
        </>
    )
}