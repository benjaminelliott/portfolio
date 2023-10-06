import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./routes/Layout"
import { Home } from "./routes/Home"
import { About } from "./routes/About"
import { Portfolio } from "./routes/Portfolio"
import './App.scss';

const Benjamin = {
  name: "Benjamin",
  images: {
      hero:"images/benjamin.jpg"
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
      name: "Javascript",
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
      name: "Wordpress",
      image: "logos/wordpress.png",
      link: "https://www.wordpress.com/"
    },
    {
      key: 6,
      name: "Stripe",
      image: "logos/stripe.png",
      link: "https://www.stripe.com/"
    },
    {
      key: 7,
      name: "SASS",
      image: "logos/sass.svg",
      link: "https://sass-lang.com/"
    },
    {
      key: 8,
      name: "Chakra UI",
      image: "logos/chakra.svg",
      link: "https://chakra-ui.com"
    },
    {
      key: 9,
      name: "TailwindCSS",
      image: "logos/tailwind.svg",
      link: "https://tailwindcss.com/"
    },
    {
      key: 10,
      name: "ChatGPT",
      image: "logos/ChatGPT_logo.svg.png",
      link: "https://chat.openai.com/"
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
      name: "GitHub",
      image: "logos/github.svg",
      link: "https://github.com/benjamindotdev"
    },
    {
      key: 5,
      name: "GitHub Copilot",
      image: "logos/copilot.png",
      link: "https://github.com/features/copilot"
    },
    {
      key: 6,
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
    {
      key: 3,
      name: "Next.js",
      image: "logos/nextjs.svg",
      link: "https://nextjs.org/"
    },
    {
      key: 4,
      name: "MongoDB",
      image: "logos/mongodb.png",
      link: "https://www.mongodb.com/"
    },
    {
      key: 5,
      name: "mongoose",
      image: "logos/mongoose.png",
      link: "https://www.mongoosejs.com/"
    },
    {
      key: 6,
      name: "Prisma",
      image: "logos/prisma.svg",
      link: "https://www.prisma.io/"
    },
    {
      key: 7,
      name: "React Native",
      image: "logos/reactnative.svg",
      link: "https://reactnative.dev/"
    },
    {
      key: 8,
      name: "Expo",
      image: "logos/expo.png",
      link: "https://expo.dev/"
    }
  ],
  contacts: [
    {
      key: 0,
      name: "email",
      link: "mailto:hello@benjamin.dev",
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
      link: "https://github.com/benjamindotdev"
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
      name: "stacyannelliott.com",
      logo: "images/stacy.jpg",
      description: "Stacy is the Markets Editor at Decrypt, a cryptocurrency, AI, culture and gaming news site. She wanted a simple portfolio page that reflected her personality. I built her a striking page with Wordpress.",
      techStack: [
        "HTML5", "CSS3", "Javascript", "Wordpress"
      ],
      link: "https://www.stacyannelliott.com",
      image: "images/stacyannelliott.png"
  },
  {
    key: 1,
    name: "littlelemon.biz",
    logo: "logos/littlelemon.svg",
    description: "The capstone project for my Meta Front-End Developer course. I met all the criteria, then went overboard adding further design changes and functionality. UseState hook used extensively to hold and update data. User, menu and cart data shared globally using the useContext and custom useShoppingCart hooks. Reservation data updated with the useReducer hook. Chakra UI useColorMode hook used to toggle light and dark theme. User data held in browser local storage across page visits. Stripe cart integration if user meets the required criteria for delivery or collection.",
    techStack: [
      "HTML5", "CSS3", "Javascript", "Typescript", "React", "Chakra UI", "Stripe"
    ],
    link: "https://littlelemon.biz",
    image: "images/littlelemon.png"
},
  {
      key: 2,
      name: "CountyGPT",
      logo: "logos/CountyGPT.svg",
      description: "A single page app which fetches state and county data from the 2019 US Census, before asking ChatGPT for advice on stuff to do in the user's location.",
      techStack: [
        "HTML5", "CSS3", "Javascript", "Typescript", "React", "TailwindCSS", "ChatGPT"
      ],
      link: "https://jolly-zuccutto-827f86.netlify.app/",
      image: "images/CountyGPT.png"
  },
  {
    key: 3,
    name: "benjaminelliott.dev",
    logo: "images/BenjaminLowC.jpg",
    description: "My portfolio page, completed after all my online courses. Built to industry best practices using Typescript and React. Always adding new projects as they're built.",
    techStack: [
      "HTML5", "CSS3", "Javascript", "Typescript", "React", "SASS"
    ],
    link: "https://benjaminelliott.dev",
    image: "images/portfolio.png"
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
          <Route path="portfolio" element={<Portfolio techStack={Benjamin.techStack} certifications={Benjamin.certifications} projects={Benjamin.projects}/>} />
          <Route path="*" element={<Navigate to="../public/index.html" />} />
        </Route>
      </Routes>
    </div>
  );
}