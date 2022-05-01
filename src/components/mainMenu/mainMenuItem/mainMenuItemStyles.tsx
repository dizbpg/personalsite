import tw from 'twin.macro';
import styled from 'styled-components';

interface ComponentProps {
    place?: number
    top?:number
    left?:number
}

export const MainMenuItemStyled = styled.div(({ place, top, left }:ComponentProps) => [
    tw`opacity-0 z-index[2] font-bold px-5 py-2 absolute rounded-full border-2 border-black transform transition-opacity ease-linear cursor-pointer`,
    'top: ' + top + 'px;',
    'left: ' + left + 'px;',
    tw`bg-yellow-300 bg-opacity-80`
]);