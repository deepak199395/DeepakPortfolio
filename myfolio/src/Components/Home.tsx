import React from 'react'
import Nevbar from './Layout/Nevbar.tsx'
import Body from './Body.tsx'
import Experince from './Experince.tsx'
import Footer from './Layout/Footer.tsx'
import TeachnologyStack from './TeachnologyStack.tsx'
import Project from './Project.tsx'

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
