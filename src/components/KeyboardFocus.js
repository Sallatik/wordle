import { useRef, useEffect } from "react";

const KeyboardFocus = ({ onKeyDown }) => {
  const ref = useRef(null);
  useEffect(() => ref.current.focus(), [ref]);
  return (
    <div
      ref={ref}
      tabIndex="-1"
      onKeyDown={onKeyDown}
      onBlur={() => ref.current.focus()}
    />
  );
};

export default KeyboardFocus;
