import ActionTypes from "../actionTypes"


const setMenu =()=>(dispatch)=>{
        dispatch({type:ActionTypes.MenuActions.SET_SUB_MENU})
        
}

const setMenuClose =()=>(dispatch)=>{
        dispatch({type:ActionTypes.MenuActions.SET_SUB_MENU_CLOSE})
        
}



const MenuActions =  {setMenu,setMenuClose}

export default MenuActions