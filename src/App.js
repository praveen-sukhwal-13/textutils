import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
{/*import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route
} from "react-router-dom";
*/}
function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enable or not
  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#060b7b';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <div>
      {/*<Router>
        */}
      <Navbar title='TextUtils' mode = {mode} toggleMode ={toggleMode} />
      <div className="container my-3">
      {/*<Routes>
          <Route path="/about" element={<About/>} />
          
          <Route path="/textform" element={<TextForm />} />
        </Routes> */} 
        <TextForm/>
      </div>
      {/*</Router> */} 
    </div>
  </>
  );
}

export default App;
