import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import NotFound from "./NotFound.js";
import List from "../components/List.js";
import Nav from "react-bootstrap/Nav";
import { Context1 } from "../App2.js";
import { useDispatch } from "react-redux";
import { addItem } from "../store2/cartSlice2.js";

const Detail = ({ shoes }) => {
  let { 재고 } = useContext(Context1);

  const { id } = useParams();
  const { pathname } = useLocation();

  let [eventMsg, setEventMsg] = useState(true);
  let [탭, 탭변경] = useState(0);
  let [num, setNum] = useState(1);
  let [fade, setFade] = useState("");

  let dispatch = useDispatch();

  useEffect(() => {
    let 꺼낸거 = localStorage.getItem("watched");
    꺼낸거 = JSON.parse(꺼낸거);
    꺼낸거.push(id);
    꺼낸거 = new Set(꺼낸거);
    꺼낸거 = Array.from(꺼낸거);
    localStorage.setItem("watched", JSON.stringify(꺼낸거));
  }, []);

  useEffect(() => {
    let a = setTimeout(() => setFade("end"), 10);

    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [pathname]);

  useEffect(() => {
    let a = setTimeout(() => {
      setEventMsg(false);
    }, 2000);

    return () => {
      setEventMsg(true);
      clearTimeout(a);
    };
  }, [pathname]);

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("그러지마세요");
    }
  }, [num]);

  if (!id) {
    // /detail page
    return (
      <div className={`start ${fade}`}>
        <List data={shoes} />
      </div>
    );
  }

  const 찾은상품 = shoes.find((item) => item.id == id);
  if (!찾은상품) return <NotFound />;

  return (
    <div className={`start ${fade}`}>
      {eventMsg && (
        <div className="alert alert-warning">2초이내 구매 시 할인</div>
      )}

      {재고[0]}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                Number(id) + 1
              }.jpg`}
              alt="shoes"
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <p>
              수량:
              <input
                type="text"
                value={num}
                onChange={(e) => setNum(Number(e.target.value))}
              />
            </p>
            <button
              className="btn btn-danger"
              onClick={() =>
                dispatch(
                  addItem({
                    id: 찾은상품.id,
                    name: 찾은상품.title,
                    count: num,
                  })
                )
              }
            >
              주문하기
            </button>
          </div>
        </div>

        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={() => 탭변경(0)}>
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={() => 탭변경(1)}>
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={() => 탭변경(2)}>
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <TabContent 탭={탭} />
      </div>
    </div>
  );
};

const TabContent = ({ 탭 }) => {
  let [fade, setFade] = useState("");

  useEffect(() => {
    let a = setTimeout(() => setFade("end"), 100);

    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [탭]);

  // if (탭 === 0) {
  //   return <div>내용0</div>;
  // } else if (탭 === 1) {
  //   return <div>내용1</div>;
  // } else {
  //   return <div>내용2</div>;
  // }

  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
};

export default Detail;
