import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./routes/Layout";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Portfolio } from "./routes/Portfolio";
import "./App.scss";
import Benjamin from "./constants";

export const App = () => (
  <div className="App">
    <Routes>
      <Route
        path="*"
        element={
          <Layout
            links={Benjamin.links}
            socials={Benjamin.socials}
            contacts={Benjamin.contacts}
          />
        }
      >
        <Route
          index
          element={
            <Home
              name={Benjamin.name}
              image={Benjamin.images.hero}
              frontEnd={Benjamin.frontEnd}
              backEnd={Benjamin.backEnd}
              tools={Benjamin.tools}
              learning={Benjamin.learning}
            />
          }
        />
        <Route
          path="about"
          element={
            <About
              coachingSkills={Benjamin.coachingSkills}
              codingSkills={Benjamin.codingSkills}
              hobbies={Benjamin.hobbies}
            />
          }
        />
        <Route
          path="portfolio"
          element={
            <Portfolio
              certifications={Benjamin.certifications}
              projects={Benjamin.projects}
            />
          }
        />
        <Route path="*" element={<Navigate to="../public/index.html" />} />
      </Route>
    </Routes>
  </div>
);
