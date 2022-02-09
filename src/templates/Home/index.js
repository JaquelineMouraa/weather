import "./style.css";
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";

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
          <button>Dallol</button>
          <button>Fairbanks</button>
          <button>London</button>
        </div>
        <div className="lineCities">
          <button>Recife</button>
          <button>Vancouver</button>
          <button>Yakutsk</button>
        </div>
      </div>
    </div>
  );
}
