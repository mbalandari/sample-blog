import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Category from './pages/Category';
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
