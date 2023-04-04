import React from 'react';
import Login from './Components/Login';
import Regis from './Components/Regis';
import Dashboard from "./Components/Dashboard";
import LupaPasssword from "./Components/LupaPassword";
import ResetPasssword from "./Components/ResetPassword";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='' element={<Login/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/daftar' element={<Regis/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/lupa-password" element={<LupaPasssword/>} />
          <Route exact path="/resetpassword/:token" element={<ResetPasssword/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
