import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Manage from './components/Manage/Manage';
// import './App.css';



const App = () => {
  return (
    <div className="container">
    <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/manage" element={<Manage />} />
    </Routes>
  </Router>
  </div>
  );
};

export default App
