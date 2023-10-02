import { Link } from "react-router-dom";

function Linkss(){
    return(
        <>
        <div id="linkss">
        <Link className="sys" to="/home">Home</Link>
        <Link className="sys" to="/student">Student</Link>
        <Link className="sys" to="/contact">Contact</Link>
        </div>
        </>
    )
}
export default Linkss;