import React , {useState} from 'react';
import {Button, TextField , FormControlLabel ,  FormGroup , Checkbox , FormControl, InputLabel , Select, MenuItem } from "@mui/material"


const Form = () => {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [per , setPer] = useState(false);
    const [courses , setCourses] = useState([]);
    
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
        if(e.target.name === "courses"){
          setCourses([...courses , e.target.value])
        }
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        alert(name , email , password)
        console.log(name);
        console.log(email);
        console.log(password)
        console.log(per)
        console.log(courses)
    }
  return (
    <>
    <form onSubmit={submitHandler}>
      {/* text field is used for input */}
      <TextField onChange={changeHandler} value={name} name='name' type='text' variant='outlined' sx={{margin : "20px"}} placeholder='Enter Name : '/>
      <br/>
      <TextField onChange={changeHandler} value={email} name='email' type='email' variant='outlined'sx={{margin : "20px"}} placeholder='Enter Email : '/>
      <br/>
      <TextField onChange={changeHandler} value={password} name='password' type='password' variant='outlined'sx={{margin : "20px"}} placeholder='Enter Password : '/>
      <br/>

      {/* form group is used for checkbox */}
      <FormGroup>
        <FormControlLabel label="I agree the terms" control={<Checkbox onChange={()=> setPer(true)}/>}></FormControlLabel>
      </FormGroup>
      
      <br/><br/>

      {/* Form control is used for dropdown */}
      <FormControl fullWidth>
    <InputLabel id="menu">Courses</InputLabel>
    <Select name='courses' labelId='menu' id='label-list' label="courses" value={courses} onChange={changeHandler}>
      <MenuItem value={'mongodb'}>MongoDB</MenuItem>
      <MenuItem value={'firebase'}>FireBase</MenuItem>
      <MenuItem value={'sql'}>SQl</MenuItem>
    </Select>
      </FormControl>

      <Button  type='submit'>submit</Button>
      
      </form>
    </>
  )
}

export default Form
