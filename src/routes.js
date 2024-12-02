import Shop from "./views/Shop";
import Login from "./views/Login";
import AuthGuard from "./auth/AuthGuard";
import PageNotFound from "./views/PageNotFound";


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
    {path: "/*", element: <PageNotFound/>}
]

export default routes;