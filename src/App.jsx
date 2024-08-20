import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductionList from './components/ProductionList';
import Cart from './components/Cart';  // Example Cart component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductionList />} />
          <Route path="/cart" element={<Cart />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
