import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should Load Restaurant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  //before click accodion header
  const accodionHeader = screen.getByText("Cake (26)");
  fireEvent.click(accodionHeader);
  //after click accodion header
  expect(screen.getAllByTestId("foodItems").length).toBe(26);

  //before add cart item (in header section)
  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", {name: "Add +"});
  fireEvent.click(addBtns[0]);
//after add cart item (in header section)
  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    //after click at cart btn => 26 + 1
    expect(screen.getAllByTestId("foodItems").length).toBe(27)

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart"}));
    expect(screen.getAllByTestId("foodItems").length).toBe(26)

    expect(screen.getByText("Cart is empty. Add Items to the cart!")).toBeInTheDocument();
});
