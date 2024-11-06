import img from '../../../Assets/img/Reservado.png'
import ceta from '../../../Assets/icons/icons8_advance_32px.png'
import normal from '../../../Assets/img/modern-interior-restaurant-design.jpg'
import vip from '../../../Assets/img/Firefly restaurante 60648.jpg'
import CircleReservar from '../../../Assets/img/RestTable Circle.png'
import { useState,useRef } from 'react';
import numeral from 'numeral'
import { z } from 'zod';
import React from "react";
import { useNavigate, useLocation, useParams } from 'react-router-dom'


function Form_Res_Reservar() {

    const nav = useNavigate()
    const location = useLocation();
    const previousPage = location.state && location.state.previousPage;

    const { id,preco,nome } = useParams();

    //mudar de sessão
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
    };


      //categorias a escolher Nome e Preço
        const Normal= {
            nome:'Normal', 
            preco:'9,000.00'}


        const Vip= {
            nome:'VIP', 
            preco: '15,000.00'}

        const [selectedPrice, setSelectedPrice] = useState(null);
        const [selectedName, setSelectedName] = useState(null);

        const handleSend = (price,name) => {
                setSelectedPrice(price);
                setSelectedName(name);
            };

    
    //settings do formulário
    const esquema = z.object({
        name: z.string().min(3, 'preencha').max(50).regex(/^[a-zA-ZáãâêéíóõôúçÁÃÂÉÊÍÓÔÕÚÇ ]+$/i),
        emailNumber:z.union([z.string().email(), z.string().regex(/^(\d{3})?[' ']?(\d{3})?[' ']?(\d{3})$/)]),
        data: z.string().nonempty('preencha a data porfavor'),
        hora: z.string().nonempty('preencha a hora porfavor'),
        quantamesas: z.string().nonempty('preencha a quantidade de mesas porfavor'),
        praQuantos: z.string().nonempty('preencha quantas pessoas estarão na mesa porfavor')
        
      })
    
        const [formData, setFormData] = useState({
          name: '',
          emailNumber: '',
          data:'',
          hora:'',
          quantamesas:'',
          praQuantos:''

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

                const precoConvertido = selectedPrice * formData.quantamesas;
                    
                try {

                    esquema.parse(formData);

                    alert("Reserva Feita com Sucesso");

                let items = JSON.parse(localStorage.getItem("ApiLocal"))||{AriasService:undefined};
                    console.log(items.AriasService[0])

                   
                    const AllData= items.AriasService;
                       
                    console.log(id)
                    let DataPost=AllData.find((i)=>i.id===Number(id))
           
                   console.log(DataPost)

                        DataPost.pedidos.push(
                        {
                            type:"Reservar",
                            nome:formData.name,
                            emailNumber:formData.emailNumber,
                            data:formData.data,
                            hora:formData.hora,
                            quantamesas:formData.quantamesas,
                            praQuantos:formData.praQuantos,
                            preco:numeral(precoConvertido).format('0,000.00'),
                            categoria:selectedName
                        }
                        )
                       


                        console.log(items);
                        localStorage.setItem("ApiLocal",JSON.stringify(items))
                        nav(previousPage)
                        
                        
                    setErrors({});
                    

                    
    
                } catch (error) {
                    console.log('Erros de validação:');
                    
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
                    <div className="w-[40%] h-full"> <img className="h-full img_TakeawayB" src={img} /> </div>

             
                
                    {currentIndex === 0 &&
                
                            <div className="flex flex-col w-[60%] h-full reservar_side reservarSideBack justify-center items-center">
                                    <h1 className='font-bold text-[22px] mt-[-72px] mb-[20px]'> Reservar </h1>
                                    <div className="flex justify-around w-full items-center">
                                        <div 
                                            onClick={()=>{handleNext(); handleSend(numeral(Normal.preco).value(), Normal.nome)}} 
                                            className=" 
                                            flex 
                                            justify-center 
                                            w-[37%] 
                                            h-[170px] 
                                            items-center 
                                            rounded">
                                            <img className='imgCategorias rounded' src={normal}/>
                                            <div className=" flex flex-col items-center justify-center absolute">
                                                <h1 className='font-bold text-[22px]'>{Normal.nome}</h1>
                                                <h2 className='font-bold text-[17px]'>{Normal.preco +'Kz'}</h2>
                                            </div>
                                        </div>
                                        <div 
                                            onClick={()=>{handleNext(); handleSend(numeral(Vip.preco).value(), Vip.nome)}}   
                                            className=" 
                                            flex 
                                            justify-center 
                                            items-center 
                                            w-[37%] 
                                            ml-[-50px] 
                                            h-[170px] 
                                            rounded">
                                            <img className='imgCategorias rounded' src={vip}/>
                                            <div className=" flex flex-col items-center justify-center absolute">
                                                <h1 className='font-bold text-[22px]'>{Vip.nome}</h1>
                                                <h2 className='font-bold text-[17px]'>{Vip.preco +'Kz'}</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <button className=" 
                                        mt-[30px]
                                        flex
                                        justify-around
                                        items-center 
                                        h-[33px] 
                                        w-[100px] 
                                        rounded 
                                        bg-[#2680EB] 
                                        text-[white]
                                        text-[10px]
                                        font-bold"
                                        onClick={()=>{nav(previousPage)}}
                                        type='button'
                                    
                                    >   Cancelar</button>
                                </div>
                                
                    }

                    {currentIndex === 1 && 

                            <div className='w-[60%] pl-[50px]'>

                                    <div className="flex justify-around items-center">
                                        <h1 className="font-bold text-[25px]">Reservar</h1>
                                        <img className="w-[90px]" src={CircleReservar}/>
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

                                        <button className=" 
                                            mb-[-33px]
                                            flex
                                            justify-around
                                            items-center 
                                            h-[33px] 
                                            w-[75px] 
                                            rounded 
                                            bg-[#2680EB] 
                                            text-[white]
                                            text-[10px]
                                            font-bold"
                                            onClick={handlePrev}
                                            type='button'
                                            
                                            >   Cancelar</button>

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
                                        type='button'
                                        onClick={handleNext}>
                                            Seguir <img className="w-[30px]" src={ceta}/>
                                        </button>
                                    </div>
                            </div>
                        
                    }

                    {currentIndex === 2 && 



                                    <div className='w-[60%] pl-[50px]'>

                                <div className="flex justify-around items-center">
                                    <h1 className="font-bold text-[25px]">Reservar</h1>
                                    <img className="w-[90px]" src={CircleReservar}/>
                                </div>
                                <div className="flex flex-col inputs_take">
                                        <div className="flex">
                                            <label htmlFor="quantamesas">Quantas mesas</label>
                                            <label className='pl-[35px]'>Mesa Pra...</label>
                                        </div>

                                        <div>

                                            <select 
                                                id='quantamesas'
                                                name='quantamesas'
                                                value={formData.quantamesas}
                                                onChange={handleChange} >
                                            <option>Selecionar</option>
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

                                            <select className='ml-[12px]'
                                                id='praQuantos'
                                                name='praQuantos'
                                                value={formData.praQuantos}
                                                onChange={handleChange}
                                            >
                                            <option>Selecionar</option>
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
                                        <label htmlFor='quandoSera'>Quando Será</label>
                                        <div id='quandoSera' name='quandoSera'>
                                            <input className='w-[180px]' 
                                                type='date'  
                                                id='data'
                                                name='data'
                                                value={formData.data}
                                                onChange={handleChange}></input>

                                            <input className='ml-[12px] w-[70px]'
                                                type='time'
                                                placeholder="Hora"
                                                id='hora'
                                                name='hora'
                                                value={formData.hora}
                                                onChange={handleChange} ></input>
                                        </div>
                                        
                                </div>


                                <div className="pt-[50px]">

                                    <button className=" 
                                        mb-[-33px]
                                        flex
                                        justify-around
                                        items-center 
                                        h-[33px] 
                                        w-[75px] 
                                        rounded 
                                        bg-[#2680EB] 
                                        text-[white]
                                        text-[10px]
                                        font-bold"
                                        onClick={handlePrev}
                                        type='button'
                                        
                                        >   Cancelar</button>

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
                                    type='submit'>
                                        Seguir <img className="w-[30px]" src={ceta}/>
                                    </button>
                                </div>
                            </div> 
                
                }

                </form>
            </div>

        </>



    )
}

export default Form_Res_Reservar