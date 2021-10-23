import axios from "axios"

const API_KEY = process.env.REACT_APP_API_KEY
const URL_API = `https://www.omdbapi.com/?apikey=${API_KEY}`

export const callAPI = async ({ params }) => {
  try {
    const url = `${URL_API}` + params
    const response = await axios({ url, method: "GET" })
    const { Response, Error, ...etc } = response.data
    if (Response === "True") {
      const res = {
        ...etc,
      }
      return res
    } else {
      throw Error
    }
  } catch (err) {
    throw err
  }
}
