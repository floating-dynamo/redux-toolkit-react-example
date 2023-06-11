import { Grid, Typography } from "@mui/material";
import "./App.css";
import Todos from "./features/todo/Todos";
import TodoForm from "./features/todo/TodoForm";

function App() {
  return (
    <Grid>
      <Typography
        fontSize={`${14 * 1.68 * 2}px`}
        fontFamily="Manrope"
        fontWeight={600}
        textAlign="center"
        margin="10px auto"
      >
        React Redux Toolkit Example
      </Typography>
      <TodoForm />
      <Todos />
    </Grid>
  );
}

export default App;
