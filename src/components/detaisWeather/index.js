import "./style.css";
import moment from "moment";
import app from "../../services/api.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  BsFillCloudsFill,
  BsFillCloudyFill,
  BsFillCloudSunFill,
  BsFillCloudSnowFill,
  BsFillCloudRainFill,
  BsFillCloudHailFill,
  BsFillCloudHazeFill,
  BsFillCloudHaze2Fill,
  BsFillCloudDrizzleFill,
  BsFillBrightnessHighFill,
} from "react-icons/bs";

import { FiCloud } from "react-icons/fi";

export function Details() {
  const { city } = useParams();
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const keyApi = "ed558a9ee7d74742a1c211750220702";
  const date = moment(new Date()).format("yyyy-MM-DD");

  useEffect(() => {
    async function getWeather() {
      const response = await app.get(
        `/history.json?key=${keyApi}&q=${city}&dt=${date}`
      );
      setWeather(response.data);
    }
    getWeather();
    setLoading(false);
  }, [city]);
  
  return (
    <>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <div className="boxDetails">
          <div className="homeLine">
            <div className="colunaHome">
              <p className="titleDay">dawn</p>

              {weather?.forecast?.forecastday.map((item) => {
                switch (item?.hour[3]?.condition.text) {
                  case "Clear":
                    return <FiCloud className="icon" />;
                  case "Moderate snow":
                    return <BsFillCloudSnowFill className="icon" />;
                  case "Light rain":
                    return <BsFillCloudRainFill className="icon" />;
                  case "Cloudy":
                    return <BsFillCloudyFill className="icon" />;
                  case "Freezing fog":
                    return <BsFillCloudHaze2Fill className="icon" />;
                  case "Patchy rain possible":
                    return <BsFillCloudDrizzleFill className="icon" />;
                  case "Partly cloudy":
                    return <BsFillCloudSunFill className="icon" />;
                  default: 
                    return <FiCloud className="icon" />;
                }
              })}

              {weather?.forecast?.forecastday.map((item) => {
                return <p className="titleDay">{item?.hour[3]?.temp_c} °C</p>;
              })}
            </div>

            <div className="colunaHome">
              <p className="titleDay">morning</p>

              {weather?.forecast?.forecastday.map((item) => {
                switch (item?.hour[9]?.condition.text) {
                  case "Sunny":
                    return <BsFillBrightnessHighFill className="icon" />;
                  case "Light sleet":
                    return <BsFillCloudHailFill className="icon" />;
                  case "Patchy rain possible":
                    return <BsFillCloudDrizzleFill className="icon" />;
                  case "Cloudy":
                    return <BsFillCloudyFill className="icon" />;
                  case "Freezing fog":
                    return <BsFillCloudHaze2Fill className="icon" />;
                  case "Overcast":
                    return <BsFillCloudsFill className="icon" />;
                  case "Partly cloudy":
                    return <BsFillCloudSunFill className="icon" />;
                  default: 
                    return <FiCloud className="icon" />;  
                }
              })}

              {weather?.forecast?.forecastday.map((item) => {
                return <p className="titleDay">{item?.hour[9]?.temp_c} °C</p>;
              })}
            </div>

            <div className="colunaHome">
              <p className="titleDay">afternoon</p>

              {weather?.forecast?.forecastday.map((item) => {
                switch (item?.hour[15]?.condition.text) {
                  case "Sunny":
                    return <BsFillBrightnessHighFill className="icon" />;
                  case "Light sleet":
                    return <BsFillCloudHailFill className="icon" />;
                  case "Patchy rain possible":
                    return <BsFillCloudDrizzleFill className="icon" />;
                  case "Cloudy":
                    return <BsFillCloudyFill className="icon" />;
                  case "Freezing fog":
                    return <BsFillCloudHaze2Fill className="icon" />;
                  case "Overcast":
                    return <BsFillCloudsFill className="icon" />;
                  case "Partly cloudy":
                    return <BsFillCloudSunFill className="icon" />;
                  default: 
                    return <FiCloud className="icon" />;  
                }
              })}

              {weather?.forecast?.forecastday.map((item) => {
                return <p className="titleDay">{item?.hour[15]?.temp_c} °C</p>;
              })}
            </div>

            <div className="colunaHome">
              <p className="titleDay">night</p>

              {weather?.forecast?.forecastday.map((item) => {
                switch (item?.hour[21]?.condition.text) {
                  case "Clear":
                    return <FiCloud className="icon" />;
                  case "Mist":
                    return <BsFillCloudHazeFill className="icon" />;
                  case "Cloudy":
                    return <BsFillCloudyFill className="icon" />;
                  case "Freezing fog":
                    return <BsFillCloudHaze2Fill className="icon" />;
                  case "Moderate snow":
                    return <BsFillCloudSnowFill className="icon" />;
                  case "Patchy rain possible":
                    return <BsFillCloudDrizzleFill className="icon" />;
                  case "Partly cloudy":
                    return <BsFillCloudyFill className="icon" />;
                  default: 
                    return <FiCloud className="icon" />;  
                }
              })}

              {weather?.forecast?.forecastday.map((item) => {
                return <p className="titleDay">{item?.hour[21]?.temp_c} °C</p>;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}