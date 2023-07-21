import { Routes, Route } from "react-router-dom";
import { Layout } from "./routes/Layout"
import { Home } from "./routes/Home"
import { About } from "./routes/About"
import { Skills } from "./routes/Skills"
import { Portfolio } from "./routes/Portfolio"
import { Contact } from "./routes/Contact"
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}