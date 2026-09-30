import { useEffect, useRef, useState } from "react";

function ZoomIn({ children }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-600 ease-in-out ${
        show ? "opacity-100 scale-100" : "opacity-0 scale-75"
      }`}
    >
      {children}
    </div>
  );
}

export default ZoomIn;
