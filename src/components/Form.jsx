import { Button, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Form({addTodo}) {

    const [texto, setTexto] = useState(null);
    const [id, setId] = useState(0);

    const todoCreate = (texto) => {
        const todoObj = {text: texto, id: id };
        setId(id + 1);
        addTodo(todoObj);
        document.getElementById('outlined-basic').value = null;
    }

    return (
    <div>
        <Paper style={{padding:1}}>
            <div style={{display:'flex', justifyContent:'center'}}>
                <TextField id="outlined-basic" label="Tarefa" variant="outlined" fullWidth onChange={(e)=> setTexto(e.target.value)}/>
                <Button variant="text" onClick={() => todoCreate(texto)}>adicionar</Button>
            </div>
        </Paper>
    </div>
  )
}
