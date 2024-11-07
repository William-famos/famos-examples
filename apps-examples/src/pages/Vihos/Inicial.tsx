
import './style/index.css'
import {GoArchive} from 'react-icons/go'
import bannerIMG from '../../assets/img baner 01.svg'
import mapa from '../../assets/MapaTraco.svg'
import circle from'../../assets/Transportes.png'
import circle1 from'../../assets/Restaurantes.png'
import hotel from '../../assets/glassBuilding.jpg'
import { VihosHeader } from '../../components/VihosHeader'
import { CardInitial } from '../../components/CardInicial'


export function Inicial(){
    return(
        <>

<div className=' w-[100%] h-[500px] bg-[#00000011] iconBackInicial absolute '></div>
<div className=" z-[999] relative">

 <VihosHeader/>

<section  className='w-full font-Back-World h-[508px] p-3 flex items-center justify-around escodido'>
    <div className='flex items-center haeght justify-center mt-[-80px]'>

        <div className='w-[100%] h-[100%] items-center flex justify-center' >
            <img  src={bannerIMG} className='w-[80%] max-md:w-[70%] Animation_Translate h-[100%] pl-[35px] '/>
        </div>

        <div className='w-full h-full flex flex-col guild mt-[-10%] justify-center'>
            <h1 className='text-[53px] max-md:text-[29px] font-bold '>Bem-vindo</h1>
            <span className='text-[15px] max-md:text-[14px] max-md:text-center'> 
                Aqui é onde poderá analisar e escolher algumas ofertas <br/>
                de agencias de transporte e Hospedagem para <br/>
                você que quer fazer viagens ou turismo
            </span>
            <a className='
            w-[130px] 
            h-[40px] 
            mt-[10px]
            flex
            justify-center
            items-center 
            text-white 
            font-SegoePrint 
            text-[15px] 
            rounded 
            bg-[#F9B13E] 
            hover:bg-orange-400'
            href="#NossosClientes"
            >iniciar</a>
        </div>

       
    </div>
</section>

</div>
  
<section className="escodido" id="NossosClientes">

    <div className='flex flex-col items-center justify-center'>
        <h1 className=' mb-[40px] text-[24px] max-md:text-[18px] font-bold'>Nossos Clientes Poderão</h1>
        
        <div className='flex items-center gap-6 jerry justify-center'>
            <div className='w-[30%]'>
                <img src={mapa}/>
            </div>
            
            <div className='flex mjerry flex-col hover:Animation_zoom'>

                <div className='bordas  hover:bg-black hover:text-white hover:scale-125 cursor-pointer delay-100'>
                    <h1 className='text-[17px] font-bold'>1. Encontrar Hoteis</h1>
                    <span> poderá pagar hospedagem com <br/> uma facilidade total</span>
                </div>
                <div  className='bordas hover:bg-black hover:text-white  hover:scale-125 delay-100 cursor-pointer'>
                    <h1 className='text-[17px] font-bold'>2. Comprar Passagens</h1>
                    <span>poderá comprar passagens e viajar <br/> pelo país e diaspora</span>
                </div>
                <div  className='bordas  hover:bg-black hover:text-white hover:scale-125 delay-100 cursor-pointer'>
                    <h1 className='text-[17px] font-bold'>3. Marcar Restaurantes</h1>
                    <span>poderá fazer reservas e delivery em <br/> restaurantes renomados</span>
                </div>
            </div>
        </div>
    </div>

</section>

<section className="w-full mt-[50px] h-[400px]">
    <div className='flex flex-col items-center h-[600px] '>
        <div className='font-bold text-[25px] max-md:text-[18px] max-md:max-w-[25rem] text-center p'>
            <h1>Terá a oportunidade de se hospedar em <br/> um dos nossos Hoteis parceiros</h1>
        </div>
    </div>
</section>


    <div className="flex justify-center items-center w-full mt-[-200px] ">
        <section className=" pl-[6rem] lemilion grid w-[100%] grid-cols-3 max-md:-ml-[50px] max-md:grid-cols-1 max-md:mt-7 gap-[3rem]">
            {
                [1,2,3,4,5,6].map(()=>(
                    <CardInitial 
                        name={"Atlas de Dante"}
                        img={hotel}
                        desc={" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, adipisc"}
                        bntTxt={'Fazer Check-In'}/>
                ))
            }
        </section>
    </div>


   



<section className='flex  flex-col justify-center items-center w-[100%] mt-[100px] flc'>

    <div className='flex items-center justify-center w-[100%]'>
        
        <div className='f max-w-[400px] max-md:max-w-[200px]'>
            <span className=''>
                <span className='font-bold text-[25px] max-md:text-[17px]'>Transportes</span><br/>
                <span className='text-[14px] max-md:text-[12px]'>
                    Transportes aereos e rodoviarios a distância de um click
                    faça marcação e compre passagens com rotas nacionais e internacionais
                </span>
            </span>
        </div>

            <img src={circle} className='w-[25%] Animation_Translate'/>

    </div>

    <div className='flex items-center justify-center w-[100%]'>
        
        <img src={circle1} className='w-[25%] Animation_Translate mr-[70px]'/>

        <div className='f max-w-[400px] max-md:max-w-[200px]'>
            <span>
                <span className='font-bold text-[25px] max-md:text-[17px]'>Restaurantes</span><br/>
                <span className='text-[14px] max-md:text-[12px]'>
                    A distância de um click faça agora reservas, marcações
                    e pedidos Take-away nos mais renomados Restaurantes desponiveis na nossa plantaforma
                </span>

            </span>
        </div>

    </div>

</section>

<footer className='flex flex-col bg-[#f2f1f1] w-full mt-[90px] items-center'>
    <div className='flex justify-center items-center fl w-[60%]'>
      <div className='flex flex-row max-md:flex-col '>
      <div className='mr-8'>
            <h1 className='font-bold text-[13px]'>Contactos</h1>
            <span>exemplo@email.com</span>
            <span>DD+ numero</span>
        </div>
        <div className='mr-8'>
            <h1 className='font-bold text-[13px]'>Apoio ao Cliente</h1>
            <span>exemplo@email.com</span>
            <span>+244 923458912</span>
        </div>
        <div className='mr-8'>
            <h1 className='font-bold text-[13px]'>
                <button>Empresas</button>
                <span>{<GoArchive/>}</span>
            </h1>
        </div>
        <div>
            <h1 className='font-bold text-[13px]'>
            <button>Administrador</button>
                
            </h1>
        </div>
      </div>
    </div>
    <div>
        <span className='flex text-center max-w-[400px]'> 
            Combinando viagens emocionantes,
            estadias luxuosas e experiências 
            gastronômicas excepcionais, estamos 
            aqui para transformar cada viagem 
            em uma aventura verdadeiramente 
            extraordinária.
        </span>
    </div>
</footer>



        </>
    )
}
