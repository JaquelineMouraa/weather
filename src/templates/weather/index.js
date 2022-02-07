import "./styles.css";
import { Details } from "../../components/detaisWeather";
import { IconWeather } from "../../components/iconWether"

export default function Weather() {
  return (
    <div className="App">
      <h1> London </h1>
      <p> sunny </p>

      <div className="lineTemp">
        <h2 className="degree">20</h2>
        <div className="colunaHome">
          <div>
            <p className="degree-escala">°C</p>
            <p className="degree-var">25</p>
            <p className="degree-var">20</p>
          </div>
        </div>
      </div>

      <IconWeather/>
      <Details />

      <div className="boxForecast">
        <div className="linhaHome">
          <div className="homeColumn">
            <p className="forecastTitle">wind speed</p>
            <p className="forecastTitle">5.1 m/s</p>
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
            <p className="forecastTitle">52%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
