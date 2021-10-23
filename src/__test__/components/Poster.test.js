import Poster from "../../components/atom/Poster/index"
import { render, screen } from '../../utils/test-utils'

it("Should show an image", () => {
  const POSTER_MOVIE =
    "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"
  const width = "100"

  render(<Poster src={POSTER_MOVIE} width={width} />)
  const posterImage = screen.getByTestId("poster")
  expect(posterImage).toHaveAttribute("src", POSTER_MOVIE)
  expect(posterImage).toHaveAttribute("width", width)
})

it("Should show a placeholder image when poster image equal to 'N/A'", () => {
  const PLACEHOLDER_IMAGE = "https://via.placeholder.com/150x150?text=NO+Poster"
  const POSTER_MOVIE = "N/A"
  const width = "100"

  render(<Poster src={POSTER_MOVIE} width={width} />)
  const posterImage = screen.getByTestId("poster")
  expect(posterImage).toHaveAttribute("src", PLACEHOLDER_IMAGE)
  expect(posterImage).toHaveAttribute("width", width)
})
