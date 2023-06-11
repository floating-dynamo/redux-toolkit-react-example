import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { TodoState, deleteTodo } from "./todoSlice";
import { Grid, Typography } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Todos = () => {
  const todos: TodoState[] = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  return (
    <Grid
      display="flex"
      gap={2}
      maxWidth="80%"
      alignItems="center"
      justifyContent="center"
      margin="10px auto"
      flexWrap="wrap"
    >
      {todos.map((todo) => {
        return (
          <Grid
            key={todo.id}
            sx={{ bgcolor: "#EAEAEA", borderRadius: "0.2vw", padding: 2 }}
            alignItems="center"
            justifyContent="flex-start"
            minWidth="12rem"
          >
            <Typography sx={{ fontSize: `${14 * 1.68}px` }}>{todo.title}</Typography>
            <Typography sx={{ fontSize: "14px", color: "#AAA" }}>{todo.body}</Typography>
            <DeleteOutlinedIcon
              color="error"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  color: "red",
                },
              }}
              onClick={() => dispatch(deleteTodo(todo.id))}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Todos;
