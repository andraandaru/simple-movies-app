import { callAPI } from "../../config/api"

export const searchMovieByKeyword = (keyword) => {
  return async (dispatch) => {
    try {
      let page = 1
      const params = `&s=${keyword}&page=${page}`

      const data = await callAPI({ params })
      const { Search: movies, totalResults } = data

      const resultLength = movies.length

      let currentMovies = []
      let maxPage = 1
      let nextMovies = []

      if (resultLength >= 5) {
        const defaultMoviesLength = 10
        maxPage = Math.ceil(totalResults / defaultMoviesLength)
        const half = resultLength - 5
        currentMovies = movies.slice(0, 5)
        nextMovies = movies.slice(-half)
      } else {
        currentMovies = movies
      }

      const nextPage = (page += 1)
      dispatch({
        type: "GET_MOVIES",
        payload: {
          keyword,
          currentMovies,
          nextMovies,
          totalResults,
          maxPage,
          page: nextPage,
        },
      })
    } catch (err) {
      dispatch({
        type: "GET_MOVIES_ERROR",
        payload: {
          error: err
        },
      })
    }
  }
}

export const getMoviesOptions = (keyword) => {
  return async (dispatch) => {
    try {
      const params = `&s=${keyword}`
      const data = await callAPI({ params })
      const { Search: movies } = data
      const moviesOptions = movies.map((movie, idx) => ({ id: idx, label: movie.Title }))
      dispatch({
        type: "GET_OPTIONS",
        payload: moviesOptions,
      })
    } catch (err) {
      dispatch({
        type: "GET_OPTIONS",
        payload: [],
      })
    }
  }
}

export const clearGetMoviesError = () => ({
  type: "CLEAR_GET_MOVIES_ERROR"
})

export const clearOptions = () => ({
  type: "CLEAR_OPTIONS",
})

export const clearMovieList = () => ({
  type: "CLEAR_MOVIES"
})