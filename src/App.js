import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Login/Signup';
import ProfileEdit from './Login/ProfileEdit';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Signup />} />
          <Route path="/profile_edit" element={<ProfileEdit></ProfileEdit>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
