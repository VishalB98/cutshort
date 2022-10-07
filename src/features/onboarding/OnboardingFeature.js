import React, { Suspense } from 'react'
import { NUMBEROFONBOARDINGSTEP } from '../../data/constants';
import { connect } from 'react-redux'

const HeaderComponent = React.lazy(() => import('./components/HeaderComponent'));
const StepComponent = React.lazy(() => import('./components/StepComponent'));
const Heading = React.lazy(() => import('./components/Heading'));
const InputComponent = React.lazy(() => import('./components/InputComponent'));
const CardComponent = React.lazy(() => import('./components/CardComponent'));
const ButtonComponent = React.lazy(() => import('./components/ButtonComponent'));


function OnboardingFeature(props) {

  return (

    <div className='flex-1'>
      <Suspense fallback={<div>Loading...</div>}>
        <HeaderComponent />
        <StepComponent />
        <Heading />
        {props.screenNumber < NUMBEROFONBOARDINGSTEP ? props.screenNumber === 3 ? <CardComponent /> : <InputComponent /> : null}
        <ButtonComponent />
      </Suspense>
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

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingFeature)
