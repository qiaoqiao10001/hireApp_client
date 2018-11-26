import {combineReducers} from 'redux'

function reducersone(state=1,action){
    return state;
}

function reducertwo(state=2,action){
    return state;
}
export default combineReducers({
    reducersone,reducertwo
})