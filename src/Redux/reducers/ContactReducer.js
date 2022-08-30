const initialState = [
    {
        id:0,
        name:"Polaiah",
        email:"123@gmail.com",
        number:3243423232,

    },
    {
        id:1,
        name:"Pogula",
        email:"guuu@gmail.com",
        number:324342322132,
    }
]

const ContactReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state, action.payload]
            return state;
         case "UPDATE_CONTACT":
            const updateState = state.map(contact=> contact.id === action.payload.id?action.payload:contact);
            state = updateState;
            return state;
        case "DELETE-CONTACT":
            const deleteState = state.filter(contact=> contact.id !== action.payload && contact);
            state = deleteState;
            return state;
        default:
            return state;
    }    

}
export default ContactReducer;