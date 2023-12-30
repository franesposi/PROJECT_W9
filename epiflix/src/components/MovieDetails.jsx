import { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const params = useParams();

  const [movieDetail, setMovieDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getOneMovie = async () => {
    try {
      const res = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=d31aa4ea" + params.movieId);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setMovieDetail(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      } else {
        throw new Error("I dati del film non sono  stati trovati!");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOneMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container fluid className="my-5">
        <Row className="d-flex justify-content-center align-items-center mx-4 mb-4">
          {isLoading && (
            <div className="text-center">
              <Spinner animation="grow" style={{ color: "#cb121a" }} />
            </div>
          )}
          <Col className="col-10 border border-white rounded-2">
            <Row>
              <Col className="col-4 ps-0">
                <Image src={movieDetail.Poster} className="w-100 rounded-start-2" />
              </Col>
              <Card.Body className="col-4 p-4">
                <h5 className="w-100" style={{ color: "#E50815" }}>
                  {movieDetail.Title}
                </h5>
                <p className="text-white fw-bold">
                  {movieDetail.Year} |<em> {movieDetail.Director}</em>
                </p>
                <p className="text-white-50">
                  Actors:<em className="text-white"> {movieDetail.Actors}</em>
                </p>
                <p className="text-white-50">
                  Awards:<em className="text-white"> {movieDetail.Awards}</em>
                </p>
                <p className="text-white-50">
                  {movieDetail.BoxOffice} | {movieDetail.Runtime}
                </p>
                <hr className="text-white-50" />
                <p className="text-white">{movieDetail.Plot}</p>
              </Card.Body>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MovieDetails;
