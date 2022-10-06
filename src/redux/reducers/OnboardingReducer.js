const initialState = {
    screenNumber : 1,
    
}

const OnboardingReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'NEXT_SCREEN':
            return {
                ...state,
                screenNumber: state.screenNumber + 1
            }
        default:
            return state;
    }
}

export default OnboardingReducer;