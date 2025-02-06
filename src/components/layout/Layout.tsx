import React, { useEffect } from 'react'
import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import { useDispatch, useSelector } from 'react-redux';

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout