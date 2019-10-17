import React, { Component, useState } from "react";
import "./index.css";

//import window height here
import { useWindowWidth, useWindowHeight } from "../ResponsiveComponent/index.js";
import { minDesktopWidth, minMobileWidth, minTabletWidth } from "../ResponsiveComponent/index.js";


const NewsPage = (props) => {
    let currentWindowWidth = useWindowWidth();
    let currentNewsPage;

    if (currentWindowWidth >= minDesktopWidth) {
        currentNewsPage = <DesktopNewsPage/>
    }
    else if (currentWindowWidth >= minTabletWidth && currentWindowWidth < minDesktopWidth){
        currentNewsPage = <TabletNewsPage/>
    }
    else{
        currentNewsPage = <MobileNewsPage/>;
    }
    
    return currentNewsPage;
}


const DesktopNewsPage = (props) => {

    return (
        <div id="NewsPageContainer">
        
        </div>
    )
}

const TabletNewsPage = (props) => {
    return (
        <div>
        </div>
        )
}

const MobileNewsPage = (props) => {
    return (
        <div>
        </div>
        )
}

export default NewsPage;
