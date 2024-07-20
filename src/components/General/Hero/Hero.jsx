import React from "react";
import ball from "../../../assets/ball.webp"
import { FaLock } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="--Hero-Content">
        <div className="--Hero-Table">
          <table className="--content-table">
            <tr className="--table-head">
              <th>TIME</th>
              <th>LEAGUE</th>
              <th>MATCH</th>
              <th>TIP</th>
              <th>RESULT</th>
            </tr>
            <hr />
            <tr className="--table-data">
              <td>17:00</td>
              <td><img src={ball} alt="ball" /></td>
              <td>Andorra - Ireland</td>
              <td><FaLock /></td>
              <td>??</td>
            </tr>
            <tr className="--table-data">
              <td>17:00</td>
              <td><img src={ball} alt="ball" /></td>
              <td>Andorra - Ireland</td>
              <td><FaLock /></td>
              <td>??</td>
            </tr>
            <tr className="--table-data">
              <td>17:00</td>
              <td><img src={ball} alt="ball" /></td>
              <td>Andorra - Ireland</td>
              <td><FaLock /></td>
              <td>??</td>
            </tr>
            <tr className="--table-data">
              <td>17:00</td>
              <td><img src={ball} alt="ball" /></td>
              <td>Andorra - Ireland</td>
              <td><FaLock /></td>
              <td>??</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Hero;
