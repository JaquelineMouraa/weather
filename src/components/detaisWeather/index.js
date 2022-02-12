import "./style.css";
import app from "../../services/api.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  BsFillCloudsFill,
  BsFillCloudyFill,
  BsFillCloudSnowFill,
  BsFillCloudRainFill,
  BsFillCloudHailFill,
  BsFillCloudHazeFill,
  BsFillCloudHaze2Fill,
  BsFillCloudDrizzleFill,
  BsFillBrightnessHighFill,
  BsFillCloudSunFill,
} from "react-icons/bs";

import { FiCloud } from "react-icons/fi";

export function Details() {
  const { city } = useParams();
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const keyApi = "ed558a9ee7d74742a1c211750220702";

  useEffect(() => {
    async function getWeather() {
      const response = await app.get(
        `/history.json?key=${keyApi}&q=${city}&dt=${"2022-02-12"}`
      );
      setWeather(response.data);
    }
    getWeather();
    setLoading(false);
  }, [city]);

  console.log(weather);

  return (
    <>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <div className="boxDetails">
          {/* dawn 3:00, morning 9:00, afternoon 15:00, night 21:00  */}
          <div className="homeLine">
            <div className="colunaHome">
              <p className="titleDay">dawn</p>
              {weather?.forecast?.forecastday[0]?.hour[3]?.condition.text ===
                "Clear" && <FiCloud className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[3]?.condition.text ===
                "Moderate snow" && <BsFillCloudSnowFill className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[3]?.condition.text ===
                "Light rain" && <BsFillCloudRainFill className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[3]?.condition.text ===
                "Cloudy" && <BsFillCloudyFill className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[3]?.condition.text ===
                "Freezing fog" && <BsFillCloudHaze2Fill className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[3]?.condition.text ===
                "Partly cloudy" && <BsFillCloudSunFill className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[3]?.condition.text ===
                "Patchy rain possible" && (
                <BsFillCloudDrizzleFill className="icon" />
              )}

              <p className="titleDay">
                {weather?.forecast?.forecastday[0]?.hour[3]?.temp_c} °C
              </p>
            </div>
            <div className="colunaHome">
              <p className="titleDay">morning</p>
              {weather?.forecast?.forecastday[0]?.hour[9]?.condition.text ===
                "Sunny" && <BsFillBrightnessHighFill className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[9]?.condition.text ===
                "Light sleet" && <BsFillCloudHailFill className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[9]?.condition.text ===
                "Patchy rain possible" && (
                <BsFillCloudDrizzleFill className="icon" />
              )}
              {weather?.forecast?.forecastday[0]?.hour[9]?.condition.text ===
                "Cloudy" && <BsFillCloudyFill className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[9]?.condition.text ===
                "Freezing fog" && <BsFillCloudHaze2Fill className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[9]?.condition.text ===
                "Partly cloudy" && <BsFillCloudSunFill className="icon" />}

              <p className="titleDay">
                {weather?.forecast?.forecastday[0]?.hour[9]?.temp_c} °C
              </p>
            </div>
            <div className="colunaHome">
              <p className="titleDay">afternoon</p>
              {weather?.forecast?.forecastday[0]?.hour[15]?.condition.text ===
                "Sunny" && <BsFillBrightnessHighFill className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[15]?.condition.text ===
                "Light sleet" && <BsFillCloudHailFill className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[15]?.condition.text ===
                "Patchy rain possible" && <BsFillCloudDrizzleFill className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[15]?.condition.text ===
                "Cloudy" && <BsFillCloudyFill className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[15]?.condition.text ===
                "Freezing fog" && <BsFillCloudHaze2Fill className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[15]?.condition.text ===
                "Overcast" && <BsFillCloudsFill className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[15]?.condition.text ===
                "Partly cloudy" && <BsFillCloudSunFill className="icon" />}

              <p className="titleDay">
                {weather?.forecast?.forecastday[0]?.hour[15]?.temp_c} °C
              </p>
            </div>
            <div className="colunaHome">
              <p className="titleDay">night</p>
              {weather?.forecast?.forecastday[0]?.hour[21]?.condition.text ===
                "Clear" && <FiCloud className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[21]?.condition.text ===
                "Mist" && <BsFillCloudHazeFill className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[21]?.condition.text ===
                "Cloudy" && <BsFillCloudyFill className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[21]?.condition.text ===
                "Freezing fog" && <BsFillCloudHaze2Fill className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[21]?.condition.text ===
                "Moderate snow" && <BsFillCloudSnowFill className="icon" />}
              {weather?.forecast?.forecastday[0]?.hour[21]?.condition.text ===
                "Patchy rain possible" && (
                <BsFillCloudDrizzleFill className="icon" />
              )}
              {weather?.forecast?.forecastday[0]?.hour[21]?.condition.text ===
                "Partly cloudy" && <BsFillCloudyFill className="icon" />}

              <p className="titleDay">
                {weather?.forecast?.forecastday[0]?.hour[21]?.temp_c} °C
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
