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
  },
  buttonCancel: {
    backgroundColor: '#e4e5e9 !important',
    marginRight: '1rem !important',
    color: '#444860 !important'
  },
  buttonSave: {
    backgroundColor: '#3c5cbf !important',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  }
}));