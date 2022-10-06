import React from 'react'
import {connect} from 'react-redux'
import { ONBOARDINGSTEPSDISPLAYTEXT } from '../../../data/constants'
import congratulation from '../../../assets/tick.png';

function Heading(props) {
  return (
    props.screenNumber !== 4 ?
    <div className='mb-6'>
      <h1 className='text-4xl font-bold'>{ONBOARDINGSTEPSDISPLAYTEXT[props.screenNumber - 1].heading}</h1>
        <p className='text-[grey]  text-l font-medium'>{ONBOARDINGSTEPSDISPLAYTEXT[props.screenNumber - 1].subHeading}</p>
    </div>
      :
      <div className=''>
        <div className='flex justify-center'>
          <img className='h-24 w -24' src={congratulation} alt="edengreen" />
        </div>
      <h1 className='text-4xl font-bold'>{ONBOARDINGSTEPSDISPLAYTEXT[props.screenNumber - 1].heading}</h1>
        <p className='text-[grey]  text-l font-medium'>{ONBOARDINGSTEPSDISPLAYTEXT[props.screenNumber - 1].subHeading}</p>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Heading)
