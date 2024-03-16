import React, { useEffect, useState } from "react";

const AnimFade = ({ children }) => {
  const [fade, setFade] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade("end");

      return () => {
        clearTimeout(timer);
        setFade("");
      };
    }, 100);
  }, []);

  return <div className={`start ${fade}`}>{children}</div>;
};

export default AnimFade;
