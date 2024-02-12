import React from "react";
import TextInput from "./TextInput";
import PropsType from "prop-types"

const Form=({values,agreement,errors,handleAgreement,handleChange,handleSubmit})=>{
   return(
    <form className="mr-4" onSubmit={handleSubmit} >
        <TextInput
         name="name"
         label="Name"
         placeholder="MD Mahedi Hasan"
         values={values.name}
         error={errors.name}
         onChange={handleChange}


        />
        <TextInput
         name="email"
         type="email"
         label="Email"
         placeholder="maheiuu126@gmail.com"
         values={values.email}
         error={errors.email}
         onChange={handleChange}


        />
        <TextInput
         name="password"
         type="password"
         label="Password"
         placeholder="123456"
         values={values.password}
         error={errors.password}
         onChange={handleChange}


        />
        <TextInput
         name="  dateOfBirth"
         type="date"
         label="birthDate"
         placeholder="20-02-2000"
    
         values={values.dateOfBirth}
         error={errors.dateOfBirth}
         onChange={handleChange}


        />
        <div className="form-group">
            <label>
            <input className="form-group" type="radio" name="gender" value="Male" onChange={handleChange} />
            Male</label>
            <label>
            <input className="form-group" type="radio" name="gender" value="Female" onChange={handleChange} />
            Female</label>
            <label>
            <input className="form-group" type="radio" name="gender" value="Other" onChange={handleChange} />
          Other</label>
          {errors.gender &&<div className="invalid-feedback" >{errors.gender}</div>}
        </div>
        <div className="form-group">
            <label>
                <input className="form-group" type="checkbox" name="agreement" checked={agreement} onChange={handleAgreement} />

                I Agree
            </label>
        </div>
        <button className="btn btn-primary" type="submit" disabled={!agreement} >Create User</button>
    </form>
   ) 
}

Form.PropsType={
    values:PropsType.object.isRequired,
    agreement:PropsType.bool.isRequired,
    errors:PropsType.object.isRequired,
    handleChange:PropsType.func.isRequired,
    handleAgreement:PropsType.func.isRequired,
    handleSubmit:PropsType.func.isRequired

}

export default Form