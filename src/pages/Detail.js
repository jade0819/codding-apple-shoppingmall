import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useDispatch } from "react-redux";
import TimerMsg from "../components/TimerMsg";
import TabContent from "../components/TabContent";
import AnimFade from "../components/AnimFade";
import NotFound from "./NotFound";
import { addCartItem } from "../store/cartSlice";

const Detail = ({ shoes }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [input, setInput] = useState(1);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    const watchedData = JSON.parse(localStorage.getItem("watched"));
    watchedData.push(id);
    const uniqueWatchedData = [...new Set(watchedData)];

    localStorage.setItem("watched", JSON.stringify(uniqueWatchedData));
  }, [id]);

  const data = shoes.find((item) => item.id === Number(id));
  if (!data) return <NotFound />;

  const onValidationCheck = (value) => {
    if (isNaN(value)) {
      alert("숫자를 입력해주세요.");
    } else {
      setInput(Number(value));
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
            <h4 className="pt-5">{data.title}</h4>
            <p>{data.content}</p>
            <p>{data.price}원</p>
            <p>
              수량:
              <input
                type="text"
                value={input}
                onChange={(e) => onValidationCheck(e.target.value)}
              />
            </p>
            <button
              className="btn btn-danger"
              onClick={() =>
                dispatch(
                  addCartItem({
                    id: data.id,
                    name: data.title,
                    count: input,
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
