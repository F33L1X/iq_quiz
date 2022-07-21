import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="GameFinPop">
      <Button style={{color:"#1e4075", backgroundColor: "#4f9c59",fontSize: "20px",textTransform: 'none'}} variant="contained" onClick={handleClickOpen}>
        ✔ Congratulations ✔
      </Button>
      <Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{color:"#1e4075"}}>
          {"Spiel beendet. Das Scoreboard steht nun zur Verfügung."}
        </DialogTitle>
        <DialogContent >
          <DialogContentText>
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{textTransform: 'none', }} href="./" onClick={handleClose} autoFocus>
            Take a look
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
