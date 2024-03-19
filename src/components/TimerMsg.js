import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TimerMsg = () => {
  const [msg, setMsg] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMsg(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <>{msg && <Msg>2초이내 구매 시 할인</Msg>}</>;
};

export default TimerMsg;

const Msg = styled.div`
  background-color: #ffdab9;
  padding: 12px 0;
`;
