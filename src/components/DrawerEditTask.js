import { useState, useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openDrawer }  from '../actions';
import { DrawerStyles } from '../styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const DrawerEditTask = ( { toggleDrawerClose = () => {}, toggleDrawerOpen = () => {}, selectedId = false } ) => {

  const classes = DrawerStyles();

  const [selectedTask, setSelectedTask] = useState({created:""});
  const [status, setStatus]             = useState(0);

  const commonData = useSelector(state => state.commonData);
  const dispatch   = useDispatch();

  const toggleDrawer = ( open ) => event => {
debugger;
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }
debugger;
    dispatch( openDrawer( open ) );

  };

  useEffect(() => {

    if ( selectedId ) {

      fetch(`http://104.236.45.49/todos/${selectedId}`,
        {
          method: 'GET',
          mode: 'cors',
        })
        .then(res => res.json())
        .then(
          (result) => {
            setSelectedTask(result)
            setStatus(result.completed)
          },
          (error) => {
            console.log(error);
          }
        )

    }

  }, [selectedId]);

  const handleChangeSelect = (event) => {
    setStatus(event.target.value);
  };

  const updateTask = () => {

    const data = {
      title: selectedTask.title,
      description: selectedTask.description,
      completed: status
    }

    fetch(`http://104.236.45.49/todos/${selectedId}`,
    {
      method: 'PUT',
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(
      (result) => {
        toggleDrawer(false);
      },
      (error) => {
        console.log(error);
      }
    )

  }

  const deleteTask = () => {

    fetch(`http://104.236.45.49/todos/${selectedId}`,
    {
      method: 'Delete',
      mode: 'cors'
    })
    .then(res => res.json())
    .then(
      (result) => {
        toggleDrawerClose()
      },
      (error) => {
        console.log(error);
      }
    )

  }


  return (
    <>
          <SwipeableDrawer
            anchor='right'
            open={commonData.drawer_open}
            onClose = {toggleDrawer(false)}
            onOpen  = {toggleDrawer(true)}
          >
            <Box p={3}>
              <div
                className={classes.list}
                role="presentation"
              >
                
                <h1>{selectedTask.title}</h1>

                <form className={classes.root} noValidate autoComplete="off">
                  <Grid container spacing={6}>

                    <Grid item xs={12}>
                      <FormControl variant="outlined" className={classes.formControl}>
                        <Select
                          labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined"
                          value={status}
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
                        <label>{selectedTask.created.slice(0, 10)}</label>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6">
                        Description
                      </Typography> 
                      <Box mt={2}>
                        <label>{selectedTask.description}</label>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={updateTask}
                      >
                        Edit
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={toggleDrawer(false)}
                      >
                        Delete
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Box>
          </SwipeableDrawer>
    </>
  );
}

export default DrawerEditTask;
