import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
  margin-top: 50px;
  margin-left: 150px;
  border: 0.2em solid rgba(0, 0, 0, 0.1);
  border-top: 0.2em solid #767676;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: ${spin} 0.6s linear infinite;
`;

export default Loader;




