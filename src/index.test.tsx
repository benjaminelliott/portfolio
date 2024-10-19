import { createMemoryRouter } from "react-router-dom";
import { Root } from "./routes/Root";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Projects } from "./routes/Projects";

describe("Router tests", () => {
  it("should render Root component", () => {
    const router = createMemoryRouter([
      {
        path: "*",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "*",
            element: <Home />,
          },
          {
            path: "*about",
            element: <About />,
          },
          {
            path: "*projects",
            element: <Projects />,
          },
        ],
      },
    ]);
    expect(router).toBeDefined();
  });
});
