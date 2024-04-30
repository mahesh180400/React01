import SignupForm from './Starting/SignupForm'
import BasicExample from "./Starting/ColorSchemesExample";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
function App() {
  return (
 <>
 <Router>
  <Routes>
  <Route path="/Main" element={<h1>Welcome Buddy!</h1>}/>
  <Route path="/" element={<>
          <BasicExample />
          <SignupForm />
        </>} />
 </Routes>
 </Router>
  </>
  );
}

export default App;
