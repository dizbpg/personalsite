import tw from 'twin.macro';
import styled from 'styled-components';

export const MainMenuStyled = styled.div(() => [
    tw`w-screen h-screen relative`,
]);

export const MainMenuBackgroundStyled = styled.div<{menuLineWidth:number}>(({menuLineWidth}) => [
    tw`h-[120%] border-[12px] border-black border-t-0 border-l-0 absolute left-[-50%] top-[0] z-index[1]`,
    `border-radius: 0 0 100% 0;`,
    menuLineWidth && `width: ${menuLineWidth}%`,
]);