import { useState } from "react";
import "../css/form-list.css";
import Card from "./Card";
function FormList({ items, onDelete, onToggleItem, handleClear}) {
  const [sortby, setSortby] = useState("input")

  let sortedItem = items;

  if(sortby === "input") sortedItem = items;

  if(sortby === "description") sortedItem = items.slice().sort((a,b) => a.description - b.description);

  if(sortby === "packed") sortedItem = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed))
  return (
    <div className="container">
      <ul>
        {sortedItem.map((item) => (
          <div key={item.id}>
            <Card item={item} onDelete={onDelete} onToggleItem={onToggleItem} />
          </div>
        ))}
      </ul>

      <div className="list">
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">SORT BY INPUT</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED</option>
        </select>
        <button onClick={handleClear}>Clear List</button>
      </div>
    </div>
  );
}

export default FormList;
