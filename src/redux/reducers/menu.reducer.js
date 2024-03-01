import ActionTypes from "../actionTypes";

const initialState= {
    setMenu:false
}

const menuReducer =(state = initialState,action)=>{
    switch (action.type) {
        case ActionTypes.MenuActions.SET_SUB_MENU:
             return {...state,setMenu:true}
        case ActionTypes.MenuActions.SET_SUB_MENU_CLOSE:
                return {...state,setMenu:false}
        default:
            return state
    }

}


export default menuReducer