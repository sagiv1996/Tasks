import { Paper, InputBase, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import axios from "axios";

const FieldTask = ({ onChange }: { onChange: Function }) => {
  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { status } = await axios.post("http://localhost:3001/tasks", {
        title: task,
      });
      if (status === 201) onChange();
    } catch (e) {
      alert(e);
    } finally {
      setTask("");
    }
  };

  const [task, setTask] = useState<string>();
  return (
    <Paper
      onSubmit={handlerSubmit}
      component="form"
      sx={{
        p: "2px 5px",
        m: "30px auto",
        display: "flex",
        alignItems: "center",
        width: 600,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add more tasks"
        inputProps={{ "aria-label": "Add more tasks" }}
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="add">
        <AddIcon />
      </IconButton>
    </Paper>
  );
};

export default FieldTask;
