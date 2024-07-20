import React from 'react'
import ball from "../../../assets/ball.webp"
import "./ExpertTips.css"

const ExpertTips = () => {
  return (
    <div className='ExpertTips'>
      <div className='--ExpertTips-Header'>
        <h2>EXPERT TIPS</h2>
      </div>
      <div className='--ExpertTips'>
        {/* first */}
        <div className='--ExpertTips-Content'>
          <div className='--ExpertTips-Flex'>
            <h2>SPECIAL <br />SINGLE</h2>
            <p>******</p>
          </div>
          <div className='--ExpertTips-Ball'>
            <img src={ball} alt="" />
          </div>
          <div className='--ExpertTips-Odd'>
            <h4>Odds: 1.59</h4>
            <button>View Tips</button>
          </div>
        </div>
        <div className='--ExpertTips-Content'>
          <div className='--ExpertTips-Flex'>
            <h2>DOUBLE <br />SHOTS</h2>
            <p>******</p>
          </div>
          <div className='--ExpertTips-Ball'>
            <img src={ball} alt="" />
          </div>
          <div className='--ExpertTips-Odd'>
            <h4>Odds: 1.59</h4>
            <button>View Tips</button>
          </div>
        </div>
        {/* second */}
        <div className='--ExpertTips-Content'>
          <div className='--ExpertTips-Flex'>
            <h2>GRAND <br />SLAM</h2>
            <p>******</p>
          </div>
          <div className='--ExpertTips-Ball'>
            <img src={ball} alt="" />
          </div>
          <div className='--ExpertTips-Odd'>
            <h4>Odds: 1.59</h4>
            <button>View Tips</button>
          </div>
        </div>
        <div className='--ExpertTips-Content'>
          <div className='--ExpertTips-Flex'>
            <h2>DEAD <br />END</h2>
            <p>******</p>
          </div>
          <div className='--ExpertTips-Ball'>
            <img src={ball} alt="" />
          </div>
          <div className='--ExpertTips-Odd'>
            <h4>Odds: 1.59</h4>
            <button>View Tips</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ExpertTips