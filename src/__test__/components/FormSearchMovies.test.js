import FormSearchMovies from "../../components/organisms/FormSearchMovies"
import { render, screen, fireEvent } from "../../utils/test-utils"

it("should input render", () => {
  render(<FormSearchMovies />)
  const inputElement = screen.getByRole("textbox")
  expect(inputElement).toBeInTheDocument()
})

it("should input value change", () => {
  render(<FormSearchMovies />)
  const inputElement = screen.getByRole("textbox")
  fireEvent.change(inputElement, { target: { value: "Batman" } })
  expect(inputElement.value).toBe("Batman")
})
