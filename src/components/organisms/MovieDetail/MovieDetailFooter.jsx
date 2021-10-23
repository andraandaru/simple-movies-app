import { Grid } from "@mui/material"

const MovieDetailFooter = ({ children}) => {
  return (
    <Grid item container columnSpacing={2} sx={{ mt: 2, p: 1 }}>
      {children}
    </Grid>
  )
}

export default MovieDetailFooter
