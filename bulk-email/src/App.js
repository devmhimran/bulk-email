import logo from './logo.svg';
import './App.css';
import HeaderNav from './Component/HeaderNav/HeaderNav';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home';
import SignIn from './Component/SignIn/SignIn';
import SignUp from './Component/SignUp/SignUp';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import CreateNewForm from './Component/CreateNewForm/CreateNewForm';
import EmailWizard from './Component/EmailWizard/EmailWizard';
import Goal from './Component/Goal/Goal';
import PersonalizeType from './Component/PersonalizeType/PersonalizeType';

function App() {
  return (
    <div>
      <HeaderNav></HeaderNav>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path='signin' element={<SignIn></SignIn>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<CreateNewForm></CreateNewForm>}></Route>
          <Route path='new' element={<EmailWizard></EmailWizard>}></Route>
          <Route path='goal' element={<Goal></Goal>}></Route>
          <Route path='personalize-type' element={<PersonalizeType></PersonalizeType>}></Route>
        </Route>
        <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
