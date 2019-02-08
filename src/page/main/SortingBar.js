import React from "react"


const SortingBar = () => {
  return (
      <div className="sorting-bar-container">
        <div className="horizontal-line"/>
        <div className="sorting-bar-wrapper">
          <div className="category-sort-wrapper">
            <div>
              Category:
            </div>
            <div className="category-sort-selected-text">
              All Dresses
            </div>
            <div className="sort-bar-down-icon"/>
          </div>
          <div className="sort_by-sort-wrapper">
            <div>
              Sort By:
            </div>
            <div className="sort_by-sort-selected-text">
              Featured
            </div>
            <div className="sort-bar-down-icon"/>
          </div>
        </div>
        <div className="horizontal-line"/>
      </div>
  )
}

export default SortingBar