import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -20px;
  margin-left: -20px;
  li {
    margin-bottom: 20px;
    margin-left: 20px;
    flex-basis: calc(100% / 6 - 20px);
  }
`;

export const Image = styled.img`
  width: 200px;
`;
