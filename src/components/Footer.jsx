import React from "react";
import GetYear from "./GetYear.jsx";

function Footer(){
    return (
        <footer>
            <p>Copyright AugustInc © {GetYear()}</p> 
        </footer>
    );
}

export default Footer;