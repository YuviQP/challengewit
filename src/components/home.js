import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
} from "@mui/material";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const completeTask = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <>
      <Container maxWidth="sm" style={{ paddingTop: 20 }}>
        <Typography variant="h4" align="center" gutterBottom>
          TODOLIST
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              label="ADICIONAR NOVA TAREFA ..."
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={addTask}
              startIcon={<AddIcon />}
            />
          </Grid>
        </Grid>

        <List>
          {tasks.map((task, index) => (
            <ListItem key={index} divider>
              <IconButton onClick={() => completeTask(index)}>
                <Checkbox checked={task.completed} />
              </IconButton>
              <ListItemText
                primary={task.text}
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              />
              <IconButton edge="end" onClick={() => deleteTask(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
        <Typography variant="body1" align="center" style={{ marginTop: 20 }}>
          Tarefas Terminadas {completedCount}/{tasks.length}
        </Typography>
      </Container>
    </>
  );
}

export default Home;
