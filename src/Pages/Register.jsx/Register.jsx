import { useContext } from "react";
import Header from "../../Shared/Header/Header";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegisterPage = e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        
        createUser(email,password)
        .then(result=>{
            swal("Good job!", "You clicked the button!", "success");
            console.log('create successfully',result.user)
        })
        .catch(error=>{
            swal("Oopss!", "email-already-in-use", "error");
        })
    }


    return (
        <section>
            <Header></Header>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  onSubmit={handleRegisterPage} className="card-body">
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered"  />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
              

            <Link to="/login">
        <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
        Already have an account? Please <button className="btn btn-link">Login</button>
      
    </p></Link>
            
            </form>
          </div>
        </div>
      </div>
        </section>
    );
};

export default Register;