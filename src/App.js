import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Login/Signup';
import ProfileEdit from './Login/ProfileEdit';
import Main from './Main/Main';
import Forgot from './Login/Forgot';
function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="*" element={<Signup></Signup>}></Route>
          <Route path="" element={<Signup />} />
          <Route path="/profile_edit" element={<ProfileEdit></ProfileEdit>} />
          <Route path="/main" element={<Main></Main>}/>
          <Route path="/forgot_password" element={<Forgot></Forgot>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;