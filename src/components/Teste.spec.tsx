import React from "react";
import { render } from "@testing-library/react";
import Teste from "./Teste";

import "@testing-library/jest-dom/extend-expect";

test('Teste component should render "AWESOME COMPONENT"', () => {
  const { getByText } = render(<Teste />);
  const div = getByText(/awesome component/i);
  expect(div).toBeInTheDocument();
});
