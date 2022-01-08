import React from 'react';
import { Button } from "react-bootstrap";


function Buttons({ type, handleClick, children, styleClass }) {
    return (
    <Button 
       
        className={styleClass} 
        type={type} 
        onClick={handleClick}>
        {children}
    </Button>
    )
}

export default Buttons;
