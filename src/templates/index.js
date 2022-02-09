import app from "../../services/api.js";
import { useEffect, useState } from "react";

import "./styles.css";
import { Details } from "../../components/detaisWeather";
import { IconWeather } from "../../components/iconWether";

export default function Weather() {
  // const [ location ] = useState("Fairbanks");
  // const [ weather, setWeather ] = useState([]);
  // const keyApi = "ed558a9ee7d74742a1c211750220702"

  // setar um load e ele só pode desligar quando o response chegar

  // useEffect(() => {
  //   async function getWeather() {
  //     const response = await app.get(`/current.json?key=${keyApi}&q=${location}`)
  //     setWeather(response.data)
  //   }
  //   getWeather()
  // },[location])

  // console.log(weather)
  // console.log(weather.current.cloud)
  // console.log(weather.location.name)

  return (
    <div className="page">
      {/* <h1> {weather.location.name} </h1>
      <p> {weather.current.condition.text} </p> */}

      {/* <div className="lineTemp">
        <h2 className="degree"> {weather.current.temp_c} </h2>
        <div className="colunaHome">
          <div>
            <p className="degree-escala">°C</p>
            <p className="degree-var">25</p>
            <p className="degree-var">20</p>
          </div>
        </div>
      </div> */}

      {/* <IconWeather/>
      <Details /> */}
{/* 
      <div className="boxForecast">
        <div className="linhaHome">
          <div className="homeColumn">
            <p className="forecastTitle">wind speed</p>
            <p className="forecastTitle"> {weather.current.wind_kph} k/h</p>
          </div>
          <div className="homeColumn">
            <p className="forecastTitle">sunrise</p>
            <p className="forecastTitle">5:14 AM</p>
          </div>
          <div className="homeColumn">
            <p className="forecastTitle">sunset</p>
            <p className="forecastTitle">7:25 PM</p>
          </div>
          <div className="colunaHome">
            <p className="forecastTitle">humity</p>
            <p className="forecastTitle"> {weather.current.humidity} %</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
