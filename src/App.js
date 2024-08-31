import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import OurStory from "./moduals/company/ourstory";
import Home from "./moduals/home";
import Company from "./moduals/company";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/company" element={ <Company/> } />
                    <Route path="/company/ourstory" element={ <OurStory/> } />
                </Routes>
            </BrowserRouter>
        </div>
    );}

export default App;
