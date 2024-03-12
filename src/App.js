import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Login/Signup';
import ProfileEdit from './Login/ProfileEdit';
import Main from './Main/Main';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Signup />} />
          <Route path="/profile_edit" element={<ProfileEdit></ProfileEdit>} />
          <Route path="/main" element={<Main></Main>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
