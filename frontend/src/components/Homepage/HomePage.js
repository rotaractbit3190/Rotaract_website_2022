import React from 'react'

import Heading from './header/Backgroundlogo'
import ParentClubs from './header/Our parent clubs/ParentClubs'
import PrincipalPic from './header/principal picture/PrincipalPic'
import MainPageBoard from './OurBoard/MainPageBoard'
import Theme from './theme/theme'
import { Helmet } from "react-helmet-async";


export default function HomePage(props) {
  return (
    <>
      <Helmet>
        <title>Rotaract Club Of BIT</title>
        <meta
          name="description"
          content="Welcome to the Home page of  the Rotaract Club Of BIT.We strive to do our small part to the society, to make this world a better and happier place to live in."
        />
        <link rel="canonical" href="/" />
      </Helmet>
    <Heading check={props.nocursor}/>
    <PrincipalPic/>

    <ParentClubs/>
    <Theme/>
    <MainPageBoard/>
    </>
    
    )
  }
  
  