import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Doctors from "./pages/Doctors"
import Login from "./pages/Login"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Profile from "./pages/Profile"
import Appoinments from "./pages/Appoinments"
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <div >

      <Navbar/>

       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/doctors" element={<Doctors />}/>
        <Route path="/doctors/:speciality" element={<Doctors />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/appointments" element={<Appoinments />}/>
        <Route path="/appointments/:docId" element={<Appoinments />}/>

       </Routes>
    </div>
  )
}

export default App