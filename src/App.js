import logo from './logo.svg';
import { Typography } from '@mui/material';

function App() {
  return (
    <div>
      <Typography variant='h1' sx={{color : "red" , background : "blue"}} component={"h2"} mt={20}>Aptech Garden</Typography>
      <h1>MUI Tutorial</h1>
      <p>Pakistan is my country . I love pakistan </p> 
    </div>
  );
}

export default App;
