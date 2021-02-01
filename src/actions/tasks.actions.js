import { tasksDataConstants, commonDataConstants } from '../constants';
import { tasksService } from '../services';

export const tasksActions = {
    getList,
    setSelectedTaskId,
    getTask,
    setLoadingTask,
    updateTask,
    changeStatus,
    deleteTask,
    saveTask,
    setSaved,
};

function getList() {

    return dispatch => {

        tasksService.getList()
            .then(
                tasks => {
                    dispatch( success( tasks ) );
                },
                error => {
                    console.log(error);
                }
            );
    };

    function success( tasks )  { return { type: tasksDataConstants.GET_LIST_TASKS, tasks };  }

}

function getTask( taskId ) {

    return dispatch => {

        dispatch( updateTask( false ) );
        dispatch( deleteTask( false ) );

        tasksService.getTask( taskId )
            .then(
                task => {
                    dispatch( success( task ) );
                },
                error => {
                    console.log(error);
                }
            );
    };

    function success( task )       { return { type: tasksDataConstants.GET_TASK_BY_ID, task }; }
    function updateTask( updated ) { return { type: tasksDataConstants.UPDATE_TASK, updated }; }
    function deleteTask( deleted ) { return { type: tasksDataConstants.DELETE_TASK, deleted }; }

}

function saveTask( data ) {

    return dispatch => {

        tasksService.saveTask( data )
            .then(
                data => {
                    dispatch( success( true ) );
                    dispatch( closeDrawer( false ) );
                },
                error => {
                    console.log(error);
                }
            );
    };

    function success( saved )    { return { type: tasksDataConstants.SAVE_TASK, saved }; }
    function closeDrawer( open ) { return { type: commonDataConstants.OPEN_MODAL, open }; }

}

function updateTask( taskId, data ) {

    return dispatch => {

        tasksService.updateTask( taskId, data )
            .then(
                data => {
                    dispatch( success( true ) );
                    dispatch( closeDrawer( false ) );
                    dispatch( selectedTask( false ) );
                },
                error => {
                    console.log(error);
                }
            );
    };

    function success( updated )             { return { type: tasksDataConstants.UPDATE_TASK, updated }; }
    function selectedTask( selectedTaskId ) { return { type: tasksDataConstants.SET_SELECTED_TASK_ID, selectedTaskId }; }
    function closeDrawer( open )            { return { type: commonDataConstants.OPEN_DRAWER, open }; }

}

function deleteTask( taskId ) {

    return dispatch => {

        tasksService.deleteTask( taskId )
            .then(
                data => {
                    dispatch( success( true ) );
                    dispatch( closeDrawer( false ) );
                    dispatch( selectedTask( false ) );
                },
                error => {
                    console.log(error);
                }
            );
    };

    function success( deleted )             { return { type: tasksDataConstants.DELETE_TASK, deleted };  }
    function selectedTask( selectedTaskId ) { return { type: tasksDataConstants.SET_SELECTED_TASK_ID, selectedTaskId }; }
    function closeDrawer( open )            { return { type: commonDataConstants.OPEN_DRAWER, open };  }

}

function setSelectedTaskId( taskId ) {
    return { type: tasksDataConstants.SET_SELECTED_TASK_ID, taskId };
}

function setLoadingTask( loading_task ) {
    return { type: tasksDataConstants.SET_LOADIN_TASK, loading_task };
}

function changeStatus( status ) {
    return { type: tasksDataConstants.CHANGE_STATUS, status };
}

function setSaved( saved ) {
    return { type: tasksDataConstants.SET_SAVED, saved };
}
