import { Dialog, DialogTitle } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { closePoster } from "../../../redux/actions"
import Poster from "../../atom/Poster"

const MovieModal = () => {
  const { viewPoster, posterTitle, posterIMG } = useSelector((state) => ({
    viewPoster: state.movieReducer.viewPoster,
    posterTitle: state.movieReducer.posterTitle,
    posterIMG: state.movieReducer.posterIMG,
  }))

  const dispatch = useDispatch()

  const onClosePoster = () => {
    dispatch(closePoster())
  }

  return (
    <Dialog onClose={onClosePoster} open={viewPoster}>
      <DialogTitle>{posterTitle}</DialogTitle>
      <Poster src={posterIMG} width="100%" />
    </Dialog>
  )
}

export default MovieModal
