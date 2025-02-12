import React, { useEffect } from 'react'
import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default Layout