import React from "react";
import { NUMBEROFONBOARDINGSTEP } from "../../../data/constants"
import { connect } from "react-redux";

function StepComponent(props) {
    return (
        <div className="flex justify-evenly w-full">
            <div className="flex w-1/2 md:w-2/5 lg:w-1/4 justify-center py-5">
                {Array.from(Array(NUMBEROFONBOARDINGSTEP).keys()).map((step) => {
                    return (
                        <>
                            <div className="flex">
                                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full flex items-center" style={{backgroundColor: step < props.screenNumber ? "#664de5":"white", border : step < props.screenNumber ? 0 : "1px solid gray" }}>
                                    <span className="text-center text-sm md:text-base lg:text-lg  w-full" style={{color: step < props.screenNumber ? 'white' : 'black'}}>
                                        {step + 1}
                                    </span>
                                </div>
                            </div>
                            {
                                step !== NUMBEROFONBOARDINGSTEP - 1 &&
                                <div className="w-1/6 align-center items-center align-middle content-center flex">
                                    <div className="w-1/6 bg-[#F8F8F8] rounded items-center align-middle align-center flex-1 ">
                                        <div
                                            className="py-[0.5px] rounded "
                                            style={{ backgroundColor: step < props.screenNumber ? "#664de5":"#F8F8F8", width: step + 1 ===  props.screenNumber  ? "50%" : "100%"}}
                                        >
                                        </div>
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
