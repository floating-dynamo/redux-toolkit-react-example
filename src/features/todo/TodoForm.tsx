import { Grid, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const TodoForm = () => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const dispatch = useDispatch();

  return (
    <Grid display="flex" flexDirection="column" width="20rem" margin="20px auto" gap={4}>
      <TextField
        type="number"
        label="id"
        placeholder="Enter todo id"
        value={id}
        onChange={(e) => setId(parseInt(e.target.value))}
      />
      <TextField
        label="title"
        placeholder="Enter todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField label="body" placeholder="Enter todo body" value={body} onChange={(e) => setBody(e.target.value)} />
      <Button
        variant="contained"
        onClick={() => {
          dispatch(
            addTodo({
              id,
              title,
              body,
            }),
          );
        }}
      >
        Add Todo
      </Button>
    </Grid>
  );
};

export default TodoForm;
