import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import all pages
import Home from "./pages/Home";
import Salons from "./pages/Salons";
import Cosmetics from "./pages/Cosmetics";
import EventHall from "./pages/EventHall";
import FoodCourt from "./pages/FoodCourt";
import DesigningStitching from "./pages/DesigningStitching";
import Academy from "./pages/Academy";
import Franchise from "./pages/Franchise";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/salons" element={<Salons />} />
            <Route path="/cosmetics" element={<Cosmetics />} />
            <Route path="/event-hall" element={<EventHall />} />
            <Route path="/food-court" element={<FoodCourt />} />
            <Route path="/designing-stitching" element={<DesigningStitching />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
