import app from "../../services/api.js";
import { useEffect, useState } from "react";

import "./styles.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Details } from "../../components/detaisWeather";
import { Link } from "react-router-dom";
import { FiSun } from "react-icons/fi";

export default function Weather() {
  return (
    <div className="page">
      <Link to="/">
        <AiOutlineArrowLeft className="iconBack" />
      </Link>
      <div className="pageBox">
        <h1> Recife </h1>
        <p> Sunny </p>

        <div className="lineTemp">
          <h2 className="degree"> 20 </h2>
          <div className="colunaHome">
            <div>
              <p className="degree-escala">°C</p>
              <p className="degree-var">25</p>
              <p className="degree-var">20</p>
            </div>
          </div>
        </div>

        <FiSun className="iconWeather" />
        <Details />

        <div className="boxForecast">
          <div className="linhaHome">
            <div className="homeColumn">
              <p className="forecastTitle">wind speed</p>
              <p className="forecastTitle"> 3.3 k/h</p>
            </div>
            <div className="homeColumn">
              <p className="forecastTitle">sunrise</p>
              <p className="forecastTitle">5:14 AM</p>
            </div>
            <div className="homeColumn">
              <p className="forecastTitle">sunset</p>
              <p className="forecastTitle">7:25 PM</p>
            </div>
            <div>
              <p className="forecastTitle">humity</p>
              <p className="forecastTitle"> 4.1 %</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
