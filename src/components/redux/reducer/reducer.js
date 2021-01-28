const Reducer1  = {
    wines:[],
    Admin:''
}


function reduxstate(state = Reducer1, action) {
    switch (action.type) {
        case 'WINES':
            return {
                ...state,
                wines:[...state.wines,action.payload]
            }
        case "ADMIN":
            return {
                ...state,
                Admin:action.payload
            }
        default:  
            return state
    }
  }
export default reduxstate