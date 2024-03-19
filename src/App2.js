import React, { createContext, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import data from "./data.js";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import Cart from "./routes/Cart.js";
import List from "./components/List.js";
import NotFound from "./routes/NotFound.js";
import axios from "axios";

export let Context1 = createContext();

function App() {
  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);
  let [loading, setLoading] = useState(false);
  let [moreData, setMoreData] = useState(2);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/detail")}>Detail</Nav.Link>
            <Nav.Link onClick={() => navigate("/cart")}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <List data={shoes} />
              {loading && <p>로딩 중...</p>}
              <button
                onClick={() => {
                  if (moreData === 4) {
                    alert("상품이 없습니다.");
                    return;
                  }

                  setLoading(true);

                  axios
                    .get(
                      `https://codingapple1.github.io/shop/data${moreData}.json`
                    )
                    .then((결과) => {
                      console.log(결과.data);

                      const timer = setTimeout(() => {
                        const copy = [...shoes, ...결과.data];
                        setShoes(copy);
                        setLoading(false);

                        if (moreData === 2) setMoreData(3);
                        else setMoreData(4);
                      }, 1000);

                      return () => clearTimeout(timer);
                    })
                    .catch(() => console.log("실패함ㅅㄱ"));
                }}
              >
                더보기
              </button>
            </>
          }
        />

        <Route
          path="/detail"
          element={
            <Context1.Provider value={{ 재고, shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Context1.Provider value={{ 재고, shoes }}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
        </Route>
        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}
