import { useState, useEffect } from 'react';
import TableTasks from './components/TableTasks';
import ModalAddTask from './components/ModalAddTask';
import DrawerEditTask from './components/DrawerEditTask';

const App = () => {

  const [openModal, setOpenModal]   = useState(false);

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <TableTasks />
      <ModalAddTask handleClose={ () => { handleClose() } }/>
      <DrawerEditTask />
    </>
  );
}

export default App;
