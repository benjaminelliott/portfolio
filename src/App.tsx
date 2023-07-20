import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Home } from "./routes/Home"
import { About } from "./routes/About"
import { Portfolio } from "./routes/Portfolio"
import { Contact } from "./routes/Contact"
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Link to="/about">About</Link>
    </div>
  );
}