import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import weather from './weather';

function App() {
  const [latitude, setLatitude] = useState(0)
  const [longtitude, setLongtitude] = useState(0)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position)
        setLatitude(position.coords.latitude)
        setLongtitude(position.coords.longitude)

      }, (error) => {
        console.log(error)
        alert("jotain meni vikaan")
      })
    } else {
      alert("Selain ei tue paikannusta!")
    }
  }, [])

    return (
      <p>
        Sijaintisi:{latitude},{longtitude}
        <weather latitude = {latitude} longitude={longtitude} />
      </p>


    )
  }


export default App;
