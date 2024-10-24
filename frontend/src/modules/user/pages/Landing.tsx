import React from 'react'
import MainView from '../components/landingPage/MainView'
import BodyMassIndex from '../components/homePage/BodyMassIndex'
import WorkProgress from '../components/landingPage/WorkProgress'
import GymAndFitnessTraining from '../components/landingPage/GymAndFitnessTraining'
import LandingPageFooter from '../components/landingPage/LandingPageFooter'

const Landing = () => {
  return (
    <div>
        <MainView/>
        <BodyMassIndex/>
        <WorkProgress/>
        <GymAndFitnessTraining/>
        <LandingPageFooter/>
    </div>
  )
}

export default Landing