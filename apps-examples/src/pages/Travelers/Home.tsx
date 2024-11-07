import banner from '../../assets/Banner img.jpg'
import travelImg from '../../assets/Travel planet.jpg'
import media01 from '../../assets/icons8_facebook_26px.png' 
import media02 from '../../assets/icons8_instagram_30px.png' 
import media03 from '../../assets/icons8_whatsapp_64px.png' 
import airport from '../../assets/people waitinng for airplane.jpg'
import airplane from '../../assets/icons8_airplane_take_off_30px.png'
import { BiCheck, BiHome } from 'react-icons/bi'
import advance from '../../assets/icons8_advance_32px.png'
import icon01 from '../../assets/traveler.png'
import icon02 from '../../assets/airplane.png'
import icon03 from '../../assets/icons8_railcar_32px.png'
import icon04 from '../../assets/icons8_shuttle_32px.png'
import photoCircle from '../../assets/pikaso_text-to-image_Candid-image-photography-natural-textures-highly-r (3).png'
import photoCircle01 from '../../assets/pikaso_text-to-image_Candid-image-photography-natural-textures-highly-r (1).png'
import '../../styles/global.css'
import { Header } from '../../components/Header'

export function Home (){
    return(

        <>
        <Header/>
            <div id='banner'>
                <div className='flex mirco h-[240px] w-full items-center justify-center'>
                    <img className='w-full h-full relative object-cover' src={banner} alt="banner img" />
                    <div className='absolute flex gap-4'>
                        <input type="text" className='w-[400px] pl-6 placeholder:font-light rounded-[5px]' placeholder="informe sua província de destino" />
                        <button className='bg-[#5E60CE] text-white p-2 px-8 rounded-[5px]'>pesquisar</button>
                    </div>
                     
                </div>
            </div>

            <section id='section01' className='flex flex-col items-center justify-center mt-14'>
                <div className='flex items-center justify-center'>
                    <img className='w-12 object-cover' src={airplane} alt="airplane" />
                    <h1 className='text-[30px] font'>Deseja Viajar?</h1>
                </div>
                <div className='adjusted'>
                    <div className='w-full'>
                        <img className='w-[900px] h-[300px] object-cover' src={travelImg} alt="travel img" />
                    </div>
                    <div className='dad'>
                        <span>
                            <p>
                                1
                            </p>
                            <div>
                                <h1>Não tem um lugar para ficar?</h1>
                                <h3>na província destino</h3>
                            </div>
                        </span>
                        <span>
                            <p>
                                2
                            </p>
                            <div>
                                <h1>Procura por alojamento?</h1>
                                <h3>na província destino</h3>
                            </div>
                        </span>
                        <span>
                            <p>
                                <BiHome/>
                            </p>
                            <div>
                                <h1>Se sim, Você esta no sítio certo!</h1>
                            </div>
                        </span>
                    </div>
                </div>
            </section>
            <section id='section02' className='w-full bg-[#DCDCFF] mt-20 shadows rounded-[42px] py-[5rem] px-[6rem] flex justify-center'>
                <div className='woody w-[100%] flex items-center justify-center'>
                    <span>
                        <h3 className='fontts'>Pensando em Você</h3>
                        <p className='max-w-[350px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam eligendi a quasi, excepturi dicta, at nihil optio vel facere voluptates minus? Sit laudantium animi quia, consequatur voluptates perferendis beatae tempora.</p>
                        <p className='max-w-[350px]'>Sit Quibusdam eligendi a quasi, excepturi dicta, at nihil optio vel facere voluptates minus? Sit laudantium animi quia, consequatur voluptates perferendis beatae tempora.</p>
                    </span>
                </div>
                <ins className='flex w-[100%] pr-[9rem] h-full justify-center '>
                    <img className=' monet mt-[140px] w-[130px] h-[130px]' src={photoCircle01}/>
                    <img className=' w-[270px] h-[270px] object-cover' src={photoCircle}/>
                    <img className='max-md:hidden w-[50px] h-[50px]' src={icon01}/>
                    <img className='max-md:hidden ml-[-9rem] mt-[22rem] w-[50px] h-[50px]' src={icon02}/>
                    <img className='max-md:hidden ml-[-26rem] mt-[4rem] w-[40px] h-[40px]' src={icon03}/>
                    <img className='max-md:hidden w-[40px] h-[40px]' src={icon04}/>   
                </ins>
            </section>
            <section id='section03' className='mt-[5rem] w-full h-[930px] flex items-center justify-center'>
                <img src={airport} className='w-full h-full relative object-cover' alt="img-back" />
                <div className='flex flex-col justify-center absolute items-center'>
                    <h1 className='withUs mb-[17rem]'>Conosco você poderá:</h1>
                    <div className='flex bg-white mosts border'>
                        <div>
                            <h1>Encontrar</h1>
                            <span>alojamento</span>
                        </div>
                        <div>
                            <h1>Fazer</h1>
                            <span>check-in</span>
                        </div>
                        <div>
                            <h1>Agendar</h1>
                            <span>check-out</span>
                        </div>
                        <span className='ml-16 speatch'>
                            <span className='w-12 h-12 bg-[#5E60CE] rounded-[9999px] flex items-center mr-6 justify-center'><BiCheck color='white' size={30}/></span>
                        </span>
                    </div>
                </div>
            </section>
            <section id='section04'className='flex mt-[5rem] flex-col items-center justify-center'>
                <img src={icon01} className='w-28' alt="icon traveler" />
                <p className='max-w-[400px] text-center'>Então não espere nem mais um minuto torne-se um <span className='text-[#5e60ce]'>Traveler</span> e agende já seu alojamento conosco</p>
                <button className='bg-[#5e60ce] text-[white] font-bold flex items-center justify-center gap-12 rounded-[5px] px-16'>iniciar <img src={advance} className='w-[39px]' alt="advance" /> </button>
            </section>

            <footer className='mt-24 flex justify-center gap-[69px] items-center w-full p-9 bg-gray-100'>
                <div>
                    <p>Contactos</p>
                    <span className='mt-[-19px] text-[14px]'>example@email.com</span>
                    <span className='text-[14px]'>+244 956234235</span>
                </div>
                <div>
                    <p>Ajuda</p>
                    <span className='mt-[-19px] text-[14px]'>apoio ao utilizador</span>
                    <span className='text-[14px]' >denuncia</span>
                </div>
                <div className='only'>
                    <p>Redes Sociais</p>
                    <span className='mt-[-19px]'>
                        <img className='w-[33px] h-[33px]' src={media01} alt="facebook" />
                        <img className='w-[33px] h-[33px]' src={media03} alt="Instagram" />
                        <img className='w-[33px] h-[33px]' src={media02} alt="Whatsapp" />
                    </span>
                </div>
            </footer>
        </>
    )
}