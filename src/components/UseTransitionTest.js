import React, { useDeferredValue, useState, useTransition } from "react";

const a = new Array(10000).fill(0);

const UseTransitionTest = () => {
  const [name, setName] = useState("");
  const [isPending, startTransition] = useTransition();
  const state = useDeferredValue(name);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => startTransition(() => setName(e.target.value))}
      />
      {isPending
        ? "로딩중"
        : a.map((a, i) => {
            return <div key={i}>{state}</div>;
          })}
    </div>
  );
};

export default UseTransitionTest;
