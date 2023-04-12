import { Button, Card, CardActions, CardHeader } from "@mui/material";
import * as React from "react";
import SendIcon from "@mui/icons-material/Send";
import TimeAgo from "timeago-react";
import { Task } from "../interfaces/tasks.interface";

const updateTask = async (task: Task): Promise<boolean> => {
  console.log({ task });
  return false;
};
function TaskCard({ task }: { task: Task }) {
  return (
    <Card style={{ minHeight: Math.floor(150 + Math.random() * 150) }}>
      <CardHeader
        title={task.title}
        subheader={<TimeAgo datetime={task.createdAt} />}
      />
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => updateTask(task)}
        >
          Done
        </Button>
      </CardActions>
    </Card>
  );
}

export default TaskCard;
