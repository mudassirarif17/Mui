import Accordian1 from './components/Accordian1';
import Cards from './components/Cards';
import Container from './components/Container';
import Form from './components/Form';
import ListComponent from './components/ListComponent';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import logo from './logo.svg';
import { Button, Typography, TextField } from '@mui/material';

function App() {
  return (
    <div>
      {/*1. Typography */}
      {/* <Typography variant='h1' sx={{color : "red" , background : "blue"}} component={"h2"} mt={20}>Aptech Garden</Typography> */}
      {/* <h1>MUI Tutorial</h1> */}
      {/* <p>Pakistan is my country . I love pakistan </p>  */}

      {/*2. Buttons in MUi */}
      {/* Three types of Buttons text is bydefault */}
      {/* <Button variant='text' sx={{margin : "30px"}}>Click Me</Button> */}
      {/* <Button variant='contained' color='success' disabled size='large'>Click Me</Button> */}
      {/* <Button onClick={()=> alert("You clicked the button")} variant='outlined'>Click Me for action</Button> */}

      {/* <br/> */}
      {/* <br/> */}

      {/* <input type='text' placeholder='Enter Your Name : '/> */}
      {/*3. Text field is used to get input from user  */}
      {/* <TextField type="text" placeholder='Enter Your name ' variant='standard'/> */}
      {/* <br/> */}
      {/* <TextField type="email" placeholder='Enter Your Email ' variant='outlined'/> */}
      {/* <br/> */}
      {/* <TextField type="password" placeholder='Enter Your password ' variant='filled'/> */}


      {/* 3. forms */}
      {/* <Form/> */}
      {/* <Navbar/> */}
      {/* <Cards/> */}
      {/* <Modal/> */}

      {/* <Container/> */}
      {/* <ListComponent/> */}
      <Accordian1/>
    </div>
  );  
}

export default App;
