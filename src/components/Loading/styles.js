import styled, { keyframes } from 'styled-components';
import { FiLoader } from 'react-icons/fi';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(FiLoader).attrs(props => ({
  size: props.size,
  color: props.color,
}))`
  animation: ${rotate} 2s linear infinite;
`;
