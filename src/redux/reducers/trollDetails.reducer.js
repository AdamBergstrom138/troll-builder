const trollDetails = (state = [], action) => {
    switch (action.type) {
        case 'SET_TROLLDETAILS':
            return action.payload;
        default:
            return state;
    }
}
export default trollDetails;