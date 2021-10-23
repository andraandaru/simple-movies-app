import { callAPI } from "../../config/api"

export const nextPage = () => ({
  type: "NEXT_PAGE",
})

export const fetchNextPage = (keyword, page, currentMovies) => {
  return async (dispatch) => {
    try {
      const params = `&s=${keyword}&page=${page}`

      const data = await callAPI({ params })
      const { Search: movies } = data

      const resultLength = movies.length

      let nextMovies = []

      if (resultLength >= 5) {
        const half = resultLength - 5
        const newMovies = movies.slice(0, 5)
        currentMovies = [...currentMovies, ...newMovies]
        nextMovies = movies.slice(-half)
      } else {
        currentMovies = movies
      }

      const nextPage = (page += 1)
      dispatch({
        type: "UPDATE_MOVIES",
        payload: {
          keyword,
          currentMovies,
          nextMovies,
          page: nextPage,
        },
      })
    } catch (err) {
      console.log(err)
    }
  }
}