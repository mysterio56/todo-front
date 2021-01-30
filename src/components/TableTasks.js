import { openDrawer }  from '../actions';
import { useDispatch } from 'react-redux';
import { TableStyles } from '../styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import HighlightOff from '@material-ui/icons/HighlightOff';

import { Button } from '@material-ui/core';

const TableTask = ( { tasks, handleOpen = () => {}, setSelectedId = () => {} } ) => {

  const classes  = TableStyles();
  const dispatch = useDispatch();
  
  const handleOpenDrawer = ( id ) => {
    dispatch( openDrawer( true ) );
    dispatch( openDrawer( true ) );
    setSelectedId(id);
  }

  return (
    <>
      <CssBaseline />
      
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          <Box mt={4} mb={4}>
            My Tasks
          </Box>
        </Typography> 
        <Paper className={classes.paper}>
          <Toolbar 
            className={classes.root}
          >
            <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
              Tasks
            </Typography>
            <Tooltip title="Add task">
              <Button color="primary" onClick={handleOpen}>
                <AddCircleOutlineIcon />
                <Typography className={classes.addtask} variant="caption" component="div" ml={4}>
                    Add task
                </Typography>
              </Button>
            </Tooltip>
          </Toolbar>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Created</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks.map((row) => (                 
                  <TableRow key={row.id} onClick={ () => { handleOpenDrawer(row.id) } }>
                    <TableCell> 
                      { row.completed === 1 ? <CheckCircleOutline className={classes.done} /> : <HighlightOff className={classes.pending} />}
                    </TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.created.slice(0, 10)}</TableCell>
                    <TableCell>{row.description.slice(0, 50)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </>
  );
}

export default TableTask;
