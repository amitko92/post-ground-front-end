export const USER_DETAILS_ACTION = {
    LOGIN: 'LOGIN',
    NOT_LOGIN: 'NOT_LOGIN',
    UPDATE_USER: 'UPDATE_USER'
}

export const userDetailsReducer = (state, action) => {

    if(action.type === USER_DETAILS_ACTION.LOGIN){

        return {...state, isLoggedIn:true}
    }else if(action.type === USER_DETAILS_ACTION.NOT_LOGIN){

        return {...state, isLoggedIn:false}
    }else if(action.type === USER_DETAILS_ACTION.UPDATE_USER){

        return {...state, userDetails:action.payload.userDetails}
    }else{

        return state
    }
}