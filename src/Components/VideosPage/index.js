import React, { Component, useState } from "react";
import "./index.css";

//import window height here
import { useWindowWidth, useWindowHeight } from "../ResponsiveComponent/index.js";
import { minDesktopWidth, minMobileWidth, minTabletWidth } from "../ResponsiveComponent/index.js";

import "../../../node_modules/video-react/dist/video-react.css"; // import css

import { Player } from 'video-react';

const VideosPage = (props) => {

    let currentWindowWidth = useWindowWidth();
    let currentVideosPage;

    if (currentWindowWidth >= minDesktopWidth) {
        currentVideosPage = <DesktopVideosPage/>;
    }
    else if (currentWindowWidth >= minTabletWidth && currentWindowWidth < minDesktopWidth) {
        currentVideosPage = <TabletVideosPage/>;
    }
    else {
        currentVideosPage = <MobileVideosPage/>;
    }

    return currentVideosPage;
}

const DesktopVideosPage = (props) => {
    return (
        <div id="VideosPageContainer">
            <div id="PageTitle">Videos</div>
            <div id="VideoContainer">
                <Player
                  playsInline
                  poster="/assets/poster.png"
                  src="https://res.cloudinary.com/inspirous/video/upload/v1571208534/Freelance/uxqijbbd5o5cncf9sd01.mp4"
                  width = { "80%" }
                  height = { "80%" }
                  fluid={false}
                  preload="none"
                  videoId="Video1"
                />
            </div>
        </div>

    )
}

const TabletVideosPage = (props) => {
    return (
        <div id="VideosPageContainer">
                <div id="PageTitle">Videos</div>
                <Player
                  playsInline
                  poster="/assets/poster.png"
                  src="https://res.cloudinary.com/inspirous/video/upload/v1571208534/Freelance/uxqijbbd5o5cncf9sd01.mp4"
                  width = { "80%" }
                  height = { "50%" }
                  fluid={false}
                  preload="none"
                  videoId="Video1"
                />
        </div>
    )
}

const MobileVideosPage = (props) => {
    return (
        <div id="VideosPageContainer">
                <div id="PageTitle">Videos</div>
                <Player
                  playsInline
                  poster="/assets/poster.png"
                  src="https://res.cloudinary.com/inspirous/video/upload/v1571208534/Freelance/uxqijbbd5o5cncf9sd01.mp4"
                  width = { "80%" }
                  height = { "50%" }
                  fluid={false}
                  preload="none"
                  videoId="Video1"
                />
        </div>
    )
}

export default VideosPage;
