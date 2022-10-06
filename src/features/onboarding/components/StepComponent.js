import React from "react";
import { NUMBEROFONBOARDINGSTEP } from "../../../data/constants"
import { connect } from "react-redux";

function StepComponent(props) {
    return (
        <div className="mx-auto mb-12 max-w-sm">
            <div className="flex pb-3">
                {Array.from(Array(NUMBEROFONBOARDINGSTEP).keys()).map((step) => {
                    return (
                        <>
                            <div className="flex-1">
                                <div className="w-10 h-10 mx-auto rounded-full text-lg flex items-center" style={{backgroundColor: step < props.screenNumber ? "#664de5":"white", border : step < props.screenNumber ? 0 : "1px solid gray" }}>
                                    <span className="text-center w-full" style={{color: step < props.screenNumber ? 'white' : 'black'}}>
                                        {step + 1}
                                    </span>
                                </div>
                            </div>
                            {
                                step !== NUMBEROFONBOARDINGSTEP - 1 &&
                                <div className="w-1/6 align-center items-center align-middle content-center flex">
                                    <div className="w-1/6 bg-[grey] rounded items-center align-middle align-center flex-1 ">
                                        <div
                                            className="text-xs leading-none py-1 text-center text-[grey] rounded "
                                            style={{ backgroundColor: step < props.screenNumber ? "#664de5":"#F8F8F8", }}
                                        ></div>
                                    </div>
                                </div>

                            }
                            
                        </>
                    );
                })}
            </div>
        </div>
    );
}

const  mapStateToProps = (state) => {
    return {
        screenNumber: state.OnboardingReducer.screenNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StepComponent)
