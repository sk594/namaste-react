import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

it("should render RestaurantCard component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText("Rawat Mishthan Bhandar")

    expect(name).toBeInTheDocument();
})