import React,{Component, useState} from "react";
import "./index.css";
import NavBar from "../Navbar/index.js";
import * as TEXT from "./text.js";

//import window height here
import {useWindowWidth, useWindowHeight} from "../ResponsiveComponent/index.js";
import {minDesktopWidth,minMobileWidth,minTabletWidth} from "../ResponsiveComponent/index.js";

const HomePage = (props) => {

  let currentWindowWidth = useWindowWidth();
  let currentHomePage;
  
  if (currentWindowWidth >= minDesktopWidth){
    currentHomePage = <DesktopHomePage/>;
  }
  
  else if (currentWindowWidth >= minTabletWidth && currentWindowWidth < minDesktopWidth){
    currentHomePage = <TabletHomePage/>
  }
  
  //for testing purposes
  else{
    currentHomePage = <MobileHomePage/>;
  }
  

  return currentHomePage
}

const DesktopHomePage = (props) => {
  //use react hooks here
  return (
     <div id="HomePage">
      <div id="WeddingPhoto"></div>
      <div id="TextArea">
        <span id="PerfectBrideTitle">{TEXT.PerfectBrideTitle}</span>
        <span id="Intro1">{TEXT.Intro1}</span>
        <span id="Intro2">{TEXT.Intro2}</span>
      </div>
      <div id="OtherImagesArea">
        <div id="OtherImages1"></div>
        <div id="OtherImages2"></div>
        <div id="OtherImages3"></div>
      </div>
    </div>
    )
}

const TabletHomePage = (props) => {
  
  const [currentImageClicked, setCurrentImageClickedIndex] = useState(1);
  //let 0 be the event where the user does not hover the mouse on the images;
  const [Image1Status,setImage1Status] = useState(true);
  const [Image2Status,setImage2Status] = useState(false);
  const [Image3Status,setImage3Status] = useState(false);
  const [Image2Direction, setImage2Direction] = useState("L");
  // where L and R represents Left and Right directions of image 2 respectively.
  
  const setImageStatus = (imageNum) => {
    let currentStatus;
    if (imageNum == 1){
      if (Image1Status == false){
        currentStatus = true
        setImage2Direction("R");
        setImage2Status(false);
        // need to make sure image3 status is false
        setImage3Status(false);
      }
      else{
        currentStatus = false;
        setImage2Direction("L")
        // i need to trigger the part where the 2nd image
        // is automatically enlarged :D
        setImage2Status(true);
  
        
      }
      setImage1Status(currentStatus);
    }
    else if (imageNum == 2){
      let currentStatus;
      if (Image2Status == false){
        currentStatus = true;
        // make sure that both image 1 and image 3 status is false;
        setImage1Status(false);
        setImage3Status(false);
      }
      else{
        currentStatus = false;
        // just make image 1 status true
        setImage1Status(true);
        setImage3Status(false);
        setImage2Direction("L");
      }
      setImage2Status(currentStatus);
    }
    else if (imageNum == 3){
      let currentStatus;
      if (Image3Status == false){
        currentStatus = true;
        setImage2Direction("L");
        setImage2Status(false);
        //make sure image1 status is false
        setImage1Status(false);
      }
      else{
        currentStatus = false;
        setImage2Direction("R");
        setImage2Status(true);
      }
      setImage3Status(currentStatus);
    }
  }
  
  //need to check if the middle image is going to the right or left
  
  //1. Image 3 is chosen and Image 2 moves to the left
  let currentImage2;
  if ((currentImageClicked == 3 && Image3Status == true ) 
  || (currentImageClicked == 1 && Image1Status == false) 
  || (currentImageClicked == 2 && Image2Direction == "R")
  ){
    currentImage2 = <Image2TabletLeft setImageStatus={setImageStatus}
      currentStatus={Image2Status} setCurrentImageClickedIndex={setCurrentImageClickedIndex}/>
  }
  // 2. Image 1 is clicked and Image 2 moves to the right
  else if((currentImageClicked == 1 && Image1Status == true ) 
  || ( currentImageClicked == 3 && Image3Status == false) 
  || ( currentImageClicked == 2 &&  Image2Direction == "L")
  )
  {
    currentImage2 = <Image2TabletRight setImageStatus={setImageStatus} 
    currentStatus={Image2Status} 
    setCurrentImageClickedIndex={setCurrentImageClickedIndex}/>
  }
  
  
  return (
    <div id="HomePage">
      <div id="FirstContentContainer">
        <div id="WeddingPhoto"></div>
        <div id="TextArea">
          <span id="PerfectBrideTitle">{TEXT.PerfectBrideTitle}</span>
          <span id="Intro1">{TEXT.Intro1}</span>
          <span id="Intro2">{TEXT.Intro2}</span>
        </div>
      </div>
      <div id="OtherImagesArea">
        <div id="OtherImages1"
          onClick={()=> {
          setImageStatus(1);
          setCurrentImageClickedIndex(1);
            
          }}
          style={{
            //here there is grid column start or column end
            // as the transition animation works here as expected
            gridColumnStart: Image1Status ? "1" : "1",
            gridColumnEnd: Image1Status ? "5" : "2",
            marginLeft: Image1Status ? "5%" : "calc(100% - 30% - 30% - 20%)",
            width: Image1Status ? "93%" : "30%"
          }}
        >
        </div>
        {/*<div id="OtherImages2"></div>*/}
        {currentImage2}
        <div id="OtherImages3"
        onClick={()=> {
          setImageStatus(3);
          setCurrentImageClickedIndex(3);
        }}
        style={{
          gridColumn: "5",
          width: Image3Status ? "370%" : "30%",
          transition: "0.8s",
          marginLeft: Image3Status ? "-300%" : "calc(35% + 5px)",
          // animationDirection: "right",
        }}
        ></div>
      </div>
    </div>
    )
}

const MobileHomePage = (props) => {
  
  const [currentImageClicked, setCurrentImageClickedIndex] = useState(1);
  //let 0 be the event where the user does not hover the mouse on the images;
  const [Image1Status,setImage1Status] = useState(true);
  const [Image2Status,setImage2Status] = useState(false);
  const [Image3Status,setImage3Status] = useState(false);
  const [Image2Direction, setImage2Direction] = useState("L");
  // where L and R represents Left and Right directions of image 2 respectively.
  
  const setImageStatus = (imageNum) => {
    let currentStatus;
    if (imageNum == 1){
      if (Image1Status == false){
        currentStatus = true
        setImage2Direction("R");
        setImage2Status(false);
        // need to make sure image3 status is false
        setImage3Status(false);
      }
      else{
        currentStatus = false;
        setImage2Direction("L")
        // i need to trigger the part where the 2nd image
        // is automatically enlarged :D
        setImage2Status(true);
  
        
      }
      setImage1Status(currentStatus);
    }
    else if (imageNum == 2){
      let currentStatus;
      if (Image2Status == false){
        currentStatus = true;
        // make sure that both image 1 and image 3 status is false;
        setImage1Status(false);
        setImage3Status(false);
      }
      else{
        currentStatus = false;
        // just make image 1 status true
        setImage1Status(true);
        setImage3Status(false);
        setImage2Direction("L");
      }
      setImage2Status(currentStatus);
    }
    else if (imageNum == 3){
      let currentStatus;
      if (Image3Status == false){
        currentStatus = true;
        setImage2Direction("L");
        setImage2Status(false);
        //make sure image1 status is false
        setImage1Status(false);
      }
      else{
        currentStatus = false;
        setImage2Direction("R");
        setImage2Status(true);
      }
      setImage3Status(currentStatus);
    }
  }
  
  //need to check if the middle image is going to the right or left
  
  //1. Image 3 is chosen and Image 2 moves to the left
  let currentImage2;
  if ((currentImageClicked == 3 && Image3Status == true ) 
  || (currentImageClicked == 1 && Image1Status == false) 
  || (currentImageClicked == 2 && Image2Direction == "R")
  ){
    currentImage2 = <Image2TabletLeft setImageStatus={setImageStatus}
      currentStatus={Image2Status} setCurrentImageClickedIndex={setCurrentImageClickedIndex}/>
  }
  // 2. Image 1 is clicked and Image 2 moves to the right
  else if((currentImageClicked == 1 && Image1Status == true ) 
  || ( currentImageClicked == 3 && Image3Status == false) 
  || ( currentImageClicked == 2 &&  Image2Direction == "L")
  )
  {
    currentImage2 = <Image2TabletRight setImageStatus={setImageStatus} 
    currentStatus={Image2Status} 
    setCurrentImageClickedIndex={setCurrentImageClickedIndex}/>
  }
  
  
  return (
    <div id="HomePage">
      <div id="FirstContentContainer">
        <div id="WeddingPhoto"></div>
        <div id="TextArea">
          <span id="PerfectBrideTitle">{TEXT.PerfectBrideTitle}</span>
          <span id="Intro1">{TEXT.Intro1}</span>
          <span id="Intro2">{TEXT.Intro2}</span>
        </div>
      </div>
      <div id="OtherImagesArea">
        <div id="OtherImages1"
          onClick={()=> {
          setImageStatus(1);
          setCurrentImageClickedIndex(1);
            
          }}
          style={{
            //here there is grid column start or column end
            // as the transition animation works here as expected
            gridColumnStart: Image1Status ? "1" : "1",
            gridColumnEnd: Image1Status ? "5" : "2",
            marginLeft: Image1Status ? "5%" : "calc(100% - 30% - 30% - 20%)",
            width: Image1Status ? "93%" : "30%"
          }}
        >
        </div>
        {/*<div id="OtherImages2"></div>*/}
        {currentImage2}
        <div id="OtherImages3"
        onClick={()=> {
          setImageStatus(3);
          setCurrentImageClickedIndex(3);
        }}
        style={{
          gridColumn: "5",
          width: Image3Status ? "370%" : "30%",
          transition: "0.8s",
          marginLeft: Image3Status ? "-300%" : "calc(35% + 5px)",
          // animationDirection: "right",
        }}
        ></div>
      </div>
    </div>
    )
}

const Image2TabletLeft = (props) => {
  return (
    <div id="OtherImages2Left" onClick={()=> {
      props.setImageStatus(2);
      props.setCurrentImageClickedIndex(2);
    }}
    style={{
      width: props.currentStatus ? "367%" : "30%",
      
    }}
    >
    </div>
    )
}

const Image2TabletRight = (props) => {
  return (
    <div id="OtherImages2Right" 
    onClick={()=> {
      props.setImageStatus(2);
      props.setCurrentImageClickedIndex(2);
      
    }}
    style={{
      width: props.currentStatus ? "367%" : "30%",
      marginLeft: props.currentStatus ? "-340%" : "0"
    }}
    >
      
    </div>
    )
}

export default HomePage
