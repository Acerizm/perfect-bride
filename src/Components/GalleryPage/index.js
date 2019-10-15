import React,{Component} from "react";
//import css here
import "./index.css";
import * as Images from "../../images/index.js";

//import window height here
import {useWindowWidth, useWindowHeight} from "../ResponsiveComponent/index.js";
import {minDesktopWidth,minMobileWidth,minTabletWidth} from "../ResponsiveComponent/index.js";

const imageArray = [
  Images.Image1,
  Images.Image2,
  Images.Image3,
  Images.Image4,
  Images.Image5,
];

const titleArray = [
  "Title 1",
  "Title 2",
  "Title 3",
  "Title 4",
  "Title 5",
];

class GalleryPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      currentImage: imageArray[0],
      currentTitle: titleArray[0],
      currentImageIndex: 0,
      currentTitleIndex: 0,
      numOfImages: imageArray.length,
      numOfTitles: titleArray.length,
    };


  }

  render(){
    let currentImage = this.state.currentImage;
    let currentTitle = this.state.currentTitle;
    let currentImageIndex = this.state.currentImageIndex;
    let currentTitleIndex = this.state.currentTitleIndex;
    let numOfImages = this.state.numOfImages;
    let numOfTitles = this.state.numOfTitles;
    return(
      <div id="GalleryPageMainContainer">
        <div id="GalleryHeading">Gallery</div>
        <div id="MainImageContainer">
          {/* Heavy logic here */}
          <div id="prev" onClick={()=> {
            if (currentImageIndex <= 0){
              this.setState({
                currentImage: imageArray[numOfImages - 1],
                currentImageIndex: numOfImages - 1,
                currentTitleIndex: numOfTitles - 1,
                currentTitle: titleArray[numOfTitles - 1],
              })
            }
            else{
              this.setState({
                currentImage: imageArray[currentImageIndex - 1],
                currentImageIndex: currentImageIndex - 1,
                currentTitleIndex: currentTitleIndex - 1,
                currentTitle: titleArray[currentTitleIndex - 1],
              })
            }
          }}>❮
          </div>
          <div id="next" onClick={()=> {
            if (currentImageIndex >= numOfImages - 1){
              this.setState({
                currentImage: imageArray[0],
                currentImageIndex: 0,
                currentTitleIndex: 0,
                currentTitle: titleArray[0],
              })
            }
            else{
              this.setState({
                currentImage: imageArray[currentImageIndex+1],
                currentImageIndex: currentImageIndex + 1,
                currentTitleIndex: currentTitleIndex + 1,
                currentTitle: titleArray[currentTitleIndex+1],
              })
            }
          }}>❯
          </div>
           {/* End of Heavy logic here */}
          <img src={currentImage} id="MainImageSelected" />
        </div>
        <div id="CurrentImageTitle"><span>{currentTitle}</span></div>
        <div id="AllImagesRow">
          <img src={Images.Image1} className="AllImages" alt="Image 1" 
          onClick={() => this.setState({currentImage: imageArray[0],currentTitle: titleArray[0],currentImageIndex:0,currentTitleIndex:0})}
          style={{opacity: currentImageIndex == 0 ? "1" : "0.6"}}
          />
          <img src={Images.Image2} className="AllImages" alt="Image 2" onClick={() => this.setState({currentImage: imageArray[1],currentTitle: titleArray[1],currentImageIndex:1,currentTitleIndex:1})}
            style={{opacity: currentImageIndex == 1 ? "1" : "0.6"}}/>
          <img src={Images.Image3} className="AllImages" alt="Image 3" onClick={() => this.setState({currentImage: imageArray[2],currentTitle: titleArray[2],currentImageIndex:2,currentTitleIndex:2})}
            style={{opacity: currentImageIndex == 2 ? "1" : "0.6"}}/>
          <img src={Images.Image4} className="AllImages" alt="Image 4" onClick={() => this.setState({currentImage: imageArray[3],currentTitle: titleArray[3],currentImageIndex:3,currentTitleIndex:3})}
            style={{opacity: currentImageIndex == 3 ? "1" : "0.6"}}/>
          <img src={Images.Image5} className="AllImages" alt="Image 5" onClick={() => this.setState({currentImage: imageArray[4],currentTitle: titleArray[4],currentImageIndex:4,currentTitleIndex:4})}
            style={{opacity: currentImageIndex == 4 ? "1" : "0.6"}}/>
        </div>
      </div>
    )
  }
}

export default GalleryPage;