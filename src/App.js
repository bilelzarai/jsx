import logo from './logo.svg';
import imagesrc from "./imageInSrc.png"
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">

      <div style={{border:'solid 1px black', maxWidth:'100vw'}}>

        <h1 className= "title">Your name here</h1>

        <br/>

        <img src={imagesrc} alt="image2" />

            <br/> 

        <img src="/imageInPublic.png" alt="image1" />

              </div>

              <video width="320" height="240" controls>

        <source src='https://www.youtube.com/watch?v=aibtHnbeuio' type="video/mp4" />

              </video>
    </div>
  );
}

export default App;
