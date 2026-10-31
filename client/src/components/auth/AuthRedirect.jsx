import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthRedirect = ({children}) => {
    const { token, user } = useSelector((state) => state.auth);

    if(token && user) {
        if(user.role === "applicant") {
            return <Navigate to={`/applicant/${user.industry.toLowerCase().split(" ").join("-")}/dashboard`}/>
        }
        else if(user.role === "employer") {
            return <Navigate to={`/employer/dashboard`}/>
        }
    }

    return children;
};

export default AuthRedirect;