import { Grid } from "@mui/material";
import "./App.css";
import Todos from "./features/todo/Todos";
import TodoForm from "./features/todo/TodoForm";

function App() {
  return (
    <Grid>
      <Todos />
      <TodoForm />
    </Grid>
  );
}

export default App;
