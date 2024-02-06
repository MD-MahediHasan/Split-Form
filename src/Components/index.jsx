import React from "react";

class Input extends React.Component{
    state={
        name:'',
        country:'',
        bio:'',
        dateOfBrith:'',
        gender:'',
        agree: true,
        skills:[]
    }

    handelChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handelShow=()=>{
        console.log(this.state)
    }
    handelChecked=(event)=>{
        this.setState({
            agree: event.target.checked
        })
    }

    handelSkills=(event)=>{
        if(event.target.checked){
            this.setState({
                skills:[...this.state.skills , event.target.value]
            })
        } 
        else{
            const skills= this.state.skills.filter(skill => skill !== event.target.value);
            this.setState({skills})
        }
    }

    render(){
        return(
            <div>
               <input type="text" name="name" placeholder="MD Mahedi Hasan" onChange={this.handelChange} value={this.state.name} /> <br /> <br />
               <select name="country" id="" onChange={this.handelChange} value={this.state.country}  >
                <option value=""></option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Pakisthan">Pakisthan</option>
                <option value="Japan">Japan</option>
                <option value="Arab">Arab</option>

               </select> <br /> <br />
               <textarea name="bio" id=""placeholder="Enter Your Details" onChange={this.handelChange} value={this.state.bio}  ></textarea> <br /> <br />
               
               <input type="date" name="dateOfBrith" onChange={this.handelChange} value={this.state.dateOfBrith}  /> <br /> <br />
               <div>
                <input type="radio" name="gender" value="Male" onChange={this.handelChange} /> Male 
                <input type="radio" name="gender" value="Female" onChange={this.handelChange} /> Female 
               </div>
               <div>
                <input type="checkbox" name="agree" checked={this.state.agree} onClick={this.handelChecked} />
               </div>
               <div>
                Skills:
                <input type="checkbox" name="skills" value="Java" checked={this.state.skills.includes("Java")}  onChange={this.handelSkills} /> Java
              
                <input type="checkbox" name="skills" value="Java Script" checked={this.state.skills.includes("Java Script")} onChange={this.handelSkills} /> Java Script

                <input type="checkbox" name="skills" value="Python" checked={this.state.skills.includes("Python")} onChange={this.handelSkills} /> Python

                <input type="checkbox" name="skills" value="Ruby" checked={this.state.skills.includes("Ruby")} onChange={this.handelSkills} /> Ruby


               </div>
               <button onClick={this.handelShow} >Show Details</button> <br /> <br />
               
            </div>
        );

        
    }
}

export default Input;