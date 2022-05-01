import tw from 'twin.macro';
import styled from 'styled-components'

interface ComponentProps {
    doorIsOpen?: boolean
    doorAnimationEnded?: boolean
  }

export const StyledDoorFrame = styled.div(({doorIsOpen, doorAnimationEnded}:ComponentProps) => [
    `perspective: 400px;`,
    `background: url('./img/nebula_large.jpg') center center no-repeat;`,
    `transition: width 1000ms, height 500ms, border-width 100ms 500ms;`,
    tw`border-black border-[10px] border-b-0 w-[200px] h-[400px] overflow-hidden`,
    doorAnimationEnded && tw`h-[110%] w-[120%] left-[-10px] border-0`,
])


export const StyledDoor = styled.div(({doorIsOpen, doorAnimationEnded}:ComponentProps) => [
    'transform: rotateY(-20deg);',
    tw`bg-black w-[200px] h-[100%] absolute right-0 transition-transform origin-right duration-300 cursor-pointer`,
    doorIsOpen && 'transform: rotateY(-90deg) translateX(0);',
    doorAnimationEnded && 'transform: rotateY(-90deg) translateX(100%);'
])