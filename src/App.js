import logo from './logo.svg';
import imagesrc from "./imageInSrc.png"
import video from './Altwork 1 Minute Video.MP4'
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
      <iframe width="320" height="240" src="https://www.youtube.com/embed/ngc9gnGgUdA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             
              <video width="320" height="240" controls>
        <source src={video } type="video/mp4" />
              </video>

    </div>
  );
}

export default App;
