import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-route-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
<Route index element={<Home />}></Route>
        </Route>

        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
