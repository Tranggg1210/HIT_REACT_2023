import React from "react";
import { Routes, Route } from 'react-router-dom'
import HomeNotSignIn from "./pages/HomeNotSignIn";
import SignIn from "./components/form/SignIn";
import HomeSignIn from "./pages/HomeSignIn";


const App = () => {
  return (
    <div className="app">
        <Routes>
          <Route path='HIT_REACT_2023/' element={<HomeNotSignIn/>}></Route>
          <Route path='HIT_REACT_2023/signin' element={<SignIn/>}></Route>
          <Route path='HIT_REACT_2023/homesignin' element={<HomeSignIn/>}></Route>
          <Route path='*' element={<h1>Not found</h1>}></Route>
        </Routes>
        {/* <HomeNotSignIn/> */}
        {/* <HomeSignIn/> */}
        
    </div>
  )
}

export default App;



