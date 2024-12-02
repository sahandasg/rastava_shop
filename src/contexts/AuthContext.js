import {createContext, useState} from 'react';
import {httpService} from "../api/httpService.ts";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext({
    login: () => Promise.resolve(),
    logout: () => {
    }
});

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const navigate = useNavigate();


    const login = (event) => {
        setLoading(true)
        const body = {username: event.userName, password: event.password};
        httpService("POST", "auth/login", {}, body)
            .then(res => {
                if (res.status === 200) {
                    Cookies.set("auth", true, {expires: 7});
                    Cookies.set("Token", res.data.token, {expires: 7});
                    navigate("/")
                }
            })
            .catch(err => setError(err.response.data))
            .finally(() => setLoading(false))
    }

    const logout = (event) => {
        Cookies.remove("auth");
        Cookies.remove("Token");
        navigate("/login")
    }

    return <AuthContext.Provider value={{login, logout, data, error, loading,}}>
        {children}
    </AuthContext.Provider>;
}
export default AuthContext;