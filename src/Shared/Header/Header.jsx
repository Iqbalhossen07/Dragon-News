import { Link, NavLink } from "react-router-dom";
import user from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import auth from "../../Pages/Firebase/Firebase.config";

const Header = () => {
  const {showEmail,logOut} = useContext(AuthContext)

  const handleLogout = ()=>{
    logOut(auth)
    .then(()=>{
      swal("wow!", "LogOut success fully", "error");
    })
    .catch(error=>{
      console.log(error)
    })

  }
  // console.log(showEmail)
    const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/about">About</NavLink></li>
    <li><NavLink to="/career">Career</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
        
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end ">
  {
            showEmail && <p>{showEmail.email}</p>
          }
     <div className="dropdown dropdown-end">
     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className=" w-10 rounded-full">
          <div>
          <img src={user} />
          </div>
          

        </div>
      
      </label>
      <ul tabIndex={0} className="lg:space-y-2 mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <NavLink className="justify-between">
            Profile
          </NavLink>
        </li>
        <li> <NavLink to="/login">Login</NavLink> </li>
        <li> <NavLink to="/register">Register</NavLink> </li>
        {
          showEmail && <li onClick={handleLogout}> <NavLink >Logout</NavLink> </li>
        }
        
 
      </ul>
     </div>
    {
      showEmail ? <div>
        <Link to="/login">
    <button onClick={handleLogout} className="btn">LogOut</button>
    </Link>
      </div> : 
      <div>
        <Link to="/login">
    <button className="btn">Login</button>
    </Link>
      </div>
    }
  </div>
</div>
    );
};

export default Header;