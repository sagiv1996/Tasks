import React, { useEffect, useState } from "react";
import "./App.css";
import TaskCard from "./components/taskCard";
import axios from "axios";
import { Box, Skeleton, Grid, Stack } from "@mui/material";
import StackGrid from "react-stack-grid";
import { Task } from "./interfaces/tasks.interface";

const timeoutForUserExperience = 1500;
function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const getTasks = async () => {
    axios
      .get<Task[]>("http://localhost:3001/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      // for user experience
      .finally(() =>
        setTimeout(() => setLoading(false), timeoutForUserExperience)
      );
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <StackGrid columnWidth={420} horizontal={true}>
          {Array.from(new Array(25)).map((item, index) => (
            <Skeleton
              variant="rectangular"
              height={Math.floor(150 + Math.random() * 150)}
            />
          ))}
        </StackGrid>
      ) : (
        <StackGrid columnWidth={420} horizontal={true}>
          {tasks.map((task, index) => (
            <TaskCard task={task} key={index} />
          ))}
        </StackGrid>
      )}
    </div>
  );
}

export default App;
