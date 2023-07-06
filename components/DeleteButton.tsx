import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ClearIcon from '@mui/icons-material/Clear';
import { IList } from '../pages/api/notes/queries';

export default function AlertDialog({ children }) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function DeleteElement(NoteId: IList['NoteId']): void {
        console.log(NoteId)
        fetch(`/api/notes?NoteId=${NoteId}`, {
            method: 'DELETE'
        })
            .then((res) => {
                res.json()
                handleClose();
            })
            .catch(e => console.log(e))
    }

    return (
        <div>
            <Button onClick={handleClickOpen} variant='contained' style={{ backgroundColor: 'rgb(255, 128, 105)' }} size="small"><ClearIcon /></Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Esta acción es irreversible"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ¿Estás seguro que deseas continuar?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={(e) => DeleteElement(children.NoteId)} autoFocus>
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}