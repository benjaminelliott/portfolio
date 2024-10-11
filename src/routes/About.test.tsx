import { render, screen } from "@testing-library/react";
import { About } from "./About";
import { AboutList } from "../components/AboutList";
import { AboutItem } from "../global";

jest.mock("../components/AboutList", () => ({
  AboutList: () => <div>AboutList</div>,
}));

describe("About Component", () => {
  const mockAboutItems: AboutItem[] = [
    { key: 1, image: "", text: "5 years in software development" },
    { key: 2, image: "", text: "Bachelor's in Computer Science" },
  ];

  it("renders without crashing", () => {
    const { container } = render(<About aboutItems={mockAboutItems} />);
    expect(container).toBeInTheDocument();
  });

  it("displays the correct title and strong text", () => {
    expect(screen.getByText("Hello, world!")).toBeInTheDocument();
    expect(screen.getByText("I am Benjamin")).toBeInTheDocument();
  });

  it("renders the AboutList component with provided items", () => {
    render(<About aboutItems={mockAboutItems} />);
    expect(screen.getByText("AboutList")).toBeInTheDocument();
  });
});
