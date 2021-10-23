import Navbar from "../../components/organisms/Navbar/index"
import { MemoryRouter } from "react-router-dom"
import { render, screen } from '../../utils/test-utils'

it("Should show navbar on document", () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <Navbar />
    </MemoryRouter>
  )
  const navbarElement = screen.getByTestId("navbar")
  expect(navbarElement).toBeInTheDocument()
})

it("Should show navbar brand text", () => {
  render(
    <MemoryRouter initialEntries={[{ pathname: "/" }]}>
      <Navbar />
    </MemoryRouter>
  )
  const navbarElement = screen.getByTestId("navbar-text").textContent
  expect(navbarElement).toEqual("Simple Movies App")
})
