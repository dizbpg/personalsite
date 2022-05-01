import React from 'react';

import { StartingScreenStyled } from './startingScreenStyles';
import { Doorway } from '../doorway/Doorway'

export const StartingScreen = ({...props}) => {

    return (
        <StartingScreenStyled>
            <Doorway setIsStartingScreen={props.setIsStartingScreen} />
        </StartingScreenStyled>
    )

}