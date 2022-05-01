import React, { useState, useEffect, useRef, useCallback, useContext } from 'react';
import { MainMenuStyled, MainMenuBackgroundStyled } from './mainMenuStyles';
import { MainMenuItem } from './mainMenuItem/MainMenuItem';
import { CurrentDisplay } from '../../context/currentDisplay';
import { HomeScreen } from '../innerPages';
import { PortraitScreen } from '../innerPages';

interface windowDimensionsInterface {
    innerWidth: number,
    innerHeight: number
};

export const MainMenu = () => {

    const [windowDimensions, setWindowDimensions] = useState<windowDimensionsInterface>();
    const [menuItemArray, setMenuItemArray] = useState<JSX.Element[]>();

    const menuLineWidthRef = useRef(0);
    const [menuLineWidth, setMenuLineWidth] = useState(0);
    const currentDisplay = useContext(CurrentDisplay);

    const standardMenuItemWidth = useCallback(() => {
        if ( menuItemArray !== undefined && menuItemArray?.length > 0 ) {
            const menuItems:HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('mainMenuItem') as HTMLCollectionOf<HTMLElement>;
            let maxWidth = 0;
            Object.values(menuItems).forEach(menuItem => {
                maxWidth = menuItem.getBoundingClientRect().width > maxWidth ? menuItem.getBoundingClientRect().width : maxWidth; 
            })
            Object.values(menuItems).forEach(menuItem => {
                menuItem.style.width = maxWidth.toString() + 'px'; 
            })
        }
    }, [menuItemArray]);

    useEffect(() => {
        const handleResize = () => {
            const { innerWidth: width, innerHeight: height } = window;
            setWindowDimensions({innerWidth: width, innerHeight: height});
        }
    
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        };
    }, []);

    useEffect(() => {
        const createMenuItemsArray = (innerHeight:number, innerWidth:number) => {

            const menuItemLinks:{
                name: string,
                left: string,
                right: string,
            }[] = [
                {
                    name: 'Home',
                    left: 'About',
                    right: 'Portrait',
                },
                {
                    name: 'Skills',
                    left: 'About',
                    right: 'Portrait',
                },
                {
                    name: 'Talents',
                    left: 'About',
                    right: 'Portrait',
                },
                {
                    name: 'Work History',
                    left: 'About',
                    right: 'Portrait',
                },
                {
                    name: 'Projects',
                    left: 'About',
                    right: 'Portrait',
                },
                {
                    name: 'Contact Information',
                    left: 'About',
                    right: 'Portrait',
                },
            ]
    
            const menuItemArray:JSX.Element[] = menuItemLinks.map(( menuItemLink:{
                name: string },
                index: number
            ) => {
                const innerWidthFull = innerWidth * 1.2;
                const innerHeightFull = innerHeight * 1.2;
                const topPosition = innerHeightFull * Math.sin((7 + (index * 25))/180);
                const leftPosition = 0.54 * innerWidthFull * Math.cos((0 + (index * 40))/180);
                return <MainMenuItem
                tw={`duration-[${index} * 100 + ms]`}
                place={index}
                key={'mi' + index}
                top={topPosition}
                left={leftPosition}
                >
                    {menuItemLink.name}
                </MainMenuItem>
            })
    
            const menuItemArrayFinal = ([<MainMenuBackgroundStyled key={'bg1'} menuLineWidth={menuLineWidthRef.current} />]).concat(menuItemArray)
            setMenuItemArray(menuItemArrayFinal);
        };

        if (windowDimensions?.innerHeight && windowDimensions?.innerWidth) {
            createMenuItemsArray(windowDimensions?.innerHeight, windowDimensions?.innerWidth);
        }
    }, [windowDimensions, menuItemArray])

    const setMenuItemOpacityToFull = () => {
        const menuItems:HTMLCollectionOf<HTMLElement> = document.getElementsByClassName('mainMenuItem') as HTMLCollectionOf<HTMLElement>;
        Object.values(menuItems).forEach((menuItem, index) => {
            setTimeout(() => {
                menuItem.style.opacity = '1';
            }, index * 25)
        })
    }

    useEffect(() => {
        menuLineWidthRef.current = menuLineWidth;
        if ( menuLineWidth >= 120 ) {
            standardMenuItemWidth();
            setMenuItemOpacityToFull();
            currentDisplay.left = <HomeScreen />;
            currentDisplay.right = <PortraitScreen />;
        }
    }, [menuLineWidth, standardMenuItemWidth, currentDisplay]);

    useEffect(() => {
        let countDown = 0;
        const countTimeTimeout = setInterval(() => {
            countDown = countDown + 10;
            setMenuLineWidth(countDown);
            if ( countDown >= 120 ) {
                clearTimeout(countTimeTimeout);
            }
        }, 100);
    }, []);

    return (
        <MainMenuStyled>
            {menuItemArray}
        </MainMenuStyled>
    )

}