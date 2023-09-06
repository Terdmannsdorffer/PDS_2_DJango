import React from "react";
import logo from './logo.svg';
import './App.css';
import HomeComponent from "./HomeComponent/HomeComponent";
import TopNav from "./Utilities/TopNav";
import {HashRouter, Route, Routes} from "react-router-dom";
import TareaComponent from "./TareaComponent/TareaComponent";

function App() {
  return (
      <div className="App">
          <link href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap" rel="stylesheet"></link>
          <div className="appBg"></div>
          {/*<div className="content">*/}
          <HashRouter>

              <div className="App__content">
                  <TopNav/>


                  <Routes>
                      {/*<Route exact path="/" element={<LoginForm onSubmit={handleLogIn} />} />*/}
                      <Route exact path="/" element={<HomeComponent />} />
                      <Route exact path="/tarea" element={<TareaComponent />} />
                  </Routes>
              </div>
          </HashRouter>
          {/*</div>*/}
      </div>
  );
}

export default App;
