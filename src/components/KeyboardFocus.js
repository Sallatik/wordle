import { useRef, useEffect } from "react";

const KeyboardFocus = ({ onKeyDown }) => {
  const ref = useRef(null);
  useEffect(() => ref.current.focus(), [ref]);

  return <div ref={ref} tabIndex="-1" onKeyDown={onKeyDown} />;
};

export default KeyboardFocus;
