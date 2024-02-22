import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-route-dom";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>

        </Route>

        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
