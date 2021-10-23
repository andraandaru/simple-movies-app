/* eslint-disable react-hooks/exhaustive-deps */
import { Autocomplete, Button, Grid, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import {
  clearGetMoviesError,
  clearMovieList,
  clearOptions,
  getMoviesOptions,
  searchMovieByKeyword,
} from "../../../redux/actions"

const FormSearchMovies = () => {
  const [value, setValue] = useState(null)
  const [inputValue, setInputValue] = useState("")
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const { moviesOptions, currentMovies, error } = useSelector((state) => ({
    moviesOptions: state.movieReducer.moviesOptions,
    currentMovies: state.movieReducer.currentMovies,
    error: state.movieReducer.error,
  }))

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearGetMoviesError())
    }
  }, [error])

  const handleInputChange = async (value) => {
    setLoading(true)
    setInputValue(value)
    if (value.length >= 3) {
      if (!open) setOpen(true)
      await dispatch(getMoviesOptions(value))
      setLoading(false)
    } else {
      if (open) setOpen(false)
      await dispatch(clearOptions())
      setLoading(false)
    }
  }

  const handleChange = (value) => {
    setValue(value)
    if (open) setOpen(false)
  }

  const onSubmit = () => {
    if (inputValue === "") return toast.error("Please input keyword")
    if (inputValue.length >= 3) {
      setOpen(false)
      dispatch(searchMovieByKeyword(inputValue))
    }
  }

  const onClearMovies = () => {
    dispatch(clearMovieList())
    setValue(null)
    setInputValue("")
  }

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.defaultMuiPrevented = true
      setOpen(false)
      onSubmit()
    }
  }

  return (
    <Grid container spacing={2} alignItems="center" marginBottom={2}>
      <Grid item>
        <Typography variant="h6" color="primary">
          Search Movies
        </Typography>
      </Grid>
      <Grid item>
        <Autocomplete
          sx={{ width: 300 }}
          freeSolo
          open={open}
          loading={loading}
          options={moviesOptions}
          onKeyDown={onKeyDown}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          value={value}
          onChange={(e, newValue) => handleChange(newValue || null)}
          inputValue={inputValue}
          onInputChange={(e, newValue) => handleInputChange(newValue || "")}
          renderInput={(params) => <TextField {...params} label="Keyword" variant="outlined" />}
          renderOption={(props, option) => (
            <li {...props} key={option.id}>
              {option.label}
            </li>
          )}
        />
      </Grid>
      <Grid item>
        <Button name="search" variant="contained" color="primary" onClick={onSubmit}>
          Search
        </Button>
      </Grid>
      {currentMovies.length !== 0 && (
        <Grid item>
          <Button data-testid="clear-button" variant="outlined" color="error" onClick={onClearMovies}>
            Clear Movies
          </Button>
        </Grid>
      )}
    </Grid>
  )
}

export default FormSearchMovies
