import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const ICON_URL = 'https://api.openweathermap.org/img/wn/';
const API_KEY = 'ad896f38024ea2b0e963299cbb697038';

export default function weather({ latitude, longitude }) {
  const [temp, settemp] = useState(0)
  const [speed, setspeed] = useState(0)
  const [direction, setdirection] = useState(0)
  const [description, setdescription] = useState(0)
  const [icon, seticon] = useState(0)

  useEffect(() => {
    const url = API_URL +
      'lat=' + latitute +
      '&lon=' + longtitude +
      '&units=metric' +
      '&appid=' + API_KEY;
    axios.get(url)
      .then((response) => {
        const result = response.data
        console.log(result)
        if (result.main != undefined) {
          setTemp(result.main.temp);
          setSpeed(result.wind.speed);
          setDirection(result.wind.deg);
          setDescription(result.weather[0].description);
          console.log(ICON_URL + result.weather[0].icon + '@2x.png');
          setIcon(ICON_URL + result.weather[0].icon + '@2x.png');
        }
      }).catch(error => {
        console.log(error)
        alert("Could not retrieve weather information")
      })
  }, [])

  return (
      <>
        <h3>Weather at your location</h3>
        <p>{temp} C&#176;</p>
        <p>{speed} m/s{direction} degrees</p>
        <p>{description}</p>
        <img src={icon} alt=""/>
      </>
  )
}