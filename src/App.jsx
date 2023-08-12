import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import Decomposition from './components/Decomposition/Decomposition'
import Collapse from './components/Collapse/Collapse'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={
          <div className="App">
            <Navbar />
            <Cards />
            <Decomposition />
            <Collapse />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
