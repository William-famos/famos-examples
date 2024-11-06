interface tamb{
    img:string,
    title:string,
    desc:string,
}

export function Tamb(tamb:tamb){
    return(
        <div className="item">
            <img src={tamb.img}/>
            <div className="content">
                <div className="title">
                    {tamb.title}
                </div>
                <div className="description">
                    {tamb.desc}
                </div>
            </div>
        </div>
    )
}