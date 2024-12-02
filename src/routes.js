import Shop from "./views/Shop";
import Login from "./views/Login";
import AuthGuard from "./auth/AuthGuard";


const routes = [
    {path: "/login", element: <Login/>},
    {
        path: "/",
        element: (
            <AuthGuard>
                <Shop/>
            </AuthGuard>
        )
    },
]

export default routes;