import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/footer";
import Search from "../Search/Search";
import Main from '../Main/Main'
import { Outlet } from "react-router-dom";
export const Root = () =>{
 return(
    <>
      <Header></Header>
      <Search></Search>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
 )
}