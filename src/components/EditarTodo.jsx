import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditarTodoDialog({abrir, dialogHandler, todo, editarTodo}) {

  const [editedText, setEditedText] = React.useState(todo.text);

  const textHandler = () => {
    editarTodo(todo.id, editedText);
    dialogHandler();
  };

  return (
      <Dialog
        fullWidth
        open={abrir}
        TransitionComponent={Transition}
        keepMounted
        // onClose={dialogHandler}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Editar Tarefa"}</DialogTitle>
        <DialogContent>
          <TextField fullWidth defaultValue={todo.text} onChange={(e) => setEditedText(e.target.value)}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler}>Cancelar</Button>
          <Button onClick={textHandler}>OK</Button>
        </DialogActions>
      </Dialog>

  );
}