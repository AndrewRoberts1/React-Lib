import logo from './logo.svg';
import './App.css';
import { ControlledForm } from './ControlledForm';
import { Modal } from './Modal';
import { useState } from 'react';
import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow';
import { ControlledOnboardingFlow } from './ControlledOnboardingFlow';

const Step1 = ({ goToNext} ) => (
  <>
    <h1>Step One</h1>;
    <button onClick={() => goToNext({name: 'Tom'})}>next!</button>
  </>
);

const Step2 = ({ goToNext} ) => (
  <>
    <h1>Step 2</h1>;
    <button onClick={() => goToNext({age: 15})}>next!</button>
  </>
);

const Step3 = ({ goToNext} ) => (
  <>
    <h1>Step 3 - you get senior discount</h1>;
    <button onClick={() => goToNext({})}>next!</button>
  </>
);

const Step4 = ({ goToNext} ) => (
  <>
    <h1>Step 4</h1>;
    <button onClick={() => goToNext({hairCol: 'black and white'})}>next!</button>
  </>
);

function App() {

  const [showModal, setShowModal] = useState(false);

  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  //Data is added at each step to create one complete object at the end of the steps will all the data.
  const onNext = stepData => {
    setOnboardingData({...onboardingData, ...stepData});
    setCurrentIndex(currentIndex + 1);
}

  return (
    // <>
    //   <Modal show={showModal} onClose={()=> setShowModal(false)}>
    // <h3>Modal content</h3>
    //   </Modal>
    //   <button onClick={()=> setShowModal(!showModal)}>{showModal ? "hide the modal" : "show the modal"}</button>
    //   <ControlledForm/>
    // </>

    <>
      <ControlledOnboardingFlow 
        currentIndex={currentIndex}
        onNext={onNext}>
        <Step1/>
        <Step2/>
        {onboardingData.age >= 9 ? <Step3/> : null}
        <Step4/>
      </ControlledOnboardingFlow>
    </>
  );
}

export default App;
