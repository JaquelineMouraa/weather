import './style.css'
import logo from "../../../src/assets/logo.svg"

export function Details() {
  return (
    <div className="boxDetails">
      <div className="homeLine ">
        <div className="colunaHome">
          <p className="titleDay">dawn</p>
          <img src={logo} className="app-logo" alt="logo" />
          <p className="titleDay">20 °C</p>
        </div>
        <div className="colunaHome">
          <p className="titleDay">morning</p>
          <img src={logo} className="app-logo" alt="logo" />
          <p className="titleDay">23 °C</p>
        </div>
        <div className="colunaHome">
          <p className="titleDay">afternoon</p>
          <img src={logo} className="app-logo" alt="logo" />
          <p className="titleDay">15 °C</p>
        </div>
        <div className="colunaHome">
          <p className="titleDay">night</p>
          <img src={logo} className="app-logo" alt="logo" />
          <p className="titleDay">15 °C</p>
        </div>
      </div>
    </div>
  );
}
