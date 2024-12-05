import React from 'react';
import useAuth from "../hooks/useAuth";


function Header(props) {
    const {logout} = useAuth()

    return (
        <div className={"flex items-center justify-between h-16 bg-secondary"}>
            <p className={"m-4 text-third text-2xl font-semibold"}>Rastava-shop</p>
            <button className={"m-4 p-2 rounded bg-third text-content"} onClick={() => logout()}>
                Logout
            </button>
        </div>
    );
}

export default Header;