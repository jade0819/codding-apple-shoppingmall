import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <LoadingUI>
      <span>로</span>
      <span>딩</span>
      <span>중</span>
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </LoadingUI>
  );
};

export default Loading;

const anim_text_up = keyframes`
  0% {
      top: 0;
    }
    20% {
      top: -0.2rem;
    }
    40% {
      top: 0;
    }
    60% {
      top: 0;
    }
    60% {
      top: 0;
    }
    80% {
      top: 0;
    }
    100% {
      top: 0;
    }
`;

const LoadingUI = styled.p`
  & > span {
    position: relative;
    animation: ${anim_text_up} 1.5s infinite;

    &:nth-of-type(1) {
      animation-delay: 0.1s;
    }
    &:nth-of-type(2) {
      animation-delay: 0.2s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.3s;
    }
    &:nth-of-type(4) {
      animation-delay: 0.4s;
    }
    &:nth-of-type(5) {
      animation-delay: 0.5s;
    }
    &:nth-of-type(6) {
      animation-delay: 0.6s;
    }
  }
`;
