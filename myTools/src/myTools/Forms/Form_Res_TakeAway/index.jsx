import React from "react";
import img from '../../../Assets/img/Firefly restaurante 8385.jpg'
import circleDelivery from '../../../Assets/img/Delivery Circle.png'
import ceta from '../../../Assets/icons/icons8_advance_32px.png'
import { useState,useRef } from 'react';
import numeral from 'numeral'
import { z } from 'zod';
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";


function Form_TakeAway() {

    const nav = useNavigate()
    const location = useLocation();
    const previousPage = location.state && location.state.previousPage;

        const [currentIndex, setCurrentIndex] = useState(0);

        const { id,preco,nome,descricao } = useParams();

        const handleNext = () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
        };
      
        const handlePrev = () => {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
        };
    

        const prato ={
            nome:'Bitoque',
            descricao: 'Lorem ipsum dolor sit, amet consectetur adipisicing Illo mollitia hic tenetur! Quibusdam libero. Dignis Lorem, ipsum dolor'
        }

        const [selectedPrice, setSelectedPrice] = useState(null);
        const [selectedName, setSelectedName] = useState(null);

        const handleSend = (price,name) => {
                setSelectedPrice(price);
                setSelectedName(name);
    }


        //Form settings
    const esquema = z.object({
        name: z.string().min(3).max(50).regex(/^[a-zA-ZáãâêéíóõôúçÁÃÂÉÊÍÓÔÕÚÇ ]+$/i),
        onde:z.string().nonempty(),
        date:z.string().nonempty(),
        time:z.string().nonempty(),
        number:z.string().regex(/^(\d{3})?[' ']?(\d{3})?[' ']?(\d{3})$/),
        quant: z.string().nonempty("O campo quantidade é Obrigatório, Preencha-o")
        
      })
    
        const [formData, setFormData] = useState({
          name: '',
          onde: '',
          number:'',
          date:'',
          time:'',
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
                const numberCover = selectedPrice * formData.quant
                    
                try {

                    esquema.parse(formData);

                    alert("Serviço TakeAwey Agendado com Sucesso");
    
                        let items=JSON.parse(localStorage.getItem("ApiLocal"))||{AriasService:undefined};
                    console.log(items.AriasService[0])

                         const AllData= items.AriasService;
                       
                         console.log(id)
                    let DataPost=AllData.find((i)=>i.id===Number(id))
                
                        console.log(DataPost)

                        DataPost.pedidos.push({
                            type:"TakeAway",
                            nome:formData.name,
                            onde:formData.onde,
                            quant:formData.quant,
                            numero:formData.number,
                            data:formData.date,
                            hora:formData.time,
                            pratoNome:selectedName,
                            pratoPreco:preco,
                            precoUnitario:numeral(numberCover).format('0,000.00'),
                    })
       
                console.log("---------------")
            
                      
                console.log(items)
                       
                localStorage.setItem("ApiLocal",JSON.stringify(items))
                            
                    setErrors({});
                    nav(previousPage)
    
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
            <form className=" flex justify-around items-center mt-20 w-[600px] h-[400px] shadow-xl form_Takeaway" onSubmit={Submit}>
                <div className="w-[40%] h-full"><img className="h-full img_TakeawayB" src={img}/></div>

                {currentIndex === 0 &&
                
                    <div className="w-[60%] pl-[50px]">
                        <h1 className="font-bold text-[25px]">{nome}</h1>
                        <p className="max">
                            {descricao}
                        </p>
                        <h1 className="pt-[12px] pb-[55px] font-bold text-[18px] text-[#878787]">{preco+ 'kz'}</h1>
                        <div className="flex pl-[40px] w-full">
                            
                            <Link to={previousPage} className=" 
                                btn_form_take 
                                rounded 
                                font-bold"
                                type="button"
                            >Cancelar</Link>

                            <button className="
                                ml-[12px] 
                                bg-[#00BA62] 
                                font-bold 
                                text-[white] 
                                rounded 
                                w-[100px] 
                                p-[5px]" 
                                onClick={handleNext}
                                type="button"
                                >TakeAway</button>
                        </div>
                    </div>
                }


            {currentIndex === 1 && 
                <div className='w-[60%] pl-[50px]'>

                     <div className="flex justify-around items-center">
                        <h1 className="font-bold text-[25px]">Bitoque</h1>
                        <img className="w-[90px]" src={circleDelivery}/>
                    </div>
                    <div className="flex flex-col inputs_take">

                            <label htmlFor="name">A quem iremos entregar...</label>
                            <div>
                                <input className='w-[180px]' 
                                    placeholder="Seu Nome"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                ></input>

                                <input className='ml-[12px] w-[70px]' 
                                name="number"
                                type="text"
                                id="number"
                                value={formData.number}
                                onChange={handleChange}
                                placeholder="telefone"/>
                            </div>
                            <label htmlFor="onde">Onde iremos entregar...</label>
                            
                                <input className='w-[180px]' 
                                    placeholder="Sua localização"
                                    name="onde"
                                    type="text"
                                    id="onde"
                                    value={formData.onde}
                                    onChange={handleChange}
                                ></input>

                            <label>Quando iremos entregar</label>
                            <div>
                                <input className='w-[180px]' 
                                type='date'
                                name="date"
                                id="date"
                                value={formData.date}
                                onChange={handleChange}
                                ></input>

                                <input className='ml-[12px] w-[70px]' 
                                type="time"
                                name="time"
                                id="time"
                                value={formData.time}
                                onChange={handleChange} 
                                placeholder="Hora" ></input>
                            </div>

                            <label>Quantidade</label>
                            <select
                            name="quant"
                            id="quant"
                            value={formData.quant}
                            onChange={handleChange}
                            >
                                <option disabled >Selecionar</option>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                                <option>04</option>
                                <option>05</option>
                                <option>06</option>
                                <option>07</option>
                                <option>08</option>
                                <option>09</option>
                                <option>10</option>
                            </select>
                    </div>


                    <div className="pt-[10px]">
                        <button className="
                        ml-[100px]
                        flex
                        justify-around
                        items-center 
                        h-[33px] 
                        w-[160px] 
                        rounded 
                        bg-[#00BA62] 
                        text-[white] 
                        font-bold"
                        type="submit"
                        onClick={()=>{handleSend(numeral(preco).value(), nome)}}
                        >
                            Seguir <img className="w-[30px]" src={ceta}/>
                        </button>
                    </div>
                </div> }
                
            </form>
        </div>   
        </>
    )
}

export default Form_TakeAway