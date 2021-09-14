import {FETCH_COUNTRIES_ASIA_REQUEST, FETCH_COUNTRIES_ASIA_SUCCESS, FETCH_COUNTRIES_ASIA_FAILURE} from './getCountriesAsiaTypes'

const initialState={
    loading: false, 
    countries: [],
    error: ''
}

const getCountriesAsiaReducer=(state=initialState, action)=>{
    switch(action.type)
    {
        case FETCH_COUNTRIES_ASIA_REQUEST:
            return {
                ...state,
                countries: true
            }
        case FETCH_COUNTRIES_ASIA_SUCCESS:
            return{
                ...state,
                loading:false,
                countries: action.payload,
                error:''
            }

        case FETCH_COUNTRIES_ASIA_FAILURE:
            return{
                ...state,
                loading:false,
                countries: [],
                error:action.payload
            }

        default: return state
    }
}


export default getCountriesAsiaReducer