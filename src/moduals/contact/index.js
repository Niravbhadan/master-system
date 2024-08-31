import React from "react";
import Header from "../../shared/components/header";
import Footer from "../../shared/components/footer";
import Contactherobanner from "./contactherobanner";
import Corporate_office from "./corporate_office";
export default function Contact(){
    return(
        <div>
           <Header/>
           <Contactherobanner/>
           <Corporate_office/>
           <Footer/>
        </div>
    )
}