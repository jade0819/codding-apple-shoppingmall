import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import TimerMsg from "../components/TimerMsg";
import Nav from "react-bootstrap/Nav";
import TabContent from "../components/TabContent";
import AnimFade from "../components/AnimFade";

const Detail = ({ shoes }) => {
  const { id } = useParams();

  const [input, setInput] = useState("");
  const [tab, setTab] = useState(0);

  const data = shoes.find((item) => item.id === Number(id));
  if (!data) return <NotFound />;

  const onValidationCheck = (value) => {
    if (isNaN(value)) {
      alert("그러지마세요");
    } else {
      setInput(value);
    }
  };

  return (
    <AnimFade>
      <TimerMsg />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={require(`../assets/shoes${Number(id) + 1}.jpg`)}
              alt="shoes"
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">상품명</h4>
            <p>상품설명</p>
            <p>120000원</p>
            <p>
              수량:{" "}
              <input
                type="text"
                value={input}
                onChange={(e) => onValidationCheck(e.target.value)}
              />
            </p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>

        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={() => setTab(0)}>
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={() => setTab(1)}>
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={() => setTab(2)}>
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab={tab} />
      </div>
    </AnimFade>
  );
};

export default Detail;
