const PLACEHOLDER_IMAGE = "https://via.placeholder.com/150x150?text=NO+Poster"

const Poster = ({ src, width, onClick = null }) => {
  return (
    <img
      src={src !== "N/A" ? src : PLACEHOLDER_IMAGE}
      width={width}
      alt="poster"
      onClick={onClick}
      data-testid="poster"
    />
  )
}

export default Poster
