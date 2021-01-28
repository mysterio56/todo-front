import { useState, useEffect } from 'react';
import TableTasks from './components/TableTasks';
import ModalAddTask from './components/ModalAddTask';
import DrawerEditTask from './components/DrawerEditTask';

const App = () => {

  const [openModal, setOpenModal]   = useState(false);
  const [openEdit, setOpenEdit]     = useState(false);
  const [tasks, setTasks]           = useState([]);
  const [selectedId, setSelectedId] = useState(false);

  const toggleDrawerOpen = () => {
    setOpenEdit(true);
  };

  const toggleDrawerClose = () => {
    setOpenEdit(false);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {

    fetch("http://104.236.45.49/todos",
      {
        method: 'GET',
        mode: 'cors',
      })
      .then(res => res.json())
      .then(
        (result) => {
          setTasks(result);
        },
        (error) => {
          console.log(error);
        }
      )

  }, [openModal,openEdit]);

  return (
    <>
      <TableTasks tasks={tasks} handleOpen={ () => { handleOpen() } } toggleDrawerOpen={ () => { toggleDrawerOpen() } } setSelectedId={setSelectedId} />
      <ModalAddTask open={openModal} handleClose={ () => { handleClose() } }/>
      <DrawerEditTask openEdit={openEdit} toggleDrawerOpen={ () => { toggleDrawerOpen() } } toggleDrawerClose={ () => { toggleDrawerClose() } } selectedId={selectedId} />
    </>
  );
}

export default App;
