import { useContext } from "react"
import { authContext } from "../contexts/AuthProvider/AuthProvider"


const useAuth = () => {
    const auth = useContext(authContext);
    return auth;
}

export default useAuth;