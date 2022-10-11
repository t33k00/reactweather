import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Weather from './Weather';

function App() {
  const [latitude, setLatitude] = useState(0)
  const [longtitude, setLongtitude] = useState(0)
  const [isloading, setisloading] = useState(false)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position)
        setLatitude(position.coords.latitude)
        setLongtitude(position.coords.longitude)
        isloading = longtitude+latitude

      }, (error) => {
        console.log(error)
        alert("jotain meni vikaan")
      })
    } else {
      alert("Selain ei tue paikannusta!")
    }
  }, [])
  if (isloading!=0){
    return <p>ladataan sijaintia...</p>
  } else {
    return (
      <p>
        Sijaintisi:{latitude},{longtitude}
        <Weather latitude = {latitude} longitude={longtitude} />
      </p>


    )
  }
}

export default App;