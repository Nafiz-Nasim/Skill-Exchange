import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

export default function Roots() {
  return (
  
    <section>
        <Nav></Nav>
      
<Outlet></Outlet>
<Footer></Footer>

    </section>
  )
}
