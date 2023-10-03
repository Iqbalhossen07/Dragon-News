
import { useContext } from "react";
import Header from "../../Shared/Header/Header";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation,useNavigate } from "react-router-dom";


const Login = () => {
  const location = useLocation();
  console.log(location)
  const navigate = useNavigate()
  const {signUser} = useContext(AuthContext)

  const handleLoginPage = e=>{
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email,password)
      
      signUser(email,password)
      .then(result=>{
          swal("Good job!", "Login successfully ", "success");
          navigate(location?.state ? location.state : '/')
          
          
      })
      .catch(error=>{
          swal("Oopss!", "email or password don't match", "error");
          console.error(error)
      })
  }



   
    return (
<section>
    <Header></Header>
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLoginPage} className="card-body">
  
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered"  />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
        <Link to="/register">
        <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                 New Here? Please <button className="btn btn-link">Register</button>
      
    </p></Link>
             
      </form>
    </div>
  </div>
</div>
</section>
    );
};

export default Login;