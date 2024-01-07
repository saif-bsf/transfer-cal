import reactTestRenderer from "react-test-renderer";
import App from "../App";

describe("Testing App component", () => {
  it("should render the with 1 children", () => {
    const renderedTree = reactTestRenderer.create(<App />).toJSON();
    expect(renderedTree?.children?.length).toBe(1);
  });
});
