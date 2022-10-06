import React from 'react'
import { moveScreen } from "../../../redux/actions";
import { connect } from 'react-redux'
import {NUMBEROFONBOARDINGSTEP} from '../../../data/constants'
function ButtonComponent(props) {
    return (
        <div>
            <button className="w-3/5 md:w-2/5 lg:w-3/12 bg-primary text-[white] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={props.moveScreen} disabled={ NUMBEROFONBOARDINGSTEP === props.screenNumber } >
            {NUMBEROFONBOARDINGSTEP > props.screenNumber ?  "Create WorkSpace"  : "Launch Eden" } 
            </button>
        </div>
    )
}

const  mapStateToProps = (state) => {
    return {
        screenNumber: state.OnboardingReducer.screenNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        moveScreen: () => dispatch(moveScreen())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonComponent)