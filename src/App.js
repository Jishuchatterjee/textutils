import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';


function App() {
  const [mode,setMode]=useState('dark');
  const toogleMode=()=> {
    if(mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor='#2661b6'
      showAlert("Dark mode has been enabled","success")
      // document.title='Textutils-Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
      // document.title='Textutils-Light Mode'
    }
  }
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=> {
    setAlert({
      msg:message,
      type:type
    }
    )
    setTimeout(()=> {
      setAlert(null)
    },1000)
  }
  


  
  
  return(
    
  <>

    {/* <Navbar title="Textutils" aboutText= "About Textutils" />  */}
    <Router>
    <Navbar title="Textutils"  mode={mode} toogleMode={toogleMode} />
    <Alert alert={alert} mode={mode} />
    <div className="container"></div>
        <Routes>
          <Route path="/about" element={<About mode={mode} />} / >

          <Route path="/"  element={<TextForm heading= "Try Textutils- Word Counter, Character Counter and Remove Extra Spaces" mode={mode} showAlert={showAlert} />} />
          
          
          
          </Routes>
        </Router>
    
      

    


  </>  
    
  )
 

  
   
  
}

export default App;
