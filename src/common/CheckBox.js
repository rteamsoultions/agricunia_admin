import React from 'react'

function CheckBox({ type, label, name, id, value, styleCheck}) {
    return (
        <>
            <label class="container_check">{label}
                <input 
                type={type} 
                name={name} 
                id={id} 
                value={value} 
                 />
                <span class={styleCheck}></span>
            </label>
            
       </>
    )
}

export default CheckBox
