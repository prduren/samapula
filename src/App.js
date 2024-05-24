import Alert from "./components/Alert.js";
import Button from "./components/Button.js";
import ListGroup from "./components/ListGroup.js";

function App() {
  let items = ["Tokyo", "Osaka", "Nara", "Sendai", "Yoro"];
  const handleSelectItem = (item) => console.log(item);
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
    </div>
  );
}

export default App;
