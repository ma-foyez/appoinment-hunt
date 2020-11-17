import { combineReducers } from 'redux'
import userReducer from './Reducer/HouseRentReducer'

const rootReducer = combineReducers({
  
  user: userReducer
})

export default rootReducer