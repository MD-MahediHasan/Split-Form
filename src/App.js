
import './App.css';
import React from 'react';

// import ControllForm from './Components/ControllForm';
// import SplitForm from './Components/Split Form';
// import UncontrolledForm from './Components/UncontrolledForm';
// import Input from "./Components/index";

import SingUpForm from './Components/SingUp-Form';


class App extends React.Component{
  state={
    users:[]
  }

  createUser=(user)=>{
    user.id=new Date().getTime().toString()
    this.setState({
      users:{...this.state.users,user}
    })
  }
  
  render(){
    return(
<div>
    {/* <Input /> */}

    {/* <UncontrolledForm /> */}
    {/* <ControllForm/> */}
    {/* <SplitForm /> */}
    <SingUpForm createUser={this.createUser} />
    <div>
      <h2>All Register Users</h2>
      <ul className='list-group'>
      {this.state.users.map(user=>(<li key={user.id} className='list-group-item'>{user.name}=>{user.email}</li>))}
      </ul>
    </div>

 
   
   </div>
    )
  }
}





export default App;
