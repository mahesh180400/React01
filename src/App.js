import SignUp from "./Starting/SignUp";
import MainIntro from "./Main/MainIntro";
import SendMail from "./Main/SendMail";
import Inbox from "./Main/Inbox";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
function App() {
  return (
 <>
 <Router>
  <Routes>
 <Route path="/" element={<>
 <SignUp />
  </>} />
 
 <Route path="/Main" element={
  <>
  <MainIntro></MainIntro>
</>}/>

<Route path="/compose" element={
  <>
 <SendMail></SendMail>
  </>
}/>

<Route path="/Inbox" element={
  <>
<Inbox></Inbox>
  </>
}/>




</Routes>
 </Router>
  </>
  );
}

export default App;
