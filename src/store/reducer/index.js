import * as actionTypes from '../action/actionTypes'

const initialState = {
    token : null,
    userName : null,
    email :null,
    isloggedIn : false
}

const reducer = (state =initialState,payload) => {
    switch (payload.type) {
        case actionTypes.AUTH_START :
            return {
                ...state,
                loading:true,
                error:null
            }
        case actionTypes.AUTH_SUCCESS :
            return {
                ...state,
                token : payload.payload.token,
                email : payload.payload.email,
                userName : payload.payload.name,
                isloggedIn:true
             }
         case actionTypes.AUTH_FAIL : 
         return {
             ...state,
             error :payload.error,
             loading : false

         }
         case actionTypes.AUTH_LOGOUT : 
          return {
              ...state , 
              token : null,
              userId :null
          }
        
         default : return {
             ...state
         }   
    }

}

export default reducer;
