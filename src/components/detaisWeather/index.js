import "./style.css";
import { FiCloudSnow } from "react-icons/fi";
import app from "../../services/api.js";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Details() {
  const { city } = useParams();
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const keyApi = "ed558a9ee7d74742a1c211750220702";

  useEffect(() => {
    async function getWeather() {
      const response = await app.get(`/search.json?key=${keyApi}&q=${city}`);
      setWeather(response.data);
    }
    getWeather();
    setLoading(false);
  }, [city]);

  console.log(weather)

  return (
    <>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <div className="boxDetails">
          <div className="homeLine">
            <div className="colunaHome">
              <p className="titleDay">dawn</p>
              <FiCloudSnow className="icon" />
              <p className="titleDay">20 °C</p>
            </div>
            <div className="colunaHome">
              <p className="titleDay">morning</p>
              <FiCloudSnow className="icon" />
              <p className="titleDay">23 °C</p>
            </div>
            <div className="colunaHome">
              <p className="titleDay">afternoon</p>
              <FiCloudSnow className="icon" />
              <p className="titleDay">15 °C</p>
            </div>
            <div className="colunaHome">
              <p className="titleDay">night</p>
              <FiCloudSnow className="icon" />
              <p className="titleDay">15 °C</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
