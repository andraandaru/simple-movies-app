import MovieItem from "../../components/organisms/MovieList/MovieItem"
import { render, screen } from "../../utils/test-utils"

const PLACEHOLDER_DATA = {
  Title: "Batman Begins",
  Year: "2005",
  imdbID: "tt0372784",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
}

it("Should movie item render correctly as data passed", () => {
  render(<MovieItem data={PLACEHOLDER_DATA} />)
  const data = PLACEHOLDER_DATA
  const { Poster: PosterImage, Title, Year, Type } = data
  const posterIMGElement = screen.getByTestId("poster")
  const titleTextElement = screen.getByTestId("movieItem-title")
  const yearTextElement = screen.getByTestId("movieItem-year")
  const typeTextElement = screen.getByTestId("movieItem-type")
  expect(posterIMGElement).toHaveAttribute("src", PosterImage)
  expect(titleTextElement).toHaveTextContent(Title)
  expect(yearTextElement).toHaveTextContent(Year)
  expect(typeTextElement).toHaveTextContent(Type)
})
