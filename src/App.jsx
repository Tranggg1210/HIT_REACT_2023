import React from "react";
import { Routes, Route } from 'react-router-dom'
// import store from './app/context'
import Home from "./pages/Home";
import SignIn from "./components/form/SignIn"
import Content from "./components/content/Content";
import Profile from './components/profile/Profile'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/HIT_REACT_2023/" element={<Home />}>
          <Route path="/HIT_REACT_2023/" element={<Content />}/>
        </Route>
        <Route path="/HIT_REACT_2023/signin" element={<SignIn />} />
        <Route path="/HIT_REACT_2023/profile" element={<Profile />} />
        <Route path="*" element={<div>Not found</div>}></Route>
      </Routes>
    </div>
  )
}

export default App;



