import React from 'react';
import Heder from './Heder';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <>
            <Heder/>
            {children}
            <Footer/>   
        </>
    );
}

export default Layout;
