import React from 'react'
import Nevbar from './Layout/Nevbar.tsx'
import Body from './Body.js'
import Experince from './Experince.js'
import Footer from './Layout/Footer.tsx'
import TeachnologyStack from './TeachnologyStack.js'
import Project from './Project.js'

const Home = () => {
  return (
    <div>
      <Nevbar />
      <Body />
      <Experince/>
      <TeachnologyStack/>
      <Project/>
      <Footer/>

    </div>
  )
}

export default Home
