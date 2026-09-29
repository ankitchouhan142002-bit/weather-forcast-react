import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./searchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}){
     let [city, setCity] = useState("");
     let [error, setError] = useState("false");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1977bd3dcf89e8a7f9a9e88d5a634c25";

    let getWeatherInfo = async () => {
        try {
             let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
             let jsonResponse = await response.json();
             let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].descriprion,
        }
        console.log(result);
        return result;
            
        } catch (error) {
           throw error;
        }
    }

   
    let handleChange = (evt) =>{
        setCity(evt.target.value);
    };
    let handleSubmit =  async (evt) =>{
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo =  await getWeatherInfo();
            updateInfo(newInfo);
        } catch (error) {
             setError(true)
        }
    };

    return(
        <div className='searchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange}/><br /><br />
                   <Button variant="contained" type='submit'> Search</Button><br /><br />
                   {/* {error && <p className='errMsg'>No such place exist !</p>}  */}
            </form>
        </div>
    );
}