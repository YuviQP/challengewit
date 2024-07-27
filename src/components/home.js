import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

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
      if (i == index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const progress = tasks.length === 0 ? 0 : (completedCount / tasks.length) * 100;

  return (
    <>
      <Container>
        <Grid item xs={12} md={8} lg={8} textAlign={"center"}>
          <Typography variant="h4" align="center">
            To Do List
          </Typography>
        </Grid>

        <Grid item xs={12} md={8} lg={8} textAlign={"center"}>
          <TextField
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            label="Nuevo Tarea"
            variant="outlined"
            style={{ marginRight: 10 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={addTask}
            startIcon={<AddIcon />}
          ></Button>
        </Grid>
        <List>
          {tasks.map((task, index) => (
            <ListItem key={index}>
              <IconButton>
                <Checkbox
                  checked={task.completed}
                  onChange={() => completeTask(index)}
                />
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
		<Typography variant="h6" style={{ marginTop: 10 }}>
        Tarefas terminadas: {completedCount} / {tasks.length} 
      </Typography>
      </Container>
    </>
  );
}

export default Home;
