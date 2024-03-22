import { Suspense, lazy, useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import NavbarContainer from "./components/NavbarContainer";
import Card from "./components/Card";
import Loading from "./components/Loading";
import About from "./pages/About";
import Event from "./pages/Event";
import data from "./data";
import "./App.css";
import WatchedProducts from "./components/WatchedProducts";

const Cart = lazy(() => import("./pages/Cart"));
const Detail = lazy(() => import("./pages/Detail"));
const Products = lazy(() => import("./pages/Products"));

function App() {
  useEffect(() => {
    if (localStorage.getItem("watched") === null) {
      localStorage.setItem("watched", JSON.stringify([]));
    }
  }, []);

  const [shoes, setShoes] = useState(data);
  const [moreDataURL, setMoreDataURL] = useState(2);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    if (moreDataURL === 4) {
      alert("상품이 없습니다.");
      return;
    }

    setLoading(true);

    axios
      .get(`https://codingapple1.github.io/shop/data${moreDataURL}.json`)
      .then((res) => {
        const copy = [...shoes, ...res.data];
        setShoes(copy);

        setMoreDataURL((prev) => prev + 1);
        setLoading(false);
      })
      .catch(() => console.log("실패"));
  };

  return (
    <div className="App">
      <NavbarContainer />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <div className="main-bg" />
              <Container>
                <Row>
                  {shoes.map((item, index) => {
                    return <Card item={item} index={index} key={item.id} />;
                  })}
                </Row>
              </Container>

              {loading && <Loading />}
              <MoreBtn onClick={() => getData()}>more</MoreBtn>
              <WatchedProducts data={shoes} />
            </main>
          }
        />
        <Route
          path="/detail"
          element={
            <Suspense fallback={<div>로딩중...</div>}>
              <Products data={shoes} />
            </Suspense>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <Suspense fallback={<div>로딩중...</div>}>
              <Detail shoes={shoes} />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<div>로딩중...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route path="/mypage" element={<div>마이페이지</div>} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>
        <Route path="*" element={<div>페이지 없음</div>} />
      </Routes>
    </div>
  );
}

export default App;

const MoreBtn = styled.button`
  font-size: 14px;
  padding: 4px 6px;
  margin: 20px 0;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  &:hover {
    background-color: #fafafa;
  }
`;
