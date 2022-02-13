import app from "../../services/api.js";
import { useEffect, useState } from "react";

import {
  AiOutlineArrowLeft,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";

import "./styles.css";
import clsx from "clsx";
import { Link, useParams } from "react-router-dom";
import { Details } from "../../components/detaisWeather";
import { BsFillCloudSunFill, BsFillCloudSnowFill } from "react-icons/bs";
import { FiSun, FiCloudSnow, FiCloud, FiCloudDrizzle } from "react-icons/fi";

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
          ["pageSilver"]:
            forecast?.current?.condition?.text ===
            "Partly cloudy",
          ["pageCyan"]:
            forecast?.current?.condition?.text ===
            "Sunny",
          })}
        >
          <Link to="/">
            <AiOutlineArrowLeft className="iconBack" />
          </Link>
          <div className="pageBox">
            <h1>{forecast?.location?.name}</h1>
            {forecast?.forecast?.forecastday.map((item) => {
              return (
                <p className="forecastTitle">{item?.day?.condition?.text}</p>
              );
            })}

            <div className="lineTemp">
              <p className="degree">{forecast?.current?.temp_c}</p>
              <div className="colunaHome">
                <p className="degree-escala">°C</p>
                <div className="variation">
                  <AiOutlineArrowUp className="iconArrow" />

                  {forecast?.forecast?.forecastday.map((item) => {
                    return (
                      <p className="forecastTitle">{item?.day?.maxtemp_c}°</p>
                    );
                  })}
                </div>

                <div className="variation">
                  <AiOutlineArrowDown className="iconArrow" />

                  {forecast?.forecast?.forecastday.map((item) => {
                    return (
                      <p className="forecastTitle">{item?.day?.mintemp_c}°</p>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              {forecast?.forecast?.forecastday.map((item) => {
                switch (item?.day?.condition.text) {
                  case "Sunny":
                    return <FiSun className="iconWeather" />;
                  case "Freezing fog":
                    return <FiCloudSnow className="iconWeather" />;
                  case "Light snow":
                    return <BsFillCloudSnowFill className="iconWeather" />;
                  case "Mist":
                    return <FiCloud className="iconWeather" />;
                  case "Patchy rain possible":
                    return <FiCloudDrizzle className="iconWeather" />;
                  case "Moderate rain":
                    return <FiCloudDrizzle className="iconWeather" />;
                  case "Partly cloudy":
                    return <BsFillCloudSunFill className="iconWeather" />;
                }
              })}
            </div>

            <Details />

            <div className="boxForecast">
              <div className="linhaHome">
                <div className="homeColumn">
                  <p className="forecastTitle">wind speed</p>
                  <p className="forecastTitle">
                    {forecast?.current?.wind_mph} m/s
                  </p>
                </div>
                <div className="homeColumn">
                  <p className="forecastTitle">sunrise</p>

                  {forecast?.forecast?.forecastday.map((item) => {
                    return (
                      <p className="forecastTitle">{item?.astro?.sunrise}</p>
                    );
                  })}
                </div>
                <div className="homeColumn">
                  <p className="forecastTitle">sunset</p>

                  {forecast?.forecast?.forecastday.map((item) => {
                    return (
                      <p className="forecastTitle">{item?.astro?.sunset}</p>
                    );
                  })}
                </div>
                <div>
                  <p className="forecastTitle">humity</p>
                  <p className="forecastTitle">
                    {forecast?.current?.humidity}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
