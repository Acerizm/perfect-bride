import React,{Component} from "react";
import "./index.css";
import * as TEXT from "./text.js";

//import window height here
import {useWindowWidth, useWindowHeight} from "../ResponsiveComponent/index.js";
import {minDesktopWidth,minMobileWidth,minTabletWidth} from "../ResponsiveComponent/index.js";


const SponsorsPage = (props) => {
  
  let currentWindowWidth = useWindowWidth();
  let currentSponsorPage;

  if (currentWindowWidth >= minDesktopWidth){
    currentSponsorPage = <DesktopSponsorPage/>
  }
  else if (currentWindowWidth >= minTabletWidth && currentWindowWidth < minDesktopWidth){
    currentSponsorPage = <TabletSponsorPage/>
  }
  else{
    currentSponsorPage = <MobileSponsorPage/>;
  }
  return currentSponsorPage;
}

const DesktopSponsorPage = (props) => {
  return (
    <div id="SponsorsPageContainer">
      <span id="SponsorTitle">{TEXT.SponsorTitle}</span>
      <div id="Sponsor1">
        <div className="SponsorImages" id="Sponsor1Image"></div>
        <div id="SponsorTextArea">
          <span className="SponsorsText" className="FirstSponsorText">{TEXT.Sponsor1Chi}</span>
          <span className="SponsorsText" className="SecondSponsorText">{TEXT.Sponsor1Name}</span>
          <span className="SponsorsText" className="ThirdSponsorText">{TEXT.Sponsor1Desc}</span>
        </div>
      </div>
      <div id="Sponsor2">
        <div id="SponsorTextArea">
          <span className="SponsorsText" className="FirstSponsorText">{TEXT.Sponsor2Chi}</span>
          <span className="SponsorsText" className="SecondSponsorText">{TEXT.Sponsor2Name}</span>
          <span className="SponsorsText" className="ThirdSponsorText">{TEXT.Sponsor2Desc}</span>
        </div>
        <div className="SponsorImages" id="Sponsor2Image"></div>
      </div>
      <div id="CollectiveSponsorDesc">
        <div id="CollectiveSponsorTextBox">
          <div id="InnerCollectiveSponsorText">
          {TEXT.CollectiveSponsorText}
          </div>
        </div>   
      </div>
    </div>
  )
}

const TabletSponsorPage = (props) => {
  return (
    <div id="SponsorsPageContainer">
      <div id="SponsorTitle">{TEXT.SponsorTitle}</div>
      <div id="Sponsor1">
        <div className="SponsorImages" id="Sponsor1Image"></div>
        <div className="SponsorTextArea" id="SponsorTextArea1">
          <span className="FirstSponsorText">{TEXT.Sponsor1Chi}</span>
          <span className="SecondSponsorText">{TEXT.Sponsor1Name}</span>
          <span className="ThirdSponsorText">{TEXT.Sponsor1Desc}</span>
        </div>
      </div>
      <div id="Sponsor2">
        <div className="SponsorTextArea" id="SponsorTextArea2">
          <span className="FirstSponsorText">{TEXT.Sponsor2Chi}</span>
          <span className="SecondSponsorText">{TEXT.Sponsor2Name}</span>
          <span className="ThirdSponsorText">{TEXT.Sponsor2Desc}</span>
        </div>
        <div className="SponsorImages" id="Sponsor2Image"></div>
      </div>
      <div id="CollectiveSponsorDesc">
        <div id="CollectiveSponsorTextBox">
          <div id="InnerCollectiveSponsorText">
          {TEXT.CollectiveSponsorText}
          </div>
        </div>   
      </div>
    </div>
  )
}

const MobileSponsorPage = (props) => {
  return (
    <div id="SponsorsPageContainer">
      <div id="SponsorTitle">{TEXT.SponsorTitle}</div>
      <div id="Sponsor1">
        <div className="SponsorImages" id="Sponsor1Image"></div>
        <div className="SponsorTextArea" id="SponsorTextArea1">
          <span className="FirstSponsorText">{TEXT.Sponsor1Chi}</span>
          <span className="SecondSponsorText">{TEXT.Sponsor1Name}</span>
          <span className="ThirdSponsorText">{TEXT.Sponsor1Desc}</span>
        </div>
      </div>
      <div id="Sponsor2">
       <div className="SponsorImages" id="Sponsor2Image"></div>
        <div className="SponsorTextArea" id="SponsorTextArea2">
          <span className="FirstSponsorText">{TEXT.Sponsor2Chi}</span>
          <span className="SecondSponsorText">{TEXT.Sponsor2Name}</span>
          <span className="ThirdSponsorText">{TEXT.Sponsor2Desc}</span>
        </div>
      </div>
      <div id="CollectiveSponsorDesc">
        <div id="CollectiveSponsorTextBox">
          <div id="InnerCollectiveSponsorText">
          {TEXT.CollectiveSponsorText}
          </div>
        </div>   
      </div>
    </div>
  )
  
}

export default SponsorsPage;