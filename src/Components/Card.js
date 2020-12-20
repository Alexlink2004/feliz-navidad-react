
import '../Components/Styles/Card.css';



function Card(props) {
  return (
    <div className="App">
      <header className={props.headerType}>
        <img src={props.logo} width={props.width} height={props.height} className="App-logo" alt="logo" />
        
        <h1>
          {props.title}
        </h1>
        <h2>
          {props.subtitle}
        </h2>
        <div>
          {props.child}
        </div>
        
      </header>
    </div>
  );
}

export default Card;
