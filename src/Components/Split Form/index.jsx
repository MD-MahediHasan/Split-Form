import React from "react";
import propsTypes from "prop-types";
import TextInput from "./TextInput";
import Form from "./Form";




class SplitForm extends React.Component{
    state={
        name:"",
        email:"",
        password:""
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handelSubmit=(event)=>{
        event.preventDefault(); // using preventDefault() method to stop default behavior of automatic refreshing browser when clicked submit button
    //    const data={}
    //    data.name=event.target.name.value;
    //    data.email=event.target.email.value;
    //    data.password=event.target.password.value;
       console.log(this.state);
       event.target.reset();
       this.setState({name:"",email:"",password:""})
    }

    render(){
        return(
         <div>
            <Form
             values={this.state}
             handleChange={this.handleChange}
             handelSubmit={this.handelSubmit}
            />

         </div>
        )
    }

}

export default SplitForm;