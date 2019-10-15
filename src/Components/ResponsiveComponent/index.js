import React,{useState,useEffect} from "react";

//We are using React Hooks here
// this is for the width
export const useWindowWidth = () => {
    const [windowWidth,setWindowWith] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setWindowWith(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize",handleWindowResize);
        return () => {window.removeEventListener("resize",handleWindowResize)};
    },[]);

    return windowWidth;
}

//this is for window height
export const useWindowHeight = () => {
    const [windowHeight,setWindowHeight] = useState(window.innerHeight);

    const handleWindowResize = () => {
        setWindowHeight(window.innerHeight);
    };

    useEffect(()=> {
        window.addEventListener("resize",handleWindowResize);
        return () => window.removeEventListener("resize",handleWindowResize);
    },[]);

    return windowHeight;
}

export const minDesktopWidth = 1200;
export const minTabletWidth = 768;
export const minMobileWidth = 1;

