import React, { useState } from 'react';
import { StyledDoor, StyledDoorFrame } from './doorwayStyles';

export const Doorway = ({...props}) => {

    const [doorIsOpen, setDoorIsOpen] = useState(false);
    const [doorAnimationEnded, setDoorAnimationEnded] = useState(false);

    const openDoor = () => {
        setDoorIsOpen(true);
        setTimeout(() => {
            setDoorAnimationEnded(true);
            setTimeout(() => {
                props.setIsStartingScreen(false);
            }, 1000)
        }, 300)
    }


    return(
        <StyledDoorFrame {...{ doorIsOpen, doorAnimationEnded }} >
            <StyledDoor onClick={openDoor} {...{ doorIsOpen, doorAnimationEnded }} />
        </StyledDoorFrame>
    )

}