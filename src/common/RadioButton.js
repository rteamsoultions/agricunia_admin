import React from 'react';



function RadioButton({ type,BtnLable, name, id, value}) {
    return (
    <div class="checkboxes checkbox-add_top_15 mr-2">
        <label class="container_check-detail">
            <input 
            type={type} 
            name={name}
            id={id} 
            value={value}/>
            {BtnLable && <span class="checkmark">{BtnLable}</span>}
        </label>
    </div>
    )
}

export default RadioButton;
