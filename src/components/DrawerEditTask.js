import { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { commonActions, tasksActions } from '../actions';
import { DrawerStyles } from '../styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const DrawerEditTask = () => {

  const classes = DrawerStyles();

  const commonData = useSelector(state => state.commonData);
  const tasksData  = useSelector(state => state.tasksData);
  const dispatch   = useDispatch();

  const toggleDrawer = ( open ) => event => {

    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    dispatch( commonActions.openDrawer( open ) );

  };

  useEffect(() => {

    if ( tasksData.selected_task_id ) {
      dispatch( tasksActions.getTask( tasksData.selected_task_id ) )
    }

  }, [tasksData.selected_task_id]);

  const handleChangeSelect = (event) => {
    dispatch( tasksActions.changeStatus( event.target.value ) )
  };

  const updateTask = () => {
    dispatch( tasksActions.updateTask( tasksData.selected_task_id, tasksData.task_selected ) );
  }

  const deleteTask = () => {
    dispatch( tasksActions.deleteTask( tasksData.selected_task_id ) );
  }

  return (
    <>
          <SwipeableDrawer
            anchor='right'
            open={commonData.drawer_open}
            onClose = {toggleDrawer(false)}
            onOpen  = {toggleDrawer(true)}
          >

            { tasksData.task_selected.created && tasksData.loading_task === false
              ?
                <Box p={3}>
                  <div
                    className={classes.list}
                    role="presentation"
                  >

                    <h1>{tasksData.task_selected.title}</h1>

                    <form className={classes.root} noValidate autoComplete="off">
                      <Grid container spacing={6}>

                        <Grid item xs={12}>
                          <FormControl variant="outlined" className={classes.select}>
                            <Select
                              fullWidth
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={tasksData.task_selected.completed}
                              onChange={handleChangeSelect}
                            >
                              <MenuItem value={0}>Status: Pending</MenuItem>
                              <MenuItem value={1}>Status: Done</MenuItem>¿
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="h6">
                            Created
                          </Typography>
                          <Box mt={2}>
                            <label>{tasksData.task_selected.created.slice(0, 10)}</label>
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="h6">
                            Description
                          </Typography>
                          <Box mt={2}>
                            <label>{tasksData.task_selected.description}</label>
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            variant="contained"
                            color="primary"
                            className={`${classes.button} ${classes.buttonEdit}`}
                            onClick={updateTask}
                            startIcon={<EditIcon className={classes.buttonIcon} />}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            onClick={deleteTask}
                            startIcon={<DeleteIcon className={classes.buttonIcon} />}
                          >
                            Delete
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </div>
                </Box>
              : <div className={classes.loadigTask}>
                  <CircularProgress disableShrink />
                </div>
            }

          </SwipeableDrawer>
    </>
  );
}

export default DrawerEditTask;
