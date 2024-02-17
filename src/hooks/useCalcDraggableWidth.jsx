import { useEffect, useState } from "react";

const useCalcDraggableWidth = (draggableObj, moreDeps = []) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (draggableObj.current) {
      setWidth(
        draggableObj.current.scrollWidth - draggableObj.current.offsetWidth
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [draggableObj, ...moreDeps]);

  return width;
};

export default useCalcDraggableWidth;
