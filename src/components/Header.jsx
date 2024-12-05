import React from 'react';
import useAuth from "../hooks/useAuth";
import CustomShoppingCart from "./CustomShoppingCart";


function Header(props) {
    const {logout} = useAuth()

    return (
        <div className={"flex items-center justify-between h-16 bg-secondary"}>
            <p className={"m-4 text-third text-2xl font-semibold"}>Rastava-shop</p>
            <div className={"flex items-center gap-4"}>
                    <CustomShoppingCart/>
                <button className={"m-4 p-2 rounded bg-third text-content"} onClick={() => logout()}>
                    Logout
                </button>
            </div>

        </div>
    );
}

export default Header;