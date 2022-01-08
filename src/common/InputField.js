import React, { useState } from 'react';
import { validateInput } from './Vailidation';
import PropTypes from 'prop-types';
import { Form} from 'react-bootstrap';



const InputField = ({name,value, validators, lablestyleClass, InputstyleClass, onChange, label, placeholder, type, fromrowStyleclass}) => {

    const [error, setError] = useState(false);

    const handleChange = (event) =>{
        const {value} = event.target;
        setError(validateInput(validators, value));
        onChange(event);
    }

    return (
        <Form.Group className={`mb-0 ${fromrowStyleclass}`}>
            {label && <Form.Label className={lablestyleClass}>{label}<span className="custom-hash">*</span></Form.Label>}

            {type === 'textarea' ? (
                <Form.Control 
                as="textarea" 
                rows={5}
                name={name} 
                className={InputstyleClass}
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
                />
            ) : (
                <Form.Control 
                name={name}
                value={value}
                className={InputstyleClass} 
                type={type} 
                placeholder={placeholder} 
                onChange={handleChange}
                />
            )}

                {error && <span className="text-danger">{error.message}</span>}
                
        </Form.Group>
    )
};

InputField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    validators:PropTypes.array,
    onChange: PropTypes.func.isRequired
    

};


InputField.defaultProps = {
    label: '',
    value: '',
    className: '',
    type: '',
    placeholder: '',
    validators:[]
};  


export default InputField;
