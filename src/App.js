// import './App.css';
import Home from '../src/screens/Home'
import Login from '../src/screens/Login'
import Signup from '../src/screens/Signup';
import Cart from '../src/screens/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className='bg-dark'>

    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path ="/cart" element={<Cart/>}/>
        <Route exact path ="/login" element={<Login/>}/>
        <Route exact path ="/signup" element={<Signup/>}/>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
