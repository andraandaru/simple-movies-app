import { Container, Grid } from "@mui/material"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import CircularLoading from "../components/atom/CircularLoading"
import FormSearchMovies from "../components/organisms/FormSearchMovies"
import MovieList from "../components/organisms/MovieList"
import Layout from "../components/templates/Layout"
import { fetchNextPage, nextPage } from "../redux/actions"

const HomePage = () => {
  const [loading, setLoading] = useState(false)

  const { keyword, page, nextMovies, currentMovies, maxPage } = useSelector((state) => ({
    keyword: state.movieReducer.keyword,
    page: state.movieReducer.page,
    nextMovies: state.movieReducer.nextMovies,
    currentMovies: state.movieReducer.currentMovies,
    maxPage: state.movieReducer.maxPage,
  }))

  const dispatch = useDispatch()

  window.onscroll = async () => {
    const currentWindowHeight = Math.ceil(window.innerHeight + window.scrollY)
    const documentHeight = document.documentElement.offsetHeight
    if (currentWindowHeight >= documentHeight) {
      if (nextMovies.length !== 0) {
        dispatch(nextPage())
      } else {
        if (page <= maxPage) {
          setLoading(true)
          await dispatch(fetchNextPage(keyword, page, currentMovies))
          setLoading(false)
        }
      }
    }
  }

  return (
    <Layout>
      <Container sx={{ mt: 3 }} maxWidth="xl">
        <Grid container spacing={0} justifyContent="center">
          <FormSearchMovies />
          <MovieList />
          <CircularLoading loading={loading} />
        </Grid>
      </Container>
    </Layout>
  )
}

export default HomePage
