import { render, screen } from "../../utils/test-utils"
import MovieDetailHeader from "../../components/organisms/MovieDetail/MovieDetailHeader"
import MovieDetailDescItem from "../../components/organisms/MovieDetail/MovieDetailDescItem"
import MovieDetailFooterItem from "../../components/organisms/MovieDetail/MovieDetailFooterItem"

it("Should render movie detail header with same text as props passed", () => {
  render(<MovieDetailHeader Type="Movies" Title="Batman" />)
  const typeTextElement = screen.getByTestId("header-type")
  const titleTextElement = screen.getByTestId("header-title")
  expect(typeTextElement).toHaveTextContent("Movies")
  expect(titleTextElement).toHaveTextContent("Batman")
})

it("Should render movie desc item with same text as props passed", () => {
  render(<MovieDetailDescItem Title="Genre" Body="Action" />)
  const titleTextElement = screen.getByTestId("desc-title")
  const bodyTextElement = screen.getByTestId("desc-body")
  expect(titleTextElement).toHaveTextContent("Genre")
  expect(bodyTextElement).toHaveTextContent("Action")
})

it("Should desc body item have attribute variant body1 when title is Plot", async () => {
  render(<MovieDetailDescItem Title="Plot" Body="Lorem Ipsum Dolom Sit Amet" />)
  const bodyTextElement = await screen.findByTestId("desc-body")
  expect(bodyTextElement).toHaveClass("MuiTypography-body1")
})

it("Should desc body item have attribute variant body2 when title is not Plot", async () => {
  render(<MovieDetailDescItem Title="Genre" Body="Lorem Ipsum Dolom Sit Amet" />)
  const bodyTextElement = await screen.findByTestId("desc-body")
  expect(bodyTextElement).toHaveClass("MuiTypography-body2")
})

it("Should render movie footer item with same text as props passed", () => {
  render(<MovieDetailFooterItem Title="IMDB" Body="7.8" />)
  const titleTextElement = screen.getByTestId("footer-title")
  const bodyTextElement = screen.getByTestId("footer-body")
  expect(titleTextElement).toHaveTextContent("IMDB")
  expect(bodyTextElement).toHaveTextContent("7.8")
})