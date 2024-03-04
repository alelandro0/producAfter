import React from "react";
import { useAuth } from "../Autentication/AutProvider";
import { Link } from "react-router-dom";
import { API_URL } from "../Autentication/constanst";
import './nav.css'
import user from '../../public/img/user.svg'

export  function PortalLayout({children}: {children:React.ReactNode}){
 const auth = useAuth();
 const logo ='https://firebasestorage.googleapis.com/v0/b/react-firebase-upload-480ee.appspot.com/o/ImagePublication%2FLogo-removebg-preview.png_1709518626057?alt=media&token=f2cf977d-3696-456e-99a2-ae7c602453cc'
    async function handleSignOut(e:React.MouseEvent<HTMLAnchorElement>){
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}/signout`,{
                method: "DELETE",
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth.getRefreshToken()}`
                }
            })

            if(response.ok){
                auth.signOut();
            }
        } catch (error) {
          console.error( error);
        }
    }

    return (
      <>
      <header className="header-dashboard">
        <nav className="box">
          <ul className="componet">
          <li className="li-dashboard" style={{width:520}}>
             <img src={logo} alt="logo" className="logo" />
          </li>
            <li className="li-dashboard">
              <Link style={{color:'White',fontSize:'18px', textDecoration:'none'}} to="/dashboard"> <img className="user" src={user} alt="" /> Bienvenido:  {auth.getUser()?.name ?? ""}</Link>
            </li>
            {auth.getUser()?.roll == 'Cliente'?(
            <li className="li-dashboard">
              <Link style={{color:'White',fontSize:'18px', textDecoration:'none'}} to="/EditarPerfil">Perfil {auth.getUser()?.roll ?? ""}</Link>
            </li>
            ):null}
            {auth.getUser()?.roll == 'Profesional'?(
            <li className="li-dashboard">
              <Link style={{color:'White',fontSize:'18px', textDecoration:'none'}} to="/EditarPerfil">Perfil {auth.getUser()?.roll ?? ""}</Link>
            </li>
            ):null}

            {/* <li className="li-dashboard">
            <Link style={{color:'White',fontSize:'18px', textDecoration:'none'}}  to="/chat"  >Chat</Link>
            </li> */}

            {auth.getUser()?.roll ==='Cliente'? (
            <li >
              <Link style={{color:'White',fontSize:'18px', textDecoration:'none'}} to="/consultar-citas">Mis Citas </Link>
            </li>):null}
            {auth.getUser()?.roll ==='Profesional'? (
            <li >
              <Link style={{color:'White',fontSize:'18px', textDecoration:'none'}} to="/Agenda">Mi Agenda</Link>
            </li>):null}
            <li >
              <a style={{color:'White',fontSize:'18px',textDecoration:'none'}} href="#" onClick={handleSignOut}>
                Salir
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </>
    )
}