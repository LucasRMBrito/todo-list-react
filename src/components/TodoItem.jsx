import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from '@mui/material';
import { useState } from 'react';
import EditarTodoDialog from './EditarTodo';

export default function TodoItem({todo, deletarTodo, editarTodo}) {

    const [abrirDialog, setAbrirDialog] = useState(false);

    const dialogHandler = () => {
        setAbrirDialog(!abrirDialog);
    };

    return (
        <>
        <EditarTodoDialog editarTodo={editarTodo} abrir={abrirDialog} dialogHandler={dialogHandler} todo={todo}/>
        <Paper >
            <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="deletar" onClick={()=> deletarTodo(todo.id)}>
                <DeleteIcon />
                </IconButton>
            }
            disablePadding
            >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                <Checkbox edge="start" tabIndex={-1} disableRipple/>
                </ListItemIcon>
                <ListItemText primary={todo.text} onClick={()=> setAbrirDialog(true)}/>
            </ListItemButton>
            </ListItem>
        </Paper>
        </>
    );
}