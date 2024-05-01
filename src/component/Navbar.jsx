import { Link } from 'react-router-dom';
import '../App.css'

function Navbar() {
    const myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    return (
        <>
            <div className="topnav" id="myTopnav">
                <Link to="/home" >Home</Link>
                <Link to="/login">Login</Link>
                <Link to="javascript:void(0);" className="icon" onClick={myFunction}>
                    <i className="fa fa-bars"></i>
                </Link>
            </div>

        </>
    )
}

export default Navbar