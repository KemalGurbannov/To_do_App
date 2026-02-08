export default function TodoItem({ todo, onDelete, onUpdate }) {
  return (
    <div className="todo-item">
      <span>{todo.title}</span>
      <div>
        <button className="update" onClick={() => onUpdate(todo.id)}>
          Güncelle
        </button>
        <button onClick={() => onDelete(todo.id)}>Sil</button>
      </div>
    </div>
  );
}
