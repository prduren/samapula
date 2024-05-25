import React, { useState } from "react";
import Alert from "./components/Alert.js";
import Button from "./components/Button.js";
import ListGroup from "./components/ListGroup.js";
import Image from "./components/Image.js";
import ImageModal from "./components/ImageModal.js";
// test
//test from desktop
function App() {
  let items = ["Tokyo", "Osaka", "Nara", "Sendai", "Yoro"];
  const handleSelectItem = (item) => console.log(item);
  const [show, setShow] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        <span>Alert!!!</span>
      </Alert>
      <Button buttonName="Primary Button" />
      <button onClick={() => setShow(true)}>Show Modal</button>
      <ImageModal onClose={() => setShow(false)} show={show} />
    </div>
  );
}

export default App;
