import React from 'react'
import { connect } from 'react-redux'

function InputComponent(props) {
    return (
        <div className='flex justify-center items-center' >
            <div className="w-[400px]">
                {
                    props.screenNumber === 1 &&
                    <form>
                        <div className="mb-4">
                            <label className="flex  text-sm text-[grey] mb-2" for="username" >
                                Full Name
                            </label>
                            <input className="appearance-none border border-[gray] rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Steve Jobs" />
                        </div>
                        <div className="mb-6">
                            <label className="flex text-sm  text-[grey] mb-2" for="password">
                                Display Name
                            </label>
                            <input className="appearance-none border border-[gray] rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Steve" />
                        </div>
                    </form>
                }
                {
                    props.screenNumber === 2 &&
                    <form >
                        <div className="mb-4">
                            <label className="flex  text-sm text-[grey] mb-2" for="username" >
                                WorkSpace Name
                            </label>
                            <input className="appearance-none border border-[gray] rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Eden" />
                        </div>
                        <label className="flex  text-sm text-[grey] mb-2" for="username" >
                                WorkSpace URL (Optional)
                        </label>
                        <div class="flex">
                            
                            <span class="inline-flex items-center px-3 text-sm text-[gray] bg-[#eceaea] rounded-l-md border border-r-0 border-[gray]">
                                www.eden.com/
                            </span>
                            <input type="text" className="appearance-none border border-[gray] rounded-r-md py-2 px-3 min-w-0 w-full focus:outline-none focus:shadow-outline" placeholder="Example"/>
                        </div>
                    </form>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        screenNumber: state.OnboardingReducer.screenNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent)