import React from 'react';

import {PortraitScreenStyle} from './portraitScreenStyles';

export const PortraitScreen = () => {

    return (
        <PortraitScreenStyle>
            <source srcSet="img/portrait-oval.webp" />
            <img src="img/portrait-oval.png" alt="MDN" />
        </PortraitScreenStyle>
    )

}