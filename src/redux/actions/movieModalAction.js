export const viewPoster = (posterData) => ({
  type: "VIEW_POSTER",
  payload: posterData,
})

export const closePoster = () => ({
  type: "CLOSE_POSTER",
})