const alltrolls = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_TROLL':
            return action.payload;
        default:
            return state;
    }
}

export default alltrolls;