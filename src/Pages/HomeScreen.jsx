import logo from '../Assets/osito.JPG';
import img1 from '../Assets/img1.jpg';
import img2 from '../Assets/img2.jpg';
// import img3 from '../Assets/img3.jpg';
// import img4 from '../Assets/img4.jpg';
// import img5 from '../Assets/img5.jpg';


import 'bootswatch/dist/sketchy/bootstrap.min.css';
import Card from '../Components/Card';

function HomeScreen (props){
    return (
        <div className="HomeScreen">
            <Card
            logo={logo}
            title='ola uWu'
            headerType="App-header-dark"
            
            />
            <Card
            logo={img1}
            title='Este..'
            headerType="App-header-light"
            />
            <Card
            logo='https://www.endondecorrer.com/wp-content/uploads/2019/12/FELIZ-NAVIDAD-696x696.jpg'
            title='Feliz Navidad uWu'
            headerType="App-header-dark"
            />
            
        
        </div>
    );
}

export default  HomeScreen;