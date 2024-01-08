import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Square() {
  const [value, setValue] = useState("");
  const handleClick = () => setValue("X");

  return <button className="square" onClick={handleClick}>{value}</button>;
}
