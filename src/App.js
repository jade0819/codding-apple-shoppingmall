import { useState } from "react";
import "./App.css";
import NavbarContainer from "./components/NavbarContainer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "./components/Card.js";
import data from "./data.js";

function App() {
  const [shoes] = useState(data);

  return (
    <div className="App">
      <NavbarContainer />
      <div className="main-bg"></div>
      <Container>
        <Row>
          {shoes.map((item, index) => {
            return <Card item={item} index={index} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
