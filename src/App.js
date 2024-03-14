// import { useState } from "react";
// import NavbarContainer from "./components/NavbarContainer";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Card from "./components/Card.js";
// import "./App.css";
// import data from "./data.js";
// import { Routes, Route } from "react-router-dom";
// import Detail from "./pages/Detail.js";
// import About from "./pages/About.js";
// import Event from "./pages/Event.js";

// function App() {
//   const [shoes] = useState(data);

//   return (
//     <div className="App">
//       <NavbarContainer />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <main>
//               <div className="main-bg" />
//               <Container>
//                 <Row>
//                   {shoes.map((item, index) => {
//                     return <Card item={item} index={index} key={item.id} />;
//                   })}
//                 </Row>
//               </Container>
//             </main>
//           }
//         />
//         <Route path="/detail" element={<Detail shoes={shoes} />} />
//         <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
//         <Route path="/cart" element={<div>장바구니</div>} />
//         <Route path="/mypage" element={<div>마이페이지</div>} />
//         <Route path="/about" element={<About />}>
//           <Route path="member" element={<div>멤버임</div>} />
//         </Route>
//         <Route path="/event" element={<Event />}>
//           <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
//           <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
//         </Route>
//         <Route path="*" element={<div>페이지 없음</div>} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import data from "./data.js";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail";
import List from "./components/List.js";
import NotFound from "./routes/NotFound.js";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/detail")}>Detail</Nav.Link>
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
            </>
          }
        />
        <Route path="/detail" element={<Detail shoes={shoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
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
