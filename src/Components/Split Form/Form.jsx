import React from "react";
import TextInput from "./TextInput";
import propsTypes from "prop-types";
const Form=props=>(
    <form onSubmit={props.handelSubmit} >

           <TextInput 
            name="name"
            label="Enter Name"
            placeholder="MD Mahedi Hasan"
            value={props.values.name}
            onChange={props.handleChange}
           />
           <TextInput 
            name="email"
            type="email"
            label="Enter Email"
            placeholder="mahediuu126@gmail.com"
            value={props.values.email}
            onChange={props.handleChange}
           />
            <TextInput 
            name="password"
            type="password"
            label="Enter Password"
            placeholder="12345678"
            value={props.values.password}
            onChange={props.handleChange}
           />
            
            <button type="submit">Submit</button>
          </form>
);

Form.propsTypes={
    values:propsTypes.object.isRequired,
    handleChange:propsTypes.func.isRequired,
    handelSubmit:propsTypes.func.isRequired
}

export default Form;
