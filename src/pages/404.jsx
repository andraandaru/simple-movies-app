import { Grid, Typography } from "@mui/material"
import Layout from "../components/templates/Layout"

const NotFound = () => {
  return (
    <Layout>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h1" color="initial" align="center">
            404
          </Typography>
          <Typography variant="h4" color="initial" align="center">
            Oops! Page Not Found!
          </Typography>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default NotFound
