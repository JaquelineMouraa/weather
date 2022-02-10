import app from "../../services/api.js";
import { useEffect, useState } from "react";

import "./styles.css";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { Details } from "../../components/detaisWeather";
import { Link, useParams } from "react-router-dom";
import { FiSun } from "react-icons/fi";

export default function Weather() {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const keyApi = "ed558a9ee7d74742a1c211750220702";
  const { city } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getWeather() {
      const response = await app.get(
        `/current.json?key=${keyApi}&q=${city}`
      );
      setWeather(response.data);
    }
    getWeather();
    setLoading(false);
  }, [city]);

  useEffect(() => {
    async function getForecast() {
      const response = await app.get(
        `/astronomy.json?key=${keyApi}&q=${city}`
      );
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
        <div className="page">
          <Link to="/">
            <AiOutlineArrowLeft className="iconBack" />
          </Link>
          <div className="pageBox">
            <h1>{weather.location.name}</h1>
            <p>{weather.current.condition.text}</p>

            <div className="lineTemp">
              <h2 className="degree">{weather.current.feelslike_c}</h2>
              <div className="colunaHome">
                <div>
                  <p className="degree-escala">°C</p>
                  <div className="variation">
                    <AiOutlineArrowUp className="iconArrow" />
                    <p className="degree-var">25</p>
                  </div>
                  <div className="variation">
                    <AiOutlineArrowDown className="iconArrow" />
                    <p className="degree-var">20</p>
                  </div>
                </div>
              </div>
            </div>

            <FiSun className="iconWeather" />
            <Details />

            <div className="boxForecast">
              <div className="linhaHome">
                <div className="homeColumn">
                  <p className="forecastTitle">wind speed</p>
                  <p className="forecastTitle">{weather.current.wind_kph}k/h</p>
                </div>
                <div className="homeColumn">
                  <p className="forecastTitle">sunrise</p>
                  <p className="forecastTitle">{forecast.astronomy.astro.sunrise}</p>
                </div>
                <div className="homeColumn">
                  <p className="forecastTitle">sunset</p>
                  <p className="forecastTitle">{forecast.astronomy.astro.sunset}</p>
                </div>
                <div>
                  <p className="forecastTitle">humity</p>
                  <p className="forecastTitle">{weather.current.humidity}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
