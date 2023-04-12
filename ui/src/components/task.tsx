import { Card, CardHeader } from "@mui/material";

function Task({ task }: { task: any }) {
  return (
    <Card>
      <CardHeader title={task.title} />
    </Card>
  );
}

export default Task;
