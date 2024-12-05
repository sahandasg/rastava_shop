import './App.css';
import {useRoutes} from "react-router-dom";
import routes from "./routes";
import {AuthProvider} from "./contexts/AuthContext";

function App() {
     const router = useRoutes(routes)

    return (
        <AuthProvider>
            {router}
        </AuthProvider>
    );
}

export default App;
