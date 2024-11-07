import photo from '../../assets/perfil.jpg'
import traveler from '../../assets/modelo.png'
import {  BiCart,BiFilterAlt, BiHeart, BiSearch} from "react-icons/bi";
import { AiOutlineRight} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';

export function Ecomerce(){
    return (

        <>
            <header className="w-full flex max-md:flex-col max-md:items-start items-center justify-between p-6 border-b">
                <div className="w-[50%] pl-8 flex gap-16 max-md:gap-7 max-md:-ml-8">
                    <NavLink to={'/'}> <h1 className='font-black text-[22px]'>SHEIN</h1> </NavLink>
                    <nav className="flex items-center justify-center gap-7 text-sm">
                        <a href="" className='text-[#5E60CE] font-black'>Shop</a>
                        <a href="">Woman</a>
                        <a href="">Man</a>
                        <a href="">Children</a>
                    </nav>
                </div>
                <div className="w-[50%] max-md:w-full max-md:-ml-1 flex justify-end pr-8 gap-5 items-center">
                    <div className='bg-gray-100 h-[30px] flex items-center rounded-[10px]'>
                        <BiSearch className='ml-2'/>
                        <input className="placeholder:-text--gray-600 bg-transparent pl-5 h-full placeholder:text-sm outline-none" type="text" placeholder="Search" />
                    </div>
                    <img className='w-10 h-10 object-cover rounded-[9999px]' src={photo}/>
                    <div className='w-9 h-9 bg-gray-100 rounded-[9999px] flex items-center justify-center'><BiCart/></div>
                </div>
            </header>

            <div className='w-full flex'>
                <div className='w-[26%] flex flex-col px-9 gap-7'>
                    <h1 className='flex items-center justify-between'><p className='max-md:text-[14px] font-bold -text--gray-600 text-[18px] '>Filter</p> <BiFilterAlt className='max-md:hidden'/></h1>
                   <div className='w-full flex flex-col px-8 gap-7 max-md:-ml-9'>
                   <div>
                        <div className='flex items-center  justify-between'> 
                            <span className='font-light'>Blouses</span> <AiOutlineRight className='max-md:-ml-28'/> 
                        </div>
                   </div>
                   <div>
                        <div className='flex items-center justify-between'> 
                            <span className='font-light'>Dressess</span> <AiOutlineRight className='max-md:-ml-28'/> 
                        </div>
                   </div>
                   <div>
                        <div className='flex items-center justify-between'> 
                            <span className='font-light'>Demin & Jeans</span> <AiOutlineRight className='max-md:-ml-28'/> 
                        </div>
                   </div>
                   <div>
                        <div className='flex items-center justify-between'> 
                            <span className='font-light'>Knitwear</span> <AiOutlineRight className='max-md:-ml-28'/> 
                        </div>
                   </div>
                   <div>
                        <div className='flex items-center justify-between'> 
                            <span className='font-light'>Pants</span> <AiOutlineRight className='max-md:-ml-28'/> 
                        </div>
                   </div>
                   <div>
                        <div className='flex items-center justify-between'> 
                            <span className='font-light'>Skins</span> <AiOutlineRight className='max-md:-ml-28'/> 
                        </div>
                   </div>
                   <div>
                        <div className='flex items-center justify-between'> 
                            <span className='font-light'>Tops & tees</span> <AiOutlineRight className='max-md:-ml-28'/> 
                        </div>
                   </div>
                   <div>
                        <div className='flex items-center justify-between'> 
                            <span className='font-light'>Jackets & Coats</span> <AiOutlineRight className='max-md:-ml-28'/> 
                        </div>
                   </div>
                   </div>
                </div>
                <div className='w-[70%] max-md:w-full flex flex-col items-center'>
                    <header className='w-full flex p-4 items-center justify-between'>
                        <p>Women s Clothing</p> 
                        <div className=' flex gap-4 items-center justify-center'>
                            <p className='text-[#5E60CE]'>New</p><p>Recommended</p>
                        </div>
                    </header>
                    <div id='then'>
                        <div className='grid grid-cols-3 max-md:grid-cols-1 max-md:w-full justify-center gap-9'>
                            <div>
                                <div className='bg-gray-100 w-[220px] rounded-[9px] h-[230px]'> 
                                    <div className='w-9 h-9 bg-white rounded-[9999px] flex items-center m-3 justify-center absolute'><BiHeart/></div> 
                                    <img className='w-[199px] pt-[42px] pl-3' src={traveler}/>
                                </div>
                                <div className='flex items-center justify-center -mt-3 gap-4'>
                                    <p>Formal Cloth Sotín</p> 
                                    <p className='bg-gray-100 py-1 px-2 rounded-[15px]'>$70.00</p>
                                </div>
                                <span className='text-sm absolute mt-[-25px]'>shein brand</span>
                            </div>
                            <div>
                                <div className='bg-gray-100 w-[220px] rounded-[9px] h-[230px]'> 
                                    <div className='w-9 h-9 bg-white rounded-[9999px] flex items-center m-3 justify-center absolute'><BiHeart/></div> 
                                    <img className='w-[199px] pt-[42px] pl-3' src={traveler}/>
                                </div>
                                <div className='flex items-center justify-center -mt-3 gap-4'>
                                    <p>Formal Cloth Sotín</p> 
                                    <p className='bg-gray-100 py-1 px-2 rounded-[15px]'>$70.00</p>
                                </div>
                                <span className='text-sm absolute mt-[-25px]'>shein brand</span>
                            </div>
                            <div>
                                <div className='bg-gray-100 w-[220px] rounded-[9px] h-[230px]'> 
                                    <div className='w-9 h-9 bg-white rounded-[9999px] flex items-center m-3 justify-center absolute'><BiHeart/></div> 
                                    <img className='w-[199px] pt-[42px] pl-3' src={traveler}/>
                                </div>
                                <div className='flex items-center justify-center -mt-3 gap-4'>
                                    <p>Formal Cloth Sotín</p> 
                                    <p className='bg-gray-100 py-1 px-2 rounded-[15px]'>$70.00</p>
                                </div>
                                <span className='text-sm absolute mt-[-25px]'>shein brand</span>
                            </div>
                            <div>
                                <div className='bg-gray-100 w-[220px] rounded-[9px] h-[230px]'> 
                                    <div className='w-9 h-9 bg-white rounded-[9999px] flex items-center m-3 justify-center absolute'><BiHeart/></div> 
                                    <img className='w-[199px] pt-[42px] pl-3' src={traveler}/>
                                </div>
                                <div className='flex items-center justify-center -mt-3 gap-4'>
                                    <p>Formal Cloth Sotín</p> 
                                    <p className='bg-gray-100 py-1 px-2 rounded-[15px]'>$70.00</p>
                                </div>
                                <span className='text-sm absolute mt-[-25px]'>shein brand</span>
                            </div>
                            <div>
                                <div className='bg-gray-100 w-[220px] rounded-[9px] h-[230px]'> 
                                    <div className='w-9 h-9 bg-white rounded-[9999px] flex items-center m-3 justify-center absolute'><BiHeart/></div> 
                                    <img className='w-[199px] pt-[42px] pl-3' src={traveler}/>
                                </div>
                                <div className='flex items-center justify-center -mt-3 gap-4'>
                                    <p>Formal Cloth Sotín</p> 
                                    <p className='bg-gray-100 py-1 px-2 rounded-[15px]'>$70.00</p>
                                </div>
                                <span className='text-sm absolute mt-[-25px]'>shein brand</span>
                            </div>
                            <div>
                                <div className='bg-gray-100 w-[220px] rounded-[9px] h-[230px]'> 
                                    <div className='w-9 h-9 bg-white rounded-[9999px] flex items-center m-3 justify-center absolute'><BiHeart/></div> 
                                    <img className='w-[199px] pt-[42px] pl-3' src={traveler}/>
                                </div>
                                <div className='flex items-center justify-center -mt-3 gap-4'>
                                    <p>Formal Cloth Sotín</p> 
                                    <p className='bg-gray-100 py-1 px-2 rounded-[15px]'>$70.00</p>
                                </div>
                                <span className='text-sm absolute mt-[-25px]'>shein brand</span>
                            </div>

                            <div>
                                <div className='bg-gray-100 w-[220px] rounded-[9px] h-[230px]'> 
                                    <div className='w-9 h-9 bg-white rounded-[9999px] flex items-center m-3 justify-center absolute'><BiHeart/></div> 
                                    <img className='w-[199px] pt-[42px] pl-3' src={traveler}/>
                                </div>
                                <div className='flex items-center justify-center -mt-3 gap-4'>
                                    <p>Formal Cloth Sotín</p> 
                                    <p className='bg-gray-100 py-1 px-2 rounded-[15px]'>$70.00</p>
                                </div>
                                <span className='text-sm absolute mt-[-25px]'>shein brand</span>
                            </div>
                            <div>
                                <div className='bg-gray-100 w-[220px] rounded-[9px] h-[230px]'> 
                                    <div className='w-9 h-9 bg-white rounded-[9999px] flex items-center m-3 justify-center absolute'><BiHeart/></div> 
                                    <img className='w-[199px] pt-[42px] pl-3' src={traveler}/>
                                </div>
                                <div className='flex items-center justify-center -mt-3 gap-4'>
                                    <p>Formal Cloth Sotín</p> 
                                    <p className='bg-gray-100 py-1 px-2 rounded-[15px]'>$70.00</p>
                                </div>
                                <span className='text-sm absolute mt-[-25px]'>shein brand</span>
                            </div>
                            <div>
                                <div className='bg-gray-100 w-[220px] rounded-[9px] h-[230px]'> 
                                    <div className='w-9 h-9 bg-white rounded-[9999px] flex items-center m-3 justify-center absolute'><BiHeart/></div> 
                                    <img className='w-[199px] pt-[42px] pl-3' src={traveler}/>
                                </div>
                                <div className='flex items-center justify-center -mt-3 gap-4'>
                                    <p>Formal Cloth Sotín</p> 
                                    <p className='bg-gray-100 py-1 px-2 rounded-[15px]'>$70.00</p>
                                </div>
                                <span className='text-sm absolute mt-[-25px]'>shein brand</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}