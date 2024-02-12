import React from "react";
import propsTypes from "prop-types";
const TextInput=props=>(
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label> <br /> <br />
        <input className={props.error ? 'form-control is-invalid':"form-control"} type={props.type} name={props.name} id={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange} /> 
        {props.error && <div className="invalid-feedback">{props.error}</div>}
    </div>
);


    




TextInput.propsTypes={
    name:propsTypes.string.isRequired,
    label:propsTypes.string.isRequired,
    type:propsTypes.string.isRequired,
    placeholder:propsTypes.string.isRequired,
    value:propsTypes.string.isRequired,
    onChange:propsTypes.func.isRequired,
    error:propsTypes.string
   
};
TextInput.defaultProps={
    type:"text",
    label:"",
    placeholder:""
};

export default TextInput;