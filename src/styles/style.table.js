import { makeStyles } from '@material-ui/core/styles';

export const TableStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(3),
  },
  title: {
    flex: '1 1 100%',
  },
  addtask: {
    width: 100,
  },
  done: {
    color: 'green'
  },
  pending: {
    color: '#8f949f'
  }
}));