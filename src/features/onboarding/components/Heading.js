import React from 'react'
import { connect } from 'react-redux'
import { ONBOARDINGSTEPSDISPLAYTEXT } from '../../../data/constants'
import congratulation from '../../../assets/tick.svg';

function Heading(props) {
  return (
    props.screenNumber !== 4 ?
      <div className='flex-1 pt-7 pb-5 px-5'>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>{ONBOARDINGSTEPSDISPLAYTEXT[props.screenNumber - 1].heading}</h1>
        <p className='text-[grey]  text-sm md:text-l lg:text-xl font-medium'>{ONBOARDINGSTEPSDISPLAYTEXT[props.screenNumber - 1].subHeading}</p>
      </div>
      :
      <div className='flex-1 pt-10 pb-8'>
        <div className='flex justify-center'>
          <img className='h-24 w -24' src={congratulation} alt="edengreen" />
        </div>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>{ONBOARDINGSTEPSDISPLAYTEXT[props.screenNumber - 1].heading}</h1>
        <p className='text-[grey] text-sm md:text-l lg:text-xl font-medium'>{ONBOARDINGSTEPSDISPLAYTEXT[props.screenNumber - 1].subHeading}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Heading)
