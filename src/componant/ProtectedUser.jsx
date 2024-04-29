import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function Protected( { children } ) {
     const navigate = useNavigate();
    const role = localStorage.getItem( "roleBycrypt" );
    useEffect( () => {
        if ( role !== "user" && role !== "admin" ) {
            navigate( '/login' );
          }
    })
  
     return role === "user" || role === "admin" ? children : null;
 
}
