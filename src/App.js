
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/textForm';
function App() {
  const [mode,setMode]=useState('light');// tells us weather dark mode is enabled or not, use for enabling dark mode
  const toggle=()=>{
    if(mode==='light'){setMode('dark');
    document.body.style.backgroundColor='grey';
  }// changes the whole backgorund color.
    else{
    document.body.style.backgroundColor='white';
    setMode('light');
    }
  }// this funtion is called when we click  onChange the the toggle button


  return (
    <>
<Navbar title="TextUtils" mode={mode} toggle={toggle} />{/*linked with help of props to navbar, here toggle is linked with the navbar so when we click on onChange fucntion using props we can see are changes here in app.js file  */}
<div className="container my-3">
<TextForm heading="Enter the text to analyze below" mode={mode} />
</div>
</>
  );
}

export default App;
