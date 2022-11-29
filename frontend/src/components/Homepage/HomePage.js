import React from 'react'

import Heading from './header/Backgroundlogo'
import ParentClubs from './header/Our parent clubs/ParentClubs'
import PrincipalPic from './header/principal picture/PrincipalPic'
import MainPageBoard from './OurBoard/MainPageBoard'
import Theme from './theme/theme'


export default function HomePage(props) {
  return (
    <>
    <Heading check={props.nocursor}/>
    <PrincipalPic/>

    <ParentClubs/>
    <Theme/>
    <MainPageBoard/>
    </>
    
    )
  }
  
  