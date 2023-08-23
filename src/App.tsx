import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./routes/Layout"
import { Home } from "./routes/Home"
import { About } from "./routes/About"
import { Skills } from "./routes/Skills"
import { Portfolio } from "./routes/Portfolio"
import { Contact } from "./routes/Contact"
import './App.css';

const Benjamin = {
  name: "Benjamin",
  image: "images/benjamin.jpg",
  techStack: [
    {
      key: 0,
      name: "HTML5",
      image: "logos/html5.svg",
      link: "https://html.spec.whatwg.org/"
    },
    {
      key: 1,
      name: "CSS3",
      image: "logos/css3.svg",
      link: "https://www.w3.org/TR/CSS/#css"
    },
    {
      key: 2,
      name: "JS ES6",
      image: "logos/js.svg",
      link: "https://www.ecma-international.org/publications-and-standards/standards/ecma-262/"
    },
    {
      key: 3,
      name: "Typescript",
      image: "logos/typescript.svg",
      link: "https://vuejs.org/"
    },
    {
      key: 4,
      name: "React.JS",
      image: "logos/react.svg",
      link: "https://react.dev/"
    },
    {
      key: 5,
      name: "Vue.JS",
      image: "logos/vue.svg",
      link: "https://vuejs.org/"
    }
  ],
  programs: [
    {
      key: 0,
      name: "VSCode",
      image: "logos/vscode.svg",
      link: "https://code.visualstudio.com/"
    },
    {
      key: 1,
      name: "gitHub",
      image: "logos/github.svg",
      link: "https://github.com/benjaminelliott"
    },
    {
      key: 2,
      name: "Figma",
      image: "logos/figma.svg",
      link: "https://www.figma.com"
    }
  ]
}

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Layout />}>
          <Route index element={<Home name={Benjamin.name} image={Benjamin.image} techStack={Benjamin.techStack} programs={Benjamin.programs}/>} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="../public/index.html" />} />
        </Route>
      </Routes>
    </div>
  );
}