const Reducer1  = {
    BasketWines:[],
    Admin:'',
    variable:false,
    user:'',
    data:'',
    verify:true,
}


function reduxstate(state = Reducer1, action) {
    switch (action.type) {
        case 'BASKETWINES':
            return {
                ...state,
                BasketWines:[...state.BasketWines,action.payload]
            }
        case "ADMIN":
            return {
                ...state,
                Admin:action.payload
            }
        case 'DELETEFROMBASKET':
            return {
                ...state,
                BasketWines:state.BasketWines.filter(e=>e.name!==action.payload)
            }
        case "TRUE":
            return {
                ...state,
                variable:true
            };
        case 'USER':
            return {
                ...state,
                user:action.payload
            }
        case 'DATA':
            return {
                ...state,
                data:action.payload
            }
        case 'VERIFY':
            return {
                ...state,
                verify:action.payload
            }
        default:  
            return state
    }
  }
export default reduxstate