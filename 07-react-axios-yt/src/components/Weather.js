import React, {useState, useEffect} from 'react'
import axios from 'axios'

const url = "https://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=0a3108f2d27768196091cc0b9f5be048"


const Weather = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  console.log(data)

  if(!data) return null;

  return (
    <div>
      <p>{data.main.temp.toFixed(0)}</p>
    </div>
  )
}

export default Weather