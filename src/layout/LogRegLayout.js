import React from 'react'
import Header from './header/Header'

function LogRegLayout({ children}) {
    return (
        <div className="loginreg-bg">
            <Header/>
            {children}
        </div>
    )
}

export default LogRegLayout;
