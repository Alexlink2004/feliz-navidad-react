import logo from '../Assets/osito.JPG';
import img1 from '../Assets/img1.jpg';
import img2 from '../Assets/img2.jpg';
import img3 from '../Assets/img3.jpeg';
import img4 from '../Assets/img4.JPG';
 import img5 from '../Assets/img5.jpg';
//  import img6 from '../Assets/img6.jpg';
  import img7 from '../Assets/img7.jpg';
//  import img8 from '../Assets/img8.jpg';
//  import img9 from '../Assets/img9.jpg';
//  import img10 from '../Assets/img10.jpg';
//  import img11 from '../Assets/img11.jpg';
//  import img12 from '../Assets/img12.jpg';
//  import img13 from '../Assets/img13.jpg';


import 'bootswatch/dist/sketchy/bootstrap.min.css';
import Card from '../Components/Card';

function HomeScreen (){
    return (
        <div className="HomeScreen">
            <Card
            logo={logo}
            title='ola uWu'
            subtitle='Buenas noshes (Puedes bajar la pagina )'
            headerType="App-header-dark"
            
            />
            <Card
            logo={img1}
            title='Este..'
            headerType="App-header-light"
            />
            <Card
            logo={img5}
            title='Vuelve aqui en navidad :3, TQM'
            headerType="App-header-red"
            child={<iframe title='Titulo' width="300" height="154" src="https://w2.countingdownto.com/3380117" frameborder="0"></iframe>}
            />
            

{/* 
            <Card
            logo='https://www.endondecorrer.com/wp-content/uploads/2019/12/FELIZ-NAVIDAD-696x696.jpg'
            title='Feliz Navidad uWu'
            subtitle='Que te la pases super bien :3'
            headerType="App-header-dark"
            />
            <Card
            logo={img2}
            title='Te extraño mil'
            subtitle='Neta espero pronto que nos juntemos bien :('
            headerType="App-header-cyan"
            />
            <Card
            logo={img3}
            title='Si lees esto TQM'
            subtitle='Se me ocurrio hacer una pagina con esta carta en una pagina web  pq esta cool osi 🤖'
            headerType="App-header-light"
            />
            <Card
            logo={img4}
            title='ME DEBES MAS FOTOS '
            subtitle='Espero poder agregar muchas mas fotos a esta pagina y la puedas ver siempre, esta página esta abierta a toda la internet uWu, NO ES INCREIBLE?'
            headerType="App-header-dark"
            /> 
            <Card
            logo={img5}
            title='Neta gracias por todo '
            subtitle='Gracias por apoyarme en todo lo que hago :3, gracias por escucharme, gracias por ser tan buena amiga :3'
            headerType="App-header-light"
            /> 
            
            <Card
            logo={img7}
            title='Eri gei? '
            subtitle='eri gei?'
            headerType="App-header-red"
            /> 
             */}
           
            
        
        </div>
    );
}

export default  HomeScreen;