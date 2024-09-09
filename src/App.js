import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>product components</h1>} />
          <Route path="/add" element={<h1>add product components</h1>} />
          <Route path="/update" element={<h1>update product components</h1>} />
          <Route path="/profile" element={<h1>Profile page</h1>} />

          <Route path="/logout" element={<h1>logout page</h1>} />

          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />;
    </div>
  );
}

export default App;
