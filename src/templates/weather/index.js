import app from "../../services/api.js";
import { useEffect, useState } from "react";

import "./styles.css";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import clsx from "clsx";
import { FiSun, FiCloudSnow, FiCloud, FiCloudDrizzle } from "react-icons/fi";
import { BsFillCloudSunFill, BsFillCloudSnowFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { Details } from "../../components/detaisWeather";

export default function Weather() {
  const { city } = useParams();
  const [loading, setLoading] = useState(true);
  const [forecast, setForecast] = useState({});
  const keyApi = "ed558a9ee7d74742a1c211750220702";

  useEffect(() => {
    async function getForecast() {
      const response = await app.get(`/forecast.json?key=${keyApi}&q=${city}`);
      setForecast(response.data);
    }
    getForecast();
    setLoading(false);
  }, [city]);

  return (
    <>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <div
          className={clsx("pageGray", {
            ["pageGray"]:
              forecast?.forecast?.forecastday[0]?.day.condition.text ===
              "Freezing fog",
            ["pageSilver"]:
              forecast?.forecast?.forecastday[0]?.day.condition.text ===
              "Partly cloudy", 
            ["pageCyan"]:
              forecast?.forecast?.forecastday[0]?.day.condition.text ===
              "Sunny",
          })}
        >
          <Link to="/">
            <AiOutlineArrowLeft className="iconBack" />
          </Link>
          <div className="pageBox">
            <h1>{forecast?.location?.name}</h1>
            <p className="forecastTitle">
              {forecast?.forecast?.forecastday[0]?.day.condition.text}
            </p>

            <div className="lineTemp">
              <p className="degree">{forecast?.current?.temp_c}</p>
              <div className="colunaHome">
                <p className="degree-escala">°C</p>
                <div className="variation">
                  <AiOutlineArrowUp className="iconArrow" />
                  <p className="forecastTitle">
                    {forecast?.forecast?.forecastday[0]?.day.maxtemp_c}°
                  </p>
                </div>
                <div className="variation">
                  <AiOutlineArrowDown className="iconArrow" />
                  <p className="forecastTitle">
                    {forecast?.forecast?.forecastday[0]?.day.mintemp_c}°
                  </p>
                </div>
              </div>
            </div>

            <div>
              {forecast?.forecast?.forecastday[0]?.day.condition.text ===
                "Sunny" && <FiSun className="iconWeather" />}
              {forecast?.forecast?.forecastday[0]?.day.condition.text ===
                "Freezing fog" && <FiCloudSnow className="iconWeather" />}
              {forecast?.forecast?.forecastday[0]?.day.condition.text ===
                "Light snow" && <BsFillCloudSnowFill className="iconWeather" />}    
              {forecast?.forecast?.forecastday[0]?.day.condition.text ===
                "Mist" && <FiCloud className="iconWeather" />}
              {forecast?.forecast?.forecastday[0]?.day.condition.text ===
                "Patchy rain possible" && <FiCloudDrizzle className="iconWeather" />}
              {forecast?.forecast?.forecastday[0]?.day.condition.text ===
                "Moderate rain" && <FiCloudDrizzle className="iconWeather" />}      
              {forecast?.forecast?.forecastday[0]?.day.condition.text ===
                "Partly cloudy" && <BsFillCloudSunFill className="iconWeather" />}
            </div>

            <Details />

            <div className="boxForecast">
              <div className="linhaHome">
                <div className="homeColumn">
                  <p className="forecastTitle">wind speed</p>
                  <p className="forecastTitle">{forecast?.current?.wind_mph} m/s</p>
                </div>
                <div className="homeColumn">
                  <p className="forecastTitle">sunrise</p>
                  <p className="forecastTitle">
                    {forecast?.forecast?.forecastday[0]?.astro.sunrise}
                  </p>
                </div>
                <div className="homeColumn">
                  <p className="forecastTitle">sunset</p>
                  <p className="forecastTitle">
                    {forecast?.forecast?.forecastday[0]?.astro.sunset}
                  </p>
                </div>
                <div>
                  <p className="forecastTitle">humity</p>
                  <p className="forecastTitle">{forecast?.current?.humidity}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
