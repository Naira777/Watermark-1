import { useState, useEffect } from "react";

function usePosition(REF) {
  const [LEFT, setLEFT] = useState();
  const [TOP, setTOP] = useState();

  useEffect(() => {
    setLEFT(REF.current.getBoundingClientRect().x);
    setTOP(REF.current.getBoundingClientRect().y);
  });

  return { LEFT, TOP };
}
export default usePosition;
