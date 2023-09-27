import React , {useState} from 'react';
import {Button, TextField} from "@mui/material"

const Form = () => {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    
    const changeHandler = (e)=>{
        if(e.target.name === "name"){
            setName(e.target.value);
        }
        if(e.target.name === "email"){
            setEmail(e.target.value);
        }
        if(e.target.name === "password"){
            setPassword(e.target.value);
        }
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        alert(name , email , password)
        console.log(name);
        console.log(email);
        console.log(password)
    }
  return (
    <>
    <form onSubmit={submitHandler}>
      <TextField onChange={changeHandler} value={name} name='name' type='text' variant='outlined' sx={{margin : "20px"}} placeholder='Enter Name : '/>
      <br/>
      <TextField onChange={changeHandler} value={email} name='email' type='email' variant='outlined'sx={{margin : "20px"}} placeholder='Enter Email : '/>
      <br/>
      <TextField onChange={changeHandler} value={password} name='password' type='password' variant='outlined'sx={{margin : "20px"}} placeholder='Enter Password : '/>
      <br/>
      <Button  type='submit'>submit</Button>
      </form>
    </>
  )
}

export default Form
