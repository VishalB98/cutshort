import React from 'react'
import ButtonComponent from './components/ButtonComponent';
import HeaderComponent from './components/HeaderComponent'
import Heading from './components/Heading';
import InputComponent from './components/InputComponent';
import StepComponent from './components/StepComponent'
import {connect} from 'react-redux'
import CardComponent from './components/CardComponent';
import { NUMBEROFONBOARDINGSTEP } from '../../data/constants';

function OnboardingFeature(props) {

  return (
    <>
      <div className='flex-1'>
        <HeaderComponent />
        <StepComponent  />
        <Heading />
       { props.screenNumber < NUMBEROFONBOARDINGSTEP ? props.screenNumber === 3 ? <CardComponent/> : <InputComponent /> : null }
        <ButtonComponent />
      </div>
    </>

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

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingFeature)
