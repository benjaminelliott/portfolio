import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./routes/Layout";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Certifications } from "./routes/Certifications";
import { Projects } from "./routes/Projects";
import "./App.scss";
import { benjamin } from "./constants";

export const App = () => (
  <main className="App">
    <Routes>
      <Route
        path="*"
        element={
          <Layout
            links={benjamin.links}
            socials={benjamin.socials}
            contacts={benjamin.contacts}
          />
        }
      >
        <Route
          index
          element={
            <Home
              name={benjamin.name}
              image={benjamin.hero}
              technologies={benjamin.technologies}
            />
          }
        />
        <Route path="about" element={<About aboutItems={benjamin.about} />} />
        <Route
          path="certifications"
          element={<Certifications certifications={benjamin.certifications} />}
        />
        <Route
          path="projects"
          element={<Projects projects={benjamin.projects} />}
        />
        <Route path="*" element={<Navigate to="../public/index.html" />} />
      </Route>
    </Routes>
  </main>
);
