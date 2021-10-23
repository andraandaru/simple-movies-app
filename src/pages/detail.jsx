/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Paper } from "@mui/material"
import Container from "@mui/material/Container"
import { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import CircularLoading from "../components/atom/CircularLoading"
import MovieDetail from "../components/organisms/MovieDetail"
import Layout from "../components/templates/Layout"
import { clearMovieDetail, getMovieDetail } from "../redux/actions"

const DetailPage = (props) => {
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  const fetchData = useCallback(async () => {
    const { imdbID } = props.match.params
    await dispatch(getMovieDetail(imdbID))
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchData()
    return dispatch(clearMovieDetail())
  }, [])

  return (
    <Layout>
      <Container maxWidth="lg">
        <Grid
          container
          component={Paper}
          sx={{ my: 3, p: 2 }}
          columnSpacing={4}
          justifyContent="center"
        >
          {loading ? (
            <CircularLoading loading={loading} />
          ) : (
            <MovieDetail />
          )}
        </Grid>
      </Container>
    </Layout>
  )
}

export default DetailPage
