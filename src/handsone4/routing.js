import { BrowserRouter,Routes, Route } from "react-router-dom";
import Student from "./student";
import Contact from "./contact";
import Home from "./home";
import Linkss from "./LinksRepo";

function Routing(){
    return(
        <>
        <BrowserRouter>
        <Linkss></Linkss>
        <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/student" element={<Student></Student>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        </BrowserRouter>
    
        </>
    )
}
export default Routing;