import { Outlet } from 'react-router-dom'
import { Header } from "../components/Header";

export function DefaultLayout (){
    return(
        <div className='w-full heightRead my-[2rem] p-10 -bg--gray-800 rounded-[8px] flex-col '>
            <Header/>
            <Outlet/>
        </div>
    )
}