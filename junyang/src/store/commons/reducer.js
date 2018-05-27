import _state from "./state"
import {GET_USER_INFO} from "./const"
const reducer = (state = _state,action) =>{
	let new_state = {...state}
	switch(action.type){
		case GET_USER_INFO:
		new_state.userinfo = action.userinfo
		break;
		default:break;
		
	}
	
	return new_state
}

export default reducer
