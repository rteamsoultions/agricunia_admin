import React from 'react';
import { Form } from 'react-bootstrap';



function SelectOption({value, data, styleClass, label, defauultvalue, onChange, name, disabled}) {

    const handleChange = (event) =>{
       console.log(event);
    }

    return (
        <Form.Group className="mb-0 dropdown">
            {label && <Form.Label>{label}</Form.Label>}
            <Form.Control  
                value={value} 
                as="select" 
                name={name} 
                className={styleClass} 
                onChange={handleChange}>
                <option selected="true" disabled={disabled}>{defauultvalue} </option>
                {data.map((item, key) => (
                    <option key={key} value={item.value}>{item.label}</option>
                ))}
            </Form.Control>
        </Form.Group>
    )
}

export default SelectOption
