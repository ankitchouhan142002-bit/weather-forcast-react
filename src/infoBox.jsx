import "./searchBox.css";
import "./infoBox.css"
import dustyImg from "./assets/dusty.jpg";
import coldImg from "./assets/cold.jpg";
import hotImg from "./assets/summer.jpg";
import rainImg from "./assets/rain.jpg";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){

    const INIT_URL = dustyImg;

    const HOT_URL = hotImg;
    const COLD_URL = coldImg;
    const RAIN_URL = rainImg;
  

    return(
       <div className="infoBox">
        <div className="cardContainer">
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 60 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
         <Typography variant="body2" sx={{ color: 'text.secondary'  }}>
           <p>Temperature = {info.temp}</p>
           <p>Humidity = {info.humidity}</p>
           <p>Min Temp = {info.tempMin}</p>
           <p>Max Temp = {info.tempMax}</p>
           <p>The weather can be describer as <b> {info.weather}</b> and feels like <b>{info.feelslike}</b>&deg;c</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
       </div>
    )
}