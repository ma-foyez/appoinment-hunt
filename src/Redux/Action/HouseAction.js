import axios from 'axios'
import {
  FETCH_House_Data_REQUEST,
  FETCH_House_Data_SUCCESS,
  FETCH_House_Data_FAILURE
} from './HouseType.js'

export const loadHousData = () => {
  return (dispatch) => {
    dispatch(loadHousDataRequest())
    axios
      .get('https://apartment-hunts.herokuapp.com/loadHouse')
      .then(response => {
        // response.data is the House_Data
        const House_Data = response.data
        dispatch(loadHousDataSuccess(House_Data))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(loadHousDataFailure(error.message))
      })
  }
}

export const loadHousDataRequest = () => {
  return {
    type: FETCH_House_Data_REQUEST
  }
}

export const loadHousDataSuccess = House_Data => {
  return {
    type: FETCH_House_Data_SUCCESS,
    payload: House_Data
  }
}

export const loadHousDataFailure = error => {
  return {
    type: FETCH_House_Data_FAILURE,
    payload: error
  }
}