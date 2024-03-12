import "./App.css";
import NavbarContainer from "./components/NavbarContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import shoes1 from "./assets/shoes1.jpg";
import shoes2 from "./assets/shoes2.jpg";
import shoes3 from "./assets/shoes3.jpg";

function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <div className="main-bg"></div>
      <Container>
        <Row>
          <Col md={4}>
            <img src={shoes1} alt="shoes1" width="80%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col md={4}>
            <img src={shoes2} alt="shoes2" width="80%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col md={4}>
            <img src={shoes3} alt="shoes3" width="80%" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
