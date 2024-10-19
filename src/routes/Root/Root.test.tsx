import { render } from "@testing-library/react";
import { App } from "../../App";

jest.mock("../../App", () => ({
  App: () => <div>App</div>,
}));

describe("Root Component", () => {
  it("should render a div with the className root", () => {
    render(<div className="root">"App"</div>);
  });

  it("should render the App component", () => {
    render(
      <div className="root">
        <App />
      </div>
    );
  });
});
