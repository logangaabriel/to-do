"use client"
import { useState } from "react"
import { TaskList } from "./components/TaskList/TaskList"

export default function Home() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handleKeyDown = (evento: React.KeyboardEvent) => {
    if (evento.key === 'Enter' && taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const removeTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1 style={{ color: '#fff' }}>Today main focus</h1>
      <div style={{ marginTop: '20px' }}>
        <input
          data-test="input-task"
          type="text"
          placeholder="What is your next task?"
          onKeyDown={handleKeyDown}
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          style={{
            padding: '15px',
            width: '500px',
            fontSize: '10px',
            borderRadius: '15px',
            border: '1px solid #ccc',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
          }}
        />
      </div>
      
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}
