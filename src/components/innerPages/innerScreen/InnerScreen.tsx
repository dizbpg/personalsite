import React, { useContext } from 'react';
import { MainMenu } from '../../mainMenu/MainMenu';
import { InnerScreenBg, LeftContent, RightContent } from './InnerScreenStyles';
import { currentDisplayInterface, CurrentDisplay } from '../../../context/currentDisplay';

export const InnerScreen = () => {

    const displayContent:currentDisplayInterface = useContext(CurrentDisplay);

    return (
        <>
            <InnerScreenBg>
                <LeftContent>
                    {displayContent.left}
                </LeftContent>
                <MainMenu />
                <RightContent>
                    {displayContent.right}
                </RightContent>
            </InnerScreenBg>
        </>

    )

}