import { ArrowBack } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/system"
import { useState } from "react"
import { useHistory, useLocation } from "react-router-dom"

const Navbar = () => {
  const [back, setBack] = useState(false)

  const history = useHistory()

  const NavbarText = styled(Typography)({
    cursor: "pointer",
  })

  const { pathname } = useLocation()
  useState(() => {
    if (pathname !== "/") {
      return setBack(true)
    } else {
      return setBack(false)
    }
  }, [pathname])

  const goBack = () => {
    setBack(false)
    history.goBack()
  }

  return (
    <AppBar position="sticky" color="primary" data-testid="navbar">
      <Toolbar>
        {back && (
          <IconButton onClick={goBack}>
            <ArrowBack sx={{ color: "white" }} />
          </IconButton>
        )}
        <NavbarText variant="h6" onClick={() => history.push("/")} data-testid="navbar-text">
          Simple Movies App
        </NavbarText>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
