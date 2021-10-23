import { Typography } from "@mui/material"

const MovieDetailDescItem = ({ Title, Body }) => {
  return (
    <>
      <Typography data-testid="desc-title" variant="subtitle2" color="initial">
        {Title}
      </Typography>
      <Typography data-testid="desc-body" variant={Title === "Plot" ? "body1" : "body2"} color="initial">
        {Body}
      </Typography>
    </>
  )
}

export default MovieDetailDescItem
