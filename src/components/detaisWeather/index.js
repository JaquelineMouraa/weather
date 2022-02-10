import "./style.css";
import logo from "../../../src/assets/logo.svg";
import { FiCloudSnow } from "react-icons/fi";

export function Details() {
  return (
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
  );
}
