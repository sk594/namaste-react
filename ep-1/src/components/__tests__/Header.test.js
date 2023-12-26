import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom"

it("Should load Header COmponent with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    // const loginButton = screen.getByRole("button");
    // const loginButton = screen.getByText("Login");
    const loginButton = screen.getByRole("button", {name: "Login"});
    // console.log("loginButton====>",loginButton)
    expect(loginButton).toBeInTheDocument();
})

it("Should render Header component with a Cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    // const cartItems = screen.getByText("Cart - (0 items)")
    const cartItems = screen.getByText(/Cart/) //use regex to find if Cart is available or not
    // console.log("cartItems====>",cartItems)
    expect(cartItems).toBeInTheDocument();
})

it("Should change login button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"})

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", {name: "Logout"})

    expect(logoutButton).toBeInTheDocument()
})