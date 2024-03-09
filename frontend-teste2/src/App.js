import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (taskToRemove) => {
    setTasks(tasks.filter((task) => task !== taskToRemove));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow-md rounded">
        <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
        <TaskInput addTask={addTask} />
        {tasks.map((task, index) => (
          <Task key={index} task={task} removeTask={removeTask} />
        ))}
      </div>
    </div>
  );
}

function TaskInput({ addTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === '') return;
    addTask(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="border border-gray-300 p-2 rounded mr-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Adicionar
      </button>
    </form>
  );
}

function Task({ task, removeTask }) {
  return (
    <div className="flex items-center bg-gray-200 mb-2 p-2 rounded">
      <p className="flex-grow">{task}</p>
      <button onClick={() => removeTask(task)} className="text-red-500">
        Remover
      </button>
    </div>
  );
}

export default App;
