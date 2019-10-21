import React,{Component} from "react";
import "./index.css";
import * as TEXT from "./text.js";
import {useWindowWidth, useWindowHeight} from "../ResponsiveComponent/index.js";
import {minDesktopWidth,minMobileWidth,minTabletWidth} from "../ResponsiveComponent/index.js";

const Footer = (props) => {
  let currentWindowWidth = useWindowWidth();
  let currentFooter;
  
  if (currentWindowWidth >= minDesktopWidth){
    currentFooter = <DesktopFooter/>
  }
  else if (currentWindowWidth >= minTabletWidth && currentWindowWidth < minDesktopWidth){
    currentFooter = <TabletFooter/>;
  }
  else if (currentWindowWidth < minTabletWidth){
    currentFooter = <MobileFooter/>;
  }
  
  return currentFooter;
}

const DesktopFooter = (props) => {
  return(
    <div id="FooterContainer">
        <span className="texts" style={{marginLeft: "15%",width:"200px"}}>{TEXT.text1}</span>
        <span className="texts" style={{marginLeft: "5%",width:"400px"}}>{TEXT.text2}</span>
        <span className="texts" style={{marginLeft: "5%"}}>Email:</span>
        <span className="texts" style={{marginLeft: "1%",marginTop:"15px",width:"400px"}}>{TEXT.text3}</span>
      </div>
    )
}

const TabletFooter = (props) => {
  return(
    <div id="FooterContainer">
     <span className="texts" id="Text1" style={{}}>{TEXT.text1}</span>
        <span className="texts" style={{}}>{TEXT.text2}</span>
        <span className="texts" style={{}}>Email:</span>
        <span className="texts" style={{}}>{TEXT.text3}</span>
    </div>
    )
}

const MobileFooter = (props) => {
  return(
    <div id="FooterContainer">
     <span className="texts" id="Text1" style={{}}>{TEXT.text1}</span>
        <span className="texts" id="Text2" style={{}}>{TEXT.text2}</span>
        <span className="texts" id="Email"style={{}}>Email:</span>
        <span className="texts" id="Text3" style={{}}>{TEXT.text3}</span>
    </div>
    )
}

export default Footer;