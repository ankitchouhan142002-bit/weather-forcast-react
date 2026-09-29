import "./weatherApp.css";

import InfoBox from './infoBox.jsx';
import  SearchBox from "./SearchBox.jsx";
import { useState } from "react";


export default function WeatherApp(){
 const [weatherInfo, setWeatherInfo] = useState({

    city: "Pithampur",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMin: 25.05,
    humidity: 47,
    weather: "haze",
  });
  
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

    return(
        <div>
            <h2 className="heading">!! Weather App !!</h2><br />
        <SearchBox updateInfo={updateInfo}/> <br />
            <InfoBox info={weatherInfo}/>
        </div>
    );
}