import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
