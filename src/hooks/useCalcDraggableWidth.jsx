import { useEffect, useState } from "react";

//get draggableObj width on window resize
const useCalcDraggableWidth = (draggableObj, moreDeps = []) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (draggableObj.current) {
        setWidth(
          draggableObj.current.scrollWidth - draggableObj.current.offsetWidth
        );
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draggableObj, ...moreDeps]);

  return width;
};

export default useCalcDraggableWidth;
