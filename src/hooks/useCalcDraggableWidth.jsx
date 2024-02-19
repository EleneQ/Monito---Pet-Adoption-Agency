import { useEffect, useState } from "react";

const useCalcDraggableWidth = (draggableObj, moreDeps = []) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (draggableObj.current) {
        setWidth(
          draggableObj.current.scrollWidth - draggableObj.current.offsetWidth
        );
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draggableObj, ...moreDeps]);

  return width;
};

export default useCalcDraggableWidth;
