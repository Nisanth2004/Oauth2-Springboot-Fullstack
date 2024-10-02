import logo from './logo.svg';
import './App.css';
import Home from './componenets/Home';
import { BrowserRouter as  Router,Route, Routes } from 'react-router-dom';
import Dashboard from './componenets/Dashboard';

function App() {
  return (
    //<div className="App">
     //<Home/>
    //</div>

<Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
  </Routes>
</Router>
  );
}

export default App;
