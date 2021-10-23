import { Grid } from "@mui/material"
import { useSelector } from "react-redux"
import Poster from "../../atom/Poster"
import MovieDetailDescItem from "./MovieDetailDescItem"
import MovieDetailFooter from "./MovieDetailFooter"
import MovieDetailFooterItem from "./MovieDetailFooterItem"
import MovieDetailHeader from "./MovieDetailHeader"

const MovieDetail = () => {
  const { movieDetail } = useSelector((state) => ({
    movieDetail: state.movieReducer.movieDetail,
  }))

  return (
    <>
      <Grid item xs={12} md={4}>
        <Poster src={movieDetail.Poster} width="100%" />
      </Grid>
      <Grid item xs={12} md={8}>
        <MovieDetailHeader Title={movieDetail.Title} Type={movieDetail.Type} />
        <MovieDetailDescItem Title="Plot" Body={movieDetail.Plot} />
        <MovieDetailDescItem Title="Genre" Body={movieDetail.Genre} />
        <MovieDetailDescItem Title="Director" Body={movieDetail.Director} />
        <MovieDetailDescItem Title="Writer" Body={movieDetail.Writer} />
        <MovieDetailDescItem Title="Actors" Body={movieDetail.Actors} />
        <MovieDetailDescItem Title="Runtime" Body={movieDetail.Runtime} />
        <MovieDetailDescItem Title="Language" Body={movieDetail.Language} />
        <MovieDetailDescItem Title="Awards" Body={movieDetail.Awards} />
        <MovieDetailFooter>
          <MovieDetailFooterItem Title="IMDB" Body={movieDetail.imdbRating} />
          <MovieDetailFooterItem Title="Rated" Body={movieDetail.Rated} />
          <MovieDetailFooterItem Title="Year" Body={movieDetail.Year} />
        </MovieDetailFooter>
      </Grid>
    </>
  )
}

export default MovieDetail
