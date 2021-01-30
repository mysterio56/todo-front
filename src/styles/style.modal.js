import { makeStyles } from '@material-ui/core/styles';

export const ModalStyles = makeStyles((theme) => ({
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