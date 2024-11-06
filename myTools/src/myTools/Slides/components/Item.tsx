interface item{
    img:string,
    autor:string,
    title:string,
    topic:string,
}

export function Item(item:item){
    return(
        <div className="item absolute top-0 left-0 right-0 bottom-0">
            <img className="w-full h-full object-cover" src={item.img}/>
            <div className="content">
                <div className="author">{item.autor}</div>
                <div className="title">{item.title}</div>
                <div className="topic">{item.topic}</div>
                <div className="des">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                </div>
                <div className="buttons">
                    <button className="bg-[#f1683a] text-white">BUTTON</button>
                    <button>SUBUTTON</button>
                </div>
            </div>
        </div>
    )
}