import CircularLoading from "../../components/atom/CircularLoading/index"
import { render, screen } from '../../utils/test-utils'

it("Should Display Circular Loading  on Loading", () => {
  render(<CircularLoading loading={true} />)
  const circularElement = screen.getByTestId("circular-progress")
  expect(circularElement).toBeInTheDocument()
})
