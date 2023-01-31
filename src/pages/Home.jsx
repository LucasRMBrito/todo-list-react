import { Container, List } from '@mui/material';
import React, { useState } from 'react';
import Calendario from '../components/Calendario';
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';

export default function Home() {

    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deletarTodo = (id) => {
        var filtro = todos.filter((todo) => todo.id !== id);
        setTodos(filtro);
    };

    const editarTodo = (id, editedText) => {
        var todosArray = [...todos];

        for(var i in todosArray){
            if (todosArray[i].id == id) {
                todosArray[i].text = editedText;
            }
        }
        setTodos(todosArray);
    };

    return (
        <Container maxWidth='xs' style={{marginTop:10}}>
            <Form addTodo={addTodo}/>
            <List  sx={{marginTop:1}}>
                {todos.map((todo) => (
                    <div key={todo.id} style={{marginTop:10}}>
                        <Calendario />
                        <TodoItem editarTodo={editarTodo} todo={todo} deletarTodo={deletarTodo}/>
                    </div>
                ))}
            </List>
        </Container>
    )
}
