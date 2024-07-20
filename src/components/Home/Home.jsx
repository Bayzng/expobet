import React from 'react'
import Navbar from '../General/Navbar/Navbar'
import Hero from '../General/Hero/Hero'
import PastPrediction from '../General/PastPrediction/PastPrediction'
import ExpertTips from '../General/ExpertTips/ExpertTips'
import RecentWinning from '../General/RecentWinning/RecentWinning'
import Footer from '../General/Footer/Footer'

const Home = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <Hero/>
        </div>
        <div>
            <PastPrediction/>
        </div>
        <div>
            <ExpertTips/>
        </div>
        <div>
            <RecentWinning/>
        </div>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Home