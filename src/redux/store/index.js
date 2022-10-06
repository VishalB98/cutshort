import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import OnboardingReducer from '../reducers/OnboardingReducer';
const appReducer = combineReducers({
    // Add your reducers here
    OnboardingReducer
    
})

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;