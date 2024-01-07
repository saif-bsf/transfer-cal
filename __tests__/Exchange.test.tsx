import reactTestRenderer from "react-test-renderer";
import ExchangeInfo from "../components/ExchangeInfo";

describe("Testing <ExchangeInfo/>", () => {
  it("should render the component", () => {
    const renderedTree = reactTestRenderer
      .create(<ExchangeInfo currencyCode="USD" value="0.27" />)
      .toJSON();
    expect(renderedTree.type).toBe("View");
  });

  it("should have only 2 View Components", () => {
    const renderedTree = reactTestRenderer
      .create(<ExchangeInfo currencyCode="USD" value="0.27" />)
      .toJSON();
    const viewComponents = renderedTree.children.filter(
      (child) => child.type === "View"
    ).length;
    expect(viewComponents).toBe(2);
  });

  it("should have only 2 Text Components", () => {
    const renderedTree = reactTestRenderer
      .create(<ExchangeInfo currencyCode="USD" value="0.27" />)
      .toJSON();
    const textComponents = renderedTree.children[1].children.filter(
      (child) => child.type === "Text"
    ).length;
    expect(textComponents).toBe(2);
  });
});
