import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


const PrivateProvider = ({children}) => {
    const {showEmail,loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname)
    console.log(location)
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(showEmail){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateProvider;