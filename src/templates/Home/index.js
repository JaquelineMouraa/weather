import "./style.css";
import { useContext } from "react";
import { BiWorld } from "react-icons/bi";
import { Link} from "react-router-dom";

export default function Home() {

  return (
    <div className="homePage">
      <div>
        <p className="title"> WEATHER </p>
        <p className="subTitle"> select the city </p>

        <BiWorld className="globe" />
      </div>

      <div className="boxCities">
        <div className="lineCities">
        <Link to="/weather/Dallol" className="link">Dallol</Link>
        <Link to="/weather/Fairbanks" className="link">Fairbanks</Link>
        <Link to="/weather/London" className="link">London</Link>
        </div>
        <div className="lineCities">
        <Link to="/weather/Recife" className="link">Recife</Link>
        <Link to="/weather/Vancouver" className="link">Vancouver</Link>
        <Link to="/weather/Yakutsk" className="link">Yakutsk</Link>
        </div>
      </div>
    </div>
  );
}
