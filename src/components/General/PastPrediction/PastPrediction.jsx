import React from "react";
import ball from "../../../assets/ball.webp";
import "./PastPrediction.css";

const PastPrediction = () => {
  return (
    <div className="PastPredictions">
      <div className="--PastPredictions-Header">
        <h2>PAST PREDICTIONS</h2>
      </div>
      <div className="--PastPredictions-flex">
        {/* first */}
        <div className="--PastPredictions-Contents">
          <div className="--PastPredictions-Table">
            <table className="--PastPredictions-table">
              <thead>
                <tr className="--PastPredictions-head">
                  <th>TIMEs</th>
                  <th>LEAGUE</th>
                  <th>MATCH</th>
                  <th>TIP</th>
                  <th>RESULT</th>
                </tr>
              </thead>
              <tbody>
                <tr className="--table-data">
                  <td>17:00</td>
                  <td>
                    <img src={ball} alt="ball" />
                  </td>
                  <td>Andorra - Ireland</td>
                  <td>Ov 1.5</td>
                  <td><button>1:1</button></td>
                </tr>
                <tr className="--table-data">
                  <td>17:00</td>
                  <td>
                    <img src={ball} alt="ball" />
                  </td>
                  <td>Andorra - Ireland</td>
                  <td>Ov 1.5</td>
                  <td><button>1:1</button></td>
                </tr>
                <tr className="--table-data">
                  <td>17:00</td>
                  <td>
                    <img src={ball} alt="ball" />
                  </td>
                  <td>Andorra - Ireland</td>
                  <td>Ov 1.5</td>
                  <td><button>1:1</button></td>
                </tr>
                <tr className="--table-data">
                  <td>17:00</td>
                  <td>
                    <img src={ball} alt="ball" />
                  </td>
                  <td>Andorra - Ireland</td>
                  <td>Ov 1.5</td>
                  <td><button>1:1</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* second */}
        <div className="--PastPredictions-Contents">
          <div className="--PastPredictions-Table">
            <table className="--PastPredictions-table">
              <thead>
                <tr className="--PastPredictions-head">
                  <th>TIMEs</th>
                  <th>LEAGUE</th>
                  <th>MATCH</th>
                  <th>TIP</th>
                  <th>RESULT</th>
                </tr>
              </thead>
              <tbody>
                <tr className="--table-data">
                  <td>17:00</td>
                  <td>
                    <img src={ball} alt="ball" />
                  </td>
                  <td>Andorra - Ireland</td>
                  <td>Ov 1.5</td>
                  <td><button>1:1</button></td>
                </tr>
                <tr className="--table-data">
                  <td>17:00</td>
                  <td>
                    <img src={ball} alt="ball" />
                  </td>
                  <td>Andorra - Ireland</td>
                  <td>Ov 1.5</td>
                  <td><button>1:1</button></td>
                </tr>
                <tr className="--table-data">
                  <td>17:00</td>
                  <td>
                    <img src={ball} alt="ball" />
                  </td>
                  <td>Andorra - Ireland</td>
                  <td>Ov 1.5</td>
                  <td><button>1:1</button></td>
                </tr>
                <tr className="--table-data">
                  <td>17:00</td>
                  <td>
                    <img src={ball} alt="ball" />
                  </td>
                  <td>Andorra - Ireland</td>
                  <td>Ov 1.5</td>
                  <td><button>1:1</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastPrediction;
