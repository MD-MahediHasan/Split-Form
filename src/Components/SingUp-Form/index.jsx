import React from "react";
import Form from "./Form";
import  propsTypes  from "prop-types";
const initValues={
    name:"",
    email:"",
    password:"",
    dateOfBirth:"",
    gender:""
}

class SingUpForm extends React.Component{
    state={
        values:initValues,
        agreement:false,
        errors:{}
    }

    handleChange=event=>{
        this.setState({
            values:{
                ...this.state.values,
               [event.target.name] :event.target.value
            }
        })
    }

    handleAgreement=event=>{
        this.setState({
            agreement:event.target.checked
        })
    }
    handleSubmit=event=>{
       event.preventDefault();
       const{isValid, errors }=this.handleValidate()
       if(isValid){
        this.props.createUser(this.state.values)
       event.target.reset();
       this.setState({values:initValues,agreement:false,errors:{}});
       } else{
       this.setState({ errors})
       }
    }

    handleValidate=()=>{
        const  errors={}

        const  {values:{name,email,password,gender,dateOfBirth}}=this.state;

        if(!name){
            errors.name="Please Enter Your name";
        }

        if(!email){
            errors.email="Please Enter Your Email"
        }
        if(!password){
            errors.password="Please Enter Password"
        }
        if(!gender){
            errors.gender="Please Select Your Gender"
        }
        // if(!dateOfBirth){
        //     errors.dateOfBirth="Please Enter Your Birth Date"
        // }

        if(!dateOfBirth){
            errors.dateOfBirth="Please Enter Your Birth Date"
        }

        return{
            errors,
            isValid: Object.keys( errors).length===0
        }
           
        
    }
    
    render(){
            
        return(
            <div className="p-5">
                <h1>Sing Up Form</h1>
                <Form 
                 values={this.state.values}
                 agreement={this.state.agreement}
                 errors={this.state.errors}
                 handleChange={this.handleChange}
                 handleAgreement={this.handleAgreement}
                 handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}
SingUpForm.propsTypes={
    createUser:propsTypes.func.isRequired
}

export default SingUpForm;