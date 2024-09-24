"use client";

interface TaskListProps {
  tasks: string[]
  removeTask: (index: number) => void
}

export const TaskList = ({ tasks, removeTask }: TaskListProps) => {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {tasks.map((task, index) => (
        <li
          key={index}
          style={{
            backgroundColor: '#f0f0f5',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '10px',
            width: '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',
            wordWrap: 'break-word',
            wordBreak: 'break-word',
          }}
        >
          <span>{task}</span>
          <button
            onClick={() => removeTask(index)}
            style={{
              backgroundColor: '#ff4d4d',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              padding: '5px 10px',
            }}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};
