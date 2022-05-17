import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import StudentDetails from "./pages/StudentDetails";
import Students from "./pages/Students";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
const App = () => {
  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Students />}/>
      <Route path=":studentId" element={<StudentDetails/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="error" element={<ErrorPage/>}/>
    </Routes>
  </BrowserRouter>;
}
export default App;
