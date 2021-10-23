import { callAPI } from "../../config/api"

export const getMovieDetail = (imdbID) => {
  return async (dispatch) => {
    try {
      const params = `&i=${imdbID}`
      const data = await callAPI({ params })
      const { Response, Error, ...etc } = data
      const movieData = { ...etc }
      dispatch({
        type: "GET_DETAIL_MOVIE",
        payload: movieData,
      })
    } catch (err) {
      console.log(err)
    }
  }
}

export const clearMovieDetail = () => ({
  type: "CLEAR_DETAIL",
})