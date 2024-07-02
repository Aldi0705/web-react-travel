import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='About Me' subtitle='Check Me' />

            <p>Kelompok LOOPING</p>
            <p>1. Aldi Syahputra - 211110952</p>
            <p>2. Filbert - 211112233</p>
            <p>3. Jennifer - 211110335</p>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
