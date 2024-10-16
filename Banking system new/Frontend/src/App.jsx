import Footer from "./components/footer/Footer.jsx";
import { Outlet } from 'react-router-dom'
import Navbar from "./components/header/Navbar.jsx";

function App() {

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
