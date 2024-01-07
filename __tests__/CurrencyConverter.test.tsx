import reactTestRenderer from "react-test-renderer";
import CurrencyConverter from "../components/CurrencyConverter";

describe("Testing <CurrencyConverter/>", () => {
  it("should render the component", () => {
    const renderedTree = reactTestRenderer
      .create(<CurrencyConverter />)
      .toJSON();
    expect(renderedTree.type).toBe("View");
  });

  it("should render all child components", () => {
    const renderedTree = reactTestRenderer
      .create(<CurrencyConverter />)
      .toJSON();
    expect(renderedTree.children.length).toBe(6);
  });

  it("should have only 2 Texrt Components", () => {
    const renderedTree = reactTestRenderer
      .create(<CurrencyConverter />)
      .toJSON();
    const textComponents = renderedTree.children.filter(
      (child) => child.type === "Text"
    ).length;
    expect(textComponents).toBe(2);
  });

  it("should have only 4 View Components", () => {
    const renderedTree = reactTestRenderer
      .create(<CurrencyConverter />)
      .toJSON();
    const textComponents = renderedTree.children.filter(
      (child) => child.type === "View"
    ).length;
    expect(textComponents).toBe(4);
  });
});
