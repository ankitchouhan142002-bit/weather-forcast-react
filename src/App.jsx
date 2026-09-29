import backgroundImg from "./assets/background.jpg";
import "./App.css";
import { ClassNames } from "@emotion/react";
import WeatherApp from "./weatherApp.jsx";

function App() {
  return (
    <div className="main-page"
    style={{backgroundimage: `url(${backgroundImg})`}}>
   
     <WeatherApp/>
     
     
    </div>
  )
}

export default App
