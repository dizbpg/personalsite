import tw from 'twin.macro';
import styled from 'styled-components';

export const InnerScreenBg = styled.div(() => [
    tw`w-screen h-screen`,
    `background: url('./img/nebula_large.jpg') center center no-repeat;`,
]);

export const LeftContent = styled.div(() => [
    tw`inline-flex flex-col absolute left-[5%] top-[5%] w-[40%] h-[25%]`,
]);

export const RightContent = styled.div(() => [
    tw`inline-flex flex-col absolute right-[5%] bottom-[40%] w-[20%] h-[25%]`,
]);