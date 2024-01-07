import reactTestRenderer from "react-test-renderer";
import CurrencySelector from "../components/CurrencySelector";
import { currencyListData } from "../mock/data.json";

describe("Testing <CurrencySelector/>", () => {
  it("should render the component", () => {
    const renderedTree = reactTestRenderer
      .create(<CurrencySelector />)
      .toJSON();
    expect(renderedTree.type).toBe("View");
  });

  it("should render component with props", () => {
    const inputChangeMockHandler = jest.fn();
    const renderedTree = reactTestRenderer
      .create(
        <CurrencySelector
          flag={currencyListData[0].countryFlag}
          currencyCode={currencyListData[0].currencyName}
          onInputChange={inputChangeMockHandler}
          label="You send exactly"
          isSourceCurrency={true}
        />
      )
      .toJSON();

    const isLabelExist = renderedTree?.children[0]?.children[0]?.children[0];
    expect(isLabelExist).toBe("You send exactly");

    const isFlagExist = renderedTree?.children[0]?.children[1]?.children;
    expect(isFlagExist).toEqual(["🇦🇪", " ", "AED"]);
  });
});
