import {combineReducers} from 'redux'
import getCountriesAsiaReducer from './getCountriesAsia/getCountriesAsiaReducer'

const rootReducer = combineReducers({
    countriesAsia: getCountriesAsiaReducer
})

export default rootReducer