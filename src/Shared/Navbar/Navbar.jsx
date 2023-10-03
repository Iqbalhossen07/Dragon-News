import logo from "../../assets/logo.png"
import moment from 'moment';
const Navbar = () => {
    return (
        <div className="text-center">
           <img className="mx-auto" src={logo} alt="" />
           <p>journalism WithOut Fear or Favour</p>
           <h2>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</h2>
        </div>
    );
};

export default Navbar;