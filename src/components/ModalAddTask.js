import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { commonActions, tasksActions }  from '../actions';
import { ModalStyles } from '../styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const TransitionsModal = () => {

  const classes = ModalStyles();

  const [showError, setShowError]     = useState(false);
  const [title, setTitle]             = useState('');
  const [description, setDescription] = useState('');

  const commonData = useSelector(state => state.commonData);
  const dispatch   = useDispatch();

  const handleCloseModal = () => {
    dispatch( commonActions.openModal( false ) );
  }

  useEffect(() => {

    if ( commonData.modal_open ) {
      dispatch( tasksActions.setSaved( false ) )
    }
  }, [ commonData.modal_open ]);

  const saveTask = () => {

    if ( title === '' ) {
      setShowError(true);
      return;
    }

    const data = {
      title,
      description,
      completed: 0
    }

    dispatch( tasksActions.saveTask( data ) );
    setTitle('');
    setDescription('');

  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={commonData.modal_open}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={commonData.modal_open}>
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
                <Box mb={1}>
                  <label>Title (Required)</label>
                </Box>
                <TextField
                  fullWidth
                  error = {showError}
                  helperText={showError ? "Required" : ""}
                  id="outlined-basic"
                  placeholder="Title"
                  variant="outlined"
                  value={title}
                  onChange={ ( e ) => { setTitle(e.target.value) } } />
              </Grid>
              <Grid item xs={12}>
                <Box mb={1}>
                  <label>Description</label>
                </Box>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  placeholder="Description"
                  variant="outlined"
                  multiline
                  rows={4}
                  size={'medium'}
                  value={description}
                  onChange={ ( e ) => { setDescription(e.target.value) } } />
              </Grid>
              <Grid item xs={12} className={classes.buttons}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={`${classes.button} ${classes.buttonCancel}`}
                  onClick={handleCloseModal}
                >
                  cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={`${classes.button} ${classes.buttonSave}`}
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
