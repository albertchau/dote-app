import React from "react"

const Logo = () => {
  return (
      <div className="logo-wrapper">
        <div className="logo"/>
      </div>
  )
}

const Profile = () => {
  return (
      <div className="profile-wrapper">
        <div className="search-wrapper">
          <div className="search-icon"/>
          <div>Search</div>
        </div>
        <div className="account-icon"/>
        <div className="favorites-icon"/>
        <div className="bag-icon"/>
      </div>
  )
}

const Header = () => {
  return (
      <div className="header-wrapper">
        <Logo/>
        <Profile/>
      </div>
  )
}

export default Header