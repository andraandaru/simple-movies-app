import Navbar from "../../organisms/Navbar"

const Layout = ({ children}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
