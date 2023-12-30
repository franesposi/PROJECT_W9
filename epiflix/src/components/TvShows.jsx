import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TvShows = ({ idSearch }) => {
  const [movies, setMovies] = useState([]);

  const getAllMovies = async () => {
    try {
      const res = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=d31aa4ea" + idSearch);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setMovies(data.Search);
      } else {
        throw new Error("Errrore nel caricamento fetch");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container fluid>
      <Row>
        {movies.map((movie) => (
          <Col className="col-md-4 col-lg-2 px-1 mx-3" key={movie.imdbID}>
            <Card className="h-100 bg-black my-3">
              <Link to={"/movie-detail/" + movie.imdbID}>
                <Card.Img variant="top" src={movie.Poster} alt={movie.Title} className="h-100 moviesImg my-2" />
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TvShows;
