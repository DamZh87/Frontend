import './App.css'
import UserProvider from "./providers/UserProvider.jsx";
import Home from "./components/Home.jsx";
import Button from '@mui/material/Button';

function App() {


  return (
    <UserProvider>
        <h1>WORKING</h1>
        <Home/>

        <Button variant="contained">Hello world</Button>;

    </UserProvider>









  )
}

export default App
