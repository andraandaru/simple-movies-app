import { Grid, List } from "@mui/material"
import { useSelector } from "react-redux"
import MovieModal from "../MovieModal"
import MovieItem from "./MovieItem"

const MovieList = () => {
  const { currentMovies } = useSelector((state) => ({
    currentMovies: state.movieReducer.currentMovies,
  }))

  return (
    <>
      <Grid container spacing={0} justifyContent="center">
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {currentMovies.map((movie, idx) => (
            <MovieItem key={idx} data={movie} idx={idx} />
          ))}
        </List>
      </Grid>
      <MovieModal />
    </>
  )
}

export default MovieList
