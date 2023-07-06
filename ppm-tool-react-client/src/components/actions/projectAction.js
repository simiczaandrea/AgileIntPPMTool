import { GET_ERRORS, GET_PROJECTS } from "./types";
import axios from "axios";


export const createProject = (project, history) => async dispatch => {
    try {
        const res = await axios.post('http://localhost:8080/api/project', project);
        history.push('/dashboard');

   
    } catch (error) {
            dispatch({
              type: GET_ERRORS,
              payload: error.response.data,
        })
    }
}

export const getProjects = () => async dispatch => {
    const response = await axios.get('http://localhost:8080/api/project/all')
    dispatch({
        type: GET_PROJECTS,
        payload: response.data
    })
}