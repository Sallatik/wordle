import { useRef, useEffect } from "react";

export default ({ onKeyDown, children, className }) => {
  const ref = useRef(null);
  useEffect(() => ref.current.focus(), [ref]);

  return (
    <div ref={ref} tabIndex="-1" onKeyDown={onKeyDown} className={className}>
      {children}
    </div>
  );
};
