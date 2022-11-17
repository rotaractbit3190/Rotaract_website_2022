import React from 'react'
import Divider from './divider/Divider'
import Heading from './header/Backgroundlogo'


export default function HomePage(props) {
  return (
    <>
    <Heading check={props.nocursor}/>
    <Divider/>
    </>
    
  )
}
