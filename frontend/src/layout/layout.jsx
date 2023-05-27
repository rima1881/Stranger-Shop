import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer"
import Signup from "./components/signup/Signup"
import Login from "./components/login/Login"
import { useState } from "react"


export default function Layout(){

  const [logingIn , setLoginIn] = useState(false)
  const [SigningUp , setSigningUp] = useState(false)

    return(
        <main>

            <Navbar loginBtnHandle={ () => setLoginIn(true) } signupBtnHandle={() => setSigningUp(true)} />
            <Outlet />
            <Footer />
            
            <Login on={logingIn} closeBtnhandle={() => setLoginIn(false)} />
            <Signup on={SigningUp} closeBtnhandle={() => setSigningUp(false)}  />
            
        </main>
    )
}