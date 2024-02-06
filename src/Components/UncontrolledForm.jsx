import React from "react";

class UncontrolledForm extends React.Component{

    handelSubmit=(event)=>{
        event.preventDefault(); // using preventDefault() method to stop default behavior of automatic refreshing browser when clicked submit button
       const data={}
       data.name=event.target.name.value;
       data.email=event.target.email.value;
       data.password=event.target.password.value;
       console.log(data);
       event.target.reset();
    }

    render(){
        return(
          <form onSubmit={this.handelSubmit} >
            <input type="text" name="name" placeholder="MD Mahedi Hasan" /> <br /> <br />
            <input type="email" name="email" placeholder="e.g@gmail.com" /> <br /> <br />
            <input type="password" name="password" placeholder="00000000" /> <br /> <br />
            <button type="submit">Submit</button>
          </form>
        )
    }
}

export default UncontrolledForm;