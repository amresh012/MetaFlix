 import {Route,Routes} from 'react-router-dom'; 
 import { Navbar } from "./component/Navbar";
import {HomePage} from './pages/HomePage';
// import {Main} from'./component/Main';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path='/' element ={<HomePage />}/>
    </Routes>
    
    </>
  );
}

export default App;
