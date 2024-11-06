import './styles/Global.css'
import { Header } from './Components/Header';
import { Sidebar } from './Components/SideBar';
import {Post} from './Components/Post'
import photo1 from './Assets/Perfil_adalberto.jpg'
import photo2 from './Assets/obedy01.jpg'

const posts=[
  {
    autor:{
      id:1,
      nome:'Adalberto Jamba',
      photo:photo1,
      cargo:'Web Developer'

    },

    conteudo:{
      tema:'Mekie Devs👋...',
      post:'Acabei de colocar mais um projeto no meu portifólio. é um projeto de UI/UX design, para um centro medico. O nome do projeto é DoctorCare🥼',
      p:{
        emoji:'👉',
        par:'adalberto.developer/doctorcare'
      }
    },

    links:{
      l1:'#novoprojeto',
      l2:'#ui',
      l3:'#doctorcare'
    },

    datePost:new Date('2024-09-14 23:59:00')
  },

  {
    autor:{
      id:2,
      nome:'José obedy',
      photo:photo2,
      cargo:'Rapper'

    },

    conteudo:{
      tema:'vocês não estão prontos pra isso (feat Dfamos & Mc Adobe)😎🎤🎶...',
      post:'I think i lost innocense and i now im ready to change👌. im here rolling in Benz🎤, i got no time im fighting for dreams...Lacoste a comer🎶🎵.....heeee!!',
      p:{
        emoji:'👉',
        par:'www.youtube.watch/TrapOn_fea../music'
      }
    },

    links:{
      l1:'#novamusica',
      l2:'#musica',
      l3:'#trapon'
    },
    datePost:new Date('2024-09-13 20:00:00')
  }
]

export function GluedHub() {
  return (
    <>
      <Header/>

      <div className='wrapper'>
        <Sidebar/>
        <main>
         {posts.map(i=>{
          return (<Post
              datePost={i.datePost}
              key={i.autor.id}
              autor={i.autor}
              tema={i.conteudo}
              links={i.links}
             
          />)
          })}
          
        </main>
        
      </div>
    </>
  );
}

