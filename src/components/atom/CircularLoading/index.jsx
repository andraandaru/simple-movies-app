import { CircularProgress } from "@mui/material"

const CircularLoading = ({ loading }) => {
  return (
    <>
      {loading && <CircularProgress data-testid="circular-progress"/>}
    </>
  )
}

export default CircularLoading
