import React from 'react'
import CallToAction from '../../components/CallToAction/CallToAction'
import Chicago from '../../components/Chicago/Chicago'
import CustomersSay from '../../components/CustomerSays/CustomerSays'
import Specials from '../../components/Specials/Specials'


const Home = () => {
  return (
    <>
      <CallToAction />
      <Specials />
       <CustomersSay />
      <Chicago />
    </>
  )
}

export default Home