import React from "react";

// const TabContent = ({ tab }) => {
//   if (tab === 0) {
//     return <div>내용0</div>;
//   } else if (tab === 1) {
//     return <div>내용1</div>;
//   } else {
//     return <div>내용2</div>;
//   }
// };

const TabContent = ({ tab }) => {
  return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab];
};

export default TabContent;
