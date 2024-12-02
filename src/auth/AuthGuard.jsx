import {Navigate, useLocation} from "react-router-dom";

import Cookies from "js-cookie";

export default function AuthGuard({children}) {
    const isAuthenticated = Cookies.get("auth");
    const {path} = useLocation();

    if (isAuthenticated) return <>{children}</>

    return <Navigate replace to="/login" state={{from: path}}/>;
}