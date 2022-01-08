import React from 'react'
import { useSelector } from 'react-redux';
import AuthHeader from './header/AuthHeader'
import Sidebar from './sidebar/Sidebar'

const Layout = ({children}) => {
    const { is_toggleMenu } = useSelector((state) => state.menuToggle);
    const mainCss = is_toggleMenu ? 'main-big' : 'main' 
    return (
        <div>
            <AuthHeader />
            <Sidebar />
            <div id={mainCss}>
                {children}
            </div>
        </div>
    )
}

export default Layout
