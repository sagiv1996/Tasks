import { Paper, InputBase, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const FieldTask = () => {
  return (
    <Paper
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
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="add">
        <AddIcon />
      </IconButton>
    </Paper>
  );
};

export default FieldTask;
