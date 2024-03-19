import React from "react";
import List from "./List";
import styled from "styled-components";

const WatchedProducts = ({ data }) => {
  const watchedDataId = new Set(JSON.parse(localStorage.getItem("watched")));
  const watchedData = data.filter((item) => watchedDataId.has(String(item.id)));

  return (
    <div
      style={{ display: "flex", margin: "10px 0", border: "1px solid #ddd" }}
    >
      <Title>최근 본 상품</Title>
      <Content>{watchedDataId.size > 0 && <List data={watchedData} />}</Content>
    </div>
  );
};

export default WatchedProducts;

const Title = styled.div`
  flex: 1;
  font-size: 18px;
  font-weight: 800;
  padding: 10px;
`;

const Content = styled.div`
  flex: 6;
`;
