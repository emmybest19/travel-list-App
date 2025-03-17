import { useState } from "react";
import "../css/form.css";
function Form({onAddItems}) {
  const [describe, setDescribe] = useState("");
  const [list, setList] = useState(1);
  
  function handleSubmit(e) {
    e.preventDefault();

    if(!describe) return;

    const newItem = { describe, list, packed: false, id: Date.now() };
    onAddItems(newItem)

    setDescribe("");
    setList(1);
  }
  return (
    <div className="wrapper">
      <form action="" onSubmit={handleSubmit}>
        <span>
          Are you preparing for a trip🫡? Please do well you to get your list
          ready
        </span>
        <select
          name="select"
          id=""
          value={list}
          onChange={(e) => setList(Number(e.target.value))}
        >
          {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="text"
          id="text"
          placeholder="item.."
          value={describe}
          onChange={(e) => setDescribe(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Form;
