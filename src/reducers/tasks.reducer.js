import { tasksDataConstants } from '../constants';

const initState = {
                    list             : [],
                    selected_task_id : false,
                    loading_list     : true,
                    task_selected    : {},
                    loading_task     : true,
                    updated_task     : false,
                    deleted_task     : false,
                  };

export function tasksData(state = initState, action) {
  switch (action.type) {
    case tasksDataConstants.GET_LIST_TASKS:
      return {
        ...state,
        list: action.tasks,
        loading_list: false,
      };
    case tasksDataConstants.SET_SELECTED_TASK_ID:
      return {
        ...state,
        selected_task_id: action.taskId,
      };
    case tasksDataConstants.GET_TASK_BY_ID:
      return {
        ...state,
        task_selected: action.task,
        loading_task: false,
      };
    case tasksDataConstants.SET_LOADIN_TASK:
      return {
        ...state,
        loading_task: action.loading_task,
      };
    case tasksDataConstants.UPDATE_TASK:
      return {
        ...state,
        updated_task: action.updated,
      };
    case tasksDataConstants.DELETE_TASK:
      return {
        ...state,
        deleted_task: action.deleted,
      };
    case tasksDataConstants.SAVE_TASK:
      return {
        ...state,
        saved_task: action.saved,
      };
    case tasksDataConstants.SET_SAVED:
      return {
        ...state,
        saved_task: action.saved,
      };
    case tasksDataConstants.CHANGE_STATUS:
      return {
        ...state,
        task_selected: { ...state.task_selected, completed: action.status },
      };
    default:
      return state;
  }
}