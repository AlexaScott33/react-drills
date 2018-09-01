import React from 'react';

export default function NumberInput(props) {
    console.log(props);
    return (
        <div className="form-group">
            <label htmlFor={props.id}>{props.label}</label>
            <input type="number" id={props.id} min={props.min} max={props.max} 
            onChange={(e) => props.onChange(e.currentTarget.value)} value={props.value}
            />
        </div>
    );
}


