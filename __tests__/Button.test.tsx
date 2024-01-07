import reactTestRenderer from "react-test-renderer";
import Button from "../components/base/Button";

describe("Testing <Button />", () => {
  it("should render the component", () => {
    const renderedTree = reactTestRenderer
      .create(<Button>Test</Button>)
      .toJSON();
    expect(renderedTree.type).toBe("View");
  });

  it("should have correct button text", () => {
    const renderedTree = reactTestRenderer
      .create(<Button>Test</Button>)
      .toJSON();
    const buttonText =
      renderedTree.children[0].children[0].children[0].children[0];
    expect(buttonText).toBe("Test");
  });
});
