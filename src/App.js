import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
  const ICON_URL = 'https://api.openweathermap.org/img/wn/';
  const API_KEY = '';
  const [latitude, setLatitude] = useState(0)
  const [longtitude, setLongtitude] = useState(0)
  const [isloading, setisloading] = useState(false)
  const [temp, settemp] = useState(0)
  const [speed, setspeed] = useState(0)
  const [direction, setdirection] = useState(0)
  const [description, setdescription] = useState(0)
  const [icon, seticon] = useState(0)

  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        console.log(position)
        setLatitude(position.coords.latitude)
        setLongtitude(position.coords.longitude)
        isloading= longtitude+latitude
        
      },(error)=>{
        console.log(error)
        alert("jotain meni vikaan")
      })
    }else{
      alert("Selain ei tue paikannusta!")
    }
    const address = API_URL +
    'lat='+latitude+
    '&lon='+longtitude+
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
      seticon(ICON_URL+response.data.weather[0].icon+'@2x.png');
      console.log(ICON_URL+response.data.weather[0].icon+'@2x.png')
    }).catch(error=>{
      alert(error);
    });


  }, [])
  if (isloading!=0){
    return <p>ladataan sijaintia...</p>
  } else {
    return(
    <p>Sijaintisi:{latitude},{longtitude}
    <weather latitude={latitude} longitude={longtitude} />
    </p>
    
    
  )}


 
}

export default App;
