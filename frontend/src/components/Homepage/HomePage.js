import React from 'react'
import Divider from './divider/Divider'
import Heading from './header/Backgroundlogo'
import ParentClubs from './header/Our parent clubs/ParentClubs'
import PrincipalPic from './header/principal picture/PrincipalPic'
import MainPageBoard from './OurBoard/MainPageBoard'


export default function HomePage(props) {
  return (
    <>
    <Heading check={props.nocursor}/>
    <PrincipalPic/>
    {/* <Divider/> */}
    <ParentClubs/>
    <MainPageBoard/>
    </>
    
    )
  }
  
  