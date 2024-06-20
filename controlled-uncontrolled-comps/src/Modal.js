//This is the controlled modal verison

import styled from "styled-components";

const ModalBackground = styled.div`
    position:fixed;
    z-index: 1;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
    overflow:auto;
    background-color: rgba(0,0,0,0.5);
`;
const ModalBody = styled.div`
    background-color: white;
    margin:10% auto;
    padding: 20px;
    width: 50%
`;

export const Modal = ({show, onClose, children}) => {

    return show ? (
                <ModalBackground onClick={onClose}>
                    {/* Stops modal closing if you press children */}
                    <ModalBody onClick={(e)=> e.stopPropagation()}>
                        <button onClick={onClose}> hide</button>
                        {children}
                    </ModalBody>
                </ModalBackground>
            ) : null
    
}
