import { BrowserRouter, Navigate } from "react-router-dom"
import {Route,Routes,NavLink} from 'react-router-dom';
import { routes } from "./routes";

import logo from "../react.svg";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <>  
        <Suspense fallback={<span>Loading.....</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>

                        <img src={logo} alt="React Logo" style={{width: 100, height: 100, marginTop: 10}}/>
                        
                        <ul>

                            {
                                routes.map( route =>( 
                                <li key={route.name} >
                                    <NavLink to={route.to} className={ ({isActive}) => isActive ? 'nav-active' : '' }>{route.name}</NavLink>
                                </li> 
                                ))
                            }

                        </ul>
                    </nav>


                    <Routes>
                        {
                            routes.map( route => <Route key={route.name} path={route.path} element={<route.Component/> }/> )
                        }        
                        <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    </>
  )
}
