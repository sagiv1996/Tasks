import { Button, Card, CardActions, CardHeader } from "@mui/material";
import * as React from "react";
import SendIcon from "@mui/icons-material/Send";
import TimeAgo from "timeago-react";
import { Task } from "../interfaces/tasks.interface";
import axios from "axios";

const TaskCard = ({ task, onChange }: { task: Task; onChange: Function }) => {
  const updateTask = async (task: Task): Promise<void> => {
    await axios.patch(`http://localhost:3001/tasks/${task.id}`, {
      isCompleted: !task.isCompleted,
    });
    onChange();
  };

  return (
    <Card style={{ minHeight: Math.floor(150 + Math.random() * 150) }}>
      <CardHeader
        title={task.title}
        style={{ textDecoration: task.isCompleted ? "line-through" : "none" }}
        subheader={<TimeAgo datetime={task.createdAt} />}
      />
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => updateTask(task)}
        >
          {task.isCompleted ? "Undone" : "Done"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskCard;
