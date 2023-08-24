import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./routes/Layout"
import { Home } from "./routes/Home"
import { About } from "./routes/About"
import { Portfolio } from "./routes/Portfolio"
import './App.css';

const Benjamin = {
  name: "Benjamin",
  images: {
      hero:"images/benjaminGrey.jpg"
  },
  hobbies: [
    {
        key: 0,
        name: "PC Building",
        icon: "🧑🏽‍🏭️"
    },
    {
        key: 1,
        name: "Mechanical keyboards",
        icon: "⌨️"
    },
    {
        key: 2,
        name: "Indoor cycling",
        icon: "🚵🏽"
    },
    {
      key: 4,
      name: "Football",
      icon: "⚽"
  },
  {
      key: 5,
      name: "Formula 1",
      icon: "🏎️"
  },
  {
      key: 6,
      name: "Travel",
      icon: "🌍"
  }
],
coachingSkills: [
  {
    key: 0,
    name: "Communication",
    image: "💬"
  },
  {
    key: 1,
    name: "Teamwork",
    image: "🤝🏽"
  },
  {
    key: 2,
    name: "Leadership",
    image: "🧑🏽‍💼️"
  },
  {
    key: 3,
    name: "Resilience",
    image: "☮️"
  }
],
  codingSkills: [
    {
      key: 0,
      name: "Working remotely",
      image: "🧑🏽‍💻️"
    },
    {
      key: 1,
      name: "Attention to detail",
      image: "🔎"
    },
    {
      key: 2,
      name: "Problem solving",
      image: "🎓"
    },
    {
      key: 3,
      name: "Self-learning",
      image: "🧑🏽‍🎓️"
    }
  ],
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
      link: "https://www.typescriptlang.org/"
    },
    {
      key: 4,
      name: "React",
      image: "logos/react.svg",
      link: "https://react.dev/"
    },
    {
      key: 5,
      name: "TailwindCSS",
      image: "logos/tailwind.svg",
      link: "https://tailwindcss.com/"
    },
    {
      key: 6,
      name: "SASS",
      image: "logos/sass.svg",
      link: "https://sass-lang.com/"
    }
  ],
  tools: [
    {
      key: 0,
      name: "Figma",
      image: "logos/figma.svg",
      link: "https://www.figma.com"
    },
    {
      key: 1,
      name: "VSCode",
      image: "logos/vscode.svg",
      link: "https://code.visualstudio.com/"
    },
    {
      key: 3,
      name: "Stack Overflow",
      image: "logos/stackoverflow.svg",
      link: "https://stackoverflow.com/"
    },
    {
      key: 4,
      name: "gitHub",
      image: "logos/github.svg",
      link: "https://github.com/benjaminelliott"
    },
    {
      key: 5,
      name: "netlify",
      image: "logos/netlify.png",
      link: "https://www.netlify.com/"
    }
  ],
  learning: [
    {
      key: 0,
      name: "Vue.JS",
      image: "logos/vue.svg",
      link: "https://vuejs.org/"
    },
    {
      key: 1,
      name: "Angular",
      image: "logos/angular.svg",
      link: "https://angular.io/"
    },
    {
      key: 2,
      name: "Python",
      image: "logos/python.svg",
      link: "https://www.python.org/"
    },
  ],
  contacts: [
    {
      key: 0,
      name: "email",
      link: "mailto:benjamin.elliott.be@gmail.com",
      icon: "icons/email.svg"
    },
    {
      key: 1,
      name: "phone",
      link: "tel:973-289-3674",
      icon: "icons/phone.svg"
    }
  ],
  socials: [
    {
      key: 0,
      name: "linkedin",
      image: "logos/linkedin.svg",
      link: "https://www.linkedin.com/in/benjamin-elliott-163280280/"
    },
    {
      key: 1,
      name: "gitHub",
      image: "logos/github.svg",
      link: "https://github.com/benjaminelliott"
    }
  ],
  links: [
    {
        title: "Home",
        route: "/"
    },
    {
        title: "About",
        route: "/about"
    },
    {
        title: "Portfolio",
        route: "/portfolio"
    }
],
certifications: [
  {
      key: 0,
      name: "freecodecamp",
      image: "images/freecodecamp Certificate.png",
      logo: "logos/freecodecamp.svg",
      description: "Completed Responsive Web Design certification, specializing in creating responsive pages with HTML, CSS and Javascipt",
      link: "https://www.freecodecamp.org/certification/benjaminelliott/responsive-web-design"
  },
  {
      key: 1,
      name: "Coursera",
      image: "images/Meta Front End Certificate.png",
      logo: "logos/coursera.svg",
      description: "Completed the Meta Front-End Developer professional certification on Coursera, confirming my capabilities as a front-end developer",
      link: "https://coursera.org/verify/professional-cert/5GMTVUAPTVM2"
  },
  {
      key: 3,
      name: "freecodecamp",
      image: "images/freecodecamp Certificate 2.png",
      logo: "logos/freecodecamp.svg",
      description: "Completed Javascript algorithms and data sctuctures, specializing in using different data types and structures in Javascript ES6",
      link: "https://freecodecamp.org/certification/benjaminelliott/javascript-algorithms-and-data-structures"
  }
],
projects: [
  {
      key: 0,
      name: "littlelemon.biz",
      logo: "logos/littlelemon.svg",
      description: "Little Lemon is a mediterranean restaurant in the heart of the Windy City. After opening to tremendous acclaim, the restaurant struggled to organize and fulfil online orders and table bookings, until I implemented a solution for them.",
      link: "https://littlelemon.biz",
      image: "images/littlelemon.png"
  },
  {
      key: 1,
      name: "Epictweetus",
      logo: "logos/epictweetus.png",
      description: "A single page app with philosophical quotes and pictures of statues. A respite for weary developers. Classical wisdom for the digital age.",
      link: "https://sensational-bonbon-a021d7.netlify.app/",
      image: "images/epictweetus.png"
  }
]
}

export const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Layout links={Benjamin.links} socials={Benjamin.socials} contacts={Benjamin.contacts}/>}>
          <Route index element={<Home name={Benjamin.name} image={Benjamin.images.hero} techStack={Benjamin.techStack} tools={Benjamin.tools} learning={Benjamin.learning} contacts={Benjamin.contacts} socials={Benjamin.socials}/>} />
          <Route path="about" element={<About coachingSkills={Benjamin.coachingSkills} codingSkills={Benjamin.codingSkills} hobbies={Benjamin.hobbies} />} />
          <Route path="portfolio" element={<Portfolio certifications={Benjamin.certifications} projects={Benjamin.projects}/>} />
          <Route path="*" element={<Navigate to="../public/index.html" />} />
        </Route>
      </Routes>
    </div>
  );
}