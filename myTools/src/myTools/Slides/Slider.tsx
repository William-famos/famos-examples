import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.png'
import { Header } from './components/Header'
import { Item } from './components/Item'
import { Tamb } from './components/Tamb'
import './index.css'


export function Slider(){

    return(
        <>
        <Header/>
        
        <div className="carousel w-[100vh] h-[100vh] overflow-hidden mt-[-50px] relative">
            <div className="list">
                <Item
                    autor='WILLIAM FAMOS'
                    img={img1}
                    title=''
                    topic='SLAYER'
                />
            </div>
            <div className="thumbnail">
                <Tamb
                    img={img1}
                    title='Kimetsu no yaiba'
                    desc='deamon slayer'
                />
                <Tamb
                    img={img2}
                    title='Kimetsu no yaiba'
                    desc='deamon slayer'
                />
                <Tamb
                    img={img3}
                    title='Kimetsu no yaiba'
                    desc='deamon slayer'
                />
                <Tamb
                    img={img4}
                    title='Kimetsu no yaiba'
                    desc='deamon slayer'
                />
            </div>

            <div className="arrows">
                <button id="prev">{'<'}</button>
                <button id="next">{'>'}</button>
            </div>
            <div className="time"></div>
        </div>
          
        </>
    )
}