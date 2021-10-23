import movieReducer from "../../redux/reducers/movieReducer"

const INITIAL_STATE = {
  keyword: "",
  currentMovies: [],
  nextMovies: [],
  totalResults: "",
  movieDetail: {},
  page: 1,
  moviesOptions: [],
  viewPoster: false,
  posterTitle: "",
  posterIMG: "",
  error: "",
}

test("should return the initial state", () => {
  expect(movieReducer(undefined, {})).toEqual(INITIAL_STATE)
})
