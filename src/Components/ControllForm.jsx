import React from "react";

class ControllForm extends React.Component{
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
          <form onSubmit={this.handelSubmit} >
            <input type="text" name="name" placeholder="MD Mahedi Hasan" value={this.state.name} onChange={this.handleChange} /> <br /> <br />
            <input type="email" name="email" placeholder="e@gmail.com" value={this.state.email} onChange={this.handleChange} /> <br /> <br />
            <input type="password" name="password" placeholder="00000000" value={this.state.password} onChange={this.handleChange} /> <br /> <br />
            <button type="submit">Submit</button>
          </form>
        )
    }

}

export default ControllForm;