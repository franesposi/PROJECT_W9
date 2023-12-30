import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav.jsx";
import MyFooter from "./components/MyFooter.jsx";
import GalleryMovie from "./components/GalleryMovie.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from "./components/TvShows.jsx";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <MyNav />
          <Routes>
            <Route element={<TvShows idSearch={"star trek"} />} path="/tv-shows" />
          </Routes>
        </header>

        <main>
          <Routes>
            <Route
              element={
                <>
                  <GalleryMovie idSearch={"harry potter"} />
                  <GalleryMovie idSearch={"Star Wars"} />
                  <GalleryMovie idSearch={"Avengers"} />
                </>
              }
              path="/"
            />
            <Route element={<MovieDetails />} path="/movie-detail/:movieId" />
          </Routes>
        </main>

        <footer>
          <MyFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
