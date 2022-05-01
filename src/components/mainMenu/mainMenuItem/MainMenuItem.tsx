import React from 'react';
import { MainMenuItemStyled } from './mainMenuItemStyles';

export const MainMenuItem = ({...props}) => {

    return (
        <MainMenuItemStyled
            place={props.place + 1}
            key={'mi' + props.place}
            top={props.top}
            left={props.left}
            className={'mainMenuItem'}
        >
            {props.children}
        </MainMenuItemStyled>
    )

}