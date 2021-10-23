import { Button, ListItem, ListItemText, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { viewPoster } from "../../../redux/actions"
import Poster from "../../atom/Poster"

const MovieItem = ({ data, idx }) => {
  const { imdbID, Poster: PosterImage, Title, Year, Type } = data

  const dispatch = useDispatch()
  const history = useHistory()

  const onClickPoster = () => {
    const posterData = {
      title: Title,
      poster: PosterImage,
    }
    dispatch(viewPoster(posterData))
  }

  const onClickDetail = () => {
    history.push(`/detail/${imdbID}`)
  }

  return (
    <ListItem>
      <Poster width="150" src={PosterImage} onClick={onClickPoster} />
      <ListItemText
        data-testid="movieItem-title"
        primary={Title}
        secondary={
          <>
            <Typography
              data-testid="movieItem-year"
              component="span"
              variant="subtitle2"
              color="initial"
            >
              {Year}
            </Typography>
            <br />
            <Typography
              data-testid="movieItem-type"
              component="span"
              variant="subtitle2"
              color="initial"
              sx={{ textTransform: "capitalize" }}
            >
              {Type}
            </Typography>
            <br />
            <Button variant="contained" color="primary" onClick={onClickDetail}>
              View Detail
            </Button>
          </>
        }
        sx={{ paddingLeft: 2 }}
      />
    </ListItem>
  )
}

export default MovieItem
