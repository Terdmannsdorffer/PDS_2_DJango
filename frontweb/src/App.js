import React from 'react';
import { Route, Routes, HashRouter} from 'react-router-dom';
import './App.css';
import Diagram from "./DiagramComponent/Diagram";

function App() {
  return (
<div className="App">
          <link href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap" rel="stylesheet"></link>
          <div className="appBg"></div>
          {/*<div className="content">*/}
          <HashRouter>

              <div className="App__content">
                  <Routes>
                      {/*<Route exact path="/" element={<LoginForm onSubmit={handleLogIn} />} />*/}
                      <Route exact path="/circuit" element={< Diagram />} />
                  </Routes>
              </div>
          </HashRouter>
          {/*</div>*/}
      </div>
  );
}

export default App;

