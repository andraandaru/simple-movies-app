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

export const movieReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case "UPDATE_MOVIES":
      return {
        ...state,
        keyword: payload.keyword,
        currentMovies: payload.currentMovies,
        nextMovies: payload.nextMovies,
        page: payload.page,
      }
    case "NEXT_PAGE":
      return {
        ...state,
        currentMovies: [...state.currentMovies, ...state.nextMovies],
        nextMovies: [],
      }
    // Movie Form
    case "GET_MOVIES":
      return {
        ...state,
        page: payload.page,
        maxPage: payload.maxPage,
        keyword: payload.keyword,
        currentMovies: payload.currentMovies,
        nextMovies: payload.nextMovies,
        totalResults: payload.totalResults,
      }
    case "GET_MOVIES_ERROR":
      return {
        ...state,
        error: payload.error,
      }
    case "CLEAR_GET_MOVIES_ERROR":
      return {
        ...state,
        error: "",
      }
    case "GET_OPTIONS":
      return {
        ...state,
        moviesOptions: payload,
      }
    case "CLEAR_OPTIONS":
      return {
        ...state,
        moviesOptions: [],
      }
    case "CLEAR_MOVIES":
      return INITIAL_STATE
    // Movie Detail
    case "GET_DETAIL_MOVIE":
      return {
        ...state,
        movieDetail: payload,
      }
    case "CLEAR_DETAIL":
      return {
        ...state,
        movieDetail: {},
      }
    // Movie Modal
    case "VIEW_POSTER":
      return {
        ...state,
        viewPoster: true,
        posterTitle: payload.title,
        posterIMG: payload.poster,
      }
    case "CLOSE_POSTER":
      return {
        ...state,
        viewPoster: false,
        posterTitle: "",
        posterIMG: "",
      }
    default:
      return INITIAL_STATE
  }
}

export default movieReducer
