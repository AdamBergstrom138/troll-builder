const troll = (state = 0, action) => {
    switch (action.type) {
        case 'SET_TROLL':
            return action.payload;
        default:
            return state;
    }
}

export default troll;