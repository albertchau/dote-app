import React from 'react'
import ReactDOM from 'react-dom'
import Header from "./Header"
import Results from "./Results"
import "./style.scss"
import MenuBar from "./MenuBar"
import HeroTitle from "./HeroTitle"
import SortingBar from "./SortingBar"

const MainBody = () => {

  return (
      <div className="main-body-container">
        <div className="top-container">
          <Header/>
          <MenuBar/>
        </div>
        <div className="middle-container">
          <HeroTitle/>
          <SortingBar/>
        </div>
        <div className="resultss-container">
          <Results/>
        </div>
      </div>
  )
}

export default MainBody