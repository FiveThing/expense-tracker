import React, { useState } from "react";

import Button from "../components/Button";

const Home = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      ETO ANG HOME
      {count}
      <Button handleClick={handleClick} />
    </div>
  );
};

export default Home;
