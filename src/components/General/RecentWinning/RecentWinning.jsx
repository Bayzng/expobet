import React from 'react'
import ball from "../../../assets/ball.webp";
import "./RecentWinning.css"

const RecentWinning = () => {
  return (
    <div className='RecentWinning'>
      <div className='--RecentWinning-Header'>
        <h2>RECENT WINNINGS</h2>
      </div>
      <div className="">
        {/* first */}
        <div className="--RecentWinning-Contents">
          <div className="--RecentWinning-Table">
            <table className="--RecentWinning-table">
              <thead>
                <tr className="--RecentWinning-head">
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

      </div>
    </div>
  )
}

export default RecentWinning