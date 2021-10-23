import { Typography } from "@mui/material"

const MovieDetailHeader = ({ Type, Title }) => {
  return (
    <>
      <Typography data-testid="header-type" variant="subtitle1" color="initial" sx={{ textTransform: "capitalize" }}>
        {Type}
      </Typography>
      <Typography data-testid="header-title" variant="h3" color="initial">
        {Title}
      </Typography>
    </>
  )
}

export default MovieDetailHeader
