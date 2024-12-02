import React from 'react';
import {Link} from "react-router-dom";

function PageNotFound(props) {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-bg">
            <h1 className="text-9xl font-extrabold text-content tracking-widest">404</h1>
            <div className="bg-third px-2 text-content text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5">
                <a
                    className="relative inline-block text-sm font-medium text-third group active:text-orange-500 focus:outline-none focus:ring"
                >
        <span
            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-secondary group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

                    <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
          <Link to="/">Go Home</Link>
        </span>
                </a>
            </button>
        </main>
    );
}

export default PageNotFound;