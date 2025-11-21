import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Candies from "./Candies.jsx";
import CandyList from "./Candylist.jsx";
import Footer from "./Footer.jsx";
import Home from "./home";
import PopularList from "./PopularList.jsx";
import TopRated from "./TopRated";

function App() {
  const name = "Your Mom";

  return (
    <>
      <Navbar />
      <header>
        <h1>Movies</h1>
        <p>
          Lorem Ipsum is kinda boring ngl so I decided that I would just ramble here instead bc
          like are you even gonna notice and tbh I need a break from coding cause
          It's tricky so bing bang boom check this out!
        </p>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pop" element={<PopularList />} />
          <Route path="/top" element={<TopRated />} />
          <Route path="/candy" element={<CandyList />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
