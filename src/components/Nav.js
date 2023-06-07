import React from "react";
import NavigateBar from "./Navbar";

const Nav = (props) => {
  return(
    <>
      <NavigateBar/>
      {props.children}
    </>
  )
}

export default Nav;