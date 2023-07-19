import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ourrooms from "./pages/Ourrooms";
import Display from "./pages/Display";
import RoomList from "./pages/RoomList";
import Login from "./auth/Login";
import Register from "./auth/Register";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/rooms" element={<Ourrooms />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/display/:fname" element={<Display />}></Route>
          <Route exact path="/roomlist" element={<RoomList />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
// "http://localhost:3000/getall"
