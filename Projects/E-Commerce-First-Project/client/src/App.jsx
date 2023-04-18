
import './App.css';

import { Routes, Route } from "react-router-dom";

import { Home } from "./Page/Home.Page/Home";
import { SignIn } from './Page/SignIn/SignIn';
import { LogIn } from './Page/LogIn/LogIn';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Navbar />
          <Home />
        </>
      }></Route>
      <Route path="/user/logIn" element={
        <>
          <Navbar page={"logIn"} />

          <LogIn />
        </>
      }></Route>
      <Route path="/user/signIn" element={
        <>
          <Navbar page={"signIn"} />
          <SignIn />
        </>
      }></Route>
    </Routes>
  );
}

export default App;
