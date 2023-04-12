import React from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './components/task';


const tasks = [{id: "1", title: "this is first"}, {id: 2, title: "this is second"}]
function App() {
  return (
    <div className="App">
      {tasks.map(task=><Task task={task} />)}
    </div>
  );
}

export default App;
