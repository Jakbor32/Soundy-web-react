import favicon16x16 from "./assets/favicon-16x16.png";
import faviconICO from "./assets/favicon.ico";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navbar, Footer } from "./components";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Media from "./pages/Media";
import Tour from "./pages/Tour";
import Store from "./pages/Store";
import PageNotFound from "./pages/PageNotFound";

const App = () => (
  <>
    <Helmet>
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16} />
      <link rel="icon" type="image/x-icon" href={faviconICO} />
    </Helmet>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media" element={<Media />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/store" element={<Store />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
    <Footer />
  </>
);

export default App;
