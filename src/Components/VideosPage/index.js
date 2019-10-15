import React,{Component,useState} from "react";
import "./index.css";

//import window height here
import {useWindowWidth, useWindowHeight} from "../ResponsiveComponent/index.js";
import {minDesktopWidth,minMobileWidth,minTabletWidth} from "../ResponsiveComponent/index.js";

const VideosPage = (props) => {
    
    let currentWindowWidth = useWindowWidth();
    let currentVideosPage;
    
    if (currentWindowWidth >= minDesktopWidth){
        currentVideosPage = <DesktopVideosPage/>;
    }
    else if (currentWindowWidth >= minTabletWidth && currentWindowWidth < minDesktopWidth){
        currentVideosPage = <TabletVideosPage/>;
    }
    else{
        currentVideosPage = <MobileVideosPage/>;
    }
    
    return currentVideosPage;
}

const DesktopVideosPage = (props) => {
    return (
        <div id="VideosPageContainer">
            <div id="PageTitle">Videos</div>
            <div id="MainContainer">
                <video id="MainVideo" width="320" height="240" autoplay>
                    <source src="../../Videos/1.mov" type="video/mp4"/>
                </video>
            </div>
        </div>
        
    )
}

const TabletVideosPage = (props) => {
    return(
        <div>
        </div>
    )
}

const MobileVideosPage = (props) => {
    return (
        <div>
        </div>
    )
}

export default VideosPage;