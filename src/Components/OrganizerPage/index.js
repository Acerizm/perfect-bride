import React,{Component} from "react";
import "./index.css";
import * as TEXT from "./text.js";

//import window height here
import {useWindowWidth, useWindowHeight} from "../ResponsiveComponent/index.js";
import {minDesktopWidth,minMobileWidth,minTabletWidth} from "../ResponsiveComponent/index.js";

const OrganizerPage = (props) => {
  let currentWindowWidth = useWindowWidth();
  let currentOrganizerPage;

  if (currentWindowWidth >= minDesktopWidth){
    currentOrganizerPage = <DekstopOrganizerPage/>;
  }
  else if (currentWindowWidth >= minTabletWidth && currentWindowWidth < minDesktopWidth){
    currentOrganizerPage = <TabletOrganizerPage/>;
  }
  else {
    currentOrganizerPage = <MobileOrganizerPage/>;
  }
  return currentOrganizerPage;
}

const DekstopOrganizerPage = (props) => {
  return (
    <div id="OrganizerPageContainer">
      <div id="black">
        <span id="Chi1">{TEXT.Chi1}</span>
        <span id="Intro">{TEXT.Intro}</span>
        <span id="CompanyName">{TEXT.CompanyName}</span>
        <span id="CompanyDesc">{TEXT.CompnayDesc}</span>
      </div>
      <div id="office">
        <span id="Chi2">{TEXT.Chi2}</span>
      </div>
    </div>
  )
}

const TabletOrganizerPage = (props) => {
  return (
    <div id="OrganizerPageContainer">
      <div id="black">
        <span id="Chi1">{TEXT.Chi1}</span>
        <span id="Intro">{TEXT.Intro}</span>
        <span id="CompanyName">{TEXT.CompanyName}</span>
        <span id="CompanyDesc">{TEXT.CompnayDesc}</span>
      </div>
      <div id="office">
        <span id="Chi2">{TEXT.Chi2}</span>
      </div>
    </div>
  )
}

const MobileOrganizerPage = (props) => {
  return (
    <div id="OrganizerPageContainer">
      <div id="black">
        <span id="Chi1">{TEXT.Chi1}</span>
        <span id="Intro">{TEXT.Intro}</span>
        <span id="CompanyName">{TEXT.CompanyName}</span>
        <span id="CompanyDesc">{TEXT.CompnayDesc}</span>
      </div>
      <div id="office">
        <span id="Chi2">{TEXT.Chi2}</span>
      </div>
    </div>
  )
}

export default OrganizerPage;