import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import * as ROUTES from "./Routes/index.js";
import HomePage from "./Components/HomePage/index.js";
import NavBar from "./Components/Navbar/index.js";
import Footer from "./Components/Footer/index.js";
import OrganizerPage from "./Components/OrganizerPage/index.js";
import SponsorsPage from "./Components/SponsorsPage/index.js";
import GalleryPage from "./Components/GalleryPage/index.js";
import VideosPage from "./Components/VideosPage/index.js";
import NewsPage from "./Components/NewsPage/index.js";

console.disableYellowBox = true;

ReactDOM.render(
  <Router>
    <div id="perfectBride">
      <NavBar/>
      <Route exact path={ROUTES.HOME_PAGE} component={HomePage}></Route>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path={ROUTES.ORGANIZER_PAGE} component={OrganizerPage}></Route>
      <Route exact path={ROUTES.SPONSORS_PAGE} component={SponsorsPage}></Route>
      <Route exact path={ROUTES.GALLERY_PAGE} component={GalleryPage}></Route>
      <Route exact path={ROUTES.VIDEOS_PAGE} component={VideosPage}></Route>
      <Route exact path={ROUTES.NEWS_PAGE} component={NewsPage}></Route>
      <Footer/>
    </div>
  </Router>
  , document.getElementById('root'));
