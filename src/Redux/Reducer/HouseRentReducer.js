import {
    FETCH_House_Data_REQUEST,
    FETCH_House_Data_SUCCESS,
    FETCH_House_Data_FAILURE
  } from './../Action/HouseType.js'
  
  const initialState = {
    loading: false,
    House_Data: [],
    error: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_House_Data_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_House_Data_SUCCESS:
        return {
          loading: false,
          House_Data: action.payload,
          error: ''
        }
      case FETCH_House_Data_FAILURE:
        return {
          loading: false,
          House_Data: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer