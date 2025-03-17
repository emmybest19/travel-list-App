import "../css/form-list.css";
function Card({item, onDelete, onToggleItem}) {
    return (
        <div className="card">
            <li>
                <input type="checkbox" value={item.packed}  onChange={() => onToggleItem(item.id)}/>
                <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>{item.list} {item.describe} </span>
                <button onClick={() => onDelete(item.id)}>❌</button>
            </li>
            
        </div>
    )
}

export default Card
