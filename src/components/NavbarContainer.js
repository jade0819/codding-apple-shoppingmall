import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

const NavbarContainer = () => {
  const navigate = useNavigate();

  const result = useQuery("username", async () => {
    const res = await axios.get("https://codingapple1.github.io/userdata.json");
    return res.data;
  });

  return (
    <>
      <Navbar expand="lg" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">High Shoes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{
              justifyContent: "space-between",
            }}
          >
            <Nav className="me-end">
              <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("/about")}>About</Nav.Link>
              <Nav.Link onClick={() => navigate("/detail")}>Shoes</Nav.Link>
              <Nav.Link onClick={() => navigate("/event")}>Event</Nav.Link>

              <Nav.Link onClick={() => navigate("/cart")}>Cart</Nav.Link>
            </Nav>
            <Nav>
              {result.isLoading && "로딩중"}
              {result.error && "에러남"}
              {!result.data && <span>Signin</span>}
              {result.data && (
                <NavDropdown title={result.data.name} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={() => navigate("/mypage")}>
                    마이페이지
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/qna")}>
                    Q&A
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/">로그아웃</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarContainer;
