import logo from './logo.svg';
import { Button, Typography, TextField } from '@mui/material';

function App() {
  return (
    <div>
      {/*1. Typography */}
      <Typography variant='h1' sx={{color : "red" , background : "blue"}} component={"h2"} mt={20}>Aptech Garden</Typography>
      <h1>MUI Tutorial</h1>
      {/* <p>Pakistan is my country . I love pakistan </p>  */}

      {/*2. Buttons in MUi */}
      {/* Three types of Buttons text is bydefault */}
      <Button variant='text' sx={{margin : "30px"}}>Click Me</Button>
      <Button variant='contained' color='success' disabled size='large'>Click Me</Button>
      <Button onClick={()=> alert("You clicked the button")} variant='outlined'>Click Me for action</Button>

      <br/>
      <br/>

      {/* <input type='text' placeholder='Enter Your Name : '/> */}
      {/*3. Text field is used to get input from user  */}
      <TextField type="text" placeholder='Enter Your name ' variant='standard'/>
      <TextField type="email" placeholder='Enter Your Email ' variant='outlined'/>
      <TextField type="password" placeholder='Enter Your password ' variant='filled'/>
      
    </div>
  );
}

export default App;
