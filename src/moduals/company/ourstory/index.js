import React from "react";
import Herobanner from "./herobanner";
import Evolution from "./evolutionsection";
import Culture from "./culture";
import Header from "../../../shared/components/header";
import Footer from "../../../shared/components/footer";

export default function OurStory(){
    return(
        <div>
            <Header />
            <Herobanner/>
            <Evolution/>
            <Culture/>
            <Footer />
        </div>
    )
}