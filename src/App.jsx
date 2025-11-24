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
          This is a project coded using the React app and Visual Studio Code, via Javascript and CSS coding languages. 
          It was then uploaded to Github, and then onto your computer where you now view it!
           I created this for my college programming class, to serve as a way to show my skills and retrieve movie data from The Movie Database. 
           Each tab should have different listings of movies, with the concession being a display of delicious candy snacks.
           Credit for the data used goes to The Movie Database and I credit the skills here to my friends and teachers at Lethbridge Polytechnic,
            for the knowledge they've so kindly passed onto me.
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
