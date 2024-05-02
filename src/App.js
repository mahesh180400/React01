import SignUp from "./Starting/SignUp";
import Main from "./Main/Main";
import BasicExample from "./Starting/ColorSchemesExample";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
function App() {
  return (
 <>
 <Router>
  <Routes>
  <Route path="/Main" element={
  <>
  <h1>Welcome Buddy!</h1>
<Main></Main>
</>}/>
  <Route path="/" element={<>
          <BasicExample />
          <SignUp />
        </>} />
 </Routes>
 </Router>
  </>
  );
}

export default App;
