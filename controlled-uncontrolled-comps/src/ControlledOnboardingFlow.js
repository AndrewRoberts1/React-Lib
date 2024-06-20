import React, { Children, useState} from "react";


export const ControlledOnboardingFlow = ({ children, onFinish, currentIndex, onNext }) => {

    //Data is added at each step to create one complete object at the end of the steps will all the data.
    const goToNext = stepData => {
        onNext(stepData);
    }

    const currentChild = React.Children.toArray(children)[currentIndex];

    if (React.isValidElement(currentChild)) {
        return React.cloneElement( currentChild, {goToNext} );
    }
    

    return currentChild;
}