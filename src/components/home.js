import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  TextField,
  Button,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Box,
} from "@mui/material";
import { styled } from '@mui/system';

const OuterContainer = styled('div')({
  backgroundColor: "#FFCAD4", 
  padding: "20px",
  borderRadius: "50px",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh', // Para centralizar verticalmente
});

const InnerContainer = styled(Container)({
  backgroundColor: "#FFFFFF", 
  padding: "40px",
  borderRadius: "20px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  width: '100%',
  maxWidth: 6000,
});

const Header = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  color: theme.palette.secondary.main,
}));

const InputContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginBottom: "24px",
  marginLeft:"30px",
  marginRight:"30px",

});

const TaskList = styled(List)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(6),
  borderRadius: theme.spacing(1),
}));

const TaskItem = styled(ListItem)({
  display: "flex",
  alignItems: "center",
  marginBottom: "5px" ,
});

const TaskText = styled(ListItemText)(({ completed }) => ({
  flex: 1,
  textDecoration: completed ? "line-through" : "none",
}));

const Footer = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(6),
  color: theme.palette.secondary.main,
}));

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
    <OuterContainer>
      <InnerContainer maxWidth="sm">
        <Header variant="h4" align="center">
          ToDoList
        </Header>

        <InputContainer>
          <TextField
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            label="Add new task ..."
            variant="outlined"
            fullWidth
            style={{ marginRight: 10 }}
            InputProps={{ style: { height: "56px" } }} 
            InputProps={{ style: { borderRadius: "10px" } }} 
          />
          <Button
            variant="contained"
            color="primary"
            onClick={addTask}
            startIcon={<AddIcon />}
            style={{ height: "56px" }} 
          />
        </InputContainer>

        <TaskList>
          {tasks.map((task, index) => (
            <TaskItem key={index} divider>
              <IconButton onClick={() => completeTask(index)}>
                <Checkbox checked={task.completed} />
              </IconButton>
              <TaskText
                primary={task.text}
                completed={task.completed}
              />
              <IconButton edge="end" onClick={() => deleteTask(index)}>
                <DeleteIcon />
              </IconButton>
            </TaskItem>
          ))}
        </TaskList>

        <Footer variant="body1" align="center">
          Tarefas Terminadas {completedCount}/{tasks.length}
        </Footer>
      </InnerContainer>
    </OuterContainer>
  );
}

export default Home;
