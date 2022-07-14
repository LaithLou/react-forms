import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  function renderBoxes() {
    return (
      <div>
        {boxes.map(() => (
          <Box />
        ))}
      </div>
    );
  }

  function addBox(box) {
    let newBox = { ...box, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  }

  return (
    <div className="BoxesList">
      <NewBoxForm addBox={addBox} />
    </div>
  );
}

export default BoxList;
