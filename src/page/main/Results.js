import React from "react"
const url = "https://dote-images.s3.amazonaws.com/api/uploads/image/file/83964919/thumb_1540894392393034161.jpg"

const Result = () => {
  return (
      <div className="result-container">
        <div className="result-image-container"
             style={{backgroundImage: `url(${url})`}}
        >
          <div className="discount-badge-wrapper">32% off</div>
          <div className="favorite-badge"/>

        </div>
        <div className="item-info-container">
          <div className="item-store-name-text">Zaful</div>
          <div className="item-name-text" >Fluffy Zip Up Winter Teddy Coat</div>
          <div className="item-price-wrapper">
            <div className="item-price-actual-text">$88.99</div>
            <div className="item-price-msrp-text">$120.00</div>
          </div>
        </div>
      </div>
  )
}
const Results = () => {
  return (
      <div className="results-container">
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
        <Result/>
      </div>
  )
}

export default Results