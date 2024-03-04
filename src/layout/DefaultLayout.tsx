import { Link } from "react-router-dom";
import React from "react";
import '../layout/DefaultLayout.css'


interface DefaultLayoutProps{
    children: React.ReactNode,
}
export default function DefaultLayout({children}:DefaultLayoutProps){
    const logo ='https://firebasestorage.googleapis.com/v0/b/react-firebase-upload-480ee.appspot.com/o/ImagePublication%2FLogo-removebg-preview.png_1709518626057?alt=media&token=f2cf977d-3696-456e-99a2-ae7c602453cc'
    return(
        <>
        <header className="header-layout">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <nav className="nav-layout">
                <ul className="ul-layout">
                    <li className="li--layout">
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="li--layout">
                        <Link to="/login">Iniciar Sesion</Link>
                    </li>   
                    <li className="li--layout">
                        <Link to="/Signup">Registrarse</Link>
                    </li>
                    {/* <li className="li--layout">
                        <Link to="/ServicesPage">Servicios</Link>
                    </li> */}
                </ul>
            </nav>
        </header>
        <main>
            {children}
        </main>
    </>
    )
    
}