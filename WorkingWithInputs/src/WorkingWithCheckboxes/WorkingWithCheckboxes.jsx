/**
 * Working with Checkboxes and useState:
 * 6. Create a React component that displays a list of tasks, each with
 *    a checkbox next to it. When a checkbox is checked, display the
 *    task as strikethrough text.
 */

import { useState } from "react";

export default function WorkingWithCheckboxes() {
  
  const [tasks, setTasks] = useState([
    { id: 1, text: "Clean the house", completed: false },
    { id: 2, text: "Do laundry", completed: false },
    { id: 3, text: "Buy groceries", completed: false }
  ]);

  const handleTaskCompletion = (id) => {
    const toggleCompletion = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(toggleCompletion);
  };

  return (
    <div>
      <h1>Module-6: Working with Checkboxes</h1>
      {tasks.map((task) => (
        <div key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleTaskCompletion(task.id)}
          />
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
          </span>
        </div>
      ))}
    </div>
  );
}
