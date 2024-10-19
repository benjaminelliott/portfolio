import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CertificationList } from "./CertificationList";
import type { Certification } from "../global";
import { BrowserRouter } from "react-router-dom";

const mockCertification: Certification = {
  key: 1,
  name: "certification1",
  logo: "image1",
  link: "link1",
  company: "company1",
  location: "Remote",
  description: "description1",
};

test("renders the CertificationList component with provided props", () => {
  render(
    <BrowserRouter>
      <CertificationList certifications={[mockCertification]} />
    </BrowserRouter>
  );
  expect(screen.getByText("certification1")).toBeInTheDocument();
  expect(screen.getByText("company1")).toBeInTheDocument();
  expect(screen.getByText("Remote,")).toBeInTheDocument();
  expect(screen.getByText("description1")).toBeInTheDocument();
  expect(screen.getByRole("img")).toBeInTheDocument();
});

test("renders the CertificationList component with different text", () => {
  render(
    <BrowserRouter>
      <CertificationList
        certifications={[
          {
            key: 1,
            name: "certification2",
            logo: "image2",
            link: "link2",
            company: "company2",
            location: "Remote",
            description: "description2",
          },
        ]}
      />
    </BrowserRouter>
  );
  expect(screen.getByText("certification2")).toBeInTheDocument();
  expect(screen.getByText("company2")).toBeInTheDocument();
  expect(screen.getByText("Remote,")).toBeInTheDocument();
  expect(screen.getByText("description2")).toBeInTheDocument();
  expect(screen.getByRole("img")).toBeInTheDocument();
});
