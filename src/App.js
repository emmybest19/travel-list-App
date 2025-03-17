import "./App.css";
import Form from "./components/Form";
import FormList from "./components/Form-list";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleItems(item) {
    setItems((items) => [...items, item]);
  }
  //deleting an item from a child component
  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  //Updating a list component
  function handleToggleItem(id) {
    setItems((items) => items.map(item => item.id === id ? {...item, packed: !item.packed} : item));
  }

  //Clearing the list
  function handleClear() {
    setItems([]);
  }
  return (
    <div className="App">
      <Header />
      <Form onAddItems={handleItems} />
      <FormList items={items} onDelete={handleDelete} onToggleItem={handleToggleItem} handleClear={handleClear}/>
      <Footer items={items} />
    </div>
  );
}

export default App;
