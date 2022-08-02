import logo from './logo.svg';
import './App.css';
import HeaderNav from './Component/HeaderNav/HeaderNav';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/SignUp/SignUp';

function App() {
  return (
    <div>
      <HeaderNav></HeaderNav>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path='signin' element={<SignIn></SignIn>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
