import { useEffect, useState } from "react";
import "./App.css";
import TaskCard from "./components/taskCard";
import {
  Skeleton,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import StackGrid from "react-stack-grid";
import { Task } from "./interfaces/tasks.interface";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CountUp from "react-countup";
import FieldTask from "./components/FieldTask";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import instance from "./instance";

function App() {
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [notCompletedTasks, setNotCompletedTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const getTasks = async () => {
    try {
      const loadNotCompletedTasks = await instance.get<Task[]>("/", {
        params: { isCompleted: false },
      });
      setNotCompletedTasks(loadNotCompletedTasks.data);

      const loadCompletedTasks = await instance.get<Task[]>("/", {
        params: { isCompleted: true },
      });
      setCompletedTasks(loadCompletedTasks.data);

      // For user experience
      const timeoutForUserExperience = 1500;
      setTimeout(() => setLoading(false), timeoutForUserExperience);
      enqueueSnackbar("Traffic to the server was successful!", {
        variant: "success",
      });
    } catch {
      enqueueSnackbar(
        "The traffic against the server failed. please try again.",
        {
          variant: "error",
        }
      );
    }
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
        <div>
          <SnackbarProvider maxSnack={8} />
          <FieldTask onChange={getTasks} />
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                Completed tasks (<CountUp end={completedTasks.length} />)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <StackGrid columnWidth={420} horizontal={true}>
                {completedTasks.map((task, index) => (
                  <TaskCard task={task} key={index} onChange={getTasks} />
                ))}
              </StackGrid>
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                Tasks that are not yet finished (
                <CountUp end={notCompletedTasks.length} />)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <StackGrid columnWidth={420} horizontal={true}>
                {notCompletedTasks.map((task, index) => (
                  <TaskCard task={task} key={index} onChange={getTasks} />
                ))}
              </StackGrid>
            </AccordionDetails>
          </Accordion>
        </div>
      )}
    </div>
  );
}

export default App;
