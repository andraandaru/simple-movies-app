import { Grid, Typography } from "@mui/material"

const MovieDetailFooterItem = ({ Title, Body}) => {
  return (
    <Grid item>
      <Typography data-testid="footer-body" variant="h6" color="initial">
        {Body}
      </Typography>
      <Typography data-testid="footer-title" variant="caption" color="initial">
        {Title}
      </Typography>
    </Grid>
  )
}

export default MovieDetailFooterItem
