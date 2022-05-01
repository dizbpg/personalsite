import React, { useState } from 'react';
import { CurrentDisplay } from '../../context/currentDisplay';
import { InnerScreen } from '../innerPages/innerScreen/InnerScreen';
import { StartingScreen } from '../startingScreen/StartlingScreen';

import { TableauStyled } from './tableauStyles';

export const Tableau = () => {

    const [isStartingScreen, setIsStartingScreen] = useState(true);

    return (
        <TableauStyled>
            { isStartingScreen &&
                <StartingScreen setIsStartingScreen={setIsStartingScreen} />
            }
            { !isStartingScreen &&
                <CurrentDisplay.Provider value={{
                    left: <></>,
                    right: <></>
                }}>
                    <InnerScreen />
                </CurrentDisplay.Provider>
            }
        </TableauStyled>
    )

}