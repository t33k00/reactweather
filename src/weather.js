import axios from 'axios';
import { useEffect,useState } from 'react';


const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const ICON_URL = 'https://api.openweathermap.org/img/wn/';
const API_KEY = 'ad896f38024ea2b0e963299cbb697038';

export default function Weather({latitude,longitude}) {
  const [temp, settemp] = useState(0)
  const [speed, setspeed] = useState(0)
  const [direction, setdirection] = useState(0)
  const [description, setdescription] = useState(0)
  const [icon, setIcon] = useState('')


  useEffect(() => {
    const address = API_URL +
    'lat='+latitude+
    '&lon='+longitude+
    '&units=metric'+
    '&appid='+API_KEY;
    console.log(address)

    axios.get(address)
    
    .then((response)=> {
      console.log(response.data);
      settemp(response.data.main.temp);
      setspeed(response.data.wind.speed);
      setdirection(response.data.wind.deg);
      setdescription(response.data.weather[0].description);
      setIcon(ICON_URL+response.data.weather[0].icon+'@2x.png');
      console.log(ICON_URL+response.data.weather[0].icon+'@2x.png')
    }).catch(error=>{
      alert(error);
    });
    console.log(address)
  }, [])

  return (
      <>
        <h3>Weather at your location</h3>
        <p>{temp} C&#176;</p>
        <p>{speed} m/s {direction} degrees</p>
        <p>{description}</p>
        <img src={icon} alt=""/>
      </>
  )
}