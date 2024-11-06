import one from '../../../Assets/icons/icons8_1_100px_2.png'
import two from '../../../Assets/icons/icons8_2_100px_2.png'
import ceta from '../../../Assets/icons/icons8_advance_32px.png'
import banner from '../../../Assets/img/Form_Icon.PNG'
import numeral from 'numeral';
import { useNavigate } from 'react-router-dom'
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import { z } from 'zod';
import React from "react";
import Notify from '../../Notification';








function Form_Hospedagem() {

    // mudar de sessão
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);

    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
    };


    // Navegação
    const nav = useNavigate();
    const location = useLocation();
    const previousPage = location.state && location.state.previousPage;



    // Form settings
    const esquema = z.object({
        name: z.string().min(3).max(50).regex(/^[a-zA-ZáãâêéíóõôúçÁÃÂÉÊÍÓÔÕÚÇ ]+$/i),
        emailNumber: z.union([z.string().email(), z.string().regex(/^(\d{3})?[' ']?(\d{3})?[' ']?(\d{3})$/)]),
        Quanto: z.string().nonempty("O campo Quanto Tempo é Obrigatório, Preencha-o")

    })

    const [formData, setFormData] = useState({
        name: '',
        emailNumber: '',
        Quanto: '',
        quantoQuartos: '',
        praQuantos: ''


    })

    //categorias a escolher Nome e Preço

    const Normal= {
        nome:'Normal', 
        preco:'9,000.00'}


    const Suite= {
        nome:'Suites', 
        preco: '15,000.00'}

        const [selectedPrice, setSelectedPrice] = useState(null);

        const handleSend = (price) => {
            setSelectedPrice(price);
        };


    //states de erro e recepção dos dados do Form
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    //Notify Active or Not
    const [note, setNote] = useState()

    function ShowNote(prop){
        setNote(prop)
      }



    //onSubmit do Form
    const Submit = (e) => {
        e.preventDefault();

        try {
            esquema.parse(formData);

            let items = JSON.parse(localStorage.getItem("Form_Hospedagem")) || [];


            items.push(
                {
                    type: "Hospedagem",
                    nome: formData.name,
                    emailNumber: formData.emailNumber,
                    Quanto: formData.Quanto,
                    quantoQuartos: formData.quantoQuartos,
                    praQuantos: formData.praQuantos
                    
                }
            )

            ("Form_Hospedagem", JSON.slocalStorage.setItemtringify(items))

            setErrors({});
            ShowNote('sucesso');
           

        } catch (error) {
            alert('Erros de validação:', error.errors);
            
            setCurrentIndex(1);

            if (formData.name === '') {
                alert('O Campo Nome esta Vazio')
            }
            else if (formData.name.length <= 3) {
                alert('seu nome deve ser mais longo')
            }

            setErrors(error.errors);
        }

    }

    return (
        <div>
            <div className="w-full items-center" style={{ display: 'flex', justifyContent: 'center' }}>
                    {note === 'sucesso' &&  <Notify 
                            Type={'Sucesso'}
                            Title={'Estadía'}
                            subTitle={'Agendada com Sucesso'}
                            Nav={previousPage}
                        />
                    }
                <form className=" flex justify-around items-center mt-20 w-[600px] h-[400px] shadow-xl form_Takeaway" onSubmit={Submit}>
                    <div className='flex justify-center backHoteli items-center' style={{ width: '100%', height: '100%' }}>
                        
                        {currentIndex === 0 &&

                            <div className="flex flex-col w-[73%] h-full reservar_side backHotelIcon justify-center items-center">
                                <div className="flex justify-around w-full items-center">
                                    <div className=" flex justify-center w-[30%] h-[170px] items-center leftside rounded-[10px]">
                                        <div className=" flex flex-col items-center justify-center">
                                            <img className=" w-[50px] " src={one} />
                                            <h1 className='font-bold text-[19px]'>{Suite.nome}</h1>
                                            <h2 className='font-bold text-[13px]'>{Suite.preco +'kz'}</h2>
                                            <button className='
                                                btn_one 
                                                font-bold' 
                                                onClick={()=>{
                                                    handleNext();
                                                    handleSend(numeral(Suite.preco).value())
                                                    console.log(Suite.preco)
                                                    }}>Check in</button>
                                        </div>
                                    </div>
                                    <div className=" flex justify-center items-center w-[30%] ml-[-100px] pt-[20px] pb-[20px] rightside rounded-[10px]">
                                        <div className=" flex flex-col items-center justify-center ">
                                            <img className=" w-[50px] " src={two} />
                                            <h1 className='font-bold text-[19px]'>{Normal.nome}</h1>
                                            <h2 className='font-bold text-[13px]'>{Normal.preco +'kz'}</h2>
                                            <button className='
                                                btn_two 
                                                font-bold' 
                                                onClick={()=>{
                                                    handleNext();
                                                    handleSend(numeral(Normal.preco).value())
                                                    }}>Check in</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full flex justify-end mt-[60px]">
                                    <Link to={previousPage} className="
                                        flex
                                        justify-center
                                        items-center 
                                        h-[33px] 
                                        w-[130px] 
                                        rounded 
                                        bg-[#53C946] 
                                        text-[white] 
                                        font-bold"
                                        type='button'
                                        >Cancelar
                                    </Link>
                                </div>

                            </div>}


                        {currentIndex === 1 &&
                            <>
                                <div className='w-[50%] pl-[90px] mt-[-55px]'>
                                    <div className="flex flex-col inputs_take">
                                        <label htmlFor='name'>Nome</label>
                                        <div>
                                            <input className='
                                                w-[180px]'
                                                type='text'
                                                name='name'
                                                id='name'
                                                placeholder='Seu Nome'
                                                value={formData.name}
                                                onChange={handleChange}
                                            ></input>
                                        </div>

                                        <label htmlFor='emailNumber'>Email ou Número</label>
                                        <div>
                                            <input className='
                                                w-[180px]'
                                                type='text'
                                                id='emailNumber'
                                                name='emailNumber'
                                                value={formData.emailNumber}
                                                onChange={handleChange}
                                                placeholder='+244/ exemplo@email.com'
                                            ></input>
                                        </div>

                                        <label htmlFor='Quanto'>Quanto Tempo</label>
                                        <div>
                                            <input className='
                                                w-[180px]'
                                                type='number'
                                                id='Quanto'
                                                name='Quanto'
                                                value={formData.Quanto}
                                                onChange={handleChange}
                                                placeholder='quantos dias'></input>
                                        </div>


                                    </div>

                                    <div className="flex flex-col inputs_take">
                                        <div className="flex">
                                            <label >Quantos Quartos</label>
                                            <label className='pl-[35px]'>Pra Quantos</label>
                                        </div>

                                        <div>

                                            <select
                                                id='quantoQuartos'
                                                name='quantoQuartos'
                                                value={formData.quantoQuartos}
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

                                    </div>
                                </div>





                                <div className='w-[50%] flex flex-col justify-center items-center'>
                                    <img className="w-[170px]" src={banner} />



                                    <div className='flex w-full justify-center items-center mt-[50px]'>
                                        {/* <div className='hr absolute mt-[25px] left-[300px]'></div> */}
                                        <div className="pt-[10px]">
                                            <button className="
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
                                                onClick={handlePrev}
                                                type='button'
                                                >
                                                Cancelar
                                            </button>
                                        </div>

                                        <div className="pt-[10px] ml-[25px]">
                                            <button className="
                                                flex
                                                justify-around
                                                items-center 
                                                h-[33px] 
                                                w-[100px] 
                                                rounded 
                                                bg-[#00BA62] 
                                                text-[white]
                                                text-[10px]
                                                font-bold"
                                                type='button'
                                                onClick={handleNext}
                                               
                                            >
                                                Seguir <img className="w-[20px]" src={ceta} />
                                            </button>
                                        </div>
                                    </div>

                                </div></>



                        }

                        {currentIndex === 2 &&
                            <>
                                <div className="labeles w-[40%] ml-[90px]">
                                    <span className="font-bold text-15" >Dados Pessoais</span>
                                    <label>{formData.name + ' / ' + formData.emailNumber}</label>
                                    <span className="font-bold text-15">Quanto Tempo</span>
                                    <label >{formData.Quanto + ' dias'}</label>
                                    <span className="font-bold text-15">Número de Quartos</span>
                                    <label>{formData.quantoQuartos}</label>
                                    <span className="font-bold text-15">Preço Unitário</span>
                                    {selectedPrice && (
                                        <label>
                                        {numeral(selectedPrice).format('0,000.00')}
                                        </label>
                                    )}
                                    <span className="font-bold text-15">Preço Total</span>
                                    {selectedPrice && (
                                        <label>
                                        {numeral(selectedPrice * formData.quantoQuartos).format('0,000.00')}
                                        </label>
                                    )}
                                </div>

                                <div className='w-[50%] flex flex-col justify-center items-center'>
                                    <img className="w-[170px]" src={banner} />



                                    <div className='flex w-full justify-center items-center mt-[50px]'>
                                        {/* <div className='hr absolute mt-[25px] left-[300px]'></div> */}
                                        <div className="pt-[10px]">
                                            <button className="
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
                                                type='button'
                                                onClick={handlePrev}
                                                >
                                                Cancelar
                                            </button>
                                        </div>

                                        <div className="pt-[10px] ml-[25px]">
                                            <button className="
                                                flex
                                                justify-around
                                                items-center 
                                                h-[33px] 
                                                w-[100px] 
                                                rounded 
                                                bg-[#00BA62] 
                                                text-[white]
                                                text-[10px]
                                                font-bold"
                                                type='submit'
                                            >
                                                Seguir <img className="w-[20px]" src={ceta} />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form_Hospedagem