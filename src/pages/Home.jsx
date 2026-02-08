import { useState } from "react";
import TodoItem from "../components/TodoItem";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // EKLEME
  const addTodo = () => {
    if (text.trim() === "") return;
    setTodos([...todos, { id: Date.now(), title: text, completed: false }]);
    setText("");
  };

  // SİLME
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // GÜNCELLEME
  const updateTodo = (id) => {
    const newTitle = prompt("Yeni başlığı giriniz:");
    if (!newTitle) return;
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="Yeni todo ekle..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Ekle</button>

      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={deleteTodo}
          onUpdate={updateTodo}
        />
      ))}
    </div>
  );
}
