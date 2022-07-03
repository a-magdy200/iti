import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import SingleActor from "./pages/SingleActor";
const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path=":id" element={<SingleActor/>}/>
      <Route path="/" element={<Home />}/>
    </Routes>
  </BrowserRouter>;
}
export default App;
