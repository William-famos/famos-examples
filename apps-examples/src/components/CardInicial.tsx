interface all{
    name:string,
    desc:string,
    bntTxt:string,
    img:string
}
export function CardInitial({name,desc,bntTxt,img}:all) {

    return(
        <>
        <div className='flex cursor-pointer hover:delay-100 hover:scale-105 items-center border shadow-xl justify-center w-[280px] h-[350px] rounded-5'>
          
          <div  className='w-[100%]'>
              <div>
                  <img src={img} className='w-[100%] h-[220px] rounded publi'/>
              </div>
              <div className='padding'>
                  <h2 className='font-bold text-[13px]'>{name}</h2>
                  <p>[{desc}]</p>
                  <a href={'/'} className='w-[120px] mt-[10px] mb-10 text-white text-[12px] h-[35px] rounded-[5px] flex justify-center items-center bg-[#47cc30] hover:bg-green-500'>{bntTxt}</a>
              </div>
          </div>

      </div>
        </>
    )
}