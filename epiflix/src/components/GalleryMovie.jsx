import { Component } from "react";
import { Card, Carousel, CarouselItem, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

class GalleryMovie extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };

  getMovie = async () => {
    try {
      const res = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=d31aa4ea" + this.props.idSearch);
      if (res.ok) {
        const movie = await res.json();
        // console.log(movie)
        this.setState({
          isLoading: false,
          movies: movie.Search,
        });
      } else {
        throw new Error("Errore nel caricamento dati");
      }
    } catch (error) {
      console.log("errore", error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };

  componentDidMount() {
    this.getMovie();
  }

  render() {
    return (
      <Container fluid className="mt-4">
        <h2 className="mb-4 fs-3 fw-bold text-white ms-5">{this.props.idSearch.toUpperCase()}</h2>
        <Carousel interval={null}>
          <CarouselItem>
            {this.state.isLoading && (
              <div className="text-center">
                <Spinner animation="grow" style={{ color: "#cb121a" }} />
              </div>
            )}
            {this.state.isError && <div className="text-center"></div>}
            <Row className="justify-content-center">
              {this.state.movies.slice(0, 5).map((movie) => (
                <Col className="col-md-4 col-lg-2 px-1 mx-3" key={movie.imdbID}>
                  <Card className="h-100 bg-black">
                    <Link to={"/movie-detail/" + movie.imdbID}>
                      <Card.Img variant="top" src={movie.Poster} alt={movie.Title} className="h-100 moviesImg" />
                    </Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </CarouselItem>
          <CarouselItem>
            <Row className="justify-content-center">
              {this.state.movies.slice(5, 10).map((movie) => (
                <Col className="col-md-4 col-lg-2 px-1 mx-3" key={movie.imdbID}>
                  <Card className="h-100 bg-black">
                    <Link to={"/movie-detail/" + movie.imdbID}>
                      <Card.Img variant="top" src={movie.Poster} alt={movie.Title} className="h-100 moviesImg" />
                    </Link>
                  </Card>
                </Col>
              ))}
            </Row>
          </CarouselItem>
        </Carousel>
      </Container>
    );
  }
}

export default GalleryMovie;
