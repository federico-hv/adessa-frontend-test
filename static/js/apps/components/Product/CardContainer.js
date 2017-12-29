import styled from 'styled-components';

const CardContainer = styled.div`
  background: white;
  border-radius: 0px 0px 5px 5px;
  margin: 30px;
  height: 300px;
  box-shadow: -1px 10px 24px 0px rgba(0,0,0,0.75);

  :hover {
    transition: all 100ms linear;
    transform: scale(1.1);
  }
`;

export default CardContainer;