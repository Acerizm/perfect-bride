import React, { Component, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../../Routes/index.js";

//import window height here
import { useWindowWidth, useWindowHeight } from "../ResponsiveComponent/index.js";
import { minDesktopWidth, minMobileWidth, minTabletWidth } from "../ResponsiveComponent/index.js";
import MenuIcon from '@material-ui/icons/Menu';

//import material ui stuff here
import { withStyles } from '@material-ui/core/styles';
import { breakpoints } from "@material-ui/system";

const NavBar = () => {
  let currentWindowWidth = useWindowWidth();
  let currentNavbar;

  //change navbar according to the width
  if (currentWindowWidth >= minDesktopWidth) {
    currentNavbar = <DesktopNavBar/>
  }
  else if (currentWindowWidth >= minMobileWidth && currentWindowWidth < minDesktopWidth) {
    currentNavbar = <TabletNavbar/>
  }
  else {
    currentNavbar = <MobileNavbar/>
  }

  return currentNavbar
}


const HamburgerIcon = withStyles({
  root: {
    height: "100%",
    width: "100%",
  }
})(MenuIcon);

const SideNavbar = (props) => {
  let currentSideBarStatus;
  if (props.sideNavbarStatus == null) {
    currentSideBarStatus = false;
  }
  else if (props.sideNavbarStatus == true) {
    currentSideBarStatus = true;
  }
  else if (props.sideNavbarStatus == false) {
    currentSideBarStatus = false;
  }
  return (
    <div id="mySidenav" className="sidenav" style={{width: currentSideBarStatus ? "250px" : "0px"}}>
      <a className="closebtn" onClick={() => props.changeSidebarStatus()}>&times;</a>
      <Link to={ROUTES.HOME_PAGE} className="link"><span className="NavLink">Home</span></Link>
      <Link to={ROUTES.ORGANIZER_PAGE} className="link"><span className="NavLink">Organizer</span></Link>
      <Link to={ROUTES.SPONSORS_PAGE} className="link"><span className="NavLink">Sponsors</span></Link>
      <Link to={ROUTES.GALLERY_PAGE} className="link"><span className="NavLink">Gallery</span></Link>
      <Link to={ROUTES.VIDEOS_PAGE} className="link"><span className="NavLink">Videos</span></Link>
      <Link to={ROUTES.NEWS_PAGE} className="link"><span className="NavLink">News</span></Link>
    </div>
  )
}

const TabletNavbar = () => {
  // animation is based on https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav

  const [openSideNavbar, setSideNavbarStatus] = useState(false);
  let currentSideNavbar;
  //code will only run if called
  const changeSidebarStatus = () => {
    if (openSideNavbar === true) {
      setSideNavbarStatus(false);
      currentSideNavbar = <SideNavbar sideNavbarStatus={openSideNavbar} changeSidebarStatus={changeSidebarStatus}/>
    }
    else if (openSideNavbar === false) {
      setSideNavbarStatus(true);
      currentSideNavbar = <SideNavbar sideNavbarStatus={openSideNavbar} changeSidebarStatus={changeSidebarStatus}/>
    }
  }

  let status = openSideNavbar;
  //code will only run for the first time
  if (currentSideNavbar == null) {
    currentSideNavbar = <SideNavbar sideNavbarStatus={status} changeSidebarStatus={changeSidebarStatus}/>
  }
  return (
    <div id="NavBarContainer">
      <div id="PerfectBrideHeadingContainer">
        <span id="PerfectBrideHeading">Perfect Bride</span>
      </div>
      <div id="HamburgerMenu" onClick={() => changeSidebarStatus()}>
        <HamburgerIcon></HamburgerIcon>
      </div>
      {currentSideNavbar}
    </div>
  )
}


const MobileNavbar = () => {
  // animation is based on https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav

  const [openSideNavbar, setSideNavbarStatus] = useState(false);
  let currentSideNavbar;
  //code will only run if called
  const changeSidebarStatus = () => {
    if (openSideNavbar === true) {
      setSideNavbarStatus(false);
      currentSideNavbar = <SideNavbar sideNavbarStatus={openSideNavbar} changeSidebarStatus={changeSidebarStatus}/>
    }
    else if (openSideNavbar === false) {
      setSideNavbarStatus(true);
      currentSideNavbar = <SideNavbar sideNavbarStatus={openSideNavbar} changeSidebarStatus={changeSidebarStatus}/>
    }
  }

  let status = openSideNavbar;
  //code will only run for the first time
  if (currentSideNavbar == null) {
    currentSideNavbar = <SideNavbar sideNavbarStatus={status} changeSidebarStatus={changeSidebarStatus}/>
  }
  return (
    <div id="NavBarContainer">
      <div id="PerfectBrideHeadingContainer">
        <span id="PerfectBrideHeading">Perfect Bride</span>
      </div>
      <div id="HamburgerMenu" onClick={() => changeSidebarStatus()}>
        <HamburgerIcon></HamburgerIcon>
      </div>
      {currentSideNavbar}
    </div>
  )
}

const DesktopNavBar = () => {
  return (
    <div id="NavBarContainer">
        <div id="PerfectBrideLogo"></div>
        <div id="NavbarLinksContainer">
          <Link to={ROUTES.HOME_PAGE} className="link"><span className="NavLink">Home</span></Link>
          <Link to={ROUTES.ORGANIZER_PAGE} className="link"><span className="NavLink">Organizer</span></Link>
          <Link to={ROUTES.SPONSORS_PAGE} className="link"><span className="NavLink">Sponsors</span></Link>
          <Link to={ROUTES.GALLERY_PAGE} className="link"><span className="NavLink">Gallery</span></Link>
          <Link to={ROUTES.VIDEOS_PAGE} className="link"><span className="NavLink">Videos</span></Link>
          {/*<Link to={ROUTES.NEWS_PAGE} className="link"><span className="NavLink">News</span></Link>*/}
        </div>
      </div>
  )
}

export default NavBar
