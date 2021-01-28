import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #eee',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: 500,
    width: 400,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  button: {
    width: 100
  }
}));

const TransitionsModal = ( { open, handleClose = () => {} } ) => {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const saveTask = () => {

    const data = {
      title,
      description,
      completed: 0
    }

    fetch("http://104.236.45.49/todos",
    {
      method: 'POST',
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(
      (result) => {
        handleClose();
        setTitle('');
        setDescription('')
      },
      (error) => {
        console.log(error);
      }
    )

  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Typography variant="h6">
                  New Task
                </Typography>
                <hr />
              </Grid>
              <Grid item xs={12}>
                <TextField id="outlined-basic" label="Title" variant="outlined" value={title} onChange={ ( e ) => { setTitle(e.target.value) } } />
              </Grid>
              <Grid item xs={12}>
                <TextField id="outlined-basic" label="Description" variant="outlined" multiline rows={4} size={'medium'} value={description} onChange={ ( e ) => { setDescription(e.target.value) } } />
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClose}
                >
                  cancel
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={saveTask}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default TransitionsModal;
