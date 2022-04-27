import React from 'react'
import Header from "../Header"

const Layout= (props)=> {
  return (
    <>
        <Header />
        {props.children}
        lorem ipsum dolor sit amet, consectetur adip
        
    </>
  )
}

export default Layout;