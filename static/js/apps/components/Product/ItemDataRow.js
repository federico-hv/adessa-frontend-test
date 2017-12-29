import styled from 'styled-components';

const ItemDataRow = styled.div`
  margin: 5px;
  height: ${props => props.button ? '40px' : '35px'};
  display: flex;
  align-items: ${props => props.button ? 'center' : 'flex-start'};
  justify-content: ${props => props.button ? 'center' : 'flex-start'};
`;

export default ItemDataRow;