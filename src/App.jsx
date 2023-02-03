import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {routes} from "./modules/routes";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map(({path, element: Element, exact}, index) => (
            <Route
              key={index}
              exact={exact}
              path={path}
              element={<Element/>}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
