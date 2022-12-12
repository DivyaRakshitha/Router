
import './App.css';
import {BrowserRouter, Route, Routes}from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact';
import Services from './pages/services';
import List from './list';
//import Radium1 from'./radium';
import BasicButtons from './button';
function App() {
  return (
    <div className="App">
      <List />
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Services' element={<Services/>}/>
      </Routes>
      </BrowserRouter>
      <BasicButtons />
    </div>
  );
}

export default App;
