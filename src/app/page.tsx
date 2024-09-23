"use client";
import { useState } from "react";

export default function Home() {
  const [taskInput, setTaskInput] = useState('')

  const handleKeyDown = (evento: React.KeyboardEvent) => {
    if (evento.key === 'Enter') {

    }
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
            padding: '12px',
            width: '500px',
            fontSize: '15px',
            borderRadius: '15px',
            border: '1px solid #ccc',
            marginBottom: '20px'
          }}
        />
      </div>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li
          style={{
            backgroundColor: '#fff',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '10px',
            width: '500px',
            marginLeft: 'auto',
            marginRight: 'auto', 
            display: 'flex'

          }}>
               <input
              type="checkbox"
              style={{ marginRight: '10px', margin: '0px auto' }}
            />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab atque totam rerum tempore enim nam! 
          Alias eligendi atque repellendus totam, tempore ea quam modi consequatur, ducimus, vel laborum temporibus doloremque?
        </li>
      </ul>
    </div>
  );
}
