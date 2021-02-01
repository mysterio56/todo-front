import { responseService } from '../services';

export const tasksService = {
    getList,
    getTask,
    updateTask,
    deleteTask,
    saveTask,
};

const url = process.env.REACT_APP_BACKEND_URL;

function getList() {

    const requestOptions = {
        method: 'GET',
    };

    return fetch(`${url}/todos`, requestOptions)
        .then(responseService.response)
        .then(async tasks => {
            return tasks;
        });

}

function getTask( taskId ) {

    const requestOptions = {
        method: 'GET',
    };

    return fetch(`${url}/todos/${taskId}`, requestOptions)
        .then(responseService.response)
        .then(async task => {
            return task;
        });

}

function saveTask( data ) {

    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    return fetch(`${url}/todos`, requestOptions)
        .then(responseService.response)
        .then(async task => {
            return task;
        });

}

function updateTask( taskId, data ) {

    const requestOptions = {
        method: 'PUT',
        mode: 'cors',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    return fetch(`${url}/todos/${taskId}`, requestOptions)
        .then(responseService.response)
        .then(async task => {
            return task;
        });

}

function deleteTask( taskId ) {

    const requestOptions = {
        method: 'DELETE',
    };

    return fetch(`${url}/todos/${taskId}`, requestOptions)
        .then(responseService.response)
        .then(async task => {
            return task;
        });

}