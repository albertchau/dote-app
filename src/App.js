import React from 'react'
import ReactDOM from 'react-dom'
import MainBody from "./page/main/MainBody"
import BottomPart from "./page/bottom/BottomPart"
import "./app.scss"

class App extends React.Component {


  constructor(props) {
    super(props)

  }


  render() {
    return (
        <div className="dote-app">
          <div className="content-container">
            <MainBody/>
          </div>
          <BottomPart/>
        </div>
    )
  }
}

export default App